import './App.less';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './components/Header';
import Footer from './components/Footer';
import DataManagementPreview from './pages/DataManagementPreview';
import DataManagement from './pages/DataManagement';
import ModelManagement from './pages/ModelManagement';
import ModelManagementList from './pages/ModelManagementList';
import ModelManagementScenario from './pages/ModelManagementScenario';
import Reporting from './pages/Reporting';
import CompetitorComparison from './pages/CompetitorComparison';
import Admin from './pages/Admin';
import Index from './pages/Index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route component={Header} />
          <Layout.Content>
            <Switch>
              {/* 在此配置页面路由 */}
              <Route path="/data-management/preview" component={DataManagementPreview} />
              <Route path="/data-management" component={DataManagement} />
              <Route path="/model-management/list" component={ModelManagementList} />
              <Route path="/model-management/scenario" component={ModelManagementScenario} />
              <Route path="/model-management" component={ModelManagement} />
              <Route path="/reporting" component={Reporting} />
              <Route path="/competitor-comparison" component={CompetitorComparison} />
              <Route path="/admin" component={Admin} />
              <Route path="/" component={Index} />
            </Switch>
          </Layout.Content>
          <Route component={Footer} />
        </Layout>
      </div>
    );
  }
}

export default App;
