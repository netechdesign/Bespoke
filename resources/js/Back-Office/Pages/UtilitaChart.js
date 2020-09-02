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
        this.state={start_date:'',end_date:''}
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
                "<th>customer id</th>"+//  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                "<th>schedule date</th>" +
                "<th>Start time</th>" +
                "<th>End time</th>" +
                "<th>job type</th>" +
                "<th>post code</th>" +
                "<th>region</th>" +
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
               "<th>customer id</th>"+//  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
               "<th>schedule date</th>" +
               "<th>Start time</th>" +
               "<th>End time</th>" +
               "<th>job type</th>" +
               "<th>post code</th>" +
               "<th>region</th>" +
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
                 "<th>customer id</th>"+//  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                 "<th>schedule date</th>" +
                 "<th>Start time</th>" +
                 "<th>End time</th>" +
                 "<th>job type</th>" +
                 "<th>post code</th>" +
                 "<th>region</th>" +
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
            y: {
              formatter: function (val) {
                return val + " Miles"
              }
            }
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
              y: {
                formatter: function (val) {
                  return val + " Miles"
                }
              }
            },
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
                                        <Card.Title as="h5">Utilita Chart</Card.Title>
                                         
                                        <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                                    </Card.Header>
                                    <Card.Body>
                                        <b>{this.state.start_date} to {this.state.end_date}</b>
                                        <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                                        <div id='abortedBar'></div>
                                        <div id='descriptionBar'></div>
                                        <hr/>
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