import React from 'react';
import {Link} from "react-router-dom";
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import {Row, Col, Card, Table,Button,Form,Image} from 'react-bootstrap';
import Select from 'react-select';
import Aux from "../../hoc/_Aux";
import Datetime from 'react-datetime';
import axios from 'axios'
import {CheckPermission} from '../../HttpFunctions'; 

const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';




const baseurl= window.location.origin;
export const Work_Type = [{ value: 'all', label: 'All'},{ value: 'domestic', label: 'Domestic'},{ value: 'non_domestic', label:'Non Domestic'}];
export const Work_Completed =[{value:'all',label:'All'},{value:'in_hours', label: 'In Hours'},{value:'out_of_hours', label: 'Out of Hours'}];


class Performance extends React.Component {

   
    constructor(props) {
        super(props);
        this.state={id:'',job_type_list:[],job_type:'',work_type:'',work_completed:'',start_date:'',end_date:'',searching:false,baseurl:window.location.origin+'/sms/export',btnhide:'unset'}
    }
    onsearch = (e) => {
        var items  = [];
        const { match, location, history } = this.props
        const {id,start_date,end_date,report_type,job_type,work_completed,work_type} = this.state;
        
        let data={id:id,start_date:start_date,end_date:end_date,report_type:report_type,job_type:job_type,work_completed:work_completed,work_type:work_type};
        document.getElementById("loaders").innerHTML = '<img style="width:3%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';

      axios.post(baseurl+'/api/sms_report/performance_view',data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
        $('#monday_view').css({"height":"500px"});
   
        document.getElementById("monday_view").innerHTML = res.data;

        document.getElementById("loaders").innerHTML = '';
        $("#view_report th").css("color","black");
        $("#view_report th").css("background","lightgray");
        


        this.setState({searching:false});
         //   this.setState({monday_view:res});
        }); 
       //
         
    }

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
    
           this.setState({start_date:today});
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
    
           this.setState({end_date:today});
        };
        handleSubmit = (e)=> {

        } 
        handleChange = (e) =>{
            this.setState({work_type:e});
            
            }
            work_completedChange = (e) =>{
                this.setState({work_completed:e});
                
                }    
    job_type_list = () => {
        axios.get(
            baseurl+'/api/joblookup/dropdown_list',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                        if(res.data.success){
                            this.setState({job_type_list:res.data.job_lookups})
                           
                          }else{
                           
                        }
                   }
        )
        .catch(err =>{
                        console.log(err);
                    }
        );
                }
    componentDidMount() {
        const { match, location, history } = this.props;
        CheckPermission('Report','Report search',history);
        const { id } = this.props.match.params;
        this.setState({id:id});
        this.job_type_list();
        
        
    }
    RegionChange = (e) =>{
        this.setState({job_type: e.value});
        
        
    }
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                       
                      <Card>
                            <Card.Header>
                            <Card.Title as="h5">Performance Report</Card.Title>
                            <Button className="btn-sm" style={{'float':'right'}}  as={Link} to="/list" ><i  class="feather icon-chevron-left"></i>Back</Button>
                           
                            <ValidationForm  method="get" action={this.state.baseurl} onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                            <Form.Row> 

                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="start_date">Start Date</Form.Label>
                                    <Datetime closeOnSelect={true} onChange={this.startDateChange}  dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()} errorMessage={{required:"start_date is required"}}  inputProps={{required:'required',name:"start_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="end_date">End Date</Form.Label>
                                    <Datetime  closeOnSelect={true} dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()}  errorMessage={{required:"end_date is required"}} onChange={this.endDateChange} inputProps={{required:'required',name:"end_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                </Form.Group>
                                
                                        <Form.Group as={Col} md="2">
                                            <Form.Label htmlFor="type">Work Completed</Form.Label>
                                    <Select onChange={this.work_completedChange}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            name="work_completed"
                                            options={Work_Completed}
                                            placeholder="Select type"
                                        />
                                        </Form.Group>
                                        <Form.Group as={Col} md="2">
                                        <Form.Label htmlFor="firstName">Job Type</Form.Label>
                                        <Select onChange={this.RegionChange}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        name="job_type"
                                        options={this.state.job_type_list}
                                        placeholder="Select Job Type"
                                        />
                                        </Form.Group>
                                        <Form.Group as={Col} md="2">
                                            <Form.Label htmlFor="type">Work Type</Form.Label>
                                    <Select onChange={this.handleChange}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            name="work_type"
                                            options={Work_Type}
                                            placeholder="Select type"
                                        />
                                        </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="8">
                                    
                                    <Button className="primary" style={{'marginTop': '27px','display':this.state.btnhide}} onClick={this.onsearch} ><i  className="feather icon-search"></i>Search </Button>
                                    

                                    <Button type="submit" style={{'marginTop': '27px','display':this.state.btnhide}} className="primary" ><i  className="feather icon-download"></i>Download csv</Button>
                                
                                </Form.Group>
                                
                                
                            </Form.Row>
                            </ValidationForm>
                            </Card.Header>
                            <Card.Body>
                            <div id="loaders" style={{'textAlign': 'center'}}></div>
                            <div id="monday_view" style={{'textAlign': 'center','overflowY':'scroll'}}></div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Performance;

