import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown,Table} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import {Importfile} from '../../HttpFunctions'; 
import Aux from "../../hoc/_Aux";
import Datetime from 'react-datetime';
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import { extend } from 'jquery';
import Select from 'react-select';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {CheckPermission} from '../../HttpFunctions'; 
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';

const baseurl= window.location.origin;
function handleChange_search(){
    setTimeout(function(){ oTable.draw(); }, 500);

  }
 


class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            _method: 'PUT',
            id:'',
            manager_list:[],
            team_id:'',
            regions_sort_name:'',
            region_list:[],
            parent_engineer_id:'',
            parent_engineer:'',
            team_id:'',
            from_date:'',
            to_date:'',
            selected_team:{},
            selected_engineer:{},
            validated: false,
            validatedTooltip: false,
            visible : true,
            formSubmitting: false,
            buttonName:'Edit',
        }}
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
        dropdownList = (e) =>{
            
              
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
          RegionChange = (e) =>{
            this.setState({team_id: e.value});
            
            let region = this.state.region_list.filter((vl,index)=> vl.value==e.value);
            if(region){
                this.setState({selected_team:{ label:region[0].engineer_name,value:region[0].engineer_id }});
                this.setState({parent_engineer_id:region[0].engineer_id});
                this.setState({parent_engineer:region[0].engineer_name});
                this.setState({team_id:region[0].id});
                this.setState({regions_sort_name:region[0].regions_sort_name});
                
                }
        } 
    componentDidMount() {
        var items  = [];
        this.dropdownList();
      axios.get(baseurl+'/api/areamanager',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
            
            this.setState({Engineers:res.data}); 
            this.update();
            }); 
            
              
    }
    update =() =>{
        const { match, location, history } = this.props;
        const id = match.params.id;
        document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
    const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
   
    const data = new FormData()
    data.append('name', this.state.name);
    data.append('permission', this.state.permission);
    
    axios.get(
        baseurl+'/api/smsteam/'+id+'/edit',
        {headers:{'Authorization':'Bearer '+auth_token}} 
    ).then(res =>{
                    if(res.data.success){
                                                this.setState({
                                                id:res.data.data.id,
                                                regions_sort_name:res.data.data.regions_sort_name,
                                                parent_engineer_id:res.data.data.parent_engineer_id,
                                                parent_engineer:res.data.data.parent_engineer,
                                                selected_team:{ label: res.data.data.parent_engineer, value: res.data.data.parent_engineer_id },
                                                selected_engineer:{label:res.data.data.child_engineer_name,value:res.data.data.child_engineer_id},
                                                team_id:res.data.data.team_id,
                                                from_date:res.data.data.from_date,
                                                to_date:res.data.data.to_date
                                                });
                                                console.log(this.state.selected_team)
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
    
    Engineerchange = (e) =>{
        this.setState({Engineer: e.value});
        
        let Engineers = this.state.Engineers.filter((vl,index)=> vl.value==e.value);
        if(Engineers){
            this.setState({selected_engineer:{ label:Engineers[0].label,value:Engineers[0].value }});
            
            
            }
    }
    handleSubmit = (e, formData, inputs) => {
        
        e.preventDefault();
        const { match, location, history } = this.props;
        const Permission = CheckPermission('areamanager','add',history,false);
      if(Permission==1){
        return false;
      }
        const baseurl= window.location.origin;
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />sending</span>});
        
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        axios.post(
            baseurl+'/api/smsteam/'+this.state.id,this.state,
            {
                headers:{'Authorization':'Bearer '+auth_token}
            } 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Add'});
                             this.setState({selectedFile:null});
                            
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
                            const {history } = this.props;
                             history.push('/sms-groups');
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
    
    render() {
        const { match, location, history } = this.props
        return (
        
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Edit Sms Team Groups</Card.Title>
                            <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                        </Card.Header>
                        <Card.Body>
                            
                        <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="firstName">Team</Form.Label>
                            <Select onChange={this.RegionChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="regions_sort_name"
                                    value={this.state.selected_team}
                                    options={this.state.region_list}
                                    placeholder="Select Team"
                                />
                            <Form.Label style={{color:'green'}} htmlFor="firstName">{(this.state.regions_sort_name?'Team id is '+this.state.regions_sort_name:'')}</Form.Label>
                            <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                                        </Form.Group>
                                        
                                        <Form.Group as={Col} md="2">
                                            <Form.Label htmlFor="engineers">Engineer</Form.Label>
                                                <Select required
                                                    // defaultValue={[Engineers[2], Engineers[3]]}
                                                    onChange={this.Engineerchange}
                                                    name="engineers"
                                                    value={this.state.selected_engineer}
                                                    options={this.state.Engineers}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                    placeholder="Select Engineer"
                                                    isSearchable
                                        />
                                        </Form.Group>
                                        <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="start_date">From</Form.Label>
                                    <Datetime closeOnSelect={true} onChange={this.startDateChange}  dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()} errorMessage={{required:"start_date is required"}} value={this.state.from_date}  inputProps={{required:'required',name:"start_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="end_date">To</Form.Label>
                                    <Datetime  closeOnSelect={true} dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()} value={this.state.to_date} errorMessage={{required:"end_date is required"}} onChange={this.endDateChange} inputProps={{required:'required',name:"end_date",placeholder: 'Select Date',autoComplete:'off'}} />
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

export default Edit;