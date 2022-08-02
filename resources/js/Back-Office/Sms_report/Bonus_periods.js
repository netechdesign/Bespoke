import React from 'react';
import {Link} from "react-router-dom";
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import {Row, Col, Card, Table,Button,Form,Image} from 'react-bootstrap';
import Select from 'react-select';
import Aux from "../../hoc/_Aux";
import Datetime from 'react-datetime';
import axios from 'axios'
import {CheckPermission} from '../../HttpFunctions'; 

const {id,auth_token,roles} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';



export const Company =[{value:'0',label:'All'},{value:'1', label: 'Utilita'},{value:'2', label: 'Sms'}];
const baseurl= window.location.origin;

const current_year = new Date().getFullYear();  
class Bonus_periods extends React.Component {

   
    constructor(props) {
        super(props);
    this.state={searching:false,baseurl:window.location.origin+'/bonus_periods/export',btnhide:'unset',period:'',region_list:[],regions_sort_name:"",team_id:'',role:roles,company:0,year:{'label':current_year,'value':current_year},year_id:current_year,year_list:[],bonus_periods:[]}
    }
    onsearch = (e) => {
        var items  = [];
        const { match, location, history } = this.props
        const {period,team_id,company,year_id} = this.state;
        
        let data={period:period,team_id:team_id,company:company,year_id:year_id};
        document.getElementById("monday_view").innerHTML = '<img style="width:3%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';

      axios.post(baseurl+'/api/bonus_periods/report_view',data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
              
        document.getElementById("monday_view").innerHTML = res.data;

        this.setState({searching:false});
         //   this.setState({monday_view:res});
        }); 
       //
         
    }
    CompanyChange  = (e) =>{
               
        this.setState({company:e.value});
       }
        handleSubmit = (e)=> {

        } 
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        };
    
    componentDidMount() {
        const { match, location, history } = this.props;
        CheckPermission('Report','Report search',history);
        const { id } = this.props.match.params;
        this.setState({id:id});
        this.dropdownList();
        
        let currentyear = new Date().getFullYear();  
        var rows = [];
        for (var i = 0; i < 3; i++) {
            
            rows.push({'label':currentyear,'value':currentyear});
            currentyear = currentyear-1;
        }
        currentyear= [{'label':2020,'value':2020},{'label':2021,'value':2021},{'label':2022,'value':2022}];
        this.setState({year_list:rows});
    }
    dropdownList = (e) =>{
        const id = this.state.id;
          
          document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
          const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
          
            axios.get(
              baseurl+'/api/dropdown_list',{params: { year_id: this.state.year_id },headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
          ).then(res =>{
                          if(res.data.success){
                             this.setState({region_list:res.data.region})
                             this.setState({bonus_periods:res.data.bonus_periods})
                             
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
        this.setState({team_id: e.value,region_val:{'label':e.label,'value':e.value}});
        
        let region = this.state.region_list.filter((vl,index)=> vl.value==e.value);
        if(region){
            this.setState({regions_sort_name:region[0].regions_sort_name});
            }
    }
    periodChange =(e) =>{
        this.setState({period: e.value,period_val:{'label':e.value,'value':e.value}});
    }
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                       
                      <Card>
                            <Card.Header>
                            <Card.Title as="h5">Bonus Periods</Card.Title>
                            <Button className="btn-sm" style={{'float':'right'}}  as={Link} to="/list" ><i  class="feather icon-chevron-left"></i>Back</Button>
                           
                            <ValidationForm  method="get" action={this.state.baseurl} onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                            <input type="hidden" name="role" value={this.state.role} />
                            <Form.Row> 
                            
                            <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="firstName">Year</Form.Label>
                                    <Select onChange={(e) =>{this.setState({year:{'label':e.value,'value':e.value},year_id: e.value,period_val:'',region_val:''},()=>{ this.dropdownList()});}}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="year_id"
                                    required
                                    value={this.state.year}
                                    options={this.state.year_list}
                                    placeholder="Select Year"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <input type="hidden" name="file_id" value="3" />
                                    <Form.Label htmlFor="job_type">Period</Form.Label>
                                    {/*
                                    <TextInput
                                    name="period"
                                    id="period"
                                    placeholder="Period"
                                    required value={this.state.period}
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                    />
                                    */}


                                    <Select onChange={this.periodChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="period"
                                    id="period"
                                    value={this.state.period_val}
                                    options={this.state.bonus_periods}
                                    placeholder="Select Period"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="firstName">Team</Form.Label>
                                    <Select onChange={this.RegionChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="team_id"
                                    value={this.state.region_val}
                                    options={this.state.region_list}
                                    placeholder="Select Team"
                                    /><div id="requestLoder"></div>
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="type">Company</Form.Label>
                                    <Select onChange={this.CompanyChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="company"
                                    options={Company}
                                    placeholder="Select Company"
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
                            <div id="monday_view" style={{'textAlign': 'center'}}></div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Bonus_periods;

