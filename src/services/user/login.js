import request from '@/utils/request';

export const login = async (userData) => {
  //userData={account,password}
  return request('/admin/doLogin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: userData,
  });
};

export const logout = async () => {
  return request('/admin/logout', {
    method: 'POST',
  });
};

export const isLogin = async () => {
  return request('/admin/isLogin', {
    method: 'POST',
  });
};
