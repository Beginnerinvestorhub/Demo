/**
 * State Provider Component
 * React provider for global state management initialization and context
 */

import React, { useEffect, useRef, ReactNode } from 'react';
import { initializeStores, resetAllStores, checkStoreHealth, useUI, showErrorNotification } from '../store';
import { useAuth } from '../hooks/useAuth';

interface StateProviderProps {
  children: ReactNode;
}

interface StateProviderContextValue {
  resetStores: () => void;
  checkHealth: () => void;
}

const StateProviderContext =
  React.createContext<StateProviderContextValue | null>(null);

export const useStateProvider = () => {
  const context = React.useContext(StateProviderContext);
  if (!context) {
    throw new Error('useStateProvider must be used within a StateProvider');
  }
  return context;
};

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const cleanupRef = useRef<(() => void) | null>(null);
  const { user, error: authError } = useAuth();
  const { showNotification } = useUI();

  // Initialize stores on mount
  useEffect(() => {
    try {
      cleanupRef.current = initializeStores();

      if (process.env.NODE_ENV === 'development') {
        console.log('🏪 Global state management initialized');
        checkStoreHealth();
      }
    } catch (error) {
      console.error('Failed to initialize stores:', error);
      showErrorNotification('Failed to initialize application state. Please refresh the page.');
    }

    // Cleanup on unmount
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [showNotification]);

  // Handle authentication errors
  useEffect(() => {
    if (authError) {
      showErrorNotification(typeof authError === 'string' ? authError : 'Authentication error occurred');
    }
  }, [authError, showNotification]);

  // Handle authentication state changes
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🔐 Authentication state changed:', { isAuthenticated: !!user });
    }
  }, [user]);

  // Context value
  const contextValue: StateProviderContextValue = {
    resetStores: resetAllStores,
    checkHealth: checkStoreHealth,
  };

  return (
    <StateProviderContext.Provider value={contextValue}>
      {children}
    </StateProviderContext.Provider>
  );
};

export default StateProvider;
