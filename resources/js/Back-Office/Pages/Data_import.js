import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown,Table} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import {Importfile} from '../../HttpFunctions'; 
import Aux from "../../hoc/_Aux";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
        duplicateformSubmitting: true,
        duplicatebuttonName:'Add',
        duplicate_data:[{visible:'none'}],
        progress:0,
        Daily_Performance:false,
        Daily_PerformanceHide:'none'
    };

    Daily_PerformanceChange = (e, value) => {
        this.setState({
            [e.target.name]: value
        })
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
        
        if(e.target.value==2){
            this.setState({Daily_PerformanceHide:''});
        }else{
            this.setState({Daily_PerformanceHide:'none'});
            this.setState({Daily_Performance:false});
            
        }
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
    
    duplicateSubmit= (e, formData, inputs) => {
        e.preventDefault();
        const baseurl= window.location.origin;
        
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: 'Are you sure?',
            text: 'Do You want to add Duplicate Data?',
            type: 'warning',
            showCloseButton: true,
            showCancelButton: true
        }).then((willDelete) => {

            if (willDelete.value) {
                const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
                const baseurl= window.location.origin;
                this.setState({duplicateformSubmitting:true});
                this.setState({duplicatebuttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />sending</span>});
                const data = new FormData()
                var arr = $('.checkMe:checked').map(function(){
                    return this.value;
                }).get();
                data.append('id', arr);
                axios.post(
                    baseurl+'/api/mds/duplicatestore',
                    data,
                    {
                        headers:{'Authorization':'Bearer '+auth_token}
                    } 
                ).then(res =>{
                                  if(res.data.success){
                                    this.setState({duplicateformSubmitting:false});
                                    this.setState({duplicatebuttonName:'Add'});
                                    this.setState({duplicate_data:[{visible:'none'}]});

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
                                  }
                })
                .catch(err =>{
                    PNotify.error({
                        title: "System Error",
                        text:err,
                    });
                    this.setState({duplicateformSubmitting:false});
                    this.setState({duplicatebuttonName:'Add'});
                   
                          console.log(err);
                      });
                
            } else {
                this.setState({duplicate_data:[{visible:'none'}]});
               // return MySwal.fire('', 'Your imaginary file is safe!', 'error');
            }
        });
        
    }
    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        const baseurl= window.location.origin;
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />sending</span>});
    
        const data = new FormData()
        data.append('file', this.state.selectedFile);
       
        data.append('file_name', this.state.file_name);
        
        if(this.state.Daily_Performance){
            data.append('file_id', 4);
           }else{
            data.append('file_id', this.state.file_id);
           }
        
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
                             this.setState({Daily_Performance:false});
                             
                             if(res.data.duplicate_data){
                                    this.setState({duplicate_data:[{visible:'',data:res.data.duplicate_data}]});
                                }
                            
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
    onChangeselectAll = (e) =>{
        
        $('.checkMe').attr('checked',e.target.checked);
        if(e.target.checked){
        this.setState({duplicateformSubmitting:false});
        }else{
            this.setState({duplicateformSubmitting:true});
        }
    }
    
    onChangeselect = (e) => {
        var arr = $('.checkMe:checked').map(function(){
            return this.value;
        }).get();
        if(arr.length){
            this.setState({duplicateformSubmitting:false});
        }else{
            this.setState({duplicateformSubmitting:true});
        }
    }

    
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
                                            <div style={{'display':this.state.Daily_PerformanceHide}}>
                                            <Checkbox style={{'display':this.state.Daily_PerformanceHide}} name="Daily_Performance" label="Daily Performance Report" id="chkBasic" value={this.state.Daily_Performance} onChange={this.Daily_PerformanceChange} />
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

                        <Card style={{ display: this.state.duplicate_data[0].visible }}>
                            <Card.Header>
                            
                                <Card.Title as="h5">Duplicate Data</Card.Title>
                                <span className="d-block m-t-5">{this.state.file_name}</span>
                            </Card.Header>
                            <Card.Body>
                            <ValidationForm onSubmit={this.duplicateSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                <Table striped responsive>
                                    <thead>
                                    <tr>
                                        <th>
                                        <Checkbox name="check-me" label='' onChange={this.onChangeselectAll} id="check-me"  inline  />
                                        </th>
                                        <th>Engineer</th>
                                        <th>Schedule Date</th>
                                        <th>Customer Id</th>
                                        <th>Job Id</th>
                                        <th>Job Type</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.duplicate_data[0].data ?
                                    this.state.duplicate_data[0].data.map((value,index)=>{
                                       const vl= value.data;

                                        return (<tr key={index} >
                                            <th scope="row">
                                            <Checkbox name="checkMe[]" label='' onChange={this.onChangeselect} class="checkMe"  id="check-me" defaultValue={value.id} inline  />
                                            </th>
                                            <td>{vl.engineer}</td>
                                            <td>{vl.schedule_date}</td>
                                            <td>{vl.customer_id}</td>
                                            <td>{vl.job_id}</td>
                                            <td>{vl.job_type}</td>
                                        </tr>);
                                    })
                                    
                                      :<tr><th scope="row">record not found</th></tr>   
                                    }     
                                    </tbody>
                                </Table>
                                <Form.Group as={Col} sm={12} className="mt-3">
                                        <Button disabled={this.state.duplicateformSubmitting}  type="submit"> {this.state.duplicatebuttonName}</Button>

                                        </Form.Group>
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
