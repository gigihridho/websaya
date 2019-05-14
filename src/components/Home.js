import React from 'react';
import {Col, Row} from 'antd';
import ps from '../image/ps.gif';

class Home extends React.Component{
    render(){
        return(
            <div id="headerwrap">
  		        <div class="container">
		        <Row>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
				<Col align="center" span={12} offset={6}>
				<h3 style={{color: 'white'}}>HELLO PEOPLE, MY NAME IS</h3>
                <h1 style={{color: 'white'}}>GIGIH RIDHO RIDHANA</h1>
                <br></br>
                <br></br>
                <h3 style={{color: 'white'}}>WEB DEVELOPER &amp; PES ADDICT</h3>
			    </Col>
                <img alt="gif" src={{ps}}></img>		
	            </Row>
        </div>
</div>   
                
            
        )
    }
}

export default Home; 