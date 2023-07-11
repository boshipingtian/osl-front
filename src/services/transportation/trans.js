import request from '@/utils/request';

//获取车证信息列表
export const getTransList = async ({ current, size }) => {
  console.log({ current, size });
  return request('/lamp/trans/allHistoryPage', {
    method: 'POST',
    requestType: 'form',
    data: {
      current,
      size,
    },
  });
};

//删除车证信息
export const removeTrans = async ({ transId }) => {
  console.log({ transId });
  const formData = new FormData();
  formData.append('transId', transId);
  return request('/lamp/trans/delete', {
    method: 'POST',
    requestType: 'form',
    data: formData,
  });
};

//获取车证信息详情
export const getTransDetail = async ({ transId }) => {
  console.log(transId);
  return request('/lamp/trans/baseInfo', {
    method: 'POST',
    requestType: 'form',
    data: {
      transId,
    },
  });
};
