import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { UserCredential } from 'firebase/auth';

interface AuthFormProps {
  mode?: 'login' | 'signup';
}

// 1. Define a minimal interface for what we expect the Firebase error to look like
interface FirebaseError {
    code: string;
    message: string;
}

// 2. Type Guard: Safely check if the unknown error conforms to the FirebaseError interface
const isFirebaseError = (err: unknown): err is FirebaseError => {
    return (
        typeof err === 'object' &&
        err !== null &&
        'code' in err &&
        typeof (err as FirebaseError).code === 'string' && // Check 'code' type
        'message' in err &&
        typeof (err as FirebaseError).message === 'string'  // Check 'message' type
    );
};

// Helper function to get a user-friendly message from a Firebase error object
const getFirebaseErrorMessage = (error: unknown): string => {
    // 💡 Use the Type Guard to safely narrow the type
    if (isFirebaseError(error)) {
        // TypeScript now knows 'error' has string properties 'code' and 'message'
        switch (error.code) {
            case 'auth/user-not-found':
            case 'auth/wrong-password':
                return 'Invalid email or password. Please try again.';
            case 'auth/email-already-in-use':
                return 'This email is already associated with an account.';
            case 'auth/weak-password':
                return 'Password should be at least 6 characters.';
            case 'auth/invalid-email':
                return 'The email address is badly formatted.';
            default:
                // Safely access the message property and format it
                return error.message.replace('Firebase: ', '').replace(/\s\(auth\/.*\)/, '') || 'An authentication error occurred.';
        }
    }
    // Handle all other unexpected errors (e.g., network errors, generic JavaScript errors)
    return 'An unexpected error occurred during authentication.';
};


export default function AuthForm({ mode = 'login' }: AuthFormProps) {
  // We use error for generic state display, but formError for immediate action results
  const { login, signup, loading } = useAuth(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    // Basic client-side validation check
    if (!email || !password) {
        setFormError("Please enter both email and password.");
        return;
    }

    try {
      let userCredential: UserCredential;
      if (mode === 'login') {
        userCredential = await login(email, password);
      } else {
        userCredential = await signup(email, password);
      }

      // After successful Firebase login/signup, get the ID token
      const idToken = await userCredential.user.getIdToken();

      if (idToken) {
        // Sign in to NextAuth.js with the ID token
        const res = await signIn('credentials', { idToken, redirect: false });

        if (res?.error) {
          setFormError('Failed to create a session. Please try again.');
          return;
        }
      }

      // Success! Redirect to the dashboard
      router.push('/dashboard');
    } catch (err: unknown) {
      // Catch the error thrown from useAuth and convert it to a friendly message
      const userFriendlyMessage = getFirebaseErrorMessage(err);
      setFormError(userFriendlyMessage);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
      <label className="flex flex-col w-full text-sm">
        Email
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="email" // Added autocomplete for better UX
          className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </label>
      <label className="flex flex-col w-full text-sm">
        Password
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? 'Loading...' : mode === 'login' ? 'Login' : 'Sign Up'}
      </button>
      
      {/* Display the friendly formError */}
      {formError && (
        <div className="mt-2 text-red-600 text-sm p-3 bg-red-50 border border-red-200 rounded-md">
          {formError}
        </div>
      )}
    </form>
  );
}