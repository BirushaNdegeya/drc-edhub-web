/**
 * API Configuration
 * Update this with your actual backend API URL
 */
declare global {
  interface Window {
    __env?: { [key: string]: string };
  }
}

const runtimeBaseUrl = (typeof window !== 'undefined' && window.__env && window.__env['API_BASE_URL'])
  ? window.__env['API_BASE_URL']
  : (typeof process !== 'undefined' && process.env && (process.env as any)['API_BASE_URL'])
  ? (process.env as any)['API_BASE_URL']
  : 'https://wires-chairs-fairy-references.trycloudflare.com';

export const API_CONFIG = {
  baseUrl: runtimeBaseUrl // fallback to the hardcoded URL if no env provided
};

