import './MainModal.less';

import React from 'react';
import { Modal, Form, Row, Col, Input, Select, Checkbox, Radio, Button } from 'antd';
import { connect } from 'react-redux';
import types from '../types';
import systems from '../systems';

class MainModal extends React.Component {
  render() {
    return (
      <Modal className="main-modal" title="字段编辑" width={960} {...this.props}>
        <Form>
          <Row>
            <Col span={8}>
              <Form.Item label="名称">
                <Input />
              </Form.Item>
              <Form.Item label="英文名称">
                <Input />
              </Form.Item>
              <Form.Item label="类型">
                <Select showSearch>
                  { types.map((type, index) => <Select.Option key={index} value={type.value}>{type.label}</Select.Option>) }
                </Select>
              </Form.Item>
              <Form.Item label="长度">
                <Input type="number" />
              </Form.Item>
              <Form.Item>
                <Checkbox>必要字段</Checkbox>
              </Form.Item>
            </Col>
            <Col span={16}>
              <div className="mm-systems">
                <div className="mm-actions">
                  <Button style={{ marginRight: '.5rem' }} icon="reload" />
                  <Input.Search placeholder="系统名称" />
                </div>
                <div className="mm-rows">
                  { systems.map((system, systemIndex) => (
                    <div key={systemIndex} className="mm-row">
                      <div className="mm-row-header">{system.name}</div>
                      <div className="mm-row-body">
                        { system.phases.map((phase, phaseIndex) => (
                          <Form.Item key={phaseIndex} label={phase}>
                            <Radio.Group defaultValue="-1" options={[
                              { label: '空', value: '-1' },
                              { label: '生产者', value: '0' },
                              { label: '运输者', value: '1' },
                              { label: '消费者', value: '2' },
                            ]} />
                          </Form.Item>
                        )) }
                      </div>
                    </div>
                  )) }
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default connect(
  state => ({})
)(MainModal);