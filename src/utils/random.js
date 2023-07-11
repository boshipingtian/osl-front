export const RandomData = (start, end, num) => {
  let data = [];
  for (let i = 0; i < num; i++) {
    data.push(Math.floor(Math.random() * (end - start) + start));
  }
  return data;
};

export const CreateMonth = (month) => {
  let monthList = [];
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      for (let i = 1; i <= 31; i++) {
        monthList.push(`${month}月${i}日`);
      }
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      for (let i = 1; i <= 30; i++) {
        monthList.push(`${month}月${i}日`);
      }
      break;
    }
    case 2: {
      for (let i = 1; i <= 28; i++) {
        monthList.push(`${month}月${i}日`);
      }
      break;
    }
  }
  return monthList;
};

export const CreateWeek = () => {
  const chineseNum = ['零', '一', '二', '三', '四', '五', '六', '日'];
  let weekList = [];
  for (let i = 1; i <= 7; i++) {
    weekList.push(`周${chineseNum[i]}`);
  }

  return weekList;
};

export const createYear = (startYear, num) => {
  let yearList = [];
  for (let i = startYear; i < num; i++) {
    yearList.push(`${i}`);
  }
  return yearList;
};
