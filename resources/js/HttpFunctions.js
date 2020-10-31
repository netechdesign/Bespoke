import axios from 'axios'
import config from './config';
import PNotify from "pnotify/dist/es/PNotify";
/**
 *  baseurl  get baseurl
 */
export const baseurl= window.location.origin;

/**
 * Login api request
 * @param {*} user for send Credentials
 */
    export const  CheckPermission = (page,page_name,history,redirect=true) => {

        
        const {id,parmissions} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
      
        const pages = parmissions.filter((vl,idx) =>{
            if(Object.keys(vl)[0] ==page){
                return vl
            }
        })

        if(pages.length>0){
      const Ischeck =  pages[0][page].filter((v,i)=>{
              if(v['page_name']==page_name){
                  if(v['Ischeck']){
                  return v;
                  }
              }
      })
    
    if(Ischeck.length==0){
        if(redirect){
        history.goBack();
        }
        PNotify.error({
            title: "Permission Error",
            text:config.AccessDeniedMessage,
        });
        return 1;
    }
}else{
    history.goBack(); 
}

    }
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
    
