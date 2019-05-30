import constants from '../constants';

export default (state = {
  visible: false,
  status: constants.SUCCESS
}, action) => {
  let nextState = state;
  switch (action.type) {
    case constants.TOGGLE_UPLOAD:
      nextState = Object.assign({}, state, { visible: action.payload });
      break;
    case constants.UPLOAD:
      nextState = Object.assign({}, state, { status: constants.PENDING });
      break;
    case constants.UPLOAD + constants._SUCCESS:
      nextState = Object.assign({}, state, { visible: false, status: constants.SUCCESS });
      break;
    case constants.UPLOAD + constants._FAIL:
      nextState = Object.assign({}, state, { status: constants.FAIL });
      break;
    default:
      break;
  }
  return nextState;
};