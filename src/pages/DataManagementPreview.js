import _ from 'lodash';
import React from 'react';
import { Alert, Table, Button } from 'antd';

const DATASOURCE = _.range(20).map(index => ({
  index,
  gruppierung: 'AMG',
  code: 'P31',
  verkaufsbezeichnung: 'AMG Line Exterieur',
  salesDesignation: 'EXCLUSIVE interior',
  beschreibung: 'Polsterung China spezifisch: Leder Nappa 800A: Verfügbare Farben: schwarz (841A), nussbraun/schwarz (844A), macchiato/schwarz (845A)',
  beinhaltet: '02R, R96, P15, 677',
	restriktion: 'R96 nur mit E400, E400 4MATIC',
	china: 'S'
}));

const COLUMNS = [{
  title: 'Gruppierung',
  dataIndex: 'gruppierung',
  key: 'gruppierung'
}, {
  title: 'Code',
  dataIndex: 'code',
  key: 'code'
}, {
  title: 'Verkaufsbezeichnung',
  dataIndex: 'verkaufsbezeichnung',
  key: 'verkaufsbezeichnung'
}, {
  title: 'Sales Designation',
  dataIndex: 'salesDesignation',
  key: 'salesDesignation'
}, {
  title: 'Beschreibung',
  dataIndex: 'beschreibung',
  key: 'beschreibung'
}, {
  title: 'Beinhaltet',
  dataIndex: 'beinhaltet',
  key: 'beinhaltet'
}, {
  title: 'Restriktion',
  dataIndex: 'restriktion',
  key: 'restriktion'
}, {
  title: 'Anmerkung Public',
  dataIndex: 'anmerkung',
  key: 'anmerkung'
}, {
  title: 'China',
  dataIndex: 'china',
  key: 'china'
}];

class DataManagementPreview extends React.Component {
  render() {
    return (
      <div className="data-management">
        <h2>Preview</h2>
        <Alert type="success" message="File was processed successfully" showIcon />
        <Table columns={COLUMNS} dataSource={DATASOURCE} rowKey="index" />
        <div className="actions">
          <Button icon="edit">Modify</Button>
          <Button type="primary" icon="save">Save</Button>
        </div>
      </div>
    );
  }
}

export default DataManagementPreview;