import request from '@/utils/request';

//获取订单列表
export const getOrderList = async (data) => {
  console.log(data);

  return request('/orderdetail/getOrder', {
    method: 'POST',
    requestType: 'json',
    data,
  });
};
//订单详情
export const getOrderDetail = async ({ orderId }) => {
  console.log({ orderId });
  return request('/orderdetail/orderInfo', {
    method: 'POST',
    requestType: 'json',
    params: {
      orderId,
    },
  });
};

//修改订单
export const updateOrderDetail = async ({ orderId, orderType, price, weight, cargoType }) => {
  console.log('修改订单', { orderId, orderType, price, weight, cargoType });
  return request('/orderdetail/updateOrder', {
    method: 'POST',
    requestType: 'json',
    data: {
      orderId,
      orderType,
      price,
      weight,
      cargoType,
    },
  });
};

//添加订单
export const addOrderDetail = async ({
  companyA,
  companyB,
  orderType,
  price,
  weight,
  cargoType,
}) => {
  console.log('添加订单', { companyA, companyB, orderType, price, weight, cargoType });
  return request('/orderdetail/updateOrder', {
    method: 'POST',
    requestType: 'json',
    data: {
      companyA,
      companyB,
      orderType,
      price,
      weight,
      cargoType,
    },
  });
};

//绑定运单
// http://39.103.148.105:8081/orderdetail/insertTran
export const insertWaybill = async ({ orderId, price, weight, company }) => {
  console.log('绑定运单', { orderId, price, weight, company });
  return request('/orderdetail/insertTran', {
    method: 'POST',
    requestType: 'json',
    data: {
      orderId,
      price,
      weight,
      company,
    },
  });
};

//订单详情 - 运单列表
// http://39.103.148.105:8081/tranDetail/getTran
export const getWaybillList = async ({ orderId, state, num, size }) => {
  console.log('运单列表', { orderId, state });
  return request('/tranDetail/getTran', {
    method: 'POST',
    requestType: 'json',
    data: {
      orderId,
      state,
      num,
      size,
    },
  });
};
