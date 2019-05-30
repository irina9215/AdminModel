import _ from 'lodash';
import React from 'react';
import { Table, Button, notification } from 'antd';

let DATASOURCE = _.range(20).map((item, index) => ({
  index,
  name: `Scenario ${index}`,
  msrp: '669,000',
  msrpVAT: '699,000',
  options: 5,
  isDefault: false
}));
function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
DATASOURCE.forEach((item, index) => {
  if (index < 5) {
    item.options = index + 5;
  } else {
    item.options = index;
  }
} );
DATASOURCE.forEach((item, index) => {
  if(index > 0) {
    item.msrp = 669000 + Random(0, 10) * 10000;
    item.msrpVAT = item.msrp + 30000;
  }

} );

class ModelManagementScenario extends React.Component {
  COLUMNS = [
    {
    title: 'ID',
    dataIndex: 'index',
    key: 'index'
  }, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'MSRP',
    dataIndex: 'msrp',
    key: 'msrp'
  }, {
    title: 'MSRP VAT',
    dataIndex: 'msrpVAT',
    key: 'msrpVAT'
  }, {
    title: 'Options',
    dataIndex: 'options',
    key: 'options'
  },{
    title: 'Actions',
    dataIndex: 'index',
    key:'isDefault',
    render: (index) => {
      if (index === 0) {
        return (
          <div>
            <Button icon="eye" type="primary" onClick={() => this.props.history.push('/reporting')} ghost>Details</Button>
            <Button icon="delete" type="primary" ghost>Delete</Button>
            <Button icon='check-circle'
              type="danger" ghost>Is Default</Button>
          </div>
        )
      } else {
        return (
          <div>
            <Button icon="eye" type="primary" onClick={() => this.props.history.push('/reporting')} ghost>Details</Button>
            <Button icon="delete" type="primary" ghost>Delete</Button>
            <Button icon='check-circle' onClick={() => {
              this.openNotification();
              setTimeout(() => {
                this.props.history.push('/model-management')
              }, 1000)
            }
              } type="primary" ghost>Set as Default</Button>
          </div>
        )
      }

    }
  }];
  openNotification() {
    notification.open({
      message: 'Notification Title',
      description:
        'Set as default success!',
        duration: 1,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }
  render() {
    return (
      <div className="model-management">
        <h2>Scenario</h2>
        <Table
          dataSource={DATASOURCE}
          columns={this.COLUMNS}
          rowSelection={{
            type: 'checkbox',
            columnTitle: 'Select for Comparision'
          }}
          rowKey="index" />
          <div className="actions">
            <Button icon="copy" type="primary" ghost onClick={() => this.props.history.push('/competitor-comparison')}>Comparision</Button>
            <Button icon="plus" type="primary">Add</Button>
          </div>
      </div>
    );
  }
}

export default ModelManagementScenario;