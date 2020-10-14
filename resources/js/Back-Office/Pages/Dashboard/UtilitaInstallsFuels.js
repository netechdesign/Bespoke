import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import axios from 'axios'
import ApexCharts from 'apexcharts';

const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
const baseurl= window.location.origin;

class UtilitaInstallsFuels extends React.Component {

    constructor(props){
        super(props);
        this.state={start_date:'',end_date:'',title:''}
    }
    
    componentDidMount() {

//series
         document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
        const data = new FormData()
        data.append('job_status', 'Completed');  //Utilita Installs Fuels (Total per day)

        axios.post(baseurl+'/api/dashboardutilita',data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
         
        // let data = JSON.parse(res.data); 

        document.getElementById("requestLoder").innerHTML = '';
        let result = res.data;
        console.log(result.week_day);
          var options = {
            series: [{
              name: "Total",
              type: 'column',
              data: result.totals
            },
            {
              name: "Target",
              data: result.target,
              
            }
            
          ],
          colors : ['#0d74bc', '#d8cb1b'],
            chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: 0,
            offsetY: -10,
            enabledOnSeries: [0],
            style: {
              fontSize: '12px',
              colors: ['#3fa0fc']
            }
          },
          stroke: {
            width: [0, 7, 5],
            curve: 'straight',
            dashArray: [0, 0, 5]
          },
          title: {
            text: 'Utilita Installs Fuels (Total per day)',
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: result.week_day,
            title: {
                text: 'Week'
              }
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + " "
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val + " "
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  }
                }
              }
            ]
          },
          grid: {
            borderColor: '#f1f1f1',
          }
          };
          
var abortedBar = new ApexCharts(document.querySelector("#UtilitaInstallsFuels"), options);
          abortedBar.render();     
          
        })
       
        }
      
       //
         
    

    render(){ 
        const { match, location, history } = this.props
        return(<Aux><div id="requestLoder" style={{'textAlign': 'center'}}></div><div id='UtilitaInstallsFuels'></div></Aux>)
            }
}

export default UtilitaInstallsFuels;