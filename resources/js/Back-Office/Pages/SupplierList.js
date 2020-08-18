import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'
import {Row, Col, Card, Table,Button,Form} from 'react-bootstrap';
import Select from 'react-select';
import Aux from "../../hoc/_Aux";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
/*
function fileView(id,file_id){
alert(id);
}
*/

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
    "sAjaxSource": window.location.origin+'/api/supplier/',
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

          /*  if($('#status').val()!='') {
                aoData.push({name: 'is_active', value: $('#status').val()});
            }
          */  
        },

    "columns": [  
         {"data":"file_type"},
         {"data":"file_name"},
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
              
                var view_buttons ='';
                var delete_buttons ='';
                view_buttons = '<a href="javascript:;"  target data-id="'+row.id+'" data-fileid="'+row.file_id+'"  class="viewfile btn btn-info btn-sm" ><i style="margin:0px !important;" class="feather icon-folder"></i></a>';
                 delete_buttons = '<button type="button" data-id="'+row.id+'" class="deletefile btn btn-danger btn-sm" ><i style="margin:0px !important;" class="feather icon-x"></i></button>';
                return [
                    delete_buttons,
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
    { value: '3', label:'Vehical Mileage'}
  
];


class SupplierList extends React.Component {

   
    constructor(props) {
        super(props);
        this.state={
          
        }}
           
    componentDidMount() {
        
        atable();
        var self= this;
        $('#data-table-responsive tbody').on('click', '.viewfile', function () {
            var id =  $(this).attr('data-id');
            var supplier =  $(this).attr('data-fileid');
             // var data = oTable.row( this ).data();
              if(supplier==1){
                self.props.history.push('list/morrison/'+id);
              }else if(supplier==2){
                self.props.history.push('list/utilita/'+id);
              }
              
          } );    
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
                        baseurl+'/api/supplier/'+id,{_method: 'delete'},
                        {
                            headers:{'Authorization':'Bearer '+auth_token}
                        } 
                    ).then(res =>{
                                      if(res.data.success){
                    oTable.draw();
                    return MySwal.fire('', 'File has been deleted!', 'success');
                                      }
                                    })
                } else {
                   // return MySwal.fire('', 'Your imaginary file is safe!', 'error');
                }
            });
            
              
          } ); 
          
          
    }
    
    render() {
        
        return (
            <Aux>
                <Row>
                    <Col>
                       
                      <Card>
                            <Card.Header>
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
                            
                            
                            </Card.Header>
                            <Card.Body>
                            
                                <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                    <thead>
                                    <tr>
                                    <th id="file_type">Supplier</th>
                                    <th id="file_name">File Name</th>
                                    
                                    <th id="action">Action</th>
                                      </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                    <th id="file_type">Supplier</th>
                                    <th id="file_name">File Name</th>
                                    
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

export default SupplierList;

