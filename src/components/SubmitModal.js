import './SubmitModal.less';

import React from 'react';
import { Modal, Alert } from 'antd';

class SubmitModal extends React.Component {
  render() {
    return (
      <Modal className="submit-modal" title="提交确认" {...this.props}>
        <Alert message="检测到字段表中存在下列问题，请确认是否提交？" type="warning" style={{ marginBottom: '1rem' }}/>
        <div className="sm-statitics">
          <div className="sm-statitics-row">
            <div className="label">不匹配</div>
            <div className="value">2</div>
          </div>
          <div className="sm-statitics-row">
            <div className="label">孤点</div>
            <div className="value">8</div>
          </div>
          <div className="sm-statitics-row">
            <div className="label">不匹配</div>
            <div className="value">2</div>
          </div>
          <div className="sm-statitics-row">
            <div className="label">孤点</div>
            <div className="value">8</div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SubmitModal;