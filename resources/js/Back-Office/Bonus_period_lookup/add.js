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
import Datetime from 'react-datetime';
function successDesktopPNotify(status=0) {
    
    if(status==0){
    PNotify.success({
        title: 'Success',
        text: "Bonus period added successfully",
        modules: {
            Desktop: {
                desktop: true
            }
        }
    });
    }else
    {
        PNotify.success({
            title: 'Success',
            text: "Bonus period updated successfully",
            modules: {
                Desktop: {
                    desktop: true
                }
            }
        });    
    }
}
const baseurl= window.location.origin;
const moment= require('moment') 

class Add extends React.Component{

    state = {
        _method: '',
        id:'',
        chkCustom:false,
        visible : true,
        formSubmitting: false,
        buttonName:'Save',
        week_date:[],
        month:'',
        year:''
        };
    
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
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
            let url=baseurl+'/api/bonus_periods';
            if(this.state._method=='PUT'){
                url=baseurl+'/api/bonus_periods/1';
            }
            axios.post(
                url,this.state,
                {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
            ).then(res =>{
                              if(res.data.success){
                                 // console.log(res.data.data);
                                 this.setState({formSubmitting:false});

                                 
                                 if(this.state._method!='PUT'){
                                 this.setState({buttonName:'Save',week_date:[],month:'',year:''});
                                 successDesktopPNotify();
                                 }else{
                                    this.setState({buttonName:'Save'});
                                    successDesktopPNotify(1); 
                                }
        
                                 
                                // this.props.history.push('/job_lookup'); 
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
        periodChange = (element) => { 
            this.state.week_date[element.target.id].period = element.target.value;
            
            this.setState({week_date:this.state.week_date});
         }
        getMondayDate = (e) => {
            let week_date=[];
            var today = new Date(e);
            var yyyy = today.getFullYear();
            var mm = today.getMonth() + 1; 
            this.setState({year:yyyy,month:mm});
            document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
            const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
           
            const data = new FormData()
            data.append('year', yyyy);
            data.append('month', mm);
            
            axios.get(
                baseurl+'/api/bonus_periods/1/edit',
                { params: {year:yyyy,month:mm},
                  headers:{'Authorization':'Bearer '+auth_token}
                } 
            ).then(res =>{
                document.getElementById("requestLoder").innerHTML = '';
                            if(res.data.data.length!=0){
                                               
                                this.setState({week_date:res.data.data});                  
                                this.setState({buttonName:'Edit',_method: 'PUT'});
                            }else{
                                this.setState({buttonName:'Save',_method: ''});
                                let month_name = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                let currunt_month = month_name[today.getMonth()];
                                
                                if (mm < 10) { 
                                    mm = '0' + mm; 
                                } 
                                var monday = moment().startOf('month').month(currunt_month).year(yyyy)
                                .day("Monday");
                            if (monday.date() > 7) monday.add(7,'d');
                            var month = monday.month();
                            
                            while(month === monday.month()){
                                let dd = monday.date();
                                if (dd < 10) { 
                                    dd = '0' + dd; 
                                } 
                                let wdate= dd+'/'+mm+'/'+monday.year();
                                var weekdateList =new Object();  
                                weekdateList.WC = wdate;
                                weekdateList.period = '';
                                week_date.push(weekdateList);
                                monday.add(7,'d');
                            };
                            if(week_date){
                                    this.setState({week_date:week_date});
                            }
                            }
                       }
            )
            .catch(err =>{
                            console.log(err);
                        }
            )
         
    }     
    render(){
        const { match, location, history } = this.props
          return(<Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Bonus Period</Card.Title>
                                      <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                                </Card.Header>
                                <Card.Body>
                                <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                        
                                    <Form.Group as={Col} md="4">
                                    <Form.Label htmlFor="end_date">Month</Form.Label>
                                    <Datetime  closeOnSelect={true} dateFormat="M-Y" timeFormat={false}   errorMessage={{required:"end_date is required"}} onChange={this.getMondayDate} inputProps={{required:'required',name:"end_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                    <div id="requestLoder"></div>
                                    </Form.Group>
                                </Form.Row>
                                {
                                    (this.state.week_date.length>0?<Weekdate handleChange={(e)=>this.periodChange(e)} data={this.state.week_date}  />:'')
                                }
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
class Weekdate extends React.Component{
render(){
        const rowsdata = (this.props.data.length>0?this.props.data.map((vl,inx)=>{
            return(<Form.Row key={inx}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={6}>
                    {vl.WC}
                </Form.Label>
                <Col sm={6}>
                    <TextInput
                        
                        name="period"
                        id={inx}
                        placeholder="Period"
                        required value={vl.period}
                        onChange={(e) => this.props.handleChange(e)}
                        autoComplete="off"
                    />
                </Col>
            </Form.Group>
</Form.Row>)}):'');
        return(<Aux>
            {rowsdata}
        </Aux>);
    }
}
export default Add;