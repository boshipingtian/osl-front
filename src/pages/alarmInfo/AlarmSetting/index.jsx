import React, { useState } from 'react';
import { Button, Card, Checkbox, Input } from 'antd';

const Index = () => {
  const [tare, setTare] = useState(true);
  const [tareInput, setTareInput] = useState(100);
  const [gross, setGross] = useState(true);
  const [grossInput, setGrossInput] = useState(100);
  const [blankCarPattern, setBlankCarPattern] = useState(false);
  const [blankCarPatternInput, setBlankCarPatternInput] = useState(10);
  const [fullCarPattern, setFullCarPattern] = useState(true);
  const [fullCarPatternInput, setFullCarPatternInput] = useState(10);

  const onTareChange = () => {
    tare ? setTare(false) : setTare(true);
  };
  const onTareInputChange = (e) => {
    setTareInput(e.target.value);
  };

  const onGrossChange = () => {
    gross ? setGross(false) : setGross(true);
  };
  const onGrossInputChange = (e) => {
    setGrossInput(e.target.value);
  };

  const onBlankCarPatternChange = () => {
    blankCarPattern ? setBlankCarPattern(false) : setBlankCarPattern(true);
  };
  const onBlankCarPatternInputChange = (e) => {
    setBlankCarPatternInput(e.target.value);
  };

  const onFullCarPatternChange = () => {
    fullCarPattern ? setFullCarPattern(false) : setFullCarPattern(true);
  };
  const onFullCarPatternInputChange = (e) => {
    setFullCarPatternInput(e.target.value);
  };

  return (
    <Card style={{ width: '450px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
          基本设置
        </span>
      </div>

      <div>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '16px', marginBottom: '10px' }}>车辆重量</div>
          {/*1*/}
          <div style={{ padding: '10px' }}>
            <Checkbox checked={tare} onChange={onTareChange}>
              比皮重
            </Checkbox>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
            <Input disabled={!tare} value={tareInput} onChange={onTareInputChange} />
            <span style={{ padding: '0 10px', fontSize: '18px' }}>KG</span>
          </div>
          {/*2*/}
          <div style={{ padding: '10px' }}>
            <Checkbox checked={gross} onChange={onGrossChange}>
              比毛重
            </Checkbox>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
            <Input disabled={!gross} value={grossInput} onChange={onGrossInputChange} />
            <span style={{ padding: '0 10px', fontSize: '18px' }}>KG</span>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '16px', marginBottom: '10px' }}>车纹对比差异</div>
          {/*1*/}
          <div style={{ padding: '10px' }}>
            <Checkbox checked={blankCarPattern} onChange={onBlankCarPatternChange}>
              空车车纹
            </Checkbox>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
            <Input
              disabled={!blankCarPattern}
              value={blankCarPatternInput}
              onChange={onBlankCarPatternInputChange}
            />
            <span style={{ padding: '0 10px', fontSize: '18px' }}>%</span>
          </div>
          {/*2*/}
          <div style={{ padding: '10px' }}>
            <Checkbox checked={fullCarPattern} onChange={onFullCarPatternChange}>
              载货车纹
            </Checkbox>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
            <Input
              disabled={!fullCarPattern}
              value={fullCarPatternInput}
              onChange={onFullCarPatternInputChange}
            />
            <span style={{ padding: '0 10px', fontSize: '18px' }}>%</span>
          </div>
        </div>
      </div>

      <Button style={{ marginTop: '30px' }} type="primary">
        更新设置
      </Button>
    </Card>
  );
};

export default Index;
