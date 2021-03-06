import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import AmChartEarnings from "../../Demo/Widget/Chart/AmChartEarnings";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

import axios from 'axios'
import ApexCharts from 'apexcharts';

import UtilitaAborts from './Dashboard/UtilitaAborts'
import UtilitaInstallsFuels from './Dashboard/UtilitaInstallsFuels'
import MorrisonAborts from './Dashboard/MorrisonAborts'
import MorrisonInstallsFuels from './Dashboard/MorrisonInstallsFuels'

const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
const baseurl= window.location.origin;

export class Jobstatus extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
      }
     

      render() {
        
            return ( <Col md={6} xl={4}>
                           <Card>
                                <Card.Body>
            <h6 className='mb-4'>{this.props.name} {this.props.statuslist.job_status}</h6>
                                    <div className="row d-flex align-items-center" >
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/>{this.props.statuslist.total}</h3>
                                        </div>
                
                                        
                                    </div>
                                    <div className="progress m-t-30" style={{'height':'20px'}} >
            <div className="progress-bar progress-c-theme" role="progressbar" style={{fontSize:'15px',width: this.props.statuslist.parsentage+'%'}} aria-valuenow={this.props.statuslist.parsentage} aria-valuemin="0" aria-valuemax="100">{this.props.statuslist.parsentage+'%'}</div>
                                    </div>
                                </Card.Body>
                            </Card>
                            </Col>
                    )

            }
}

class Dashboard extends React.Component {

    
          constructor(props) {
            super(props);
            this.state = {jobstatus: [],msd_job_status:[]};
          }

    componentDidMount() {
        const data = new FormData()
       // data.append('start_date', '01/07/2020');
       // data.append('end_date', '31/07/2020');
        axios.post(baseurl+'/api/jobstatus',data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
          
            if(res.data.job_status){
                this.setState({jobstatus:res.data.job_status,msd_job_status:res.data.msd_job_status})
                }
          
            }); 
    }
    render() {

        return (
            <Aux>
                <Row>
                    
                    {this.state.jobstatus.map( (result,index) => 
                    <Jobstatus key={index} name='Utilita'
                    statuslist={result}
                    />
                    )}
                    
                 
                  </Row>
                  <Row>
                      <Col md={12} xl={12}>
                             <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Utilita</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col md={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <UtilitaInstallsFuels height='450px'/>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <UtilitaAborts height='450px'/>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                       </Col>
               </Row>
               <Row>
                    
                    {this.state.msd_job_status.map( (result,index) => 
                    <Jobstatus key={index} name='MSD'
                    statuslist={result}
                    />
                    )}
                 
                  </Row>
               <Row>
                      <Col md={12} xl={12}>
                             <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Morrison Data services</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col md={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <MorrisonInstallsFuels height='450px'/>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <MorrisonAborts height='450px'/>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                       </Col>
               </Row>
                

            </Aux>
        );
    }
}

export default Dashboard;