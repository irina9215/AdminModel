import constants from '../constants';
export default (state = {
  status: constants.SUCCESS,
  data: []
}, action) => {
  let nextState = state;
  switch (action.type) {
    case constants.GET_FIELDS:
      nextState = Object.assign({}, state, { status: constants.PENDING, data: [] });
      break;
    case constants.GET_FIELDS + constants._SUCCESS:
      nextState = Object.assign({}, state, { status: constants.SUCCESS, data: action.payload.data.data });
      break;
    case constants.GET_FIELDS + constants._FAIL:
      nextState = Object.assign({}, state, { status: constants.FAIL, data: [] });
      break;
    case constants.UPLOAD + constants._SUCCESS:
      nextState = Object.assign({}, state, { status: constants.SUCCESS, data: action.payload.data });
      break;
    default:
      break;
  }
  return nextState;
};