import './Header.less';
import React from 'react';
import { Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  onClick_uploadBtn = e => {
    e.preventDefault();
    this.props.showUploadModal();
  }
  render() {
    return (
      <Layout.Header>
        <Link to="/"><Icon type="home" /> Home</Link>
        <Link to="/data-management">Data Management</Link>
        <Link to="/model-management">Model Management</Link>
        {/* <Link to="/reporting">Reporting</Link> */}
        <Link to="/competitor-comparison">Competitor Comparison</Link>
        {/* <Link to="/admin">Admin</Link> */}
      </Layout.Header>
    );
  }
}

export default Header;