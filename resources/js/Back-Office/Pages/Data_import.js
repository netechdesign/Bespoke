import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import {Importfile} from '../../HttpFunctions'; 
import Aux from "../../hoc/_Aux";

import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";

class Data_import extends React.Component {
    state = {
        validated: false,
        validatedTooltip: false,
        supportedCheckbox: false,
        supportedRadio: false,
        supportedSelect: 0,
        supportedFile: 0,
        visible : true,
        formSubmitting: false,
        buttonName:'Import',
        selectedFile: null,
        file_id:'',
        file_name:'',
        file_type:[{id:1,name:'Morrison Data services'},{id:2,name:'Utilita'},{id:3,name:'Vehical Mileage'}],
        progress:0
    };

    
    handleChange = (e) => {
        this.setState({progress:0});
        this.state.file_type.filter((val,index)=>{
            if(val.id==e.target.value){
               this.setState({file_name:val.name});
            }
        });
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    onChangeHandler=event=>{
        var file = event.target.files[0];
       
        
        if(this.validateSize(event)){ 
       
      // if return true allow to setState
         this.setState({
          selectedFile: file
          });
          this.setState({progress:0});
        }
      }
      
      validateSize=(event)=>{
      let file = event.target.files[0];
      let size = 3000000;
      let err = '';
      console.log(file.size);
      if (file.size > size) {
          
       err = file.type+'is too large, please pick a smaller file\n';
       alert(err);
     //  toast.error(err);
     }
     return true
    };
    
    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        const baseurl= window.location.origin;
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />sending</span>});
        const data = new FormData()
        data.append('file', this.state.selectedFile);
        data.append('file_id', this.state.file_id);
        data.append('file_name', this.state.file_name);
        
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        axios.post(
            baseurl+'/api/mds',
            data,
            {
                headers:{'Authorization':'Bearer '+auth_token}
            } 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Import'});
                             this.setState({selectedFile:null});
                            $('#avatar').val('');
                            /*console.clear(); */
                            //this.setState({progress:100});
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
                          }else{
                            $('#avatar').val('');
                            PNotify.error({
                                title: "System Error",
                                text:res.data.message,
                            });
                            this.setState({formSubmitting:false});
                            this.setState({buttonName:'Import'});
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
                    this.setState({buttonName:'Import'});
                    this.setState({selectedFile:null});
                          console.log(err);
                      }
          )
       
       // successDesktopPNotify();
      //  this.props.history.push('/role');

        this.setState({ showModal: true });
    };

    render() {
        const { validated, validatedTooltip } = this.state;
       
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">ADD</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                    <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="custom">Select File Type</Form.Label>
                                            <div className="custom-controls-stacked radio">
                                                <Radio.RadioGroup
                                                    name="file_id"
                                                    required
                                                    valueSelected={this.state.file_id}
                                                    inline={false}
                                                    onChange={this.handleChange}>
                                                    <Radio.RadioItem id="radio4" label="Morrison Data services" value="1" />
                                                    <Radio.RadioItem id="radio5" label="Utilita" value="2" />
                                                    <Radio.RadioItem id="radio6" label="Vehical Mileage" value="3" />
                                                </Radio.RadioGroup>
                                            </div>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="upload_avatar">Upload File</Form.Label>
                                            <div className="custom-file">
                                                <FileInput
                                                    name="avatar"
                                                    id="avatar"
                                                    required
                                                    fileType={["csv","CSV","xls","xlsx"]}
                                                   // maxFileSize="10000 kb"
                                                    errorMessage={
                                                        { required: "Please upload a file",
                                                            fileType:"Only .xls and csv file is allowed",
                                                           // maxFileSize: "Max file size is 10000 kb"
                                                        }
                                                    }
                                                    onChange={this.onChangeHandler}
                                                    />
                                            </div>
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

export default Data_import;
