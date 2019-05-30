import './Loading.less';

import React from 'react';
import { Spin } from 'antd';

export default ({ tip='努力加载中...' }) => (
  <div className="loading">
    <Spin tip={tip} />
  </div>
);