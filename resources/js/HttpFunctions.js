import axios from 'axios'
import config from './config';

/**
 *  baseurl  get baseurl
 */
export const baseurl= window.location.origin;

/**
 * Login api request
 * @param {*} user for send Credentials
 */

    export const Login = user => {
        
        return axios.post(
                        baseurl+'/api/user/login',
                        {
                            email:user.email,
                            password:user.password,
                            remember_me:user.remember
                        },
                        {
                            headers:{'Content-Type':'application/json'}
                        } 
                    )     

    }
