import React, {Component} from 'react';
import { Row, Col, Icon } from 'antd';


class Kontak extends Component {
    render() {
        return (
            <div class="row" style={{color: 'white'}}>
                
            <div class="section-header text-center">
                <h2 class="title" align="center" style={{color: 'white'}}>Contact Me</h2>
            </div>
        <Row type="flex" justify="space-around" style={{color: 'white'}}>
            <Col span={3}>
                <Icon type="phone"></Icon>
                <h3 style={{color: 'white'}}>Phone</h3>
                <p>+62 8572-8664-429</p>
            </Col>
            <Col span={3}>
                <Icon type="mail"></Icon>
                <h3 style={{color: 'white'}}>Email</h3>
                <p>gigih.r.r@mail.ugm.ac.id</p>
            </Col>
            <Col span={3}>
            <Icon type="github"></Icon>
                <h3 style={{color: 'white'}}>Github</h3>
                <p>github.com/gigihridho</p>
            </Col>
        </Row>
            <Row type="flex" justify="space-around" style={{color: 'white'}}>
            <Col span={3}>
                <Icon type="instagram"></Icon>
                <h3 style={{color: 'white'}}>Instagram</h3>
                <p>gigihridho</p>
            </Col>
            <Col span={3}>
                <Icon type="twitter"></Icon>
                <h3 style={{color: 'white'}}>Twitter</h3>
                <p>gigihridho</p>
            </Col>
            <Col span={3}>
                <Icon type="youtube"></Icon>
                <h3 style={{color: 'white'}}>Youtube</h3>
                <p>gigih ridho</p>
            </Col>    
        </Row>
           </div>
        );
    }
}

export default Kontak;
