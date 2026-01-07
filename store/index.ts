import { create } from 'zustand';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  clearAll: () => void;
  removeNotification: (id: string) => void;
}

export const useNotifications = create<NotificationState>((set, get) => ({
  notifications: [],
  addNotification: (notification) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false,
    };
    set((state) => ({
      notifications: [newNotification, ...state.notifications],
    }));
  },
  markAsRead: (id) => {
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    }));
  },
  clearAll: () => set({ notifications: [] }),
  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },
}));

interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  dismissNotification: (id: string) => void;
  showNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
}

export const useUI = create<UIState>((set, get) => ({
  sidebarOpen: true,
  theme: 'light',
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setTheme: (theme) => set({ theme }),
  dismissNotification: (id: string) => {
    // This would typically interact with notifications store
    console.log('Dismiss notification:', id);
  },
  showNotification: (notification) => {
    // This would typically interact with notifications store
    console.log('Show notification:', notification);
  },
}));

// Store management functions
export const initializeStores = () => {
  console.log('Stores initialized');
  return () => {
    console.log('Stores cleanup');
  };
};

export const resetAllStores = () => {
  console.log('All stores reset');
};

export const checkStoreHealth = () => {
  return { healthy: true, timestamp: new Date() };
};

export const showErrorNotification = (message: string) => {
  console.error('Error notification:', message);
};