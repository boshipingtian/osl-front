import React, { useEffect, useState } from 'react';
import TableSearch from '@/components/Table/TableSearch';
import BasicTable from '@/components/Table/BasicTable';
import { addOrderDetail, getOrderList, updateOrderDetail } from '@/services/order/order';
import { Input, message, Modal, Spin } from 'antd';
import { OrderListColumns, OrderListSelectOption } from '@/services/TableColumes/platform';

const Index = () => {
  const [order, setOrder] = useState([]);
  const [classify, setClassify] = useState('');
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [addOrderData, setAddOrderData] = useState({});
  const [addModal, setAddModal] = useState(false);

  useEffect(async () => {
    await orderList(page, pageSize, classify, keywords);
  }, [page, pageSize, classify, keywords]);

  const orderList = async (page, pageSize, classify, keywords) => {
    setLoading(true);
    let param = { num: page, size: pageSize };
    param[classify] = keywords;
    const res = await getOrderList(param);
    console.log(res);
    if (res.success) {
      setOrder(
        res.result.orders.map((item) => {
          return { ...item, operate: '查看详情' };
        }),
      );
      setLoading(false);
    } else {
      message.error(res.description);
      setLoading(false);
    }
  };

  //搜索订单
  const searchOrder = async (_classify, _keywords) => {
    console.log({ _classify, _keywords });
    const list = {
      订单号: 'orderId',
      卖方企业: 'company',
      卖方负责人: 'holder',
      联系方式: 'phone',
    };
    if (_classify) setClassify(list[_classify]);
    setKeywords(_keywords);
  };

  const clearSearch = async () => {
    setClassify('');
    setKeywords('');
    await orderList(page, pageSize);
  };

  /**
   * 修改信息弹出框
   */
  const AddModal = () => {
    return (
      <Modal title="添加订单" visible={addModal} onOk={AddOk} onCancel={AddCancel}>
        <Spin spinning={loading}>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>买方公司</div>
            <Input
              required={true}
              placeholder="请输入买方公司编号"
              value={addOrderData?.companyA}
              onChange={(props) =>
                setAddOrderData({ ...addOrderData, companyA: props.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>卖方公司</div>
            <Input
              required={true}
              placeholder="请输入卖方公司编号"
              value={addOrderData?.companyB}
              onChange={(props) =>
                setAddOrderData({ ...addOrderData, companyB: props.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>订单类型</div>
            <Input
              required={true}
              placeholder="请输入订单类型"
              value={addOrderData?.orderType}
              onChange={(props) =>
                setAddOrderData({ ...addOrderData, orderType: props.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>订单金额</div>
            <Input
              placeholder="请输入订单金额"
              value={addOrderData?.price}
              onChange={(props) => setAddOrderData({ ...addOrderData, price: props.target.value })}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>订单重量</div>
            <Input
              placeholder="请输入订单重量"
              value={addOrderData?.weight}
              onChange={(props) => setAddOrderData({ ...addOrderData, weight: props.target.value })}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>运货种类</div>
            <Input
              placeholder="请输入运货种类"
              value={addOrderData?.cargoType}
              onChange={(props) =>
                setAddOrderData({ ...addOrderData, cargoType: props.target.value })
              }
            />
          </div>
        </Spin>
      </Modal>
    );
  };
  async function AddOk() {
    setLoading(true);
    const res = await addOrderDetail({ ...addOrderData });
    if (res.success) {
      setLoading(false);
      setAddModal(false);
      message.success('添加成功');
    } else {
      setLoading(false);
      message.error(res.description);
    }
  }
  async function AddCancel() {
    setAddModal(false);
    setAddOrderData({});
  }

  return (
    <div>
      <TableSearch
        style={{ marginBottom: '20px' }}
        confirm={(classify, keywords) => searchOrder(classify, keywords)}
        refresh={() => clearSearch()}
        selectOption={OrderListSelectOption}
      />
      <BasicTable
        columns={OrderListColumns}
        loading={loading}
        title="订单列表"
        onPageChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        rowKey={(record) => record.orderId}
        onAddHandler={() => setAddModal(true)}
        dataSource={order}
      />
      {AddModal()}
    </div>
  );
};

export default Index;
