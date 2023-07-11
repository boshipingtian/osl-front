import request from '@/utils/request';

//获取司机列表
export const getDriverList = async ({ current, size }) => {
  console.log({ current, size });
  return request('/lamp/driver/allDriverPage', {
    method: 'POST',
    requestType: 'form',
    data: {
      current,
      size,
    },
  });
};

//查询司机
export const searchDriverList = async ({ type, name, current, size }) => {
  console.log({ type, name, current, size });
  return request('/lamp/driver/searchDriver', {
    method: 'POST',
    requestType: 'form',
    data: {
      type,
      name,
      current,
      size,
    },
  });
};

//添加司机
export const addDriver = async ({
  name,
  nickName,
  cardType,
  wechatId,
  phone,
  headImg,
  license,
}) => {
  console.log({ name, nickName, cardType, wechatId, phone, headImg, license });
  const formData = new FormData();
  formData.append('name', name);
  formData.append('nickName', nickName);
  formData.append('cardType', cardType);
  formData.append('wechatId', wechatId);
  formData.append('phone', phone);
  formData.append('headImg', headImg);
  formData.append('license', license);
  return request('/lamp/driver/addDriver', {
    method: 'POST',
    requestType: 'form',
    data: formData,
  });
};
//删除司机
export const removeDriver = async ({ driverId }) => {
  console.log({ driverId });
  const formData = new FormData();
  formData.append('driverId', driverId);
  return request('/lamp/driver/delete', {
    method: 'POST',
    requestType: 'form',
    data: formData,
  });
};
//更新司机
export const updateDriver = async ({
  driverId,
  name,
  nickName,
  cardType,
  wechatId,
  phone,
  headImg,
  license,
}) => {
  console.log({ driverId, name, nickName, cardType, wechatId, phone, headImg, license });
  const formData = new FormData();
  formData.append('driverId', driverId);
  formData.append('name', name);
  formData.append('nickName', nickName);
  formData.append('cardType', cardType);
  formData.append('wechatId', wechatId);
  formData.append('phone', phone);
  formData.append('headImg', headImg);
  formData.append('license', license);
  return request('/lamp/driver/updateInfo', {
    method: 'POST',
    requestType: 'form',
    data: formData,
  });
};

//获取司机详情
export const getDriverDetail = async ({ driverId }) => {
  console.log(driverId);
  return request('/lamp/driver/detailOne', {
    method: 'POST',
    requestType: 'form',
    data: {
      driverId,
    },
  });
};
