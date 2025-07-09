// Utility functions for JWT authentication

export const getAuthToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};

export const getUserFromToken = () => {
  const token = getAuthToken();
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return {
      name: payload.name,
      email: payload.email,
      id: payload.id
    };
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};

export const logout = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  window.dispatchEvent(new Event('authChanged'));
  window.location.href = '/login';
};

export const requireAuth = (router, redirectPath = '/login') => {
  if (!isAuthenticated()) {
    router.push(`${redirectPath}?redirect=${window.location.pathname}`);
    return false;
  }
  return true;
}; 