import './Footer.less';

import React from 'react';
import moment from 'moment';
import { Layout } from 'antd';

export default () => <Layout.Footer>&copy; {moment().format('YYYY')} Daimler AG.</Layout.Footer>;