import './CompetitorComparison.less';
import React from 'react';
import { Table } from 'antd';

const CarComparison = [{
  basicParameters: '型号',
  car1: 'E 200 L 轿车',
  car2: 'E 200 L 4MATIC 轿车',
  car3: 'E 200 L 豪华型轿车'
},{
  basicParameters: '厂商',
  car1: '北京奔驰',
  car2: '北京奔驰',
  car3: '北京奔驰'
},{
  basicParameters: '级别',
  car1: '中大型轿车',
  car2: '中大型轿车',
  car3: '中大型轿车'
},{
  basicParameters: '能源类型',
  car1: '48V轻混系统',
  car2: '48V轻混系统',
  car3: '汽油'
},{
  basicParameters: '上市时间',
  car1: '2019.03',
  car2: '2019.03',
  car3: '2019.03'
},{
  basicParameters: '最大功率(KW)',
  car1: '135',
  car2: '135',
  car3: '139',
  render: text => <div style={{background:"red" }}>{text}</div>,
},{
  basicParameters: '最大扭矩(N.m)',
  car1: '280',
  car2: '280',
  car3: '370',
  render: text => <div style={{background:"red" }}>{text}</div>,
},
{
  basicParameters: 'MSRP',
  car1: '669,000',
  car2: '699,000',
  car3: '769,000',
  render: text => <div style={{background:"red" }}>{text}</div>,
}];

const CarComparisonColumns = [{
  title: '',
  dataIndex: 'basicParameters',
  key: 'basicParameters',
  render: text => <div style={{textAlign:"right" }}>{text}</div>,
  width: 150,
  fixed: 'left'
}, {
  title: 'Car1',
  dataIndex: 'car1',
  key: 'car1'
}, {
  title: 'Car2',
  dataIndex: 'car2',
  key: 'car2'
}, {
  title: 'Car3',
  dataIndex: 'car3',
  key: 'car3'
}];

class CompetitorComparison extends React.Component {
  render() {
    return (
      <div className="competitor-comparison">
        <h2>Competitor Comparison</h2>
        <Table dataSource={CarComparison} columns={CarComparisonColumns} scroll={{ x: 980 }} rowKey="dataIndex" 
        onRow={(item, index) => {
          if (index === 4 || index === 5 || index === 6) {
            item.render = (el) => <div>{el}</div>
          }
        }}/>
      </div>
    );
  }
}

export default CompetitorComparison;