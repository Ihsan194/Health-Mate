export const setToken = (token) => localStorage.setItem('hm_token', token);
export const getToken = () => localStorage.getItem('hm_token');
export const clearToken = () => localStorage.removeItem('hm_token');
