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

  // Perform environment variable check only when actual initialization is requested
  const missingEnvVars = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
  if (missingEnvVars.length > 0) {
    const errorMsg = `Missing environment variables: ${missingEnvVars.join(', ')}. Firebase will not be initialized.`;
    console.error('❌ Firebase not initialized:', errorMsg);
    console.error('Ensure these are set in your Vercel dashboard under Production environment.');
    throw new Error(errorMsg);
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
// Remove global initialization attempt. `ensureFirebaseInitialized` will be the entry point.
// if (typeof window !== 'undefined') {
//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', async () => {
//       try {
//         await initializeFirebase();
//       } catch (error) {
//         console.error('Failed to initialize Firebase:', error);
//       }
//     });
//   } else {
//     initializeFirebase().catch(console.error);
//   }
// }

// --- Public API ---

// 1. Ensures Firebase initialization is complete (used for waiting)
export const ensureFirebaseInitialized = async (): Promise<void> => {
  // Only initialize Firebase if not in demo mode (default to demo if undefined)
  const appMode = process.env.NEXT_PUBLIC_APP_MODE;
  if (!appMode || appMode === 'demo') {
    console.log('Firebase initialization skipped in DEMO mode.');
    return;
  }
  await initializeFirebase();
};

// 2. Returns the Auth instance (used for sign in/up/out)
export const getFirebaseAuth = (): Auth => {
  const appMode = process.env.NEXT_PUBLIC_APP_MODE;
  if (!authInstance) {
    // If in demo mode (or undefined), authInstance won't exist, which is expected.
    // If not in demo mode, but authInstance is null, it means ensureFirebaseInitialized was not called.
    if (!appMode || appMode === 'demo') {
      throw new Error('Firebase Auth is not available in DEMO mode. Use mock auth from useAuth hook.');
    }
    throw new Error('Firebase Auth not available. Ensure Firebase is initialized (ensureFirebaseInitialized).');
  }
  return authInstance;
};

// 3. Checks if the Firebase application is available (used for conditional rendering/logic)
export const isFirebaseInitialized = (): boolean => {
  const appMode = process.env.NEXT_PUBLIC_APP_MODE;
  if (!appMode || appMode === 'demo') {
    return false; // Firebase is not "truly" initialized in demo mode
  }
    return getApps().length > 0 && !!authInstance;
};