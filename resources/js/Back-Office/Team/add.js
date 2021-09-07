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
        text: "Team added successfully",
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
        regions_id:'',
        region_list:[],
        regions_sort_name:'',
        chkCustom:false,
        
        visible : true,
        formSubmitting: false,
        buttonName:'Save',
        };
    
    
        ManagerList = (e) =>{
            const id = this.state.id;
              
              document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
              const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
              
                axios.get(
                  baseurl+'/api/manager_list',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
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
           // CheckPermission('user','add',history);
           this.ManagerList();
        }

        handleSubmit = (e, formData, inputs) => {
            e.preventDefault();
            this.setState({formSubmitting:true});
            this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
            const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
           
            //const data = new FormData()
            //data.append('name', this.state.name);
           
            axios.post(
                baseurl+'/api/team',this.state,
                {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
            ).then(res =>{
                              if(res.data.success){
                                 // console.log(res.data.data);
                                 this.setState({formSubmitting:false});
                                 this.setState({buttonName:'Save'});
                                 this.setState({engineer_name:''});
                                 
                                 $('input[type="checkbox"]').prop('checked',false);
                                 successDesktopPNotify();
                                 
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
            this.setState({regions_id: e.value});
            
            let region = this.state.region_list.filter((vl,index)=> vl.value==e.value);
            if(region){
                this.CheckSortname(e.value,region[0].sort_name);
            }
        }
         CheckSortname = (regions_id,regions_sort_name) =>{
            const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
            axios.post(
                baseurl+'/api/team/check_sort_name',{regions_id:regions_id,regions_sort_name:regions_sort_name},
                {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
            ).then(res =>{
                
                this.setState({regions_sort_name: res.data.regions_sort_name});
            }).catch(err =>{
                PNotify.error({
                    title: "System Error",
                    text:err,
                });
                this.setState({formSubmitting:false});
                this.setState({buttonName:'Add'});
                this.setState({selectedFile:null});
                      
                  })
        }
        
    render(){
        const { match, location, history } = this.props
          return(<Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Add Team</Card.Title>
                                      <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                                </Card.Header>
                                <Card.Body>
                                <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                    <Form.Group as={Col} md="4">
                                    <Form.Label htmlFor="firstName">Manager</Form.Label>
                            <Select onChange={this.ManagerChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="engineer_id"
                                    options={this.state.manager_list}
                                    placeholder="Select Manager"
                                />
                                        </Form.Group>
                                                  
                            <Form.Group as={Col} md="4">
                            <Form.Label htmlFor="firstName">Region</Form.Label>
                            <Select onChange={this.RegionChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="regions_id"
                                    options={this.state.region_list}
                                    placeholder="Select Region"
                                />
                            <Form.Label style={{color:'green'}} htmlFor="firstName">{(this.state.regions_sort_name?'Team id is '+this.state.regions_sort_name:'')}</Form.Label>
                                
                                </Form.Group>
                            
                            
                                            
                            
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