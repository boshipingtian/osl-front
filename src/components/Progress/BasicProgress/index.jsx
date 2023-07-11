import { Steps } from 'antd';
import { useState, useEffect } from 'react';

const { Step } = Steps;

const Index = (props) => {
  const { progress, current = 0 } = props;

  const [progressList, setProgressList] = useState([]);

  useEffect(() => {
    setProgressList(progress);
  }, [progress]);

  return (
    <>
      <Steps progressDot current={current}>
        {progressList.map(({ title, description }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Step key={index} title={title} description={description} />
        ))}
      </Steps>
    </>
  );
};

export default Index;
