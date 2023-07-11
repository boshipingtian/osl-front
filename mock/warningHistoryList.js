export default {
  'GET /api/warningHistoryList': (req, res) => {
    const { page, pageSize } = req.query;
    let warningHistoryData = [];
    // 根据pageSize循环创建数据
    for (let i = 0; i < pageSize; i++) {
      let warningHistoryItem = {
        order: '',
        date: '',
      };
      warningHistoryItem.order = page + '' + Math.floor(Math.random() * 100000000);
      warningHistoryItem.date = new Date().toLocaleString();
      warningHistoryData.push(warningHistoryItem);
    }
    res.send({
      code: 200,
      data: warningHistoryData,
      msg: 'success',
    });
  },
};
