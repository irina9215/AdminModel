import './Reporting.less';
import _ from 'lodash';
import React from 'react';
import { Table, Button } from 'antd';

const ModelInformation = _.range(1).map(index => ({
  category: 'CBU',
  class: 'CLACLass',
  model: 'C117',
  modelNameInEn: 'Mercedes-CLA',
  modelNameInCn: 'Mercedes-CLA',
  modelYear: 'MY808+058'
}));

const ChinaStandard = [{
  optionCode: '063',
  optionDescription: 'Metallc paint finish',
  configure: '金属漆饰',
  name1: 'NST:1173520-CN09',
  name2: 'NST:1173520-CN10',
  name3: 'NST:1173520-CN11',
  conjunctionRules: 'not with...',
  opmInRmb: '2000'
},{
  optionCode: '14U',
  optionDescription: 'Smartphone integration',
  configure: '智能手机互联系统',
  name1: 'N',
  name2: 'N',
  name3: 'SC',
  conjunctionRules: 'only with...',
  opmInRmb: '3000'
},
{
  optionCode: '293',
  optionDescription: 'Sidebags in rear',
  configure: '后排侧部气囊',
  name1: 'NST:1173520-CN09',
  name2: 'NST:1173520-CN10',
  name3: 'NST:1173520-CN11',
  conjunctionRules: 'not with...',
  opmInRmb: '2000'
},
{
  optionCode: '299',
  optionDescription: 'PRE-SAFE system',
  configure: '预防性安全系统 (PRE-SAFE)',
  name1: 'NST:1173520-CN09',
  name2: 'NST:1173520-CN10',
  name3: 'NST:1173520-CN11',
  conjunctionRules: 'not with...',
  opmInRmb: '2000'
},
{
  optionCode: '357',
  optionDescription: 'Garmin MAP PILOT  Garmin',
  configure: '地图导航 (MAP PILOT)',
  name1: 'NST:1173520-CN09',
  name2: 'NST:1173520-CN10',
  name3: 'NST:1173520-CN11',
  conjunctionRules: 'not with...',
  opmInRmb: '2000'
}];

const ModelInformationColumns = [{
  title: 'Category',
  dataIndex: 'category',
  key: 'category'
}, {
  title: 'Class',
  dataIndex: 'class',
  key: 'class'
}, {
  title: 'Model',
  dataIndex: 'model',
  key: 'model'
}, {
  title: 'ModelName in EN',
  dataIndex: 'modelNameInEn',
  key: 'modelNameInEn'
}, {
  title: 'ModelName in CN',
  dataIndex: 'modelNameInCn',
  key: 'modelNameInCn'
}, {
  title: 'Model Year',
  dataIndex: 'modelYear',
  key: 'modelYear'
}];

const ChinaStandardColumns = [{
  title: 'Option Code',
  dataIndex: 'optionCode',
  key: 'optionCode'
}, {
  title: 'Option Description',
  dataIndex: 'optionDescription',
  key: 'optionDescription'
}, {
  title: '配置描述',
  dataIndex: 'configure',
  key: 'configure'
},
{
  title: 'Conjunction rules',
  dataIndex: 'conjunctionRules',
  key: 'conjunctionRules'
}, {
  title: 'OPM(in RMB)',
  dataIndex: 'opmInRmb',
  key: 'opmInRmb'
},
{
  title: 'Actions',
  render: () => (
    <div>
      <Button type="primary" icon="delete" ghost>delete</Button>
    </div>
  )
}];

class Reporting extends React.Component {
  render() {
    return (
      <div className="reporting">
        <h2>Equipment list</h2>
        <div>
          <h4>Model Information</h4>
          <Table dataSource={ModelInformation} columns={ModelInformationColumns} rowKey="index" pagination={false} />
        </div>
        <div className="china-standard">
          <h4>China Standard</h4>
          <Table dataSource={ChinaStandard} columns={ChinaStandardColumns} rowKey="dataIndex" pagination={false}/>
          <div className="actions">
            <p className="msrp">Manufacturer Suggested Retail Price (MSRP) w/ VAT in RMB *  558,800.00</p>
            <p className="msrp">Manufacturer Suggested Retail Price (MSRP) w/o VAT in RMB * 481,724.14</p>
            <Button icon="close" type="primary">Close</Button>
            <Button icon="issues-close" type="primary">Submit</Button>
            <Button icon="plus" type="primary">Add Option</Button>
          </div>
        </div>
        {/* <div>
          <h4>Car Comparison</h4>
          <Table dataSource={CarComparison} columns={CarComparisonColumns} scroll={{ x: 980 }} rowKey="index" />
        </div> */}
      </div>
    );
  }
}

export default Reporting;