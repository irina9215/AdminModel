import './UploadModal.less';

import React from 'react';
import { Modal, Upload, Icon } from 'antd';
import { connect } from 'react-redux';
import { upload } from '../actions';
import constants from '../constants';

class UploadModal extends React.Component {
  render() {
    const { visible, status, hide, updateStatus } = this.props;
    return (
      <Modal className="upload-modal" title="上传EXCEL" visible={visible} footer={null} onCancel={hide}>
        <Upload.Dragger
          name="file"
          action="/gamma-projectx/excel/importExcelWithType"
          onChange={info => {
            console.log('!!!', info);
            if (info.file.status === 'uploading') {
              updateStatus(constants.PENDING);
            } else if (info.file.status === 'done') {
              updateStatus(constants.SUCCESS, info.file.response);
            } else if (info.file.status === 'error') {
              updateStatus(constants.FAIL);
            }
          }}
          showUploadList={false}
          disabled={status === constants.PENDING}
        >
          <div className="um-title"><Icon type="upload" /></div>
          { status === constants.SUCCESS ? <div>点击选择EXCEL文件，或将文件拖放至此区域上传</div> : null }
          { status === constants.PENDING ? <div>上传中……请稍后</div> : null }
          { status === constants.FAIL ? <div className="text-warning">上传失败了，请重新上传</div> : null }
        </Upload.Dragger>
      </Modal>
    );
  }
}

export default connect(
  state => ({
    visible: state.upload.visible,
    status: state.upload.status
  }),
  dispatch => ({
    hide: () => dispatch(upload.toggle(false)),
    updateStatus: (status, payload) => dispatch(upload.updateStatus(status, payload))
  })
)(UploadModal);