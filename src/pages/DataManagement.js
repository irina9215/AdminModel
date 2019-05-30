import './DataManagement.less';
import React from 'react';
import { Tabs, Form, Cascader, Upload, Icon, Button } from 'antd';

const ASL_OPTIONS = [{
  value: 'C-Class',
  label: 'C-Class',
  children: [{
    value: '2018',
    label: '2018'
  }, {
    value: '2019',
    label: '2019'
  }]
}, {
  value: 'E-Class',
  label: 'E-Class',
  children: [{
    value: '2018',
    label: '2018'
  }, {
    value: '2019',
    label: '2019'
  }]
}, {
  value: 'S-Class',
  label: 'S-Class',
  children: [{
    value: '2018',
    label: '2018'
  }, {
    value: '2019',
    label: '2019'
  }]
}];

const TPL_OPTIONS = [{
  value: 'E200',
  label: 'E200',
  children: [{
    value: '2018',
    label: '2018'
  }, {
    value: '2019',
    label: '2019'
  }]
}, {
  value: 'E201',
  label: 'E201',
  children: [{
    value: '2018',
    label: '2018'
  }, {
    value: '2019',
    label: '2019'
  }]
}, {
  value: 'E300',
  label: 'E300',
  children: [{
    value: '2018',
    label: '2018'
  }, {
    value: '2019',
    label: '2019'
  }]
}];

class DataManagement extends React.Component {
  goto = path => {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="data-management">
        <h2>Data Management</h2>
        <Tabs>
          <Tabs.TabPane tab="ASL" key="0">
            <Form>
              <Form.Item label="Type class / Model year">
                <Cascader options={ASL_OPTIONS} placeholder="Please select Type class / Model year" />
              </Form.Item>
              <Form.Item label="Upload a single file">
                <Upload.Dragger>
                  <p className="ant-upload-drag-icon"><Icon type="inbox" /></p>
                  <p className="ant-upload-text">Click or drag a single EXCEL file to this area to upload</p>
                </Upload.Dragger>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={() => this.goto('/data-management/preview')}>Submit</Button>
              </Form.Item>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="TPL" key="1">
            <Form>
              <Form.Item label="Model Range / Model year">
                <Cascader options={TPL_OPTIONS} placeholder="Please select Model Range / Model year" />
              </Form.Item>
              <Form.Item label="Upload a single file">
                <Upload.Dragger>
                  <p className="ant-upload-drag-icon"><Icon type="inbox" /></p>
                  <p className="ant-upload-text">Click or drag a single EXCEL file to this area to upload</p>
                </Upload.Dragger>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={() => this.goto('/data-management/preview')}>Submit</Button>
              </Form.Item>
            </Form>
          </Tabs.TabPane>
          {/* <Tabs.TabPane tab="Kufri" key="2">
            <Form>
              <Form.Item label="Type class / Model year">
                <Cascader options={ASL_OPTIONS} placeholder="Please select Type class / Model year" />
              </Form.Item>
              <Form.Item label="Upload a single file">
                <Upload.Dragger>
                  <p className="ant-upload-drag-icon"><Icon type="inbox" /></p>
                  <p className="ant-upload-text">Click or drag a single EXCEL file to this area to upload</p>
                </Upload.Dragger>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={() => this.goto('/data-management/preview')}>Submit</Button>
              </Form.Item>
            </Form>
          </Tabs.TabPane> */}
          <Tabs.TabPane tab="OPM" key="3">
            <Form>
              <Form.Item label="Type class / Model year">
                <Cascader options={ASL_OPTIONS} placeholder="Please select Type class / Model year" />
              </Form.Item>
              <Form.Item label="Upload a single file">
                <Upload.Dragger>
                  <p className="ant-upload-drag-icon"><Icon type="inbox" /></p>
                  <p className="ant-upload-text">Click or drag a single EXCEL file to this area to upload</p>
                </Upload.Dragger>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={() => this.goto('/data-management/preview')}>Submit</Button>
              </Form.Item>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Order Config" key="4">
            <Form>
              <Form.Item label="Type class / Model year">
                <Cascader options={ASL_OPTIONS} placeholder="Please select Type class / Model year" />
              </Form.Item>
              <Form.Item label="Upload a single file">
                <Upload.Dragger>
                  <p className="ant-upload-drag-icon"><Icon type="inbox" /></p>
                  <p className="ant-upload-text">Click or drag a single EXCEL file to this area to upload</p>
                </Upload.Dragger>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={() => this.goto('/data-management/preview')}>Submit</Button>
              </Form.Item>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="TAP" key="5">
            <Form>
              <Form.Item label="Type class / Model year">
                <Cascader options={ASL_OPTIONS} placeholder="Please select Type class / Model year" />
              </Form.Item>
              <Form.Item label="Upload a single file">
                <Upload.Dragger>
                  <p className="ant-upload-drag-icon"><Icon type="inbox" /></p>
                  <p className="ant-upload-text">Click or drag a single EXCEL file to this area to upload</p>
                </Upload.Dragger>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={() => this.goto('/data-management/preview')}>Submit</Button>
              </Form.Item>
            </Form>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default DataManagement;