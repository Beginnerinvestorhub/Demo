import { useEffect, useState, useCallback } from 'react';
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
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);
  const [firebaseReady, setFirebaseReady] = useState(false);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const initializeAuth = async () => {
      // Check for demo mode (default if undefined)
      const appMode = process.env.NEXT_PUBLIC_APP_MODE;
      if (!appMode || appMode === 'demo') {
        console.log('Running in DEMO mode - skipping Firebase init');
        // Mock user for demo purposes
        /* 
           Ideally, we'd start with null and let them "login" via the mock login function below,
           but for now, we'll initialize as null (logged out) and let the login function handle the mock set.
           Or if you want them logged in by default:
           setUser({ uid: 'demo-user', email: 'demo@example.com', displayName: 'Demo User' } as User);
        */
        setFirebaseReady(true); // Fake readiness
        setLoading(false);
        return;
      }

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
    const appMode = process.env.NEXT_PUBLIC_APP_MODE;
    if (!appMode || appMode === 'demo') {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockUser = {
            uid: 'demo-user-123',
            email: email,
            displayName: 'Demo User',
            emailVerified: true,
            isAnonymous: false,
            metadata: {},
            providerData: [],
            refreshToken: 'mock-token',
            tenantId: null,
            delete: async () => {},
            getIdToken: async () => 'mock-token',
            getIdTokenResult: async () => ({
                token: 'mock-token',
                signInProvider: 'password',
                claims: { role: 'user' },
                authTime: Date.now().toString(),
                issuedAtTime: Date.now().toString(),
                expirationTime: (Date.now() + 3600000).toString(),
            }),
            reload: async () => {},
            toJSON: () => ({}),
            phoneNumber: null,
            photoURL: null,
        } as unknown as User;

        setUser(mockUser);
        setRole('user');
        setLoading(false);
        return {
             user: mockUser,
             providerId: 'password',
             operationType: 'signIn'
        } as UserCredential;
    }

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
    const appMode = process.env.NEXT_PUBLIC_APP_MODE;
    if (!appMode || appMode === 'demo') {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        setUser(null);
        setRole(null);
        setLoading(false);
        return;
    }

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
