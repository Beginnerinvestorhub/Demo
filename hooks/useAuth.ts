import { useEffect, useState, useCallback } from 'react';
import { isDemo } from '@/lib/env';
import {
  User,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  AuthError,
  UserCredential,
} from 'firebase/auth';
import { getFirebaseAuth, isFirebaseInitialized, ensureFirebaseInitialized } from '../lib/firebase';

interface AuthState {
  user: User | null;
  loading: boolean;
  role: string | null;
  error: AuthError | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

export function useAuth(): AuthState {
  // Demo mode bypass
  if (isDemo) {
    return {
      user: {
        uid: 'demo-user',
        email: 'demo@example.com',
        displayName: 'Demo User',
        emailVerified: true,
        isAnonymous: false,
        metadata: {},
        providerData: [],
        refreshToken: '',
        tenantId: null,
        delete: async () => {},
        getIdToken: async () => 'demo-token',
        getIdTokenResult: async () => ({
          token: 'demo-token',
          authTime: new Date().toISOString(),
          issuedAtTime: new Date().toISOString(),
          expirationTime: new Date().toISOString(),
          signInProvider: 'demo',
          claims: { role: 'user' }
        }),
        reload: async () => {},
        toJSON: () => ({})
      } as User,
      loading: false,
      role: 'user',
      error: null,
      login: async () => ({ user: null } as UserCredential),
      signup: async () => ({ user: null } as UserCredential),
      logout: async () => {}
    };
  }

  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);
  const [firebaseReady, setFirebaseReady] = useState(false);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const initializeAuth = async () => {
      // Check if we're on the server side
      if (typeof window === 'undefined') {
        console.error('Firebase not initialized or running on server');
        setLoading(false);
        return;
      }

      try {
        // Ensure Firebase is initialized
        await ensureFirebaseInitialized();
        setFirebaseReady(true);

        // Now we can safely use Firebase auth
        const auth = getFirebaseAuth();
        unsubscribe = onAuthStateChanged(auth, async firebaseUser => {
          setUser(firebaseUser);
          setLoading(false);

          if (firebaseUser) {
            try {
              const token = await firebaseUser.getIdTokenResult();
              setRole(typeof token.claims.role === 'string' ? token.claims.role : 'user');
            } catch (error) {
              console.error('Error getting user role:', error);
              setRole('user'); // Default role
            }
          } else {
            setRole(null);
          }
        });
      } catch (error) {
        console.error('Failed to initialize Firebase auth:', error);
        setLoading(false);
        setError({ code: 'auth/initialization-failed', message: 'Firebase initialization failed' } as AuthError);
      }
    };

    initializeAuth();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    if (!firebaseReady || !isFirebaseInitialized()) {
      throw new Error('Firebase not initialized. Please wait and try again.');
    }

    setLoading(true);
    setError(null);
    try {
      return await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
    } catch (err: unknown) {
      const authErr = err as AuthError;
      setError(authErr);
      throw authErr;
    } finally {
      setLoading(false);
    }
  }, [firebaseReady]);

  const signup = useCallback(async (email: string, password: string) => {
    if (!firebaseReady || !isFirebaseInitialized()) {
      throw new Error('Firebase not initialized. Please wait and try again.');
    }

    setLoading(true);
    setError(null);
    try {
      return await createUserWithEmailAndPassword(getFirebaseAuth(), email, password);
    } catch (err: unknown) {
      const authErr = err as AuthError;
      setError(authErr);
      throw authErr;
    } finally {
      setLoading(false);
    }
  }, [firebaseReady]);

  const logout = useCallback(async () => {
    if (!firebaseReady || !isFirebaseInitialized()) {
      throw new Error('Firebase not initialized. Please wait and try again.');
    }

    setLoading(true);
    try {
      await signOut(getFirebaseAuth());
    } catch (err: unknown) {
      const authErr = err as AuthError;
      setError(authErr);
      throw authErr;
    } finally {
      setLoading(false);
    }
  }, [firebaseReady]);

  return { user, loading, role, error, login, signup, logout };
}
