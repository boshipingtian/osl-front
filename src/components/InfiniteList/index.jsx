import React, { useState, useEffect } from 'react';
import { List, Skeleton, Divider } from 'antd';
import styles from './index.less';
import InfiniteScroll from 'react-infinite-scroll-component';

const Index = (props) => {
  const { title = 'title' } = props;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    console.log(data.length);
  };

  useEffect(() => {
    loadMoreData();
  }, []); // eslint-disable-line

  return (
    <div id="scrollableDiv" className={styles.scrollableDiv}>
      <div className={styles.scrollableTitle}>{title}</div>

      <div className={styles.scrollableContainer}>
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <div className={styles.listItem}>{item.name.last}</div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Index;
