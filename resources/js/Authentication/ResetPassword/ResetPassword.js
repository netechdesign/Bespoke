import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from "react-redux";
import './../../assets/scss/style.scss';
import Aux from "./../../hoc/_Aux";
import Breadcrumb from "./../../App/layout/AdminLayout/Breadcrumb";

import back4 from './../../assets/images/bg-images/bg4.jpg';
import { ValidationForm, TextInput, BaseFormControl } from 'react-bootstrap4-form-validation';

import validator from 'validator';
import {resetPassword} from '../../HttpFunctions';
class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email: "",
            error:'',
            visible : true,
            formSubmitting: false,
            loading:'Reset Password',
            redirect: props.location,
        }
        
      }
      handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = (e)=> {
        e.preventDefault();
       
        this.setState({disabled:true});
        this.setState({loading:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        resetPassword({'email':this.state.email})
        .then(res =>{
                        if(res.data.success){
                            let appState = {
                                isLoggedIn: true,
                                user: res.data.data
                              };
                            localStorage.setItem('userData',JSON.stringify(appState));
                            this.props.saveUserdata();
                            this.props.history.push('/');
                        }else{
                            const errorshow =<Alert  variant='danger'>{res.data.data.message}</Alert>;
                            this.setState({error:errorshow})
                           
                            this.setState({disabled:false});
                            this.setState({loading:'Login'});

                            setTimeout(
                                function() {
                                    this.setState({error:''});
                                }.bind(this),
                                2000
                            );
                            
                        }
                   }
        )
        .catch(err =>{
                        console.log(err);
                    }
        )
                          
}
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
                    <div className="row align-items-center w-100 align-items-stretch bg-white">
                        <div className="d-none d-lg-flex col-lg-8 aut-bg-img align-items-center d-flex justify-content-center" style={{backgroundImage: `url(${back4})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
                            <div className="col-md-8">
                                <h1 className="text-white mb-5">Reset Password in {this.props.companyName}</h1>
                                <p className="text-white">Delivering safe customer and consumer outcomes – doing what it takes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 align-items-stret h-100 align-items-center d-flex justify-content-center">
                            <div className=" auth-content text-center">
                                <div className="mb-4">
                                    <i className="feather icon-mail auth-icon"/>
                                </div>
                                <h3 className="mb-4">Reset Password</h3>
                                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                <div className="input-group mb-3">
                                <TextInput
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Email Address"
                                                validator={validator.isEmail}
                                                errorMessage={{validator:"Please enter a valid email"}}
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                       
                                </div>
                                
                                <button disabled={this.state.formSubmitting} className="btn btn-primary mb-4 shadow-2">
                                        {this.state.loading}
                                      
                                    </button>
                                </ValidationForm>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-2">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}


const mapStateToProps = state =>({
    companyName: state.companyName,
    

})
const mapDispatchToProps= dispatch =>({
              saveUserdata(){
                 dispatch({type: 'USER_LOGIN'});
              }
          
       
    
})

export default connect(mapStateToProps,mapDispatchToProps)(ResetPassword);