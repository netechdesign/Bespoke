import React from "react";
import {Link} from "react-router-dom";
import {Row, Col, Card, Form, Button,Alert,Table} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import Aux from "../../hoc/_Aux";
import AnimatedModal from "../../App/components/AnimatedModal";
import {Pemissionlist} from '../../HttpFunctions'; 
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import Datetime from 'react-datetime';
import {CheckPermission} from '../../HttpFunctions';
function successDesktopPNotify() {
    PNotify.success({
        title: 'Success',
        text: "Job type added successfully",
        modules: {
            Desktop: {
                desktop: true
            }
        }
    }).on('click', function(e) {
        
    });
}
const baseurl= window.location.origin;
class Add extends React.Component{

    state = {
        job_type:'',
        mix:'',
        revenue:'',
        pu:'',
        revenue_aborted:'',
        pu_aborted:'',
        revenue_M25:'',
        revenue_aborted_M25:'',
        contract:'',
        from_date:'',
            to_date:'',
        chkCustom:false,
        visible : true,
        formSubmitting: false,
        buttonName:'Save',
        };
    
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        };
        startDateChange = (e) => {
            var today = new Date(e);
            var dd = today.getDate(); 
            var mm = today.getMonth() + 1; 
      
            var yyyy = today.getFullYear(); 
            if (dd < 10) { 
                dd = '0' + dd; 
            } 
            if (mm < 10) { 
                mm = '0' + mm; 
            } 
            var today = dd + '/' + mm + '/' + yyyy; 
    
           this.setState({from_date:today});
        };
        
        endDateChange = (e) => {
            var today = new Date(e);
            var dd = today.getDate(); 
            var mm = today.getMonth() + 1; 
      
            var yyyy = today.getFullYear(); 
            if (dd < 10) { 
                dd = '0' + dd; 
            } 
            if (mm < 10) { 
                mm = '0' + mm; 
            } 
            var today = dd + '/' + mm + '/' + yyyy; 
    
           this.setState({to_date:today});
        };
        
        componentDidMount(){
            const { match, location, history } = this.props;
            CheckPermission('user','add',history);
        
        }

        handleSubmit = (e, formData, inputs) => {
            e.preventDefault();
            this.setState({formSubmitting:true});
            this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
            const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
           
            //const data = new FormData()
            //data.append('name', this.state.name);
           
            axios.post(
                baseurl+'/api/job_lookup',this.state,
                {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
            ).then(res =>{
                              if(res.data.success){
                                 // console.log(res.data.data);
                                 this.setState({formSubmitting:false});
                                 this.setState({buttonName:'Save'});
                                 this.setState({engineer_name:''});
                                 successDesktopPNotify();
                                 this.props.history.push('/job_lookup'); 
                              }else{
                                if(res.data.errors){
                                    res.data.message= res.data.errors.name;
                                }
                                PNotify.error({
                                    title: "System Error",
                                    text:res.data.errors.name,
                                });
                                this.setState({formSubmitting:false});
                                this.setState({buttonName:'Save'});
                                
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
                              
                          }
              )
           
          //  this.props.history.push('/role');
    
          
        };
    
        handleErrorSubmit = (e, formData, errorInputs) => {
            //console.log(errorInputs);
        };
      
        
    render(){
        const { match, location, history } = this.props
          return(<Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Add Job Type</Card.Title>
                                      <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                                </Card.Header>
                                <Card.Body>
                                <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="job_type">Job Type</Form.Label>
                                                                <TextInput
                                                                    name="job_type"
                                                                    id="job_type"
                                                                    placeholder="Job Type"
                                                                    required value={this.state.job_type}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                        </Form.Group>
                                        <Form.Group as={Col} md="3">
                                            <Form.Label htmlFor="bank_name">Mix</Form.Label>
                                            <TextInput
                                            name="mix"
                                            id="mix"
                                            placeholder="Mix"
                                            required value={this.state.mix}
                                            onChange={this.handleChange}
                                            autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="3">
                                            <Form.Label htmlFor="contract">Contract</Form.Label>
                                            <TextInput
                                            name="contract"
                                            id="contract"
                                            placeholder="Contract"
                                            required value={this.state.contract}
                                            onChange={this.handleChange}
                                            autoComplete="off"
                                            />
                                        </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                        <Form.Group as={Col} md="3">
                                            <Form.Label htmlFor="bank_name">PU - Completed</Form.Label>
                                            <TextInput
                                            name="pu"
                                            id="pu"
                                            placeholder="Pu Completed"
                                            required value={this.state.pu}
                                            onChange={this.handleChange}
                                            autoComplete="off"
                                            />
                                        </Form.Group>
                                        
                                        <Form.Group as={Col} md="3">
                                            <Form.Label htmlFor="bank_name">PU - Aborted</Form.Label>
                                            <TextInput
                                            name="pu_aborted"
                                            id="pu_aborted"
                                            placeholder="Pu Aborted"
                                            required value={this.state.pu_aborted}
                                            onChange={this.handleChange}
                                            autoComplete="off"
                                            />
                                        </Form.Group>
                                </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="3">
                                            <Form.Label htmlFor="bank_name">Revenue - Completed</Form.Label>
                                            <TextInput
                                            name="revenue"
                                            id="revenue"
                                            placeholder="Revenue Completed"
                                            required value={this.state.revenue}
                                            onChange={this.handleChange}
                                            autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="3">
                                            <Form.Label htmlFor="bank_name">Revenue - Aborted</Form.Label>
                                            <TextInput
                                            name="revenue_aborted"
                                            id="revenue_aborted"
                                            placeholder="Revenue Aborted"
                                            required value={this.state.revenue_aborted}
                                            onChange={this.handleChange}
                                            autoComplete="off"
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} md="3">
                                            <Form.Label htmlFor="bank_name">Revenue-Completed-M25</Form.Label>
                                            <TextInput
                                            name="revenue_M25"
                                            id="revenue_M25"
                                            placeholder="Revenue-Completed-M25"
                                            required value={this.state.revenue_M25}
                                            onChange={this.handleChange}
                                            autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="3">
                                            <Form.Label htmlFor="bank_name">Revenue-Aborted-M25</Form.Label>
                                            <TextInput
                                            name="revenue_aborted_M25"
                                            id="revenue_aborted_M25"
                                            placeholder="Revenue-Aborted-M25"
                                            required value={this.state.revenue_aborted_M25}
                                            onChange={this.handleChange}
                                            autoComplete="off"
                                            />
                                        </Form.Group>
                                </Form.Row>
                                
                                <Form.Row>
                                        <Form.Group as={Col} md="2">
                                            <Form.Label htmlFor="start_date">From</Form.Label>
                                            <Datetime closeOnSelect={true} onChange={this.startDateChange}  dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()} errorMessage={{required:"start_date is required"}}  inputProps={{required:'required',name:"start_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                        </Form.Group>
                                        
                                        <Form.Group as={Col} md="2">
                                            <Form.Label htmlFor="end_date">To</Form.Label>
                                            <Datetime  closeOnSelect={true} dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()}  errorMessage={{required:"end_date is required"}} onChange={this.endDateChange} inputProps={{required:'required',name:"end_date",placeholder: 'Select Date',autoComplete:'off'}} />
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
export default Add;