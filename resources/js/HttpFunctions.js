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

    export const Pemissionlist = parameter => {
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        return axios.post(
            baseurl+'/api/parmission/list',
            {'id':id},
            {
                headers:{'Content-Type':'application/json','Authorization':'Bearer '+auth_token}
            } 
        )
    } 
    export const RoleAdd = role => {
        
        return axios.post(
                        baseurl+'/api/role',
                        {
                            email:role.email,
                            password:role.password,
                            remember_me:role.remember
                        },
                        {
                            headers:{'Content-Type':'application/json'}
                        } 
                    )     

    }
    
