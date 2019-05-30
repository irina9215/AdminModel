import './index.less';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './reducers';

import * as serviceWorker from './serviceWorker';

moment.locale('zh-cn');

ReactDOM.render((
  <Provider store={store}>
    <LocaleProvider locale={zh_CN}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocaleProvider>
  </Provider>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
