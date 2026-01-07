import { isDemo } from '../lib/env';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// Create a simple axios-like client for demo mode
const createApiClient = () => {
  if (isDemo) {
    const apiClient = {
      get: async (url: string, config?: AxiosRequestConfig) => {
        const fullConfig = { ...config, method: 'GET', url };
        return await apiClient.request(fullConfig);
      },
      post: async (url: string, data?: any, config?: AxiosRequestConfig) => {
        const fullConfig = { ...config, method: 'POST', url, data };
        return await apiClient.request(fullConfig);
      },
      put: async (url: string, data?: any, config?: AxiosRequestConfig) => {
        const fullConfig = { ...config, method: 'PUT', url, data };
        return await apiClient.request(fullConfig);
      },
      delete: async (url: string, config?: AxiosRequestConfig) => {
        const fullConfig = { ...config, method: 'DELETE', url };
        return await apiClient.request(fullConfig);
      },
      request: async (config: AxiosRequestConfig): Promise<AxiosResponse> => {
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
      },
    };
    
    return apiClient;
  }

  // For production, you would return a real axios instance here
  // For now, return a mock that will need to be replaced
  return {
    get: async () => { throw new Error('API client not configured for production mode'); },
    post: async () => { throw new Error('API client not configured for production mode'); },
    put: async () => { throw new Error('API client not configured for production mode'); },
    delete: async () => { throw new Error('API client not configured for production mode'); },
    request: async () => { throw new Error('API client not configured for production mode'); },
  };
};

export const apiClient = createApiClient();