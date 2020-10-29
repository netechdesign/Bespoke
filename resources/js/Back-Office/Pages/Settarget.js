import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown,Table} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import Aux from "../../hoc/_Aux";
class Settarget extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    } 
    handleErrorSubmit= ()=>{

    }
    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
         }

         
    render(){
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
                                                <Radio.RadioItem id="radio6" label="Vehicle Mileage" value="3" />
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

                  
                </Col>
                
            </Row>
           </Aux>
    
        );
    }
} 

export default Settarget;