/**
 * Firebase Configuration Module
 * Production-ready setup using Vercel environment variables.
 */

import {
  initializeApp,
  getApps,
  FirebaseApp,
  FirebaseOptions,
} from 'firebase/app';
import { getAuth, Auth, onAuthStateChanged } from 'firebase/auth'; 

// --- Required Environment Variables ---
const REQUIRED_ENV_VARS = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
];

// --- Firebase Configuration ---
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// --- Environment Validation ---
const missingEnvVars = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
const initializationError = missingEnvVars.length
  ? `Missing environment variables: ${missingEnvVars.join(', ')}`
  : null;

if (initializationError) {
  console.error('❌ Firebase not initialized:', initializationError);
  console.error('Ensure these are set in your Vercel dashboard under Production environment.');
}

// --- Initialization State ---
let appInstance: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let isInitializing = false;
let initializationPromise: Promise<void> | null = null;

// --- Firebase Initialization ---
const initializeFirebase = async (): Promise<void> => {
  if (appInstance && authInstance) return; // Already initialized
  if (isInitializing) {
    // If already initializing, wait for it to complete
    return initializationPromise || Promise.resolve();
  }
  if (initializationError) {
    throw new Error(initializationError);
  }

  isInitializing = true;

  try {
    initializationPromise = (async () => {
      // Ensure we're on the client side
      if (typeof window === 'undefined') {
        throw new Error('Firebase can only be initialized on the client side');
      }

      // Small delay to ensure DOM is ready
      await new Promise(resolve => setTimeout(resolve, 0));

      appInstance = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
      authInstance = getAuth(appInstance);

      // Wait for auth to be ready
      await new Promise<void>((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(authInstance!, () => {
          unsubscribe();
          resolve();
        }, (error: Error) => { 
          unsubscribe();
          reject(error);
        });
      });

      console.log('✅ Firebase initialized successfully');
    })();

    await initializationPromise;
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error('❌ Firebase initialization failed:', errorMsg);
    appInstance = null;
    authInstance = null;
    throw new Error(`Firebase initialization failed: ${errorMsg}`);
  } finally {
    isInitializing = false;
    initializationPromise = null;
  }
};

// --- Client-Safe Initialization ---
if (typeof window !== 'undefined') {
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
      try {
        await initializeFirebase();
      } catch (error) {
        console.error('Failed to initialize Firebase:', error);
      }
    });
  } else {
    initializeFirebase().catch(console.error);
  }
}

// --- Public API ---

// 1. Ensures Firebase initialization is complete (used for waiting)
export const ensureFirebaseInitialized = async (): Promise<void> => {
  await initializeFirebase();
};

// 2. Returns the Auth instance (used for sign in/up/out)
export const getFirebaseAuth = (): Auth => { // <-- FIX: New export
  if (!authInstance) {
    // Attempt initialization synchronously if possible, or throw
    if (getApps().length === 0) {
        throw new Error('Firebase Auth not available. Call ensureFirebaseInitialized first.');
    }
    // If app exists but auth doesn't, try getting it (for cases where initializeFirebase was bypassed)
    authInstance = getAuth(getApps()[0]);
  }
  return authInstance;
};

// 3. Checks if the Firebase application is available (used for conditional rendering/logic)
export const isFirebaseInitialized = (): boolean => { // <-- FIX: New export
    return getApps().length > 0 && !!authInstance;
};