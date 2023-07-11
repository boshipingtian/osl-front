import React, { useEffect, useState } from 'react';
import TableSearch from '@/components/Table/TableSearch';
import BasicTable from '@/components/Table/BasicTable';
import { message } from 'antd';
import {
  TransportationVehicleColumn,
  TransportationVehicleSelectOption,
} from '@/services/TableColumes/platform';
import { addVehicle, getVehicleList, searchVehicleList } from '@/services/transportation/vehicle';
import VehicleModal from '@/pages/platformMonitor/TransportationManagement/Vehicle/components/vehicleModal';

const Index = () => {
  const [vehicle, setVehicle] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [spinning, setSpinning] = useState(false);
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [classify, setClassify] = useState('');
  const [keywords, setKeywords] = useState('');

  useEffect(async () => {
    if (classify === '' || keywords === '') {
      await VehicleList(currentPage, pageSize);
    } else {
      await searchVehicle(classify, keywords, currentPage, pageSize);
    }
  }, [currentPage, pageSize, classify, keywords]);

  //获取车辆列表
  const VehicleList = async (current, size) => {
    setLoading(true);
    const res = await getVehicleList({ current, size });
    if (res.success) {
      const data = res.result.pageData;
      data.map((item) => {
        item['operate'] = '查看详情';
      });
      setVehicle(data);
      setTotal(res.result.totalCount);
      setLoading(false);
    } else {
      message.error(res.description);
      setLoading(false);
    }
  };

  //搜索车辆
  const searchVehicle = async (classify, keywords, current, size) => {
    console.log(classify, keywords);
    setLoading(true);
    const reqList = {
      关联司机: 1,
      所属运单: 2,
      所属订单: 3,
      物流公司: 4,
      运次: 5,
    };
    const res = await searchVehicleList({
      type: reqList[classify],
      content: keywords,
      current,
      size,
    });
    console.log(res);
    if (res.success) {
      const data = res.result.pageData;
      data.map((item) => {
        item['operate'] = '查看详情';
      });
      setVehicle(data);
      setTotal(res.result.totalCount);
      setLoading(false);
    } else {
      message.error(res.description);
      setLoading(false);
    }
  };

  return (
    <div>
      <TableSearch
        style={{ marginBottom: '20px' }}
        selectOption={TransportationVehicleSelectOption}
        confirm={(classify, keywords) => {
          setClassify(classify);
          setKeywords(keywords);
        }}
        refresh={async () => {
          await VehicleList(currentPage, pageSize);
        }}
      />
      <BasicTable
        columns={TransportationVehicleColumn}
        title="车辆列表"
        loading={loading}
        onAddHandler={() => setVisible(true)}
        rowKey={(record) => record.carId}
        onPageChange={(page, pageSize) => {
          setCurrentPage(page);
          setPageSize(pageSize);
        }}
        dataSource={vehicle}
        total={total}
      />

      <VehicleModal
        visible={visible}
        visibleHide={() => setVisible(false)}
        spinning={spinning}
        handleOk={async (data) => {
          setSpinning(true);
          const res = await addVehicle(data);
          if (res.success) {
            message.success(res.result);
            setSpinning(false);
            setVisible(false);
          } else {
            message.error(res.msg);
            setSpinning(false);
            setVisible(false);
          }
        }}
      />
    </div>
  );
};

export default Index;
