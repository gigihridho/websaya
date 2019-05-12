import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Card } from 'antd';
import poto from '../image/poto.JPG';

const { Meta } = Card;

class Profil extends Component {
    render() {
        return (
			
			<div className="gutter-example">
    <Row gutter={16}>
	<div style={{margin: '10px'}}>
      <Col type="flex" className="gutter-row" span={8} justify="space-between">
	  <Card
				hoverable
				style={{ width: 400 }}
				cover={<img alt="Foto" src={poto} />}
			>
				<Meta
				title="Gigih Ridho"
				description="KOMSI UGM"
				/>
			</Card>
      </Col>
      <Col className="gutter-row" span={8} style={{width: 300}}>
	  		<Card title="Nama" bordered={false}>Gigih Ridho</Card>
	  		<Card title="Alamat" bordered={false}>Pogung</Card>
			<Card title="Pendidikan" bordered={false}>Universitas Gadjah Mada</Card>
      </Col>
      <Col className="gutter-row" span={8} style={{width: 300}}>
	  		<Card title="TTL" bordered={false}>Sukoharjo, 9 Mei 2000</Card>
	  		<Card title="Asal" bordered={false}>Sukoharjo</Card>
			<Card title="Hobi" bordered={false}>Baik</Card>
      </Col>
	  </div>
    </Row>
  </div>
			
		);	
    }
}

export default Profil;
