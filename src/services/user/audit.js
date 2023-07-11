import request from '@/utils/request';

export const getAuditList = async (data) => {
  return request('/admin/selectAllAuditor', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: data,
  });
};

export const getAudit = async (data) => {
  return request('/admin/getAuditorInfo', {
    method: 'POST',
    data,
  });
};

export const addAudit = async ({
  name,
  password,
  rank,
  administration,
  jurisdiction,
  holder,
  holderMobile,
}) => {
  let fromData = new FormData();
  fromData.append('name', name);
  fromData.append('password', password);
  fromData.append('rank', rank);
  fromData.append('administration', administration);
  fromData.append('jurisdiction', jurisdiction);
  fromData.append('holder', holder);
  fromData.append('holderMobile', holderMobile);
  return request('/admin/doRegister', {
    method: 'POST',
    data: fromData,
  });
};

export const updateAudit = async ({
  account,
  password,
  name,
  rank,
  administration,
  jurisdiction,
  holder,
  holderMobile,
}) => {
  let fromData = new FormData();
  fromData.append('account', account);
  fromData.append('password', password);
  fromData.append('name', name);
  fromData.append('rank', rank);
  fromData.append('administration', administration);
  fromData.append('jurisdiction', jurisdiction);
  fromData.append('holder', holder);
  fromData.append('holderMobile', holderMobile);
  console.log(fromData);
  return request('/admin/updateAuditor', {
    method: 'POST',
    data: fromData,
  });
};

export const deleteAudit = async ({ account }) => {
  let fromData = new FormData();
  fromData.append('account', account);
  // return request('/admin/doRegister', {
  //   method: 'POST',
  //   data: fromData,
  // });
};
