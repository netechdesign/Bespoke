import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown,Table} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import Aux from "../../hoc/_Aux";
import {CheckPermission} from '../../HttpFunctions'; 
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";


function successDesktopPNotify() {
    PNotify.success({
        title: 'Success',
        text: "Target updated successfully",
        modules: {
            Desktop: {
                desktop: true
            }
        }
    }).on('click', function(e) {
        
    });
}

const baseurl= window.location.origin;
class Settarget extends React.Component{

    constructor(props){
        super(props);
        this.state={
                   daily_target:'',
                    Monday:'',
                    Tuesday:'',
                    Wednesday:'',
                    Thursday:'',
                    Friday:'',
                    Saturday:'',
                    Sunday:'',
                   buttonName:'Save',
                   visible : true,
                   formSubmitting: false
        }
    } 
    handleErrorSubmit= ()=>{
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
        
        var str = e.target.value;
        str = str.replace(/\s/g, '-');
        this.setState({
           slug:str
        })
    };

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        
        axios.post(
            baseurl+'/api/target/1',
            {_method: 'PUT',daily_target:this.state.daily_target,Monday:this.state.Monday,Tuesday:this.state.Tuesday,Wednesday:this.state.Wednesday,Thursday:this.state.Thursday,Friday:this.state.Friday,Saturday:this.state.Saturday,Sunday:this.state.Sunday},
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Save'});
                             successDesktopPNotify();
                             const {history } = this.props;
                             
                             
                          }else{
                            if(res.data.errors){
                                res.data.message= res.data.errors.name;
                            }
                            PNotify.error({
                                title: "System Error",
                                text:res.data.errors.name,
                            });
                            this.setState({formSubmitting:false});
                            
                            
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

         componentDidMount(){
            const { match, location, history } = this.props;
           // CheckPermission('target','edit',history);
           const id = 1;
           document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        const data = new FormData()
        data.append('name', this.state.name);
        
        
        axios.get(
            baseurl+'/api/target/'+id+'/edit',
            {headers:{'Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                        if(res.data.success){
                            
                         
                           this.setState({daily_target:res.data.data.daily_target,
                                          Monday:res.data.data.Monday,
                                          Tuesday:res.data.data.Tuesday,
                                          Wednesday:res.data.data.Wednesday,
                                          Thursday:res.data.data.Thursday,
                                          Friday:res.data.data.Friday,
                                          Saturday:res.data.data.Saturday,
                                          Sunday:res.data.data.Sunday})
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

    render(){
        return (
            <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Edit Target</Card.Title>
                        </Card.Header>
                        <Card.Body>
                        <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                        <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                <Form.Row>
                                    { /* <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="target">Target</Form.Label>
                                            <TextInput
                                                name="daily_target"
                                                id="daily_target"
                                                placeholder="Target"
                                                required value={this.state.daily_target}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                    </Form.Group>
                                    */}
                                    <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="target">Monday</Form.Label>
                                            <TextInput
                                                name="Monday"
                                                id="Monday"
                                                placeholder="Monday"
                                                required value={this.state.Monday}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="target">Tuesday</Form.Label>
                                            <TextInput
                                                name="Tuesday"
                                                id="Tuesday"
                                                placeholder="Tuesday"
                                                required value={this.state.Tuesday}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="target">Wednesday</Form.Label>
                                            <TextInput
                                                name="Wednesday"
                                                id="Wednesday"
                                                placeholder="Wednesday"
                                                required value={this.state.Wednesday}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="target">Thursday</Form.Label>
                                            <TextInput
                                                name="Thursday"
                                                id="Thursday"
                                                placeholder="Thursday"
                                                required value={this.state.Thursday}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="target">Friday</Form.Label>
                                            <TextInput
                                                name="Friday"
                                                id="Friday"
                                                placeholder="Friday"
                                                required value={this.state.Friday}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="target">Saturday</Form.Label>
                                            <TextInput
                                                name="Saturday"
                                                id="Saturday"
                                                placeholder="Saturday"
                                                required value={this.state.Saturday}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="target">Sunday</Form.Label>
                                            <TextInput
                                                name="Sunday"
                                                id="Sunday"
                                                placeholder="Sunday"
                                                required value={this.state.Sunday}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
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

export default Settarget;