export interface AuthResponse {
  token: string;
  role: 'ADMIN' | 'USER' | 'SENDER' | 'DRIVER';
}
