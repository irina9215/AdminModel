import _ from 'lodash';
import React from 'react';
import { Table, Button } from 'antd';

const DATASOURCE = _.range(1).map(index => ({
  index,
  brand: 'AMG',
  class: 'E-Class',
  model: 'E200',
  baumaster: '213142',
  nst: '21314120-CN1',
  modelYear: 'MY808+057',
	nameEn: 'Mercedes-AMG E200 45 4Matic',
	nameCn: '奔驰-AMG E200 45 四驱',
	releaseDate: '2018-02-07',
	selectedScenario: '0',
}));

class ModelManagementList extends React.Component {
  columns = [
    {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand'
  }, {
    title: 'Class',
    dataIndex: 'class',
    key: 'class'
  }, {
    title: 'Model',
    dataIndex: 'model',
    key: 'model'
  }, {
    title: 'Baumaster',
    dataIndex: 'baumaster',
    key: 'baumaster'
  }, {
    title: 'NST',
    dataIndex: 'nst',
    key: 'nst'
  }, {
    title: 'MY',
    dataIndex: 'modelYear',
    key: 'modelYear'
  }, {
    title: 'English Name',
    dataIndex: 'nameEn',
    key: 'nameEn'
  }, {
    title: 'Chinese  Name',
    dataIndex: 'nameCn',
    key: 'nameCn'
  }, {
    title: 'Release Date',
    dataIndex: 'releaseDate',
    key: 'releaseDate'
  }, {
    title: 'Selected Scenario',
    dataIndex: 'selectedScenario',
    key: 'selectedScenario'
  }, {
    title: 'Actions',
    render: () => (
      <div>
        <Button type="primary" icon="eye" onClick={() => this.props.history.push('/model-management/scenario')} ghost>Scenario</Button>
      </div>
    )
  }]

  render() {
    return (
      <div className="model-management">
        <h2>Models</h2>
        <Table columns={this.columns} dataSource={DATASOURCE} rowKey="index"
        rowSelection={{
            type: 'checkbox',
            columnTitle: 'Comparision'
          }}/>
        <div className="actions">
          <Button icon="edit" type="primary" ghost>Modify</Button>
          <Button icon="save" type="primary" ghost>Save</Button>
          <Button icon="copy"type="primary" ghost onClick={() => this.props.history.push('/competitor-comparison')}>Comparision</Button>
        </div>
      </div>
    );
  }
}

export default ModelManagementList;