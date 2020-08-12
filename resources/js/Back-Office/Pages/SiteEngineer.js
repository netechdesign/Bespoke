import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import {Importfile} from '../../HttpFunctions'; 
import Aux from "../../hoc/_Aux";

import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import { extend } from 'jquery';
import Select from 'react-select';


const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
const baseurl= window.location.origin;


class SiteEngineer extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            Engineers:[],
            Engineer:[],
            SiteEngineer:[],
            validated: false,
            validatedTooltip: false,
            visible : true,
            formSubmitting: false,
            buttonName:'Add',
        }}
           
    componentDidMount() {
        var items  = [];
      axios.get(baseurl+'/api/engineer',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
            
            this.setState({Engineers:res.data}); 
            }); 
           
    }

    SiteEngineerchange =(e)=>{
        let self= this;
        setTimeout(function(){  self.setState({SiteEngineer:e});}, 500);
       
    }
    Engineerchange =(e)=>{
        let self= this;
        setTimeout(function(){  self.setState({Engineer:e});}, 500);
       
    }
    handleSubmit = (e, formData, inputs) => {
        
        e.preventDefault();
        const baseurl= window.location.origin;
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />sending</span>});
        const data = new FormData()
        data.append('SiteEngineer', JSON.stringify(this.state.SiteEngineer));
        data.append('Engineer', JSON.stringify(this.state.Engineer));
        
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        axios.post(
            baseurl+'/api/engineer',
            data,
            {
                headers:{'Authorization':'Bearer '+auth_token}
            } 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Add'});
                             this.setState({selectedFile:null});
                            $('#avatar').val('');
                            /*console.clear(); */
                            //this.setState({progress:100});
                            PNotify.success({
                                title: 'Success',
                                text: res.data.message,
                                modules: {
                                    Desktop: {
                                        desktop: true
                                    }
                                }
                            }).on('click', function(e) {
                                
                            });
                          }else{
                            $('#avatar').val('');
                            PNotify.error({
                                title: "System Error",
                                text:res.data.message,
                            });
                            this.setState({formSubmitting:false});
                            this.setState({buttonName:'Add'});
                            this.setState({selectedFile:null});
                          }
                     }
          )
          .catch(err =>{
                    PNotify.error({
                        title: "System Error",
                        text:err,
                    });
                    this.setState({formSubmitting:false});
                    this.setState({buttonName:'Add'});
                    this.setState({selectedFile:null});
                          console.log(err);
                      }
          )
       
       // successDesktopPNotify();
      //  this.props.history.push('/role');

        this.setState({ showModal: true });
    };
    render() { return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Add Area Engineer</Card.Title>
                        </Card.Header>
                        <Card.Body>
                        <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="SiteEngineer">Area Engineer</Form.Label>
                                    <Select required onChange={this.SiteEngineerchange}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            name="SiteEngineer"
                                            options={this.state.Engineers}
                                            placeholder="Select Area Engineer"
                                        />
                                        </Form.Group>
                                        <Form.Group as={Col} md="2">
                                            <Form.Label htmlFor="engineers">Engineer</Form.Label>
                                                <Select required
                                                    // defaultValue={[Engineers[2], Engineers[3]]}
                                                    onChange={this.Engineerchange}
                                                    isMulti
                                                    name="engineers"
                                                    options={this.state.Engineers}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                    placeholder="Select Engineer"
                                                    isSearchable
                                        />
                                        </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} sm={12} className="mt-3">
                                            <Button disabled={this.state.formSubmitting}  type="submit"> {this.state.buttonName}</Button>
                                    </Form.Group>
                                </Form.Row>
                        </ValidationForm>
                        </Card.Body>
                        </Card>
                        </Col>
                        </Row>
                        </Aux>
                        );
    }
}

export default SiteEngineer;