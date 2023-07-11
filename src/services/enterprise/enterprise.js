import request from '@/utils/request';

//获取买卖企业列表
export const getEnterpriseList = async (data) => {
  return request('/user/sale/selectByCondition', {
    method: 'POST',
    data: data,
  });
};
//获取买卖企业
export const getEnterprise = async (data) => {
  return request('/user/sale/getOne', {
    method: 'GET',
    query: {
      companyId: data,
    },
  });
};
//添加买卖企业
export const addEnterprise = async (data) => {
  return request('/user/sale/add', {
    method: 'POST',
    data: data,
  });
};
//修改买卖企业信息
export const updateEnterprise = async (data) => {
  return request('/user/sale/update', {
    method: 'POST',
    data: data,
  });
};
//删除买卖企业
export const deleteEnterprise = async (data) => {
  return request('/user/sale/delete', {
    method: 'POST',
    data: data,
  });
};

//删除买卖企业
export const addDevice = async (data) => {
  return request('/device/add', {
    method: 'POST',
    data: data,
  });
};
