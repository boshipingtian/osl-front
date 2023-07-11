import request from '@/utils/request';

//获取车辆列表
export const getVehicleList = async (data) => {
  console.log(data);
  return request('/lamp/car/allCarPage', {
    method: 'POST',
    requestType: 'form',
    data,
  });
};

//查询车辆
export const searchVehicleList = async (data) => {
  console.log(data);
  return request('/lamp/car/searchCar', {
    method: 'POST',
    requestType: 'form',
    data,
  });
};

//添加车辆
export const addVehicle = async (data) => {
  console.log(data);
  const formData = new FormData();
  formData.append('license', data.license);
  formData.append('carType', data.carType);
  formData.append('carLegalWeight', data.carLegalWeight);
  formData.append('carWeight', data.carWeight);
  formData.append('company', data.company);
  formData.append('carDrivingImg', data.carDrivingImg);
  formData.append('carImage1', data.carImage1);
  formData.append('carImage2', data.carImage2);
  formData.append('carImage3', data.carImage3);
  formData.append('carImage4', data.carImage4);
  return request('/lamp/car/creatCar', {
    method: 'POST',
    requestType: 'form',
    data: formData,
  });
};
//删除车辆
export const removeVehicle = async (data) => {
  console.log(data);
  const formData = new FormData();
  formData.append('carId', data?.carId);
  return request('/lamp/car/deleteCar', {
    method: 'POST',
    requestType: 'form',
    data: formData,
  });
};
//更新车辆
export const updateVehicle = async (data) => {
  console.log(data);
  const formData = new FormData();
  formData.append('license', data.license);
  formData.append('carType', data.carType);
  formData.append('carLegalWeight', data.carLegalWeight);
  formData.append('carWeight', data.carWeight);
  formData.append('company', data.company);
  formData.append('carDrivingImg', data.carDrivingImg);
  formData.append('carImage1', data.carImage1);
  formData.append('carImage2', data.carImage2);
  formData.append('carImage3', data.carImage3);
  formData.append('carImage4', data.carImage4);
  return request('/lamp/car/updateInfo', {
    method: 'POST',
    requestType: 'form',
    data: formData,
  });
};

//获取车辆详情
export const getVehicleDetail = async (data) => {
  console.log(data);
  return request('/lamp/car/detailOne', {
    method: 'POST',
    requestType: 'form',
    data,
  });
};

//获取车辆详情
export const getVehicleImage = async ({ carId }) => {
  return request('/lamp/car/carImg', {
    method: 'POST',
    requestType: 'form',
    data: {
      carId,
    },
  });
};
