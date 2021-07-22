import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown,Table} from 'react-bootstrap';
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
    "sAjaxSource": window.location.origin+'/api/engineer_lookup',
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
        {"data":"employee_name"},
        {"data":"regions_sort_name"},
        {"data":'perfomance_level'},
        {"data":'cost'},
        {"data":'Monday'},
        {"data":'Tuesday'},
        {"data":'Wednesday'},
        {"data":'Thursday'},
        {"data":'Friday'},
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
              
                var str_buttons = '<button type="button" class="edit btn btn-info btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-edit"></i></button>';
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
 


class Engineer_lookup extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showModal: false,
            Team:[],
            validated: false,
            validatedTooltip: false,
            visible : true,
            formSubmitting: false,
            buttonName:'Add',
        }}
           
    componentDidMount() {
        var items  = [];
        const { match, location, history } = this.props;
            atable();
            $('#data-table-responsive tbody').on('click', '.edit', function () {
                var id =  $(this).attr('data-id');
                history.push('/employee_lookup/edit/'+id);
            
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

    
    render() { return (
        
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Employee Lookup List</Card.Title>
                             
                            <Button style={{'float':'right'}}  as={Link} to="/employee_lookup/add" >+ Add</Button>
                        </Card.Header>
                        <Card.Body>
                          
                        <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                    <thead>
                                    <tr>
                                        <th id="employee_name">Employee</th>
                                        <th id="regions_sort_name">Team</th>
                                        <th id="perfomance_level">Perfomance level</th>
                                        <th id="cost">cost</th>
                                        <th id="Monday">Monday</th>
                                        <th id="Tuesday">Tuesday</th>
                                        <th id="Wednesday">Wednesday</th>
                                        <th id="Thursday">Thursday</th>
                                        <th id="Friday">Friday</th>
                                        <th id="action">Action</th>
                                      </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                    <th id="employee_name">Employee</th>
                                        <th id="regions_sort_name">Team</th>
                                        <th id="perfomance_level">perfomance_level</th>
                                        <th id="cost">cost</th>
                                        <th id="Monday">Monday</th>
                                        <th id="Tuesday">Tuesday</th>
                                        <th id="Wednesday">Wednesday</th>
                                        <th id="Thursday">Thursday</th>
                                        <th id="Friday">Friday</th>
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

export default Engineer_lookup;