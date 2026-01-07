export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actions?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ModalState {
  isOpen: boolean;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'error' | 'success';
}