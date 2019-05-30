import constants from '../constants';

const toggle = (visible = false) => ({
  type: constants.TOGGLE_UPLOAD,
  payload: visible
});

const updateStatus = (status, payload) => {
  let type = constants.UPLOAD;
  if (status === constants.SUCCESS) {
    type = constants.UPLOAD + constants._SUCCESS;
  } else if (status === constants.FAIL) {
    type = constants.UPLOAD + constants._FAIL;
  }
  return { type, payload };
};

export default {
  toggle,
  updateStatus
};
