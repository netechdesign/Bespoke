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
        const {id,start_date,end_date} =location.state.detail;
        this.setState({start_date:start_date});
        this.setState({end_date:end_date});
        let data={_method: 'get',id:id,start_date:start_date,end_date:end_date};
      axios.post(baseurl+'/api/utilita/'+id,data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
         // let data = JSON.parse(res.data); 
          
      /*  
        var options = {
            series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
          }],
            chart: {
            type: 'bar',
            height: 350
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
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
          };
        
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
*/
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
                return val + "K"
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
                return val + "K"
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
                                        <div id='abortedBar'></div>
                                        <hr/>
                                        <div id='StackedBar'></div>
                                        
                                        </Card.Body>
                            </Card>
                           </Col>
                        </Row>
                    </Aux>
                        )
            }
}

export default UtilitaChart;