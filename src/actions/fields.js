import constants from '../constants';

const getFields = params => ({
  type: constants.GET_FIELDS,
  payload: {
    request: {
      url: 'fields.json',
      params
    }
  }
});

export default {
  getFields
};