import { isDemo } from '@/lib/env';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// Create a simple axios-like client for demo mode
const createApiClient = () => {
  if (isDemo) {
    return async (config: AxiosRequestConfig): Promise<AxiosResponse> => {
      // Mock API responses for demo mode
      const baseUrl = config.baseURL || '/api/demo';
      const url = `${baseUrl}${config.url}`;
      
      try {
        const response = await fetch(url, {
          method: config.method || 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...config.headers,
          },
          body: config.data ? JSON.stringify(config.data) : undefined,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        return {
          data,
          status: response.status,
          statusText: response.statusText,
          headers: {},
          config,
        } as AxiosResponse;
      } catch (error) {
        throw error;
      }
    };
  }

  // For production, you would return a real axios instance here
  // For now, return a mock that will need to be replaced
  return async (config: AxiosRequestConfig): Promise<AxiosResponse> => {
    throw new Error('API client not configured for production mode');
  };
};

export const apiClient = createApiClient();