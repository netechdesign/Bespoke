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


class Bonus_periods extends React.Component {

   
    constructor(props) {
        super(props);
    this.state={searching:false,baseurl:window.location.origin+'/bonus_periods/export',btnhide:'unset',period:'',region_list:[],regions_sort_name:"",team_id:''}
    }
    onsearch = (e) => {
        var items  = [];
        const { match, location, history } = this.props
        const {period,team_id} = this.state;
        
        let data={period:period,team_id:team_id};
        document.getElementById("monday_view").innerHTML = '<img style="width:3%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';

      axios.post(baseurl+'/api/bonus_periods/report_view',data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
              
        document.getElementById("monday_view").innerHTML = res.data;

        this.setState({searching:false});
         //   this.setState({monday_view:res});
        }); 
       //
         
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
        
        
    }
    dropdownList = (e) =>{
        const id = this.state.id;
          
          document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
          const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
          
            axios.get(
              baseurl+'/api/dropdown_list',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
          ).then(res =>{
                          if(res.data.success){
                             this.setState({region_list:res.data.region})
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
            this.setState({regions_sort_name:region[0].regions_sort_name});
            }
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
                            <Form.Row> 

                                <Form.Group as={Col} md="2">
                                    <input type="hidden" name="file_id" value="3" />
                                    <Form.Label htmlFor="job_type">Period</Form.Label>
                                    <TextInput
                                    name="period"
                                    id="period"
                                    placeholder="Period"
                                    required value={this.state.period}
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                    />

                                </Form.Group>
                                        <Form.Group as={Col} md="2">
                                        <Form.Label htmlFor="firstName">Team</Form.Label>
                                        <Select onChange={this.RegionChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="team_id"
                                    options={this.state.region_list}
                                    placeholder="Select Team"
                                /><div id="requestLoder"></div>
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

