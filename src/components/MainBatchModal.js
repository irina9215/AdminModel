import './MainModal.less';

import _ from 'lodash';
import React from 'react';
import { Modal, Form, Row, Col, Input, Table, Radio, Button } from 'antd';
import { connect } from 'react-redux';
import systems from '../systems';

const columns = [{
  title: '名称',
  dataIndex: 'cName'
}, {
  title: '英文',
  dataIndex: 'eName'
}, {
  title: '类型',
  dataIndex: 'type'
}];

class MainBatchModal extends React.Component {
  render() {
    const { data } = this.props;
    const dataSource = data.map((value, id) => Object.assign(_.pick(value, [ 'cName', 'eName', 'type' ]), { id }));
    return (
      <Modal className="main-modal" title="批量字段编辑" width={960} {...this.props}>
        <Form>
          <Row>
            <Col span={10}>
              <div className="mm-title">待修改的字段</div>
              <Table rowSelection={{
                selectedRowKeys: _.range(dataSource.length)
              }} pagination={false} columns={columns} dataSource={dataSource} size="small" rowKey="id" />
            </Col>
            <Col span={14}>
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
                              { label: '不修改', value: '-1' },
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
  state => ({
    data: state.fields.data
  })
)(MainBatchModal);