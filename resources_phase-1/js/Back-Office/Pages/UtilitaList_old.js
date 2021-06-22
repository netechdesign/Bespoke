import React from 'react';
import {Link} from "react-router-dom";
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import {Row, Col, Card, Table,Button,Form} from 'react-bootstrap';
import Select from 'react-select';
import Aux from "../../hoc/_Aux";
import Datetime from 'react-datetime';
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

var oTable="";

function atable(sheets_id=null) {
  
    
    let tableResponsive = '#data-table-responsive';

oTable = $(tableResponsive).DataTable({
    "bStateSave": true,
    "processing": true,
    "bPaginate": true,
    "serverSide": true,
    "bProcessing": true,
    "iDisplayLength": 10,
    "bServerSide": true,
    "sAjaxSource": window.location.origin+'/api/utilita/',
    'bPaginate': true,
    "fnServerParams": function (aoData) {

        var acolumns = this.fnSettings().aoColumns,
            columns = [];

        $.each(acolumns, function (i, item) {
            columns.push(item.data);
        })
        aoData.push({name: 'columns', value: columns});

        if($('input[name="file_id"]').val()!='') {
            aoData.push({name: 'file_id', value: $('input[name="file_id"]').val()});
        }
        
        if(sheets_id) {
            aoData.push({name: 'sheets_id', value:sheets_id});
        }

          /*  if($('#status').val()!='') {
                aoData.push({name: 'is_active', value: $('#status').val()});
            }
          */  
        },

    "columns": [  
        {"data":"engineer"},
        {"data":"schedule_date"},
        {"data":"customer_id"},
        {"data":"job_id"},
        {"data":"post_code"},
        {"data":"job_type"},
        {"data":"job_status"},
        {"data":"fault"},
        {"data":"job_booked"},
        {"data":"appointment_time"},
        {"data":"schedule_start_time"},
        {"data":"schedule_end_time"},
        {"data":"on_site_time"},
        {"data":"cancelled_by"},
        {"data":"cancelled_time"},
        {"data":"company_name"},
        {"data":"region"},
        {"data":"week_day"},
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
              
                var str_buttons = '<button type="button" class="btn btn-info btn-sm" ><i style="margin:0px !important;" class="feather icon-edit"></i></button>';
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
 

export const Suppliers = [
    { value: '1', label: 'Morrison Data services'},
    { value: '2', label: 'Utilita'},
  
];

class UtilitaList extends React.Component {

   
    constructor(props) {
        super(props);
        this.state={id:'',start_date:'',end_date:'',baseurl:window.location.origin+'/export'}
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
    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({id:id});
        atable(id);
    }
    
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                       
                      <Card>
                            <Card.Header>
                            <Card.Title as="h5">Utilita</Card.Title>
                            <Button className="btn-sm" style={{'float':'right'}}  as={Link} to="/list" ><i  class="feather icon-chevron-left"></i>Back</Button>
                           
                            <ValidationForm  method="get" action={this.state.baseurl} onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                            <Form.Row> 
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="start_date">Start Date</Form.Label>
                                    <Datetime onChange={this.startDateChange}  dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()} errorMessage={{required:"start_date is required"}}  inputProps={{required:'required',name:"start_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="end_date">End Date</Form.Label>
                                    <Datetime dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()}  errorMessage={{required:"end_date is required"}} onChange={this.endDateChange} inputProps={{required:'required',name:"end_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                </Form.Group>
                                <Form.Group as={Col} md="1" style={{'marginRight': '20px'}} >
                                    <Form.Label htmlFor="Download"> &nbsp;</Form.Label>
                                    <Button type="submit" className="primary" ><i  className="feather icon-download"></i>Download</Button>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="Download"> &nbsp;</Form.Label>
                                    <Button className="primary" style={{'marginTop': '27px'}}  as={Link} to={{ pathname: '/utilitachart',state: { detail: this.state }}} ><i  className="feather icon-eye"></i>View Chart</Button>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="Download"> &nbsp;</Form.Label>
                                    <Button className="primary" style={{'marginTop': '27px'}}  as={Link} to={{ pathname: '/utilitaview',state: { detail: this.state }}} ><i  className="feather icon-eye"></i>View </Button>
                                </Form.Group>
                            </Form.Row>
                            </ValidationForm>
                            </Card.Header>
                            <Card.Body>
                            
                                <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                    <thead>
                                    <tr>
                                        <th id="engineer">Engineer</th>
                                        <th id="schedule_date">schedule Date</th>
                                        <th id="customer_id">Customer id</th>
                                        <th id="job_id">Job Id</th>
                                        <th id="post_code">Post code</th>
                                        <th id="job_type">Job Type</th>
                                        <th id="job_status">Job Status</th>
                                        <th id="fault">Fault</th>
                                        <th id="job_booked">Job Booked</th>
                                        <th id="appointment_time">Appointment Time</th>
                                        <th id="schedule_start_time">Start Time</th>
                                        <th id="schedule_end_time">End Time</th>
                                        <th id="on_site_time">On Site Time</th>
                                        <th id="cancelled_by">Cancelled by</th>
                                        <th id="cancelled_time">Cancelled time</th>
                                        <th id="company_name">Company Name</th>
                                        <th id="region">Region</th>
                                        <th id="week_day">Week Day</th>
                                        <th id="action">Action</th>
                                      </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                       <th id="schedule_date">schedule Date</th>
                                       <th id="engineer">Engineer</th>
                                        <th id="customer_id">Customer id</th>
                                        <th id="job_id">Job Id</th>
                                        <th id="post_code">Post code</th>
                                        <th id="job_type">Job Type</th>
                                        <th id="job_status">Job Status</th>
                                        <th id="fault">Fault</th>
                                        <th id="job_booked">Job Booked</th>
                                        <th id="appointment_time">Appointment Time</th>
                                        <th id="schedule_start_time">Start Time</th>
                                        <th id="schedule_end_time">End Time</th>
                                        <th id="on_site_time">On Site Time</th>
                                        <th id="cancelled_by">Cancelled by</th>
                                        <th id="cancelled_time">Cancelled time</th>
                                        <th id="company_name">Company Name</th>
                                        <th id="region">Region</th>
                                        <th id="week_day">Week Day</th>
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

export default UtilitaList;

