import React from 'react';
import { Input, Radio } from 'antd';

const { Search } = Input;
import styles from './index.less';

const Index = (props) => {
  const { placeholder = 'placeholder', radioButtonList = [], RadioOnChange } = props;

  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <Search placeholder={placeholder} style={{ width: 304 }} onSearch={onSearch} enterButton />
      <div>
        <Radio.Group
          defaultValue={radioButtonList[0].value}
          buttonStyle="solid"
          onChange={(value) => RadioOnChange(value)}
        >
          {radioButtonList.map((item) => {
            return (
              <Radio.Button value={item.value} key={item.value}>
                {item.label}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </div>
    </div>
  );
};

export default Index;
