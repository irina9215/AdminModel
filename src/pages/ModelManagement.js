
import './ModelManagement.less';

import React from 'react';
import { Form, Cascader, Button } from 'antd';

const OPTIONS = [{
  value: 'C-Class',
  label: 'C-Class',
  children: [{
    value: '2018',
    label: '2018',
    children: [{
      value: 'C200',
      label: 'C200'
    }, {
      value: 'C201',
      label: 'C201'
    }, {
      value: 'C300',
      label: 'C300'
    }]
  }, {
    value: '2019',
    label: '2019',
    children: [{
      value: 'C200',
      label: 'C200'
    }, {
      value: 'C201',
      label: 'C201'
    }, {
      value: 'C300',
      label: 'C300'
    }]
  }]
}, {
  value: 'E-Class',
  label: 'E-Class',
  children: [{
    value: '2018',
    label: '2018',
    children: [{
      value: 'E200',
      label: 'E200'
    }, {
      value: 'E201',
      label: 'E201'
    }, {
      value: 'E300',
      label: 'E300'
    }]
  }, {
    value: '2019',
    label: '2019',
    children: [{
      value: 'E200',
      label: 'E200'
    }, {
      value: 'E201',
      label: 'E201'
    }, {
      value: 'E300',
      label: 'E300'
    }]
  }]
}];
class ModelManagement extends React.Component {
  goto = path => {
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="model-management">
        <h2>Model Management</h2>
        <Form>
          <Form.Item label="Class / MY / Model">
            <Cascader options={OPTIONS} />
          </Form.Item>
          <Form.Item>
            <Button icon="plus">Add</Button>
            <Button icon="edit">Modify</Button>
            <Button icon="delete" type="danger" ghost>Delete</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" icon="search" onClick={() => this.goto('/model-management/list')}>Search</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ModelManagement;