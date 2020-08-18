import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import axios from 'axios'
import Aux from "../../hoc/_Aux";

import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import { extend } from 'jquery';


const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
const baseurl= window.location.origin;


class UtilitaView extends React.Component {

    constructor(props){
        super(props);
        this.state={start_date:'',end_date:'',monday_view:''}
    }
    componentDidMount() {
        var items  = [];
        const { match, location, history } = this.props
        const {id,start_date,end_date} =location.state.detail;
        this.setState({start_date:start_date});
        this.setState({end_date:end_date});
        let data={id:id,start_date:start_date,end_date:end_date};
      axios.post(baseurl+'/api/utilita/view',data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
       
        let node = document.getElementById('monday_view');
        node.insertAdjacentHTML('afterend', res.data);
        
         //   this.setState({monday_view:res});
        }); 
       //
         
    }

    render(){ 
        const { match, location, history } = this.props
        return(<Aux>
                       <Row>
                            <Col>
                            <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Utilita Chart</Card.Title>
                                         
                                        <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                                    </Card.Header>
                                    <Card.Body>
                                        <b>{this.state.start_date} to {this.state.end_date}</b>
                                            <div id="monday_view"><img src='images/ajax_loader_gray_512.gif'></img></div>
                                        </Card.Body>
                            </Card>
                           </Col>
                        </Row>
                    </Aux>
                        )
            }
}

export default UtilitaView

;