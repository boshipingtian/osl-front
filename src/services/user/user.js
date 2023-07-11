import request from '@/utils/request';

export const getUserInfo = async (userData) => {
  return new Promise((resolve, reject) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo !== null) {
      resolve(userInfo);
    } else {
      reject({
        msg: 'No userInfo!',
      });
    }
  });
};

export const updateUserInfo = async (newUserInfo) => {
  // console.log(newUserInfo)
  return request('/admin/updateInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // requestType: 'formData',
    data: newUserInfo,
  });
};

//修改密码
export const updatePassword = async (newPassword) => {
  return request('/admin/updatePassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: newPassword,
  });
};
//注销账号
export const deleteUser = async () => {
  return request('/admin/cancellation', {
    method: 'POST',
  });
};
