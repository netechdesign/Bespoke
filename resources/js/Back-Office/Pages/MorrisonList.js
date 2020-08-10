import React from 'react';
import {Link} from "react-router-dom";

import {Row, Col, Card, Table,Button,Form} from 'react-bootstrap';
import Select from 'react-select';
import Aux from "../../hoc/_Aux";

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
    "sAjaxSource": window.location.origin+'/api/mds/',
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
         {"data":"name"},  
         {"data":"date"},            
         {"data":"start_time"},      
         {"data":"end_time"},
         {"data":"time_difference"},
         {"data":"work_master_sign_id"},
         {"data":"area"},
         {"data":"geo_area"},       
         {"data":"report_group"},
         {"data":"field_force"},
         {"data":"leaver_flg"},
         {"data":"week_summary"},
         {"data":"num"},
         {"data":"complete"},
         {"data":"abort"},
         {"data":"no_access_rate"},
         {"data":"smart_book"},
         {"data":"warrant_book"},
         {"data":"traditional_book"},
         {"data":"smart_complete"},
         {"data":"warrant_complete"},
         {"data":"traditional_complete"},
         {"data":"smart_abort"},
         {"data":"warrant_abort"},
         {"data":"traditional_abort"},
         {"data":"smart_no_access"},
         {"data":"warrant_no_access"},
         {"data":"traditional_no_access"},
         {"data":"sf_df"},
         {"data":"job_type"},
         {"data":"sf_df_helper"},
         {"data":"work_type"},
         {"data":"job_id"},
         {"data":"schedule_date"},
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

function handleChange(){
    setTimeout(function(){ oTable.draw(); }, 500);

  }

export const Suppliers = [
    { value: '1', label: 'Morrison Data services'},
    { value: '2', label: 'Utilita'},
  
];

class MorrisonList extends React.Component {

   
    constructor(props) {
        super(props);
        this.state={
          
        }}

    componentDidMount() {
        const { id } = this.props.match.params;
        atable(id);
    }
    
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                       
                      <Card>
                            <Card.Header>
                           {/*}
                            <Form.Row>
                                        <Form.Group as={Col} md="2">
                            <Form.Label htmlFor="firstName">Supplier</Form.Label>
                            <Select onChange={()=>{handleChange()}}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="file_id"
                                    options={Suppliers}
                                    placeholder="Select Supplier"
                                />
                                </Form.Group>
                                </Form.Row>
                           {*/}
                           <Card.Title as="h5">Morrison</Card.Title>
                           <Button className="btn-sm" style={{'float':'right'}}  as={Link} to="/list" ><i  class="feather icon-chevron-left"></i>Back</Button>
                            </Card.Header>
                            <Card.Body>
                            
                                <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                    <thead>
                                    <tr>
                                    <th id="name">Name</th> 
                                    <th id="date">Date</th>            
                                    <th id="start_time">Start Time</th>      
                                    <th id="end_time">End Time</th>
                                    <th id="time_difference">Time Difference</th>
                                    <th id="work_master_sign_id">Work master sign id</th>
                                    <th id="area">Area</th>
                                    <th id="geo_area">Geo area</th>       
                                    <th id="report_group">Report group</th>
                                    <th id="field_force">Field force</th>
                                    <th id="leaver_flg">Leaver flg</th>
                                    <th id="week_summary">Week summary</th>
                                    <th id="num">Num</th>
                                    <th id="complete">Complete</th>
                                    <th id="abort">Abort</th>
                                    <th id="no_access_rate">No access rate</th>
                                    <th id="smart_book">Smart book</th>
                                    <th id="warrant_book">Warrant book</th>
                                    <th id="traditional_book">Traditional book</th>
                                    <th id="smart_complete">Smart complete</th>
                                    <th id="warrant_complete">Warrant complete</th>
                                    <th id="traditional_complete">Traditional complete</th>
                                    <th id="smart_abort">Smart abort</th>
                                    <th id="warrant_abort">Warrant abort</th>
                                    <th id="traditional_abort">Traditional abort</th>
                                    <th id="smart_no_access">Smart no access</th>
                                    <th id="warrant_no_access">Warrant no access</th>
                                    <th id="traditional_no_access">Traditional no access</th>
                                    <th id="sf_df">sf df</th>
                                    <th id="job_type">Job type</th>
                                    <th id="sf_df_helper">sf df helper</th>
                                    <th id="work_type">Work type</th>
                                    <th id="job_id">Job id</th>
                                    <th id="schedule_date">Date of action</th>
                                   
                                    <th id="week_day">Week Day</th>
                                   
                                    <th id="action">Action</th>
                                      </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                    <th id="name">Name</th>           
                                    <th id="date">Date</th>            
                                    <th id="start_time">Start Time</th>      
                                    <th id="end_time">End Time</th>
                                    <th id="time_difference">Time Difference</th>
                                    <th id="work_master_sign_id">Work master sign id</th>
                                    <th id="area">Area</th>
                                    <th id="geo_area">Geo area</th>       
                                    <th id="report_group">Report group</th>
                                    <th id="field_force">Field force</th>
                                    <th id="leaver_flg">Leaver flg</th>
                                    <th id="week_summary">Week summary</th>
                                    <th id="num">Num</th>
                                    <th id="complete">Complete</th>
                                    <th id="abort">Abort</th>
                                    <th id="no_access_rate">No access rate</th>
                                    <th id="smart_book">Smart book</th>
                                    <th id="warrant_book">Warrant book</th>
                                    <th id="traditional_book">Traditional book</th>
                                    <th id="smart_complete">Smart complete</th>
                                    <th id="warrant_complete">Warrant complete</th>
                                    <th id="traditional_complete">Traditional complete</th>
                                    <th id="smart_abort">Smart abort</th>
                                    <th id="warrant_abort">Warrant abort</th>
                                    <th id="traditional_abort">Traditional abort</th>
                                    <th id="smart_no_access">Smart no access</th>
                                    <th id="warrant_no_access">Warrant no access</th>
                                    <th id="traditional_no_access">Traditional no access</th>
                                    <th id="sf_df">sf df</th>
                                    <th id="job_type">Job type</th>
                                    <th id="sf_df_helper">sf df helper</th>
                                    <th id="work_type">Work type</th>
                                    <th id="job_id">Job id</th>
                                    <th id="schedule_date">Date of action</th>
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

export default MorrisonList;

