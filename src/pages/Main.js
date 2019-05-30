import './Main.less';

import _ from 'lodash';
import React from 'react';
import { Table, Button, Input } from 'antd';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import MainModal from '../components/MainModal';
import MainBatchModal from '../components/MainBatchModal';
import SubmitModal from '../components/SubmitModal';
import systems from '../systems';
import roles from '../roles';
import { fields } from '../actions';
import constants from '../constants';

const columns = [{
  title: '字段',
  fixed: 'left',
  children: [{
    title: '字段名称',
    dataIndex: 'cName',
    width: 160,
  }]
}, {
  title: '规格',
  fixed: 'left',
  children: [{
    title: '英文名称',
    dataIndex: 'eName',
    width: 160
  }, {
    title: '类型',
    dataIndex: 'type',
    width: 96
  }, {
    title: '长度',
    dataIndex: 'length',
    width: 64
  }, {
    title: '必要',
    key: 'isMandatory',
    render: record => record.isMandatory ? '是' : '',
    width: 64
  }]
}, 
...systems.map((system, systemIndex) => ({
  title: system.name,
  className: systemIndex % 2 === 0 ? 'even' : 'odd',
  children: system.phases.map((phase, phaseIndex) => ({
    title: phase,
    className: systemIndex % 2 === 0 ? 'even' : 'odd',
    key: `${systemIndex}-${phaseIndex}`,
    render: record => {
      const systemResult = _.find(record.systemList, { systemCode: system.code });
      if (systemResult) {
        const phaseResult = _.find(systemResult.phaseList, { phaseName: phase });
        if (phaseResult) {
          return <span className={`m-role-${phaseResult.role}`}>{roles[phaseResult.role]}</span>;
        }
      }
      return null;
    }
  }))
}))];

class Main extends React.Component {
  state = {
    showMainModal: false,
    showMainBatchModal: false,
    showSubmitModal: false
  }
  reload = () => {
    this.props.getFields();
  }
  toggleMainModal = () => {
    this.setState({
      showMainModal: !this.state.showMainModal
    });
  }
  toggleMainBatchModal = () => {
    this.setState({
      showMainBatchModal: !this.state.showMainBatchModal
    });
  }
  toggleSubmitModal = () => {
    this.setState({
      showSubmitModal: !this.state.showSubmitModal
    });
  }
  componentDidMount() {
    // this.reload();
  }
  render() {
    const { status, data } = this.props;
    const { showMainModal, showMainBatchModal, showSubmitModal } = this.state;
    const dataSource = data.map((value, id) => Object.assign({}, value, { id }));
    return (
      <div className="main">
        <div className="m-header"></div>
        <div className="m-body">
          <div className="m-actions">
            <div>
              <Button icon="reload" style={{ marginRight: '.5rem' }} onClick={this.reload} />
              <Input.Search style={{ marginRight: '.5rem', width: '12rem' }} placeholder="字段名称" enterButton />
              <Button style={{ marginRight: '.5rem' }} icon="tags" onClick={this.toggleMainBatchModal}>批量修改</Button>
              <Button type="primary" icon="plus" onClick={this.toggleMainModal}>新建字段</Button>
            </div>
            <div>
              <Button icon="save" style={{ marginRight: '.5rem' }}>暂存</Button>
              <Button type="primary" icon="check" onClick={this.toggleSubmitModal}>提交</Button>
            </div>
          </div>
          { status === constants.PENDING ? <Loading /> : null }
          { status === constants.SUCCESS ? <Table columns={columns} dataSource={dataSource} scroll={{ x: 2880 }} onRow={() => ({ onClick: this.toggleMainModal })} rowSelection={{ fixed: true }} rowKey="id" bordered /> : null }
        </div>
        <MainModal visible={showMainModal} onOk={this.toggleMainModal} onCancel={this.toggleMainModal} />
        <MainBatchModal visible={showMainBatchModal} onOk={this.toggleMainBatchModal} onCancel={this.toggleMainBatchModal} />
        <SubmitModal visible={showSubmitModal} onOk={this.toggleSubmitModal} onCancel={this.toggleSubmitModal} />
      </div>
    );
  }
}

export default connect(
  state => ({
    status: state.fields.status,
    data: state.fields.data
  }),
  dispatch => ({
    getFields: params => dispatch(fields.getFields(params))
  })
)(Main);