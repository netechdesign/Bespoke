import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import axios from 'axios'
import ApexCharts from 'apexcharts';

const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
const baseurl= window.location.origin;

class Mdsooh extends React.Component {

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
     
     const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
     const baseurl= window.location.origin;
     const data = new FormData();
     
     data.append('file_id', '1');
     if(this.props.match.params.id){
      data.append('report_for', this.props.match.params.id);  
    }else{
         data.append('report_for', 'day'); 
     }
      document.getElementById("monthtodateHtml").innerHTML ='';
      
      axios.post(baseurl+'/api/utilita/ooh',data,{headers:{'Authorization':'Bearer '+auth_token}}).then(res =>{
        
        document.getElementById("monthtodateHtml").innerHTML = res.data;
        document.getElementById("requestLoder").innerHTML = '';
        });
      

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
                          <div id="monthtodateHtml" style={{'textAlign': 'center'}} >
                            </div>
                          </Col>
                      </Row>
                      
                  </Card.Body>
                </Card>
              </Aux>)
            }
}

export default Mdsooh;