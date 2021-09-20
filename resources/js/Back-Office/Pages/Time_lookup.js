import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown,Table} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import {CheckPermission} from '../../HttpFunctions'; 
import Aux from "../../hoc/_Aux";

import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import { extend } from 'jquery';
import Select from 'react-select';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AnimatedModal from "../../App/components/AnimatedModal";
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;



$.DataTable = require( 'datatables.net-bs' );
require( 'jszip' );
//require('pdfmake/build/pdfmake.js');
//require('pdfmake/build/vfs_fonts.js');
require( 'datatables.net-autofill' );
require( 'datatables.net-buttons-bs' );
require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.flash.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' );
require( 'datatables.net-buttons/js/buttons.print.js' );
require( 'datatables.net-colreorder' );
require( 'datatables.net-keytable' );
require( 'datatables.net-responsive-bs' );
require( 'datatables.net-rowgroup' );
require( 'datatables.net-rowreorder' );
require( 'datatables.net-scroller' );
require( 'datatables.net-select' );
require( 'datatables.net-fixedcolumns' );
require( 'datatables.net-fixedheader' );


const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
const baseurl= window.location.origin;

var oTable="";

function atable() {
  
    
    let tableResponsive = '#data-table-responsive';

oTable = $(tableResponsive).DataTable({
    "bStateSave": true,
    "processing": true,
    "bPaginate": true,
    "serverSide": true,
    "bProcessing": true,
    "iDisplayLength": 10,
    "bServerSide": true,
    "sAjaxSource": window.location.origin+'/api/time_lookup',
    'bPaginate': true,
    "fnServerParams": function (aoData) {

        var acolumns = this.fnSettings().aoColumns,
            columns = [];

        $.each(acolumns, function (i, item) {
            columns.push(item.data);
        })
        aoData.push({name: 'columns', value: columns});

          /*  if($('#status').val()!='') {
                aoData.push({name: 'is_active', value: $('#status').val()});
            }
          */  
        },

    "columns": [  
        {"data":"day"},
        {"data":"in_hours_start"},
        {"data":"in_hours_end"},
        {"data":"out_of_hours_start"},
        {"data":"out_of_hours_end"},
        {"data": "id"}
    ],
    responsive: {
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.childRowImmediate,
                type: ''
            }
        }
    },
    "order": [[0, "desc"]],
    "lengthMenu": [
        [10, 25, 50, 100],
        [10, 25, 50, 100]
    ],
    "oLanguage": {
        "sLengthMenu": "_MENU_",
        "oPaginate": {
            "sNext": '<span aria-hidden="true">»</span>',
            "sPrevious": '<span aria-hidden="true">«</span>'
        },
       // sProcessing: "<img width='33px' src='"+BASE_URL+"assets/layouts/layout/img/ajax-loading.gif'>"

    },
    "fnInitComplete": function () {
//oTable.fnAdjustColumnSizing();
    },
    'fnServerData': function (sSource, aoData, fnCallback) {

        $.ajax
        ({
            'dataType': 'json',
            'type': 'GET',
            'url': sSource,
            'data': aoData,
            "iDisplayLength": 10,
            "bPaginate": true,
            'headers': { Authorization: `Bearer `+auth_token },
            'success': fnCallback
        });
    },
    "fnDrawCallback": function () {
        $('body').css('min-height', ($('#data-table-responsive tr').length * 50) + 200);
        $(window).trigger('resize');
      
    },
    "columnDefs": [
        {
            "render": function (data, type, row) {
              
                var str_buttons = '<button type="button" data-id="'+row.id+'" class="edit btn btn-info btn-sm" ><i style="margin:0px !important;" class="feather icon-edit"></i></button>';
                return [
                    str_buttons,
                ].join('');
               
            },
            "targets": $('#data-table-responsive th#action').index(),
            "orderable": false,
            "searchable": false
        }, 
        {
            "targets": 0,
            "orderable": false
        }
    ]
});
   
}

function handleChange_search(){
    setTimeout(function(){ oTable.draw(); }, 500);

  }
 


class Time_lookup extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            _method: 'PUT',
            showModal: false,
            id:"",
            day:"",
            in_hours_start:"",
            in_hours_end:'',
            out_of_hours_start:'',
            out_of_hours_end:'',
            validated: false,
            validatedTooltip: false,
            visible : true,
            formSubmitting: false,
            buttonName:'Edit',
        }}
           
    componentDidMount() {
        var items  = [];
        const { match, location, history } = this.props;
        CheckPermission('File','Data Import',history);
            atable(11);    
            let self =this;
            $('#data-table-responsive tbody').on('click', '.edit', function () {
                var id =  $(this).attr('data-id');
                const { match, location, history } = self.props;
                document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
            const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
           
            axios.get(
                baseurl+'/api/time_lookup/'+id+'/edit',
                {headers:{'Authorization':'Bearer '+auth_token}} 
            ).then(res =>{
                            if(res.data.success){
                                self.setState({
                                                                id:res.data.data.id,
                                                                day:res.data.data.day,
                                                                in_hours_start:res.data.data.in_hours_start,
                                                                in_hours_end:res.data.data.in_hours_end,
                                                                out_of_hours_start:res.data.data.out_of_hours_start,
                                                                out_of_hours_end:res.data.data.out_of_hours_end
                                                            });
                                                    self.setState({showModal: true});
                                                    document.getElementById("requestLoder").innerHTML = '';                         
                              
                            }else{
                               
                            }
                       }
            )
            .catch(err =>{
                            console.log(err);
                        }
            )
                
                
            })
            $('#data-table-responsive tbody').on('click', '.deletefile', function () {
                var id =  $(this).attr('data-id');
                const MySwal = withReactContent(Swal);
                MySwal.fire({
                    title: 'Are you sure?',
                    text: 'Once deleted, you will not be able to recover this data!',
                    type: 'warning',
                    showCloseButton: true,
                    showCancelButton: true
                }).then((willDelete) => {
    
                    if (willDelete.value) {
                        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
                        const baseurl= window.location.origin;
                        axios.post(
                            baseurl+'/api/engineer/'+id,{_method: 'delete'},
                            {
                                headers:{'Authorization':'Bearer '+auth_token}
                            } 
                        ).then(res =>{
                                          if(res.data.success){
                        oTable.draw();
                        return MySwal.fire('', 'Engineer has been deleted!', 'success');
                                          }
                                        })
                    } else {
                       // return MySwal.fire('', 'Your imaginary file is safe!', 'error');
                    }
                });
                
                  
              } );    
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e, formData, inputs) => {
        
        e.preventDefault();
        const baseurl= window.location.origin;
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" /></span>});
        const data = new FormData()
        
        
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        axios.post(
            baseurl+'/api/time_lookup/'+this.state.id,this.state,
            {
                headers:{'Authorization':'Bearer '+auth_token}
            } 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Edit'});
                             this.setState({showModal: false});
                             this.setState({
                                                id:"",
                                            day:"",
                                            in_hours_start:"",
                                            in_hours_end:"",
                                            out_of_hours_start:"",
                                            out_of_hours_end:""
                                           });
                            //this.setState({progress:100});
                            oTable.draw();
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
                            this.setState({buttonName:'Add'});
                            
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
    
    render() { return (
        
        <Aux>
            <Row>
                <Col>
                    <AnimatedModal animation='slideInDown' showModal={this.state.showModal} modalClosed={() => this.setState({ showModal: false })}>
                        <Card>
                        
                        <Card.Body>
                            
                        <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                <Form.Row>
                                
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="engineer_name">Day</Form.Label>
                                            <TextInput readOnly
                                                name="day"
                                                id="day"
                                                placeholder="Day"
                                                required value={this.state.day}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="in_hours_start">In Hours Start</Form.Label>
                                            <TextInput
                                                name="in_hours_start"
                                                id="in_hours_start"
                                                placeholder="In Hours Start"
                                                required value={this.state.in_hours_start}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="in_hours_start">In Hours End</Form.Label>
                                            <TextInput
                                                name="in_hours_end"
                                                id="in_hours_end"
                                                placeholder="In Hours Start"
                                                required value={this.state.in_hours_end}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="in_hours_start">Out of Hours Start</Form.Label>
                                            <TextInput
                                                name="out_of_hours_start"
                                                id="out_of_hours_start"
                                                placeholder="Out of Hours Start"
                                                required value={this.state.out_of_hours_start}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="out_of_hours_end">Out of Hours End</Form.Label>
                                            <TextInput
                                                name="out_of_hours_end"
                                                id="out_of_hours_end"
                                                placeholder="Out of Hours Start"
                                                required value={this.state.out_of_hours_end}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
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
                    </AnimatedModal>
                        <Card>
                        <Card.Header>
                            <Card.Title as="h5">Time lookup</Card.Title>
                             
                        </Card.Header>
                        <Card.Body>
                        <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                        <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                    <thead>
                                    <tr>
                                        <th id="day">Day</th>
                                        <th id="in_hours_start">In Hours Start</th>
                                        <th id="in_hours_end">In Hours End</th>
                                        <th id="out_of_hours_start">out of hours start</th>
                                        <th id="out_of_hours_end">out of hours end</th>
                                        <th id="action">Action</th>
                                      </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                        <th id="day">Day</th>
                                        <th id="in_hours_start">In Hours Start</th>
                                        <th id="in_hours_end">In Hours End</th>
                                        <th id="out_of_hours_start">out of hours start</th>
                                        <th id="out_of_hours_end">out of hours end</th>
                                        <th id="action">Action</th>
                                    </tr>
                                    </tfoot>
                                </Table>
                           </Card.Body>
                           </Card>
                        
                        </Col>
                        </Row>
                        </Aux>
                        );
    }
}

export default Time_lookup;