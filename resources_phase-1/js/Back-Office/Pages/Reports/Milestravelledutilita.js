import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import axios from 'axios'
import ApexCharts from 'apexcharts';

const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
const baseurl= window.location.origin;

class Milestravelledutilita extends React.Component {

    constructor(props){
        super(props);
        this.state={
          titleText:'',
          total:0,
          teamLeader:[]}
    }
    componentWillMount(){
      console.log('tag', 'componentWillMount');
      
    }
    componentDidUpdate(prevProps, prevState) {
      
      if(this.props.match.params.id!=prevProps.match.params.id){
        this.graphload();  
      }
    }
    componentDidMount() {
      console.log('tag', 'componentDidMount');
      this.graphload();
    }
      //
    graphload = () => {
         this.setState({titleText:this.props.match.params.id}); 
      document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+window.location.origin+'/images/ajax_loader_gray_512.gif"></img>';
      document.getElementById("htmlcontaint").innerHTML = '';
      document.getElementById("grandTotal").innerHTML = '';
     const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
     const baseurl= window.location.origin;
     const data = new FormData();
     
     data.append('file_id', '2');
     if(this.props.match.params.id){
      data.append('report_for', this.props.match.params.id);  
    }else{
         data.append('report_for', 'day'); 
     }
     
     if(this.props.match.params.status){
      data.append('job_status', this.props.match.params.status);  
      }else{
      data.append('job_status', 'Completed');  
     }
     
     axios.post(baseurl+'/api/utilita/install',data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
      if(res.data.success){
    let results = res.data.complate;
    let target_data = res.data.target_data;

    let grand_total=0;
    let grand_target=0;
    let self= this;
    results.map(function(item,indx){
      let engineer_leader = Object.keys(item);

      self.setState({
       teamLeader: self.state.teamLeader.concat(engineer_leader)
     });
    })
     //start
     
     results.map(function(item,indx){
      let engineer_leader = Object.keys(item);

      let endineer_data = item[engineer_leader];
      let categories =  endineer_data['engineer'];
      let series_data =  endineer_data['series'];
      
      var options ={
      series:series_data,
      annotations: {
        xaxis: [
          {
            x: target_data,
            borderColor: "#d8cb1b",
            borderWidth: 1,
            strokeDashArray: 0,
            offsetX: 0,
            offsetY: 0,
            label: {
              offsetY: -10,
              borderColor: "#d8cb1b",
              style: {
                color: "#fff",
                background: "#d8cb1b"
              },
              orientation: "horizontal",
              text: "Target "+target_data
            }
          }
        ]
      },
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        events: {
          mounted: (chartContext, config) => {
            setTimeout(() => {
              addAnnotations(config);
            });
          }
          
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
      enabled: true,
    },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
       text: 'Team Leader - '+engineer_leader,
        offsetX: 0,
        offsetY: 30,
       style: {
        fontSize: '11px',
        fontWeight:'normal',
        colors: ['#3fa0fc']
      }
      },
      xaxis: {
        categories:categories,
        labels: {
          show: false
        }
      },
      yaxis: {
        title: {
          text: '',
      
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
        position: 'bottom',
        horizontalAlign: 'right',
        offsetX: 40,
        show: false
      }
    };

    const addAnnotations = (config) => {
      const seriesTotals = config.globals.stackedSeriesTotals;
      const isHorizontal = options.plotOptions.bar.horizontal;
      
    //  chart.clearAnnotations();
    
      try {
        categories.forEach((category, index) => {
          
          chart.addPointAnnotation(
            {
              y: isHorizontal
                ? calcHorizontalY(config, index)
                : seriesTotals[index],
              x: isHorizontal ? 0 : category,
              label: {
                text: `${seriesTotals[index]}`,
                offsetY: 20,
                style: {
                  color: "#fff",
                  background: "#d8cb1b"
                }
              }
            },
            false
          );
    
          if (isHorizontal) {
             //   adjustPointAnnotationXCoord(config, index);
              }
        });
      } catch (error) {
        console.log(`Add point annotation error: ${error.message}`);
      }
    };
    
    const calcHorizontalY = (config, index) => {
      const catLength = categories.length;
      const yRange = config.globals.yRange[0];
      const minY = config.globals.minY;
      const halfBarHeight = yRange / catLength / 2;
    
      return minY + halfBarHeight + 2 * halfBarHeight * (catLength - 1 - index);
    };
    
    const adjustPointAnnotationXCoord = (config, index) => {
     
      const gridWidth = config.globals.gridWidth;
      const seriesTotal = config.globals.stackedSeriesTotals[index];
      const minY = config.globals.minY;
      const yRange = config.globals.yRange[0];
      const xOffset = (gridWidth * (seriesTotal + Math.abs(minY))) / yRange;
      const circle = document.querySelector(`.apexcharts-point-annotations circle:nth-of-type(${index + 1})`);
      const labelField = document.querySelector(
        `.apexcharts-point-annotations rect:nth-of-type(${index + 1}`
      );
      const labelFieldXCoord = parseFloat(labelField.getAttribute("x"));
      const text = document.querySelector(
        `.apexcharts-point-annotations text:nth-of-type(${index + 1}`
      );
      labelField.setAttribute("x", gridWidth);
      text.setAttribute("x", gridWidth);
      
      circle.setAttribute("cx", gridWidth);
     
    };
     
    


  
    var chart = new ApexCharts(document.querySelector("#"+engineer_leader), options);
    chart.render();

    //target_data
    let team_leader_total=0;
    let team_leader_target_total=0;
    series_data.map(function(vl,indx){
            if(vl['data']){
              vl['data'].map(function(v,indx){
                team_leader_total = parseFloat(team_leader_total) + parseFloat(v);
                team_leader_target_total = parseFloat(team_leader_target_total) + parseFloat(target_data);
              })
            }
    });
    grand_total = parseFloat(grand_total) + parseFloat(team_leader_total);
    grand_target = parseFloat(grand_target) + parseFloat(team_leader_target_total);
let total_text = '<div style="text-align: left !important;"><b style="margin: 0px 10px 0px 145px;color: #0e74bc;">Total = <span style="color: #05bb7b;">'+team_leader_total+'</span></b>';
    total_text +='<b style="margin: 0px 10px 0px 56px;color: #0e74bc;">Target= <span style="color: #05bb7b;">'+team_leader_target_total+'</span></b></div>';
    $("#"+engineer_leader).append(total_text);
    
  //end 
        })
        document.getElementById("requestLoder").innerHTML = '';
       let grandTotal = '<b style="margin: 0px 10px 0px 0px;color: #0e74bc;">Total = <span style="color: #05bb7b;">'+grand_total+'</span></b>';
       document.getElementById("grandTotal").innerHTML = grandTotal ;  
      }
      else{
        document.getElementById("requestLoder").innerHTML = '';
        document.getElementById("htmlcontaint").innerHTML = '<b>'+res.data.message+'</b>';
      }              
      })


      
        }
      
       //
         
    

    render(){ 
        const { match, location, history } = this.props
        return(<Aux>
                  <Card>
                    <Card.Header>
                        <Card.Title as="h5"><b id='grandTotal' ></b>&nbsp;</Card.Title>
                        
                    </Card.Header>
                    <Card.Body>
                      <Row>
                          <Col md={12} xl={12}>

                          <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                          <div id="htmlcontaint" style={{'textAlign': 'center'}} >
                          {this.state.teamLeader.map(function(item,indx){return <div style={{'borderBottom':'2px solid #f1f1f1'}}><div key={indx} id={item}></div></div>}) }
                          </div>
                          <hr/>
                         
                          </Col>
                      </Row>
                      
                  </Card.Body>
                </Card>
              </Aux>)
            }
}

export default UtilitaInstalls;