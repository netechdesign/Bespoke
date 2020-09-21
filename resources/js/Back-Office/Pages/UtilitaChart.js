import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import axios from 'axios'
import Aux from "../../hoc/_Aux";

import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import { extend } from 'jquery';
import ApexCharts from 'apexcharts';

const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
const baseurl= window.location.origin;


class UtilitaChart extends React.Component {

    constructor(props){
        super(props);
        this.state={start_date:'',end_date:'',title:''}
    }
    componentDidMount() {
        var items  = [];
        
        const { match, location, history } = this.props
        if(location.state.detail){
        const {id,start_date,end_date,report_type} = location.state.detail;
        localStorage.setItem('bespokesearch',JSON.stringify(location.state.detail));
        }else{
          const {id,start_date,end_date,report_type} = localStorage.getItem('bespokesearch')? JSON.parse(localStorage.getItem('bespokesearch')).user : 'Null';
        }
        
        const {id,start_date,end_date,report_type} =location.state.detail;
        const reportType = report_type['value'];
        this.setState({start_date:start_date});
        this.setState({end_date:end_date});
        let data={_method: 'get',id:id,start_date:start_date,end_date:end_date,file_id:reportType};
        if(reportType==1){
          this.setState({title:'Morrison Data services'});
           document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
      axios.post(baseurl+'/api/utilita/'+id,data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
         // let data = JSON.parse(res.data); 
  
let result = res.data.complate;

//series
          var options = {
            series: result['series'],
            chart: {
            type: 'bar',
            height: 500,
            stacked: true,
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          title: {
            text: 'Install Numbers'
          },
          subtitle: {
            text: 'Complated',
            align: 'left'
          },
          xaxis: {
            categories: result['engineer'],
            labels: {
              formatter: function (val) {
                return val + ""
              }
            },
            title: {
                text: 'Value'
              },
          },
          yaxis: {
            title: {
              text: 'Engineer Name'
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + ""
              }
            }
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
          }
          };
          
          var StackedBar = new ApexCharts(document.querySelector("#StackedBar"), options);
          StackedBar.render();
       
          let abortedrs = res.data.aborted;
//series
          var options = {
            series: abortedrs['series'],
            chart: {
            type: 'bar',
            height: 500,
            stacked: true,
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          title: {
            text: 'Install Numbers'
          },
          subtitle: {
            text: 'aborted',
            align: 'left'
          },
          xaxis: {
            categories: abortedrs['engineer'],
            labels: {
              formatter: function (val) {
                return val + ""
              }
            },
            title: {
                text: 'Value'
              },
          },
          yaxis: {
            title: {
              text: 'Engineer Name'
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + ""
              }
            }
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
          }
          };
          
          var abortedBar = new ApexCharts(document.querySelector("#abortedBar"), options);
          abortedBar.render();     
          
       
       
        }); 
      }else if(reportType==2)
      {
        this.setState({title:'Utilita'});

        document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
        axios.post(baseurl+'/api/utilita/'+id,data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
          // let data = JSON.parse(res.data); 
          document.getElementById("requestLoder").innerHTML = '';
 let result = res.data.complate;
 let CompletedjobData = res.data.CompletedjobData;
 
 //series
           var options = {
             series: result['series'],
             colors : ['#0d74bc', '#d8cb1b'],
             chart: {
             type: 'bar',
             height: 500,
             stacked: true,
           },
           plotOptions: {
             bar: {
               horizontal: true,
             }
           },
           stroke: {
             width: 1,
             colors: ['#fff']
           },
           title: {
             text: 'Install Numbers'
           },
           subtitle: {
             text: 'Complated',
             align: 'left'
           },
           xaxis: {
             categories: result['engineer'],
             labels: {
               formatter: function (val) {
                 return val + ""
               }
             },
             title: {
                 text: 'Value'
               },
           },
           yaxis: {
             title: {
               text: 'Engineer Name'
             },
           },
           tooltip: { 
             custom: function({ series, seriesIndex, dataPointIndex, w }) {
              let lineName ='';
              if(seriesIndex==0){
                lineName ='AM';
              }else if(seriesIndex==1){
                lineName ='PM';
              }
              let listed='';
              if(CompletedjobData[w.globals.labels[dataPointIndex]]){
                CompletedjobData[w.globals.labels[dataPointIndex]].map((vl,inx)=>{
                    if(vl.appointment_time==lineName){
                      listed+='<tr>';
                      listed+='<td>'+vl.customer_id+'</td>';
                      listed+='<td>'+vl.job_id+'</td>';
                      listed+='<td>'+vl.schedule_date+'</td>';
                      listed+='<td>'+vl.schedule_start_time+'</td>';
                      listed+='<td>'+vl.schedule_end_time+'</td>';
                      listed+='<td>'+vl.job_type+'</td>';
                      listed+='<td>'+vl.post_code+'</td>';
                      listed+='<td>'+vl.region+'</td>';
                      listed+='</tr>';
                    }
                })
              }
              return ('<h6 style="margin:10px;">'+w.globals.labels[dataPointIndex]+'</h6>'+
                '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' +
                "<thead><tr>" +
                "<th>Customer Id</th>"+//  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                "<th>Job Id</th>"+
                "<th>Schedule Date</th>" +
                "<th>Start Time</th>" +
                "<th>End Time</th>" +
                "<th>Job Type</th>" +
                "<th>Post code</th>" +
                "<th>Region</th>" +
                "</tr></thead>" +
                "<tbody>"+
                listed+
                "</tbody>"+
                "</table>"
                
              );
            },
            fixed: {
              enabled: true,
              position: "topRight",
              offsetX: 0,
              offsetY: 0,
            }
            /*
            y: {
               formatter: function (val) {
                 return val + ""
               }
             }
             */
           },
           fill: {
             opacity: 1
           },
           legend: {
             position: 'top',
             horizontalAlign: 'left',
             offsetX: 40
           }
           };
           
           var StackedBar = new ApexCharts(document.querySelector("#StackedBar"), options);
           StackedBar.render();
        
           let abortedrs = res.data.aborted;
           let AbortedjobData = res.data.AbortedjobData;
 //series
           var options = {
             series: abortedrs['series'],
             colors : ['#0d74bc', '#d8cb1b'],
             chart: {
             type: 'bar',
             height: 500,
             stacked: true,
           },
           plotOptions: {
             bar: {
               horizontal: true,
             }
           },
           stroke: {
             width: 1,
             colors: ['#fff']
           },
           title: {
             text: 'Install Numbers'
           },
           subtitle: {
             text: 'Aborted',
             align: 'left'
           },
           xaxis: {
             categories: abortedrs['engineer'],
             labels: {
               formatter: function (val) {
                 return val + ""
               }
             },
             title: {
                 text: 'Value'
               },
           },
           yaxis: {
             title: {
               text: 'Engineer Name'
             },
           },
           tooltip: { 
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
             let lineName ='';
             if(seriesIndex==0){
               lineName ='AM';
             }else if(seriesIndex==1){
               lineName ='PM';
             }
             let listed='';
             if(AbortedjobData[w.globals.labels[dataPointIndex]]){
              AbortedjobData[w.globals.labels[dataPointIndex]].map((vl,inx)=>{
                   if(vl.appointment_time==lineName){
                     listed+='<tr>';
                     listed+='<td>'+vl.customer_id+'</td>';
                     listed+='<td>'+vl.job_id+'</td>';
                     listed+='<td>'+vl.schedule_date+'</td>';
                     listed+='<td>'+vl.schedule_start_time+'</td>';
                     listed+='<td>'+vl.schedule_end_time+'</td>';
                     listed+='<td>'+vl.job_type+'</td>';
                     listed+='<td>'+vl.post_code+'</td>';
                     listed+='<td>'+vl.region+'</td>';
                     listed+='</tr>';
                   }
               })
             }
             return ('<h6 style="margin:10px;">'+w.globals.labels[dataPointIndex]+'</h6>'+
               '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' +
               "<thead><tr>" +
               "<th>Customer Id</th>"+//  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
               "<th>Job Id</th>"+
               "<th>Schedule Date</th>" +
               "<th>Start Time</th>" +
               "<th>End Time</th>" +
               "<th>Job Type</th>" +
               "<th>Post Code</th>" +
               "<th>Region</th>" +
               "</tr></thead>" +
               "<tbody>"+
               listed+
               "</tbody>"+
               "</table>"
               
             );
           },
           fixed: {
             enabled: true,
             position: "topRight",
             offsetX: 0,
             offsetY: 0,
           }
           /*
           y: {
              formatter: function (val) {
                return val + ""
              }
            }
            */
          },
           fill: {
             opacity: 1
           },
           legend: {
             position: 'top',
             horizontalAlign: 'left',
             offsetX: 40
           }
           };
           
           var abortedBar = new ApexCharts(document.querySelector("#abortedBar"), options);
           abortedBar.render();     
      
//Description chart reports
let descriptionBar = res.data.total_description;
let AbortedReasonData = res.data.AbortedReasonData;
            var options = {
              series: descriptionBar['series'],
              colors : ['#0d74bc', '#d8cb1b'],
              chart: {
              type: 'bar',
              height: 500,
              stacked: true,
            },
            plotOptions: {
              bar: {
                horizontal: true,
              }
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            title: {
              text: 'Aborts-reason'
            },
            subtitle: {
              text: this.state.start_date +' to '+ this.state.end_date,
              align: 'left'
            },
            xaxis: {
              categories: descriptionBar['description'],
              labels: {
                formatter: function (val) {
                  return val + ""
                }
              },
              title: {
                  text: 'Value'
                },
            },
            yaxis: {
              title: {
                text: 'Description',
                align: 'left',
                margin: 10,
              }
              
            },
            tooltip: { 
              custom: function({ series, seriesIndex, dataPointIndex, w }) {
               let lineName ='';
               if(seriesIndex==0){
                 lineName ='AM';
               }else if(seriesIndex==1){
                 lineName ='PM';
               }
               let listed='';
               if(AbortedReasonData[w.globals.labels[dataPointIndex]]){
                AbortedReasonData[w.globals.labels[dataPointIndex]].map((vl,inx)=>{
                     if(vl.appointment_time==lineName){
                       listed+='<tr>';
                       listed+='<td>'+vl.customer_id+'</td>';
                       listed+='<td>'+vl.job_id+'</td>';
                       listed+='<td>'+vl.schedule_date+'</td>';
                       listed+='<td>'+vl.schedule_start_time+'</td>';
                       listed+='<td>'+vl.schedule_end_time+'</td>';
                       listed+='<td>'+vl.job_type+'</td>';
                       listed+='<td>'+vl.post_code+'</td>';
                       listed+='<td>'+vl.region+'</td>';
                       listed+='</tr>';
                     }
                 })
               }
               return ('<h6 style="margin:10px;">'+w.globals.labels[dataPointIndex]+'</h6>'+
                 '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' +
                 "<thead><tr>" +
                 "<th>Customer Id</th>"+//  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                 "<th>Job Id</th>" +
                 "<th>Schedule Date</th>" +
                 "<th>Start Time</th>" +
                 "<th>End Time</th>" +
                 "<th>Job Type</th>" +
                 "<th>Post Code</th>" +
                 "<th>Region</th>" +
                 "</tr></thead>" +
                 "<tbody>"+
                 listed+
                 "</tbody>"+
                 "</table>"
                 
               );
             },
             fixed: {
               enabled: true,
               position: "topRight",
               offsetX: 0,
               offsetY: 0,
             }
             /*
             y: {
                formatter: function (val) {
                  return val + ""
                }
              }
              */
            },
            fill: {
              opacity: 1
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
            }
            };

            var descriptions = new ApexCharts(document.querySelector("#descriptionBar"), options);
            descriptions.render();     

        
        
        
         }); 
      }
      else if(reportType==3)
      {
        this.setState({title:'Vehical Mileage'});
        var driver_name = [];
        var total_miles = [];
        var max_speed = [];
        document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
        axios.post(baseurl+'/api/vehicalmileas/1',data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
         if(res.data.success){
          document.getElementById("requestLoder").innerHTML = '';
          if(res.data.totalmileage.length==0){

            document.getElementById("vahicalMileage").innerHTML = '<div>Record not found</div>';
            return false;
          }

          res.data.totalmileage.map((val,indx) =>{
            driver_name.push(val.driver_name);
            total_miles.push(val.total_miles);
            max_speed.push(val.max_speed);
          })
          let listmileage = res.data.listmileage;
        var options = {
          title: {
            text: 'Miles'
          },
          subtitle: {
              text: this.state.start_date +' to '+ this.state.end_date,
              align: 'left'
            },
            series: [{
            data: total_miles
          }],
            chart: {
            type: 'bar',
            height: 600
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: driver_name,
            title: {
              text: 'Miles'
            }
          },
          yaxis: {
            title: {
              text: 'Driver Name'
            },
          },
          tooltip: { 
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
             let lineName ='';
             if(seriesIndex==0){
               lineName ='AM';
             }else if(seriesIndex==1){
               lineName ='PM';
             }
             let listed='';
             if(listmileage){
              listmileage.map((vl,inx)=>{
                if(w.globals.labels[dataPointIndex]==vl.driver_name){
                     listed+='<tr>';
                     listed+='<td>'+vl.drive_date+'</td>';
                     listed+='<td>'+vl.miles.toFixed(2)+'</td>';
                     listed+='<td>'+vl.duration+'</td>';
                     listed+='<td>'+vl.max_speed.toFixed(2)+'</td>';
                     listed+='<td>'+vl.start_location+', '+vl.start_postcode+'</td>';
                     listed+='<td>'+vl.start_time+'</td>';
                     listed+='<td>'+vl.end_location+', '+vl.end_postcode+'</td>';
                     listed+='<td>'+vl.end_time+'</td>';
                     listed+='</tr>';
                } 
               })
             }
             return (
               '<h6 style="margin:10px;">'+w.globals.labels[dataPointIndex]+'</h6>'+
               '<b style="margin-left:10px;"> Total Miles :'+series[seriesIndex][dataPointIndex].toFixed(2)+'</b>'+
               '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' +
               "<thead><tr>" +
               "<th>Drive Date</th>"+//  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
               "<th>Miles</th>" +
               "<th>Duration</th>" +
               "<th>Max Speed</th>" +
               "<th>Start Location</th>" +
               "<th>Start Time</th>" +
               "<th>End Location</th>" +
               "<th>End Time</th>" +
               "</tr></thead>" +
               "<tbody>"+
               listed+
               "</tbody>"+
               "</table>"
               
             );
           },
           fixed: {
             enabled: true,
             position: "topRight",
             offsetX: 0,
             offsetY: 0,
           }
           /*
           y: {
              formatter: function (val) {
                return val + ""
              }
            }
            */
          },
          };
        
          var chart = new ApexCharts(document.querySelector("#vahicalMileage"), options);
          chart.render();
          
          var options = {
            title: {
              text: 'Speed Spread'
            },
            subtitle: {
              text: this.state.start_date +' to '+ this.state.end_date,
              align: 'left'
            },
            fill: {
              colors: [function({ value, seriesIndex, w }) {
                if(value > 70) {
                    return '#FF0000'
                } else {
                    return '#0099FF'
                }
              }]
            },
              series: [{
              data: max_speed
            }],
              chart: {
              type: 'bar',
              height: 600
            },
            plotOptions: {
              bar: {
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: driver_name,
              title: {
                text: 'Top speed'
              }
            },
            yaxis: {
              title: {
                text: 'Driver Name'
              },
            },
            tooltip: { 
              custom: function({ series, seriesIndex, dataPointIndex, w }) {
               let lineName ='';
               if(seriesIndex==0){
                 lineName ='AM';
               }else if(seriesIndex==1){
                 lineName ='PM';
               }
               let listed='';
               if(listmileage){
                listmileage.map((vl,inx)=>{
                  if(w.globals.labels[dataPointIndex]==vl.driver_name){
                    if(vl.max_speed>70){
                       listed+='<tr style="background-color: #fbbfbf;color:white" >';
                    }else{
                      listed+='<tr>';
                    }
                       listed+='<td>'+vl.drive_date+'</td>';
                       listed+='<td>'+vl.miles.toFixed(2)+'</td>';
                       listed+='<td>'+vl.duration+'</td>';
                       listed+='<td>'+vl.max_speed.toFixed(2)+'</td>';
                       listed+='<td>'+vl.start_location+', '+vl.start_postcode+'</td>';
                       listed+='<td>'+vl.start_time+'</td>';
                       listed+='<td>'+vl.end_location+', '+vl.end_postcode+'</td>';
                       listed+='<td>'+vl.end_time+'</td>';
                       listed+='</tr>';
                  } 
                 })
               }
               return (
                 '<h6 style="margin:10px;">'+w.globals.labels[dataPointIndex]+'</h6>'+
                 '<b style="margin-left:10px;"> Total Miles :'+series[seriesIndex][dataPointIndex].toFixed(2)+'</b>'+
                 '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' +
                 "<thead><tr>" +
                 "<th>Drive Date</th>"+//  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                 "<th>Miles</th>" +
                 "<th>Duration</th>" +
                 "<th>Max Speed</th>" +
                 "<th>Start Location</th>" +
                 "<th>Start Time</th>" +
                 "<th>End Location</th>" +
                 "<th>End Time</th>" +
                 "</tr></thead>" +
                 "<tbody>"+
                 listed+
                 "</tbody>"+
                 "</table>"
                 
               );
             },
             fixed: {
               enabled: true,
               position: "topRight",
               offsetX: 0,
               offsetY: 0,
             }
             /*
             y: {
                formatter: function (val) {
                  return val + ""
                }
              }
              */
            }
            };
          
            var chart = new ApexCharts(document.querySelector("#vahicalMax_speed"), options);
            chart.render();
            
          
        }
       
        })
      }
       //
         
    }

    render(){ 
        const { match, location, history } = this.props
        return(<Aux>
                       <Row>
                            <Col>
                            <Card>
                                    <Card.Header>
                                       <Card.Title as="h5">{this.state.title}</Card.Title>
                                       <b> From {this.state.start_date} To {this.state.end_date}</b>   
                                        <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                                    </Card.Header>
                                    <Card.Body>
                                       
                                        <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                                        <div id='abortedBar'></div>
                                        <div id='descriptionBar'></div>
                                        
                                        <div id='StackedBar'></div>
                                        <div id='vahicalMileage'></div>
                                        
                                        <div id='vahicalMax_speed'></div>
                                        </Card.Body>
                            </Card>
                           </Col>
                        </Row>
                    </Aux>
                        )
            }
}

export default UtilitaChart;