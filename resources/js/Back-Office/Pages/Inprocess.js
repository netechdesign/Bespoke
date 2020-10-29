
import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";


  class Inprocess  extends Component {
        
        render(){
            return (
                <Aux>
                    <Row>
                        <Col>
                            <Card title='Please Wait' isOption>
                                <p>
                                In-Process...Please Wait ... 
                                </p>
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            );
        }
}

export default Inprocess;