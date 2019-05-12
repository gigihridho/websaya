import React, {Component} from 'react';
import { Row, Col, Card } from 'antd';
import andro from '../image/andro.png'
import web from '../image/web.jpg'

const { Meta } = Card;

class Portofolio extends Component {

    render() {
        return (
            <div class="row">
            <Row>
            <Col span={8}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="Android" src={andro} />}
            >
            <Meta
              title="Weather App"
              description="Front End Developer"
            />
            </Card>
            </Col>
            

            <Col span={8}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="Android" src={andro} />}
            >
            <Meta
              title="QuranKu"
              description="Front End Developer"
            />
            </Card>
            </Col>
            

            <Col span={8}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="Android" src={andro} />}
            >
            <Meta
              title="KosanKu"
              description="Front End Developer"
            />
            </Card>
            </Col>
        
            </Row>
            <br></br>
            <Row>
            <Col span={8}>
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="Web" src={web} />}
                >
                <Meta
                title="PsychologySays"
                description="System Analyst"
                />
                </Card>
                </Col>

                <Col span={8}>
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="Web" src={web} />}
                >
                <Meta
                title="Disert"
                description="Front End Developer"
                />
                </Card>
                </Col>
                </Row>
                </div>
        );
    }
}

export default Portofolio;
