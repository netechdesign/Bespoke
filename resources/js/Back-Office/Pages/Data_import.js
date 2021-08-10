import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown,Table} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import {Importfile} from '../../HttpFunctions'; 
import Aux from "../../hoc/_Aux";
import Swal from 'sweetalert2';
import Select from 'react-select';
import withReactContent from 'sweetalert2-react-content';
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import {CheckPermission} from '../../HttpFunctions'; 
import { extend } from 'jquery';
import $ from 'jquery';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
import Datetime from 'react-datetime';
// create engineer attach to manager
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
    "sAjaxSource": window.location.origin+'/api/sms_engineer',
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
        {"data": "engineer_id"},
        {"data":"engineer"},
        {"data":"appointment_date"}
        
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
              
                var str_buttons = '<div class="form-check"><input type="checkbox" data-smsid="'+row.id+'" data-id="'+row.engineer_id+'" data-value="'+row.engineer+'" id="formBasicChecbox" class="engineerSelect form-check-input"></div>';
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
        file_type:[{id:1,name:'Morrison Data services'},{id:2,name:'Utilita'},{id:3,name:'Vehicle Mileage'}],
        duplicateformSubmitting: true,
        duplicatebuttonName:'Add',
        duplicate_data:[{visible:'none'}],
        progress:0,
        Daily_Performance:false, 
        Daily_PerformanceHide:'none',
        Engineers:[],
        engineerSelect:[],
        SiteEngineer:[],
        AreabuttonName:'Add',
        region_list:[],
        from_date:'',
        to_date:'',
        parent_engineer_id:'',
        parent_engineer:'',
        team_id:'',
        regions_sort_name:'',
        showsmsengineer:false
    };
    dropdownList = (e) =>{
            
              
     //   document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        
          axios.get(
            baseurl+'/api/dropdown_list',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                        if(res.data.success){
                           this.setState({manager_list:res.data.manager,region_list:res.data.region})
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

       this.setState({from_date:today});
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

       this.setState({to_date:today});
    };
    RegionChange = (e) =>{
      this.setState({team_id: e.value});
      
      let region = this.state.region_list.filter((vl,index)=> vl.value==e.value);
      if(region){
          
          this.setState({parent_engineer_id:region[0].engineer_id});
          this.setState({parent_engineer:region[0].engineer_name});
          this.setState({team_id:region[0].id});
          this.setState({regions_sort_name:region[0].regions_sort_name});
          
          }
  }
    componentDidMount() {
        const { match, location, history } = this.props;

        CheckPermission('File','Data Import',history);
        this.dropdownList();
        axios.get(baseurl+'/api/areamanager',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
            
            this.setState({Engineers:res.data}); 
            
            }); 
            
        
        let self = this;
        atable();
        $('#data-table-responsive tbody').on('click', '.engineerSelect', function () {
            var id =  $(this).attr('data-id');
            var engineer = $(this).attr('data-value');
            
            var smsid =$(this).attr('data-smsid');
            var array ={'label':engineer,'value':id,'sms_id':smsid};
            // array['label']=engineer;
            // array['value']=id;
            
            var checked = $(this).is(":checked");
                        if(checked){
                            let check_vl = self.state.engineerSelect.filter((vl,inx)=>{
                                
                            return vl.value==id;
                            });
                            console.log(check_vl);
                            if(check_vl.length==0)
                            {
                            self.setState(previousState => ({engineerSelect: [...previousState.engineerSelect, array]}));
                             }
                        }else{
                            var array = [...self.state.engineerSelect]; // make a separate copy of the array
                            //var index = array.indexOf(id)
                            let index = self.state.engineerSelect.filter((vl,inx)=>{
                                if(vl.value==id){
                                     return inx;
                                }
                                });
                            if (index !== -1) {
                              array.splice(index, 1);
                              self.setState({engineerSelect: array});
                            }
                        }
                    
            
        });
        
        
    }
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
      let size = 1700000;
                  
      let err = '';
      console.log(file.size);
      if (file.size > size) {
          
       err = file.type+' is too large, please pick a smaller file\n';
       alert(err);
     //  toast.error(err);
     }
     return true
    };
    
    duplicateSubmit= (e, formData, inputs) => {
        e.preventDefault();
        const baseurl= window.location.origin;
        const { match, location, history } = this.props;
        const Permission = CheckPermission('File','Add Duplicate',history,false);
      if(Permission==1){
        return false;
      }
        
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
                headers:{'Authorization':'Bearer '+auth_token,'content-type': 'multipart/form-data'},
            } 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             if(this.state.file_id==5){
                                oTable.draw();
                                this.setState({showsmsengineer:true});
                             }
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

    checkAll = ()=>{
         $('.engineerSelect').trigger('click'); 
         if(!$('#allselect').is(':checked')){
            this.setState({engineerSelect: []});
        }
    }

    ManagerSubmit = (e, formData, inputs) => {
        
        e.preventDefault();
        const { match, location, history } = this.props;
        const Permission = CheckPermission('areamanager','add',history,false);
      if(Permission==1){
        return false;
      }
        const baseurl= window.location.origin;
        this.setState({formSubmitting:true});
        this.setState({AreabuttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />sending</span>});
        const data = new FormData()
       // data.append('SiteEngineer', JSON.stringify(this.state.SiteEngineer));
        
        data.append('Engineer', JSON.stringify(this.state.engineerSelect));
        data.append('from_date',this.state.from_date);
        data.append('to_date',this.state.to_date);
        data.append('parent_engineer_id',this.state.parent_engineer_id);
        data.append('parent_engineer',this.state.parent_engineer);
        data.append('team_id',this.state.team_id);
        data.append('regions_sort_name',this.state.regions_sort_name);
        data.append('is_sms', 1);
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        axios.post(
            baseurl+'/api/smsteam',
            data,
            {
                headers:{'Authorization':'Bearer '+auth_token}
            } 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             
                             this.setState({formSubmitting:false});
                             this.setState({AreabuttonName:'Add'});
                             this.setState({selectedFile:null});
                             this.setState({engineerSelect:[]});
                             $('#allselect').attr('checked',false);
                             

                             
                            /*console.clear(); */
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
                            oTable.draw();
                            $('#avatar').val('');
                            PNotify.error({
                                title: "System Error",
                                text:res.data.message,
                            });
                            this.setState({formSubmitting:false});
                             this.setState({AreabuttonName:'Add'});
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
                    this.setState({buttonName:'Add'});
                    this.setState({selectedFile:null});
                          console.log(err);
                      }
          )
       
       
    };
    
    SiteEngineerchange =(e)=>{
        let self= this;
        setTimeout(function(){  self.setState({SiteEngineer:e});}, 500);
       
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
                                                    <Radio.RadioItem id="radio6" label="Vehicle Mileage" value="3" />
                                                    <Radio.RadioItem id="radio7" label="SMS" value="5" />
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
                
                <Row style={{display:(this.state.showsmsengineer?'':'none')}}>
                    <Col>
                      <Card>
                        <Card.Header>
                        {(this.state.engineerSelect.length>0?<ValidationForm  onSubmit={this.ManagerSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                <Form.Row>
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="firstName">Team</Form.Label>
                            <Select onChange={this.RegionChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="regions_sort_name"
                                    options={this.state.region_list}
                                    placeholder="Select Team"
                                />
                            <Form.Label style={{color:'green'}} htmlFor="firstName">{(this.state.regions_sort_name?'Team id is '+this.state.regions_sort_name:'')}</Form.Label>
                            <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                                        </Form.Group>
                                        <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="start_date">From</Form.Label>
                                    <Datetime closeOnSelect={true} onChange={this.startDateChange}  dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()} errorMessage={{required:"start_date is required"}}  inputProps={{required:'required',name:"start_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2">
                                    <Form.Label htmlFor="end_date">To</Form.Label>
                                    <Datetime  closeOnSelect={true} dateFormat="D/M/Y" timeFormat={false}  minDate={new Date()}  errorMessage={{required:"end_date is required"}} onChange={this.endDateChange} inputProps={{required:'required',name:"end_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                </Form.Group>       
                                
                                    <Form.Group as={Col} md="3" className="mt-3">
                                            <Button style={{marginTop:'10px'}} disabled={this.state.formSubmitting}  type="submit"> {this.state.AreabuttonName}</Button>
                                    </Form.Group>
                                </Form.Row>
                        </ValidationForm>
                        :'')}
                        </Card.Header>
                        <Card.Body>
                          
                        <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                    <thead>
                                    <tr>
                       <th width="5%" id="action">
                       <Form.Check type="checkbox" label="" id="allselect"  onChange={this.checkAll} />
                           </th>
                                        <th id="engineer">Engineer Name</th>
                                        <th id="appointment_date">Appointment Date</th>
                                      </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                         <th id="action">Action</th>
                                         <th id="engineer">Engineer Name</th>
                                         <th id="appointment_date">Appointment Date</th>
                                         
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

export default Data_import;
