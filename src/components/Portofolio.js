import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Card} from 'antd';

const { Meta } = Card;
export default class Portofolio extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/gigihridho/latihan_pwa_api/mahasiswa`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <Row type="flex" justify="center">
       <Card>
        <ul>
        { this.state.persons.map(person => 
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} > {person.name}</Col>)}
        </ul>
        </Card>
        
        
      
      </Row>       
    )
  }
}
