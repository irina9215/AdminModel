import './Index.less';
import React from 'react';
import { Row, Col, Card } from 'antd';

class Index extends React.Component {
  goto = path => { 
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="index">
        <Row>
          <Col span={12}>
            <Card title="Data Management" onClick={() => this.goto('/data-management')} hoverable>Bla bla bla...</Card>
          </Col>
          <Col span={12}>
            <Card title="Model Management" onClick={() => this.goto('/model-management')} hoverable>Bla bla bla...</Card>
          </Col>
          <Col span={12}>
            <Card title="Reporting" onClick={() => this.goto('/reporting')} hoverable>Bla bla bla...</Card>
          </Col>
          <Col span={12}>
            <Card title="Admin" hoverable>Bla bla bla...</Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Index;