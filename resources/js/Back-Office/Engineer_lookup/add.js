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
import {CheckPermission} from '../../HttpFunctions';
function successDesktopPNotify() {
    PNotify.success({
        title: 'Success',
        text: "Engineer added successfully",
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
        engineer_id:'',
        engineer_name:'',
        manager_list:[],
        team_id:'',
        regions_sort_name:'',
        region_list:[],
        perfomance_level:'',
        cost:'',
        Monday:'',	
        Tuesday:'',
        Wednesday:'',
        Thursday:'',
        Friday:'',
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
    
        dropdownList = (e) =>{
            const id = this.state.id;
              
              document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
              const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
              
                axios.get(
                  baseurl+'/api/dropdown_list',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
              ).then(res =>{
                              if(res.data.success){
                                 this.setState({manager_list:res.data.manager,region_list:res.data.region})
                                 document.getElementById("requestLoder").innerHTML = '';
                                }else{
                                 
                              }
                         }
              )
              .catch(err =>{
                              console.log(err);
                          }
              )
             
          }
        componentDidMount(){
            const { match, location, history } = this.props;
            CheckPermission('user','add',history);
           this.dropdownList();
        }

        handleSubmit = (e, formData, inputs) => {
            e.preventDefault();
            this.setState({formSubmitting:true});
            this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
            const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
           
            //const data = new FormData()
            //data.append('name', this.state.name);
           
            axios.post(
                baseurl+'/api/engineer_lookup',this.state,
                {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
            ).then(res =>{
                              if(res.data.success){
                                 // console.log(res.data.data);
                                 this.setState({formSubmitting:false});
                                 this.setState({buttonName:'Save'});
                                 this.setState({engineer_name:''});
                                 successDesktopPNotify();
                                 this.props.history.push('/employee_lookup'); 
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
      
        ManagerChange = (e) =>{
            this.setState({engineer_id: e.value});
            let engineer_name = this.state.manager_list.filter((vl,index)=> vl.value==e.value);
            if(engineer_name){
                this.setState({engineer_name: engineer_name[0].label});
            }
        }
        RegionChange = (e) =>{
            this.setState({team_id: e.value});
            
            let region = this.state.region_list.filter((vl,index)=> vl.value==e.value);
            if(region){
                this.setState({regions_sort_name:region[0].regions_sort_name});
                }
        }
    render(){
        const { match, location, history } = this.props
          return(<Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Add Employee</Card.Title>
                                      <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                                </Card.Header>
                                <Card.Body>
                                <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                    <Form.Group as={Col} md="3">
                                    <Form.Label htmlFor="firstName">Engineer</Form.Label>
                            <Select onChange={this.ManagerChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="engineer_id"
                                    options={this.state.manager_list}
                                    placeholder="Select Engineer"
                                />
                                        </Form.Group>
                                                  
                            <Form.Group as={Col} md="3">
                            <Form.Label htmlFor="firstName">Team</Form.Label>
                            <Select onChange={this.RegionChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="regions_sort_name"
                                    options={this.state.region_list}
                                    placeholder="Select Team"
                                />
                            <Form.Label style={{color:'green'}} htmlFor="firstName">{(this.state.regions_sort_name?'Team id is '+this.state.regions_sort_name:'')}</Form.Label>
                                
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="bank_name">Perfomance Level</Form.Label>
                                                                <TextInput
                                                                    name="perfomance_level"
                                                                    id="perfomance_level"
                                                                    placeholder="Perfomance Level"
                                                                    required value={this.state.perfomance_level}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="bank_name">Cost</Form.Label>
                                                                <TextInput
                                                                    name="cost"
                                                                    id="cost"
                                                                    placeholder="Cost"
                                                                    required value={this.state.cost}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                </Form.Group>
                 
                                </Form.Row>
                                    <Form.Row>
                                            <Form.Group as={Col} md="12">
                                                <Form.Group as={Row} style={{width:'50%',marginBottom:'0rem'}} controlId="formHorizontalpolo_shirts">           
                                                <Form.Label column sm={2}>Monday:</Form.Label>
                                                            <Col sm={10}>
                                                                <div className="custom-controls-stacked radio">
                                                                    <Radio.RadioGroup 
                                                                        name="Monday"
                                                                        required
                                                                        valueSelected={this.state.Monday}
                                                                        inline={true}
                                                                        onChange={this.handleChange}>
                                                                        <Radio.RadioItem  id="mondayS" label="Yes" value="Yes" />
                                                                        <Radio.RadioItem id="monday" label="No" value="No" />
                                                                        

                                                                    </Radio.RadioGroup>
                                                                </div>
                                                            </Col>
                                                        </Form.Group> 
                                            </Form.Group>
                                            <Form.Group as={Col} md="12">
                                                <Form.Group as={Row} style={{width:'50%',marginBottom:'0rem'}} controlId="formHorizontalpolo_shirts">           
                                                   <Form.Label column sm={2}>Tuesday:</Form.Label>
                                                    <Col sm={10}>
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="Tuesday"
                                                                required
                                                                valueSelected={this.state.Tuesday}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="TuesdayY" label="Yes" value="Yes" />
                                                                <Radio.RadioItem id="TuesdayN" label="No" value="No" />
                                                                

                                                            </Radio.RadioGroup>
                                                        </div>
                                                    </Col>
                                                </Form.Group> 
                                            </Form.Group>
                                            <Form.Group as={Col} md="12">
                                                <Form.Group as={Row} style={{width:'50%',marginBottom:'0rem'}} controlId="formHorizontalpolo_shirts">           
                                                   <Form.Label column sm={2}>Wednesday:</Form.Label>
                                                    <Col sm={10}>
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="Wednesday"
                                                                required
                                                                valueSelected={this.state.Wednesday}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="WednesdayY" label="Yes" value="Yes" />
                                                                <Radio.RadioItem id="WednesdayyN" label="No" value="No" />
                                                                

                                                            </Radio.RadioGroup>
                                                        </div>
                                                    </Col>
                                                </Form.Group> 
                                            </Form.Group>
                                            <Form.Group as={Col} md="12">
                                                <Form.Group as={Row} style={{width:'50%',marginBottom:'0rem'}} controlId="formHorizontalpolo_shirts">           
                                                   <Form.Label column sm={2}>Thursday:</Form.Label>
                                                    <Col sm={10}>
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="Thursday"
                                                                required
                                                                valueSelected={this.state.Thursday}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="ThursdayY" label="Yes" value="Yes" />
                                                                <Radio.RadioItem id="ThursdayN" label="No" value="No" />
                                                            </Radio.RadioGroup>
                                                        </div>
                                                    </Col>
                                                </Form.Group> 
                                            </Form.Group>
                                            <Form.Group as={Col} md="12">
                                                <Form.Group as={Row} style={{width:'50%',marginBottom:'0rem'}} controlId="formHorizontalpolo_shirts">           
                                                   <Form.Label column sm={2}>Friday:</Form.Label>
                                                    <Col sm={10}>
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="Friday"
                                                                required
                                                                valueSelected={this.state.Friday}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="fridayY" label="Yes" value="Yes" />
                                                                <Radio.RadioItem id="fridayN" label="No" value="No" />
                                                            </Radio.RadioGroup>
                                                        </div>
                                                    </Col>
                                                </Form.Group> 
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