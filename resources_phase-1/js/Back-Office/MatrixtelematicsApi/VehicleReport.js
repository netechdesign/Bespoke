import React from 'react';
import {Link} from "react-router-dom";
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import {Row, Col, Card, Table,Button,Form,Image} from 'react-bootstrap';
import Select from 'react-select';
import Aux from "../../hoc/_Aux";
import Datetime from 'react-datetime';
import axios from "axios";


class Listdata extends React.Component{
    constructor(props){
        super(props);
      
    }

    startlocation = (data)=>{
       let address = data.StartStreet;
       if(data.StartTown){
        address += ', '+data.StartTown;
       }
       
       if(data.StartCity2){
        address += ', '+data.StartCity2;
       }
       if(data.StartPostcode){
        address += ', '+data.StartPostcode;
       }
       if(data.StartCountry){
        address += ', '+data.StartCountry;
       }
       return address;
    }
    
    endlocation = (data)=>{
        let address = data.EndStreet;
        if(data.EndTown){
         address += ', '+data.EndTown;
        }
        
        if(data.EndCity2){
         address += ', '+data.EndCity2;
        }
        if(data.EndPostcode){
         address += ', '+data.EndPostcode;
        }
        if(data.EndCountry){
         address += ', '+data.EndCountry;
        }
        return address;
     }
     setDate = (data) =>{
        var res = data.split("T");
        var gdate= res[0];
            gdate = new Date(gdate);
            gdate = gdate.getDate()  + "-" + (gdate.getMonth()+1) + "-" + gdate.getFullYear();
        return gdate+' '+res[1]; 
     }
     setDistance =(data) =>{
        return  parseFloat(data).toFixed(2);
     }
    render(){
        return(<>
                 {
                     this.props.list.map((vl,idx)=>{
                        
                        return <tr><td>{this.startlocation(vl)}</td>
                                   <td>{this.setDate(vl.StartDate)}</td>
                                   <td>{this.endlocation(vl)}</td>
                                   <td>{this.setDate(vl.EndDate)}</td>
                                   <td>{this.setDistance(vl.Distance)}</td>
                                   <td>{vl.MaxSpeed}</td>
                                   <td>{vl.RoadSpeedAtMaxSpeed}</td>
                                   
                                   
                               </tr>
                     })
                 }
              </>);
    }
}
class ServiceDetail extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {servicesdetails:[],starttime:'20201108010100',endtime:'20201110235900'};
    }

    componentDidMount(){
        const {access_token} = localStorage.getItem('vehicleApi')? JSON.parse(localStorage.getItem('vehicleApi')) : 'Null';
       
        
            let serviceID =  this.props.serviceid;
            const starttime = this.props.start_date;
            const endtime = this.props.end_date;
            
             axios.get('https://restapi.matrixtelematics.com/apioauth/v4/journey?serviceID='+serviceID+'&from='+starttime+'&to='+endtime+'&showTowJourney=False&msgType=0',
                     {
                         headers:{'Content-Type': 'application/json',
                         'Accept': 'application/json',
                         'Authorization':'Bearer '+access_token
                        }
                     }
                     ).then(res => {
                        if(res.data){
                         
    
                          this.setState({ servicesdetails: [...this.state.servicesdetails, res.data]})
                        }
                     });
                     document.getElementById("monday_view").innerHTML = ''; 
    }

    render(){
        return(<div><Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                  <thead><tr><th>Start Location</th><th>Start Date</th><th>End Location</th><th>End Date</th><th>Distance</th><th>Max Speed</th><th>Road Speed At MaxSpeed</th></tr></thead><tbody>
                 {
                     this.state.servicesdetails.map((vl,idx)=>{
                       return  <Listdata list={vl} />
                     })
                 }
              </tbody></Table></div>);
    }

  }

class ServiceData extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return (<Aux>
                  {this.props.services.map((item,indx) =>{
                      return <Row>
                                 <Col>
                                     <Card>
                                         <Card.Header>
                                            <Card.Title as="h6">
                                                <b>Service ID :</b> {item.serviceID}
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <b>Registration :</b> {item.vehicleRegistration}
                                            </Card.Title>
                                        </Card.Header>
                                         <Card.Body>
                                         <ServiceDetail start_date={this.props.start_date} end_date={this.props.end_date} serviceid={item.serviceID} />
                                         </Card.Body>
                                      </Card>
                                 </Col>
                              </Row>
                            }) }
                </Aux>); 
    }
}
const baseurl= window.location.origin;
class VehicleReport extends React.Component{
 
    constructor(props){
        super(props);
        this.state = {servicesdata:[],start_date:'20201108010100',end_date:'20201110235900'};
    }
    getToken = () =>{
            axios.post('https://restapi.matrixtelematics.com/OAuth/token',
        {"client_id": 0,"grant_type": 'password',"username": 'sandeep@itsupportpeople.co.uk', "password": 'aerk!3w92GZ79cR'},
        { headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
            
            
        }).then(res =>{
                 if(res.data.access_token){
                        
                        localStorage.setItem('vehicleApi',JSON.stringify(res.data));
                       // this.getservicesList();
                 }
           
        })
    
    }
    getservicesList =(e, formData, inputs) => {
        e.preventDefault();
        const {access_token} = localStorage.getItem('vehicleApi')? JSON.parse(localStorage.getItem('vehicleApi')) : 'Null';
        this.setState({ servicesdata: []})
        document.getElementById("monday_view").innerHTML = '<img style="width:3%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
       axios.get('https://restapi.matrixtelematics.com/apioauth/v4/servicestatuslite?groupID=37747',
                 {
                     headers:{'Content-Type': 'application/json',
                     'Accept': 'application/json',
                     'Authorization':'Bearer '+access_token
                    }
                 }
                 ).then(res => {
                    if(res.data){
                        this.setState({ servicesdata: [res.data]})
                            }
                 })   
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
        
        var today = yyyy+""+mm+dd+'010100'; 
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
        var today = yyyy+""+mm+dd+'235900'; 

       this.setState({end_date:today});
    };

    componentDidMount(){
        const { match, location, history } = this.props;
      //  CheckPermission('user','add',history);
       this.getToken();
       
    }
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                       
                      <Card>
                            <Card.Header>
                            <Card.Title as="h5">Report</Card.Title>
                            <Button className="btn-sm" style={{'float':'right'}}  as={Link} to="/list" ><i  class="feather icon-chevron-left"></i>Back</Button>
                           
                            <ValidationForm  method="get" action={this.state.baseurl} onSubmit={this.getservicesList} onErrorSubmit={this.handleErrorSubmit}>
                            <Form.Row> 
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="start_date">Start Date</Form.Label>
                                    <Datetime closeOnSelect={true} onChange={this.startDateChange}  dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()} errorMessage={{required:"start_date is required"}}  inputProps={{required:'required',name:"start_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="end_date">End Date</Form.Label>
                                    <Datetime  closeOnSelect={true} dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()}  errorMessage={{required:"end_date is required"}} onChange={this.endDateChange} inputProps={{required:'required',name:"end_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                </Form.Group>
                                <Form.Group as={Col} md="8">
                                    
                                    <Button  type="submit" className="primary" style={{'marginTop': '27px','display':this.state.btnhide}}  ><i  className="feather icon-search"></i>Search </Button>
                                    
                                
                                </Form.Group>
                                
                                
                            </Form.Row>
                            </ValidationForm>
                            </Card.Header>
                            <Card.Body>
                            <div id="monday_view" style={{'textAlign': 'center'}}></div>
                            {this.state.servicesdata.map((item,indx) =>{
                                
                                return <ServiceData start_date={this.state.start_date} end_date={this.state.end_date} services={item} />}) }
                              
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default VehicleReport;