//获取买卖企业列表
import request from '@/utils/request';

/**
 * 获取物流公司列表
 * @param name 公司名
 * @param phone 联系方式
 * @param address 地址
 * @param holder 公司负责人
 * @param country 国家
 * @param currentPage 当前页面
 * @param pageSize 页面大小
 * @returns {Promise<any>}
 */
export const getLogisticsList = async ({
  name,
  phone,
  address,
  holder,
  country,
  currentPage,
  pageSize,
}) => {
  return request('/user/logistics/selectByCondition', {
    method: 'POST',
    requestType: 'form',
    data: {
      name,
      phone,
      address,
      holder,
      country,
      currentPage,
      pageSize,
    },
  });
};

//添加物流企业
export const addLogistics = async ({ name, phone, address, holder, country, file }) => {
  let formData = new FormData();
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('address', address);
  formData.append('holder', holder);
  formData.append('country', country);
  formData.append('file', file);
  return request('/user/logistics/add', {
    method: 'POST',
    requestType: 'form',
    data: formData,
  });
};

//获取物流企业详情
export const getLogisticsDetail = ({ id }) => {
  return request('/user/logistics/getOneInfo', {
    method: 'POST',
    requestType: 'json',
    data: {
      id,
    },
  });
};

//更新物流企业
export const updateLogistics = async ({ id, name, phone, address, holder, country, file }) => {
  let formData = new FormData();
  formData.append('id', id);
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('address', address);
  formData.append('holder', holder);
  formData.append('country', country);
  formData.append('file', file);
  return request('/user/logistics/update', {
    method: 'POST',
    requestType: 'form',
    data: formData,
  });
};
