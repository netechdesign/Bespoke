<?php
namespace App\Exports;
use App\User;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;

use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use App\Models\Utilita_job;

class Thursday implements FromView,WithTitle,WithEvents 
{
    public $data;
    public function __construct($data) {
        
      $this->data=$data;
    }

    public function title(): string
        {
            return 'Thursday';
        }
    public function view(): View
    {
        $job =$this->data['work'];
       $on_site_time = date('d/m/Y',strtotime($job[0]->schedule_date));
       
        $grouparr=[];
        $InDayInstalls0= array('Days_worked'=>[],'In_day_installs_jobs'=>[],'OOH_jobs'=>[],'total'=>[],'Faults_In_Day'=>[],'Faults_OOH' =>[],'Fuels'=>[],'Aborts'=>[],'df'=>[]);
        $InDayInstalls = array('Days_worked'=>[],'In_day_installs_jobs'=>[],'OOH_jobs'=>[],'total'=>[],'Aborts'=>[],'InstallsJob'=>[],'Fuels'=>[],'Dual'=>[],'Elec_Only'=>[],'Gas_Only'=>[],'Check_Comms'=>[],'Aborts_Fuels'=>[],'Aborts_Elec_Only'=>[],'Aborts_Gas_Only'=>[],'Aborts_Check_Comms'=>[]);
        
        $engTotal=[];
        $engineerTotal=1;
        $region=[];
         foreach($job as $vl){
            $vl->endtime= (float)str_replace(':','.',$vl->endtime);

           $engWord = explode(" ", $vl->parent_engineer);
           $engineer_total='';
           if(count($engWord)>0){
                  
                  for($i=0;$i < count($engWord);$i++){ 
                       $engineer_total.=substr($engWord[$i],0,1);
                   }
                
           }
           $engineer_total.=' Total';
           if(!in_array($engineer_total,$engTotal)){
            $engTotal[$vl->parent_engineer] = $engineer_total;
           }
                //Days_worked
                if(array_key_exists($vl->parent_engineer,$InDayInstalls['Days_worked']) && array_key_exists($vl->engineer,$InDayInstalls['Days_worked'][$vl->parent_engineer])){
                    
                }else{
                    $engineerTotal +=1;
                }
                    if(array_key_exists($vl->parent_engineer,$InDayInstalls['Days_worked']) && array_key_exists($vl->engineer,$InDayInstalls['Days_worked'][$vl->parent_engineer])){
                      
                        $InDayInstalls['Days_worked'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Days_worked'][$vl->parent_engineer][$vl->engineer]+0;
                        $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer]+0;
                       
                       

                    }else{
                       
                            $InDayInstalls['Days_worked'][$vl->parent_engineer][$vl->engineer]=0;
                            
                            $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer]=0;
                         
                            //  $InDayInstalls['Days_worked'][$vl->parent_engineer][$engineer_total]= $InDayInstalls['Days_worked'][$vl->parent_engineer][$vl->engineer];
                       }

                       if(array_key_exists($vl->parent_engineer,$InDayInstalls0['Days_worked']) ){
                        $InDayInstalls0['Days_worked'][$vl->parent_engineer] = $InDayInstalls0['Days_worked'][$vl->parent_engineer]+0;  
                        $InDayInstalls0['total'][$vl->parent_engineer] = $InDayInstalls0['total'][$vl->parent_engineer]+0;     
                         }else{
                     $InDayInstalls0['Days_worked'][$vl->parent_engineer] = 0;   
                     $InDayInstalls0['total'][$vl->parent_engineer] = 0;         
                         }
               
                        
                //In_day_installs_jobs 
                $borefive=17.00;
            if(array_key_exists($vl->parent_engineer,$InDayInstalls['In_day_installs_jobs']) && array_key_exists($vl->engineer,$InDayInstalls['In_day_installs_jobs'][$vl->parent_engineer])){
                    if($vl->endtime<= $borefive){
                       $InDayInstalls['In_day_installs_jobs'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['In_day_installs_jobs'][$vl->parent_engineer][$vl->engineer]+1;
                       $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer] + 1;
                       $InDayInstalls['Days_worked'][$vl->parent_engineer][$vl->engineer] =1;
                      
                      
                    }                

                    }else{
                        if($vl->endtime<= $borefive){
                        $InDayInstalls['In_day_installs_jobs'][$vl->parent_engineer][$vl->engineer]=1;
                        $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer] + 1;
                        $InDayInstalls['Days_worked'][$vl->parent_engineer][$vl->engineer] =1;
                       
                        }else{
                            $InDayInstalls['In_day_installs_jobs'][$vl->parent_engineer][$vl->engineer]=0;
                        }
                    }   
          //-----------------------------------
                    if(array_key_exists($vl->parent_engineer,$InDayInstalls0['In_day_installs_jobs'])){
                        if($vl->endtime<= $borefive){
                           $InDayInstalls0['In_day_installs_jobs'][$vl->parent_engineer] = $InDayInstalls0['In_day_installs_jobs'][$vl->parent_engineer]+1;
                           $InDayInstalls0['total'][$vl->parent_engineer] = $InDayInstalls0['total'][$vl->parent_engineer] + 1;
                           $InDayInstalls0['Days_worked'][$vl->parent_engineer] = count($InDayInstalls['Days_worked'][$vl->parent_engineer]);
                           $region[$vl->region][$vl->parent_engineer][$vl->engineer] =  1;
                        //    if(isset($region[$vl->region]) && array_key_exists($vl->parent_engineer,$region[$vl->region])){
                                 
                        //          $region[$vl->region][$vl->parent_engineer][$vl->engineer] =  1;
                        //    }else{
                        //     $region[$vl->region][$vl->parent_engineer] = 1;
                        //    }                          
                       
                           }                
    
                        }else{
                            if($vl->endtime<= $borefive){
                            $InDayInstalls0['In_day_installs_jobs'][$vl->parent_engineer]=1;
                            $InDayInstalls0['total'][$vl->parent_engineer] = $InDayInstalls0['total'][$vl->parent_engineer] + 1;
                            $InDayInstalls0['Days_worked'][$vl->parent_engineer] =count($InDayInstalls['Days_worked'][$vl->parent_engineer]);
                            $region[$vl->region][$vl->parent_engineer][$vl->engineer] =  1;
                            }else{
                                $InDayInstalls0['In_day_installs_jobs'][$vl->parent_engineer]=0;
                               
                            }
                        }   
                //Faults In Day bfore 5 mp

                if(array_key_exists($vl->parent_engineer,$InDayInstalls0['Faults_In_Day'])){
                    if($vl->fault!='' && $vl->endtime<= $borefive){
                       $InDayInstalls0['Faults_In_Day'][$vl->parent_engineer] = $InDayInstalls0['Faults_In_Day'][$vl->parent_engineer]+1;
                    
                       
                       }                

                    }else{
                        if($vl->fault!='' && $vl->endtime<= $borefive){
                        $InDayInstalls0['Faults_In_Day'][$vl->parent_engineer]=1;
                       
                       
                        }else{
                            $InDayInstalls0['Faults_In_Day'][$vl->parent_engineer]=0;
                           
                        }
                    }   



                //OOH_jobs 
                if(array_key_exists($vl->parent_engineer,$InDayInstalls['OOH_jobs']) && array_key_exists($vl->engineer,$InDayInstalls['OOH_jobs'][$vl->parent_engineer])){
                    if($vl->endtime > $borefive){
                    $InDayInstalls['OOH_jobs'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['OOH_jobs'][$vl->parent_engineer][$vl->engineer]+1;
                    $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer] + 1;
                    $InDayInstalls['Days_worked'][$vl->parent_engineer][$vl->engineer] =count($InDayInstalls['Days_worked'][$vl->parent_engineer]);
                    $region[$vl->region][$vl->parent_engineer][$vl->engineer] =  1;
                    }

                    }else{
                        if($vl->endtime > $borefive){
                        $InDayInstalls['OOH_jobs'][$vl->parent_engineer][$vl->engineer]=1;
                        $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['total'][$vl->parent_engineer][$vl->engineer] + 1;
                        $InDayInstalls['Days_worked'][$vl->parent_engineer][$vl->engineer] =count($InDayInstalls['Days_worked'][$vl->parent_engineer]);
                        $region[$vl->region][$vl->parent_engineer][$vl->engineer] =  1;
                        }else{
                            $InDayInstalls['OOH_jobs'][$vl->parent_engineer][$vl->engineer]=0;
                        }
                    }
                    //---------------------------
                    if(array_key_exists($vl->parent_engineer,$InDayInstalls0['OOH_jobs'])){
                        if($vl->endtime > $borefive){
                        $InDayInstalls0['OOH_jobs'][$vl->parent_engineer] = $InDayInstalls0['OOH_jobs'][$vl->parent_engineer]+1;
                        $InDayInstalls0['total'][$vl->parent_engineer] = $InDayInstalls0['total'][$vl->parent_engineer] + 1;
                        $InDayInstalls0['Days_worked'][$vl->parent_engineer] =count($InDayInstalls['Days_worked'][$vl->parent_engineer]);
                       
                        }
    
                        }else{
                            if($vl->endtime > $borefive){
                            $InDayInstalls0['OOH_jobs'][$vl->parent_engineer]=1;
                            $InDayInstalls0['total'][$vl->parent_engineer] =1;
                            $InDayInstalls0['Days_worked'][$vl->parent_engineer] =count($InDayInstalls['Days_worked'][$vl->parent_engineer]);
                            }else{
                                $InDayInstalls0['OOH_jobs'][$vl->parent_engineer]=0;
                               
                            }
                        } 
                //Faults_OOH   
                if(array_key_exists($vl->parent_engineer,$InDayInstalls0['Faults_OOH'])){
                    if($vl->fault!='' && $vl->endtime > $borefive){
                    $InDayInstalls0['Faults_OOH'][$vl->parent_engineer] = $InDayInstalls0['Faults_OOH'][$vl->parent_engineer]+1;
                   
                    }

                    }else{
                        if($vl->fault!='' && $vl->endtime > $borefive){
                        $InDayInstalls0['Faults_OOH'][$vl->parent_engineer]=1;
                       
                    
                        }else{
                            $InDayInstalls0['Faults_OOH'][$vl->parent_engineer]=0;
                           
                        }
                    }         
                //Aborts 
                if(array_key_exists($vl->parent_engineer,$InDayInstalls['Aborts']) && array_key_exists($vl->engineer,$InDayInstalls['Aborts'][$vl->parent_engineer])){
                    if($vl->job_status =='Aborted'){
                    $InDayInstalls['Aborts'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Aborts'][$vl->parent_engineer][$vl->engineer]+1;
                    $InDayInstalls0['Aborts'][$vl->parent_engineer] = $InDayInstalls0['Aborts'][$vl->parent_engineer]+1;
                    $InDayInstalls0['df_Aborts'][$vl->region] = $InDayInstalls0['df_Aborts'][$vl->region] + 1;
                    }
                   

                    }else{
                        
                        if($vl->job_status =='Aborted'){
                               $InDayInstalls['Aborts'][$vl->parent_engineer][$vl->engineer]=1;
                               $InDayInstalls0['Aborts'][$vl->parent_engineer] = 1;
                               $InDayInstalls0['df_Aborts'][$vl->region] = 1;
                               
                          }else{
                            $InDayInstalls['Aborts'][$vl->parent_engineer][$vl->engineer]=0;
                            if(!isset($InDayInstalls0['Aborts'][$vl->parent_engineer])){
                                  $InDayInstalls0['Aborts'][$vl->parent_engineer] = 0;
                                  $InDayInstalls0['df_Aborts'][$vl->region] = 0;
                            }
                            
                          }
                       
                       
                    }
                //Installs (Jobs)
                if(array_key_exists($vl->parent_engineer,$InDayInstalls['InstallsJob']) && array_key_exists($vl->engineer,$InDayInstalls['InstallsJob'][$vl->parent_engineer])){
                    if($vl->job_status =='Completed'){
                    $InDayInstalls['InstallsJob'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['InstallsJob'][$vl->parent_engineer][$vl->engineer]+1;
                    $InDayInstalls0['df_InstallsJob'][$vl->region] = $InDayInstalls0['df_InstallsJob'][$vl->region] + 1;
                    }
                   

                    }else{
                        
                        if($vl->job_status =='Completed'){
                               $InDayInstalls['InstallsJob'][$vl->parent_engineer][$vl->engineer]=1;
                               $InDayInstalls0['df_InstallsJob'][$vl->region] = 1;
                          }else{
                            $InDayInstalls['InstallsJob'][$vl->parent_engineer][$vl->engineer]=0;
                            $InDayInstalls0['df_InstallsJob'][$vl->region] = 0;
                          }
                       
                       
                    } 
                
                    //Dual for job_type Dual Fuel Install and job_status Completed
                if(array_key_exists($vl->parent_engineer,$InDayInstalls['Dual']) && array_key_exists($vl->engineer,$InDayInstalls['Dual'][$vl->parent_engineer])){
                    if($vl->job_status =='Completed' && $vl->job_type=='Dual Fuel Install'){
                    $InDayInstalls['Dual'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Dual'][$vl->parent_engineer][$vl->engineer]+1;
                    $InDayInstalls0['df_Dual'][$vl->region] = $InDayInstalls0['df_Dual'][$vl->region] +1;
                
                    }
                   

                    }else{
                        
                        if($vl->job_status =='Completed' && $vl->job_type=='Dual Fuel Install'){
                               $InDayInstalls['Dual'][$vl->parent_engineer][$vl->engineer]=1;
                               $InDayInstalls0['df_Dual'][$vl->region] = 1;
                           
                          }else{
                            $InDayInstalls['Dual'][$vl->parent_engineer][$vl->engineer]=0;
                            $InDayInstalls0['df_Dual'][$vl->region] = 0;
                          }
                       
                       
                    }  
                    if(!isset($InDayInstalls0['Fuels'][$vl->parent_engineer])){
                        $InDayInstalls0['Fuels'][$vl->parent_engineer]=0;
                      
                         }
                    if($vl->job_status =='Completed'){
                         if($vl->job_type=='Dual Fuel Install'){
                        
                        $InDayInstalls0['Fuels'][$vl->parent_engineer]= $InDayInstalls0['Fuels'][$vl->parent_engineer]+2;
                        }else{
                            $InDayInstalls0['Fuels'][$vl->parent_engineer]= $InDayInstalls0['Fuels'][$vl->parent_engineer]+1;
                        }
                    }
                    //Fuels for job_type Dual Fuel Install and job_status Completed
                    
                if(array_key_exists($vl->parent_engineer,$InDayInstalls['Fuels']) && array_key_exists($vl->engineer,$InDayInstalls['Fuels'][$vl->parent_engineer])){
                    if($vl->job_status =='Completed' && $vl->job_type=='Dual Fuel Install'){
                    $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]+2;
                    
                 
                    }
                   

                    }else{
                        
                        if($vl->job_status =='Completed' && $vl->job_type=='Dual Fuel Install'){
                               $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]=2;
                       
                          }else{
                            
                            $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]=0;
                            
                           if(!isset($InDayInstalls0['Fuels'][$vl->parent_engineer])){
                       
                          
                             }
                          }
                       
                       
                    }  
                    
                    //Elec_Only for job_type Elec Only Install and job_status Completed
                if(array_key_exists($vl->parent_engineer,$InDayInstalls['Elec_Only']) && array_key_exists($vl->engineer,$InDayInstalls['Elec_Only'][$vl->parent_engineer])){
                    if($vl->job_status =='Completed' && $vl->job_type=='Elec Only Install'){
                    $InDayInstalls['Elec_Only'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Elec_Only'][$vl->parent_engineer][$vl->engineer]+1;
                  
                    
                    if(array_key_exists($vl->parent_engineer,$InDayInstalls['Fuels']) && array_key_exists($vl->engineer,$InDayInstalls['Fuels'][$vl->parent_engineer])){
                        $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]+1;
                  
                    }else{
                            $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]=1;
                  
                           
                        } 
                    }
                   

                    }else{
                        
                        if($vl->job_status =='Completed' && $vl->job_type=='Elec Only Install'){
                               $InDayInstalls['Elec_Only'][$vl->parent_engineer][$vl->engineer]=1;
                            
                               if(array_key_exists($vl->parent_engineer,$InDayInstalls['Fuels']) && array_key_exists($vl->engineer,$InDayInstalls['Fuels'][$vl->parent_engineer])){
                                $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]+1;
                            
                            }else{
                                    $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]=1;
                            
                                   
                                } 
                          }else{
                            $InDayInstalls['Elec_Only'][$vl->parent_engineer][$vl->engineer]=0;
                            
                          }
                       
                       
                    }

     //Gas_Only for job_type Gas Only Install and job_status Completed
    if(array_key_exists($vl->parent_engineer,$InDayInstalls['Gas_Only']) && array_key_exists($vl->engineer,$InDayInstalls['Gas_Only'][$vl->parent_engineer])){
        if($vl->job_status =='Completed' && $vl->job_type=='Gas Only Install'){
        $InDayInstalls['Gas_Only'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Gas_Only'][$vl->parent_engineer][$vl->engineer]+1;
      

            if(array_key_exists($vl->parent_engineer,$InDayInstalls['Fuels']) && array_key_exists($vl->engineer,$InDayInstalls['Fuels'][$vl->parent_engineer])){
                $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]+1;
      
            }else{
                    $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]=1;
      
                
                } 
        }
    

        }else{
            
            if($vl->job_status =='Completed' && $vl->job_type=='Gas Only Install'){
                $InDayInstalls['Gas_Only'][$vl->parent_engineer][$vl->engineer]=1;
            
             if(array_key_exists($vl->parent_engineer,$InDayInstalls['Fuels']) && array_key_exists($vl->engineer,$InDayInstalls['Fuels'][$vl->parent_engineer])){
                $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]+1;
            
            }else{
                    $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]=1;
            
                   
                } 
            }else{
                $InDayInstalls['Gas_Only'][$vl->parent_engineer][$vl->engineer]=0;
                if(!isset($InDayInstalls0['Fuels'][$vl->parent_engineer])){
            
                  
                     }
            }
        
        
        }
        
    //Check_Comms for job_type Gas Only Install and job_status Completed
    if(array_key_exists($vl->parent_engineer,$InDayInstalls['Check_Comms']) && array_key_exists($vl->engineer,$InDayInstalls['Check_Comms'][$vl->parent_engineer])){
        if($vl->job_status =='Completed' && $vl->job_type=='Check Comms'){
        $InDayInstalls['Check_Comms'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Check_Comms'][$vl->parent_engineer][$vl->engineer]+1;
       
       if(array_key_exists($vl->parent_engineer,$InDayInstalls['Fuels']) && array_key_exists($vl->engineer,$InDayInstalls['Fuels'][$vl->parent_engineer])){
        $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]+1;
       
    }else{
            $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]=1;
       
           
        }   
    }
    

        }else{
            
            if($vl->job_status =='Completed' && $vl->job_type=='Check Comms'){
                $InDayInstalls['Check_Comms'][$vl->parent_engineer][$vl->engineer]=1;
             
              if(array_key_exists($vl->parent_engineer,$InDayInstalls['Fuels']) && array_key_exists($vl->engineer,$InDayInstalls['Fuels'][$vl->parent_engineer])){
                $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]+1;
             
            }else{
                    $InDayInstalls['Fuels'][$vl->parent_engineer][$vl->engineer]=1;
             
                   
                } 
                
            }else{
                $InDayInstalls['Check_Comms'][$vl->parent_engineer][$vl->engineer]=0;
                if(!isset($InDayInstalls0['Fuels'][$vl->parent_engineer])){
             
                  
                     }
            }
        
        
        }
        
        //Aborts Dual = Aborts Fuels for job_type Dual Fuel Install and job_status Aborted
        if(array_key_exists($vl->parent_engineer,$InDayInstalls['Aborts_Fuels']) && array_key_exists($vl->engineer,$InDayInstalls['Aborts_Fuels'][$vl->parent_engineer])){
            if($vl->job_status =='Aborted' && $vl->job_type=='Dual Fuel Install'){
            $InDayInstalls['Aborts_Fuels'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Aborts_Fuels'][$vl->parent_engineer][$vl->engineer]+1;
            $InDayInstalls0['df_Aborts_Fuels'][$vl->region] = $InDayInstalls0['df_Aborts_Fuels'][$vl->region] +1;
         
            }
        

            }else{
                
                if($vl->job_status =='Aborted' && $vl->job_type=='Dual Fuel Install'){
                    $InDayInstalls['Aborts_Fuels'][$vl->parent_engineer][$vl->engineer]=1;
                    $InDayInstalls0['df_Aborts_Fuels'][$vl->region] = 1;
                 
                 
                }else{
                    $InDayInstalls['Aborts_Fuels'][$vl->parent_engineer][$vl->engineer]=0;
                    $InDayInstalls0['df_Aborts_Fuels'][$vl->region] = 0;
               
                }
            
            
            }  
        
            //Aborts_Elec_Only for job_type Elec Only Install and job_status Aborted
            if(array_key_exists($vl->parent_engineer,$InDayInstalls['Aborts_Elec_Only']) && array_key_exists($vl->engineer,$InDayInstalls['Aborts_Elec_Only'][$vl->parent_engineer])){
                if($vl->job_status =='Aborted' && $vl->job_type=='Elec Only Install'){
                $InDayInstalls['Aborts_Elec_Only'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Aborts_Elec_Only'][$vl->parent_engineer][$vl->engineer]+1;
              
                }
            

                }else{
                    
                    if($vl->job_status =='Aborted' && $vl->job_type=='Elec Only Install'){
                        $InDayInstalls['Aborts_Elec_Only'][$vl->parent_engineer][$vl->engineer]=1;
                    
                    }else{
                        $InDayInstalls['Aborts_Elec_Only'][$vl->parent_engineer][$vl->engineer]=0;
                     
                    }
                
                
                }

                //Aborts_Gas_Only for job_type Gas Only Install and job_status Aborted
    if(array_key_exists($vl->parent_engineer,$InDayInstalls['Aborts_Gas_Only']) && array_key_exists($vl->engineer,$InDayInstalls['Aborts_Gas_Only'][$vl->parent_engineer])){
        if($vl->job_status =='Aborted' && $vl->job_type=='Gas Only Install'){
        $InDayInstalls['Aborts_Gas_Only'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Aborts_Gas_Only'][$vl->parent_engineer][$vl->engineer]+1;
        
        }
    

        }else{
            
            if($vl->job_status =='Aborted' && $vl->job_type=='Gas Only Install'){
                $InDayInstalls['Aborts_Gas_Only'][$vl->parent_engineer][$vl->engineer]=1;
           
            }else{
                $InDayInstalls['Aborts_Gas_Only'][$vl->parent_engineer][$vl->engineer]=0;
            
            }
        
        
        }
        
    //Aborts_Check_Comms for job_type Gas Only Install and job_status Aborted
    if(array_key_exists($vl->parent_engineer,$InDayInstalls['Aborts_Check_Comms']) && array_key_exists($vl->engineer,$InDayInstalls['Aborts_Check_Comms'][$vl->parent_engineer])){
        if($vl->job_status =='Aborted' && $vl->job_type=='Check Comms'){
        $InDayInstalls['Aborts_Check_Comms'][$vl->parent_engineer][$vl->engineer] = $InDayInstalls['Aborts_Check_Comms'][$vl->parent_engineer][$vl->engineer]+1;
      
        }
    

        }else{
            
            if($vl->job_status =='Aborted' && $vl->job_type=='Gas Only Install'){
                $InDayInstalls['Aborts_Check_Comms'][$vl->parent_engineer][$vl->engineer]=1;
            
            }else{
                $InDayInstalls['Aborts_Check_Comms'][$vl->parent_engineer][$vl->engineer]=0;
            
            }
        
        
        }
    

                    //Total_england
                    //  $InDayInstalls['OOH_jobs']['Total_england']=1;   

            }
            
            $work =array_keys($InDayInstalls);
        
            
            foreach( $work as $wvl){ 
                
            foreach($engTotal as $k => $vl){
                
                if(!empty($InDayInstalls[$wvl][$k])){
                    $count=0; 
                    
                    foreach($InDayInstalls[$wvl][$k] as $n){
                        
                        $count+=$n;
                    }
                    $InDayInstalls[$wvl][$k][$vl]=$count;
                    
                }
            
            }
            }
            
            foreach( $engTotal as $wvl){ 
                $engineerTotal += 1;
            }
            $Days_worked_total=0;  
            $In_day_installs_jobs_total=0;
            $OOH_jobs_total=0;
            $Total_total=0;
            $Faults_In_Day_total=0;
            $Faults_OOH_total=0;
            $Fuels_total=0;
           // $Dual_total=0;
            $Aborts_total=0;
            $df_total=0;  
            foreach($region as $ky => $vl){
                $total_region=0;
                 foreach($vl as $total){
                     
                    $total_region = $total_region +  count($total);
                 }
                 $InDayInstalls0['Days_worked'][$ky] =$total_region;
                 $Days_worked_total = $Days_worked_total + $InDayInstalls0['Days_worked'][$ky];   
            }
         // dd($InDayInstalls0);
          //  $InDayInstalls0['Days_worked'][$vl->region] = count($region[$vl->region]);
          $df_region=[];
            foreach($job as $vl){

                $engWord = explode(" ", $vl->parent_engineer);
                $engineer_total='';
                if(count($engWord)>0){

                for($i=0;$i < count($engWord);$i++){ 
                $engineer_total.=substr($engWord[$i],0,1);
                }

                }
                $engineer_total.=' Total';
                if(!array_key_exists($vl->parent_engineer,$InDayInstalls0['df'])){
                $ttl= $InDayInstalls['Aborts'][$vl->parent_engineer][$engineer_total] + $InDayInstalls['InstallsJob'][$vl->parent_engineer][$engineer_total]; 
                $sum= ($InDayInstalls['Dual'][$vl->parent_engineer][$engineer_total]+$InDayInstalls['Aborts_Fuels'][$vl->parent_engineer][$engineer_total])*100;
                if($sum>0){
                $InDayInstalls0['df'][$vl->parent_engineer] = round($sum/$ttl,2);
                }else{
                    $InDayInstalls0['df'][$vl->parent_engineer] = 0;
                }
                }
                
                if(!array_key_exists($vl->region,$InDayInstalls0['df'])){
                    $ttl= $InDayInstalls0['df_Aborts'][$vl->region] + $InDayInstalls0['df_InstallsJob'][$vl->region]; 
                   
                    $sum= ($InDayInstalls0['df_Dual'][$vl->region]+$InDayInstalls0['df_Aborts_Fuels'][$vl->region])*100;;
                    if($sum>0){
                    $InDayInstalls0['df'][$vl->region] = round($sum/$ttl,2);
                    }else{
                        $InDayInstalls0['df'][$vl->region] = 0; 
                    }
                    $df_total= + $InDayInstalls0['df'][$vl->parent_engineer];
                }
                //$df_region[$vl->region]

                if(array_key_exists($vl->region,$InDayInstalls0['Days_worked']) ){
                   // $InDayInstalls0['Days_worked'][$vl->region] = $InDayInstalls0['Days_worked'][$vl->region]+0;     
                   //$Days_worked_total+=0;  

                }else{
                    $InDayInstalls0['Days_worked'][$vl->region] = 0; 
                    $Days_worked_total+=0;      
                }
               

                $borefive=17.00;
            
                if(array_key_exists($vl->region,$InDayInstalls0['In_day_installs_jobs']) ){
                    if($vl->endtime<= $borefive){
                    $InDayInstalls0['In_day_installs_jobs'][$vl->region] = $InDayInstalls0['In_day_installs_jobs'][$vl->region]+1;  
                    $In_day_installs_jobs_total+=1;
                    
                    $InDayInstalls0['total'][$vl->region] = $InDayInstalls0['total'][$vl->region]+1;     
                    $Total_total+=1;  

                    }     
                }else{
                    if($vl->endtime<= $borefive){
                    $InDayInstalls0['In_day_installs_jobs'][$vl->region] = 1; 
                    $In_day_installs_jobs_total+=1;

                    $InDayInstalls0['total'][$vl->region] = 1; 
                        $Total_total+=1; 
                    
                    }else{
                        $InDayInstalls0['In_day_installs_jobs'][$vl->region] = 0; 
                    $In_day_installs_jobs_total+=0;

                    $InDayInstalls0['total'][$vl->region] = 0; 
                        $Total_total+=0; 
                    }      
                }

                if(array_key_exists($vl->region,$InDayInstalls0['OOH_jobs'])){
                    if($vl->endtime > $borefive){
                    $InDayInstalls0['OOH_jobs'][$vl->region] = $InDayInstalls0['OOH_jobs'][$vl->region]+1;
                    $OOH_jobs_total+=1;
                    
                    $InDayInstalls0['total'][$vl->region] = $InDayInstalls0['total'][$vl->region]+1;     
                    $Total_total+=1;

                   
                    }
                    }
                    else{
                        if($vl->endtime > $borefive){
                        $InDayInstalls0['OOH_jobs'][$vl->region]=1;
                        $OOH_jobs_total+=1;

                        $InDayInstalls0['total'][$vl->region] = 1; 
                        $Total_total+=1; 
                        
                        }else{
                            $InDayInstalls0['OOH_jobs'][$vl->region]=0;
                            $OOH_jobs_total+=0;

                            $InDayInstalls0['total'][$vl->region] = 0; 
                        $Total_total+=0; 
                        }
                    }
                
                    if(array_key_exists($vl->region,$InDayInstalls0['Faults_In_Day'])){
                        if($vl->fault!='' && $vl->endtime<= $borefive){
                        $InDayInstalls0['Faults_In_Day'][$vl->region] = $InDayInstalls0['Faults_In_Day'][$vl->region]+1;
                        
                        $Faults_In_Day_total+=1;
                        }                

                        }else{
                            if($vl->fault!='' && $vl->endtime<= $borefive){
                            $InDayInstalls0['Faults_In_Day'][$vl->region]=1;
                            $Faults_In_Day_total+=1;
                        
                            }else{
                                $InDayInstalls0['Faults_In_Day'][$vl->region]=0;
                                $Faults_In_Day_total+=0;
                            
                            }
                        }   


                        if(array_key_exists($vl->region,$InDayInstalls0['Faults_OOH'])){
                            if($vl->fault!='' && $vl->endtime > $borefive){
                            $InDayInstalls0['Faults_OOH'][$vl->region] = $InDayInstalls0['Faults_OOH'][$vl->region]+1;
                            $Faults_OOH_total+=1;
                            }
        
                            }else{
                                if($vl->fault!='' && $vl->endtime > $borefive){
                                $InDayInstalls0['Faults_OOH'][$vl->region]=1;
                                $Faults_OOH_total+=1;
                            
                                }else{
                                    $InDayInstalls0['Faults_OOH'][$vl->region]=0;
                                    $Faults_OOH_total+=0;
                                }
                            } 


                            if(array_key_exists($vl->region,$InDayInstalls0['Fuels'])){
                                
                                if($vl->job_status =='Completed'){
                                    if($vl->job_type=='Dual Fuel Install'){
                                        $InDayInstalls0['Fuels'][$vl->region] = $InDayInstalls0['Fuels'][$vl->region]+2;
                                        $Fuels_total+=2;
                                        }else{
                                            $InDayInstalls0['Fuels'][$vl->region] = $InDayInstalls0['Fuels'][$vl->region]+1;
                                            $Fuels_total+=1;
                                        }
                                }
                                }else{
                                    if($vl->job_status =='Completed'){
                                        if($vl->job_type=='Dual Fuel Install'){
                                            $InDayInstalls0['Fuels'][$vl->region] = 2;
                                            $Fuels_total+=2;
                                            }else{
                                                $InDayInstalls0['Fuels'][$vl->region] = 1;
                                                $Fuels_total+=1;
                                            }
                                    }
                                     
                                } 

                                if(array_key_exists($vl->region,$InDayInstalls0['Aborts'])){
                                    if($vl->job_status =='Aborted'){
                                        $InDayInstalls0['Aborts'][$vl->region] =  $InDayInstalls0['Aborts'][$vl->region]+1;
                                   
                                        $Aborts_total+=1;
                                    }
                                   
                
                                    }else{
                                        
                                        if($vl->job_status =='Aborted'){
                                            $InDayInstalls0['Aborts'][$vl->region]=1;
                                            $Aborts_total=1;
                                          }else{
                                            $InDayInstalls0['Aborts'][$vl->region]=0;
                                            $Aborts_total=0;
                                          }
                                       
                                       
                                    }
                            

                
                
            }
            
            $InDayInstalls0['Days_worked']['Total'] = $Days_worked_total; 
            $InDayInstalls0['In_day_installs_jobs']['Total'] = $In_day_installs_jobs_total; 
            $InDayInstalls0['OOH_jobs']['Total'] = $OOH_jobs_total; 
            $InDayInstalls0['total']['Total'] = $Total_total; 
            $InDayInstalls0['Faults_In_Day']['Total'] = $Faults_In_Day_total; 
            $InDayInstalls0['Faults_OOH']['Total'] = $Faults_OOH_total; 
            $InDayInstalls0['Fuels']['Total'] = $Fuels_total; 
            $InDayInstalls0['Aborts']['Total']=$Aborts_total;
            $InDayInstalls0['df']['Total'] = $df_total;
            
          // dd($InDayInstalls0);
             
            $this->data['engineerTotal'] = $engineerTotal;
            $this->data['engineerData'] = $InDayInstalls;
            return view('reports.day', ['data' => $InDayInstalls,'table1'=>$InDayInstalls0,'on_site_time'=>$on_site_time]);
        }
        

        public function registerEvents(): array
    {

        return [
            AfterSheet::class    => function(AfterSheet $event) {
    
    //table 1


    $site_engineer = 3 * count($this->data['site_engineer']);
    $current_column = 'B';
    $subject_data = 10 + $site_engineer;

    for($i=0; $i < $subject_data; $i++) {
    $current_column; // Will be C, D, E, etc...
    $current_column++; // Increment letter
    }

                $event->sheet->styleCells(
                    'B5:'.$current_column.'6',
                    ['fill' => [
                            'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                            'startColor' => [
                                'rgb' => 'D3D3D3',
                            ]           
                        ],

                    ]
                );

                $event->sheet->styleCells(
                    'B5:C17',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );
                $event->sheet->styleCells(
                    'D5:F17',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );
                $event->sheet->styleCells(
                    'G5:I17',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );
                $event->sheet->styleCells(
                    'J5:L17',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );
                $event->sheet->styleCells(
                    'M5:O17',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );
                $event->sheet->styleCells(
                    'P5:R17',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );
                $event->sheet->styleCells(
                    'S5:U17',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );
    //table 2

            //  dd($this->data['engineerData']['Days_worked']);
            
            
                $Days_worked= $this->data['engineerData']['Days_worked'];
                $col= 'C';
                foreach($Days_worked  as $d){
                    $start=$col;
                //  echo '<br>';
                    for($i=0; $i < count($d); $i++) {
                        // Will be C, D, E, etc...
                        $col++; // Increment letter
                        }
                    //   echo $col.count($d).'<br>';
                    $event->sheet->styleCells(
                        $start.'21:'.$col.'27',
                        [
                        //Set bordr Style
                        'borders' => [ 
                            'outline' => [
                                'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                                'color' => ['argb' => '0000'],
                            ],
    
                        ],
                        ]
                    );
    
                    $event->sheet->styleCells(
                        $start.'29:'.$col.'34',
                        [
                        //Set bordr Style
                        'borders' => [ 
                            'outline' => [
                                'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                                'color' => ['argb' => '0000'],
                            ],
        
                        ],
                        ]
                    );
                    $event->sheet->styleCells(
                        $start.'37:'.$col.'41',
                        [
                        //Set bordr Style
                        'borders' => [ 
                            'outline' => [
                                'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                                'color' => ['argb' => '0000'],
                            ],
        
                        ],
                        ]
                    );
                    $event->sheet->styleCells(
                        $start.'44:'.$col.'47',
                        [
                        //Set bordr Style
                        'borders' => [ 
                            'outline' => [
                                'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                                'color' => ['argb' => '0000'],
                            ],
        
                        ],
                        ]
                    );
                }
            $event->sheet->styleCells(
                $col.'21:'.$col.'27',
                [
                //Set bordr Style
                'borders' => [ 
                    'outline' => [
                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                        'color' => ['argb' => '0000'],
                    ],

                ],
                ]
            );
            

                $event->sheet->styleCells(
                    'C21:C27',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => 'FFFFFF'],
                        ],

                    ],
                    ]
                );
                
                $event->sheet->styleCells(
                    'B21:C27',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );

                


    $current_column = 'B';

    for($i=0; $i < $this->data['engineerTotal']; $i++) {
    $current_column; // Will be C, D, E, etc...
    $current_column++; // Increment letter
    }
                $event->sheet->styleCells(
                    'B21:'.$current_column.'21',
                    ['fill' => [
                            'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                            'startColor' => [
                                'rgb' => 'D3D3D3',
                            ]           
                        ],
                        //Set font style
                        'font' => [
                            'size'      =>  10,
                        // 'bold'      =>  true,
                        ],

                    ]
                );
    //table 3 Installs (Jobs)


            //  dd($this->data['engineerData']['Days_worked']);
            
            
            $event->sheet->styleCells(
            $col.'29:'.$col.'34',
            [
            //Set bordr Style
            'borders' => [ 
                'outline' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['argb' => '0000'],
                ],

            ],
            ]
        );
            

            $event->sheet->styleCells(
                'C29:C34',
                [
                //Set bordr Style
                'borders' => [ 
                    'outline' => [
                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                        'color' => ['argb' => 'FFFFFF'],
                    ],

                ],
                ]
            );
            
            $event->sheet->styleCells(
                'B29:C34',
                [
                //Set bordr Style
                'borders' => [ 
                    'outline' => [
                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                        'color' => ['argb' => '0000'],
                    ],

                ],
                ]
            );

    //table 4 Aborts
            
            
            $event->sheet->styleCells(
            $col.'37:'.$col.'41',
            [
            //Set bordr Style
            'borders' => [ 
                'outline' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['argb' => '0000'],
                ],

            ],
            ]
        );
            

            $event->sheet->styleCells(
                'C37:C41',
                [
                //Set bordr Style
                'borders' => [ 
                    'outline' => [
                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                        'color' => ['argb' => 'FFFFFF'],
                    ],

                ],
                ]
            );
            
            $event->sheet->styleCells(
                'B37:C41',
                [
                //Set bordr Style
                'borders' => [ 
                    'outline' => [
                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                        'color' => ['argb' => '0000'],
                    ],

                ],
                ]
            );
 //table %
            
            
 $event->sheet->styleCells(
    $col.'44:'.$col.'47',
    [
    //Set bordr Style
    'borders' => [ 
        'outline' => [
            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
            'color' => ['argb' => '0000'],
        ],

    ],
    ]
);
    

    $event->sheet->styleCells(
        'C44:C47',
        [
        //Set bordr Style
        'borders' => [ 
            'outline' => [
                'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                'color' => ['argb' => 'FFFFFF'],
            ],

        ],
        ]
    );
    
    $event->sheet->styleCells(
        'B44:C47',
        [
        //Set bordr Style
        'borders' => [ 
            'outline' => [
                'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                'color' => ['argb' => '0000'],
            ],

        ],
        ]
    );

            
            
    /*
                $event->sheet->styleCells(
                    'R21:R29',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );
                $event->sheet->styleCells(
                    'S21:Z29',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );

                $event->sheet->styleCells(
                    'AA21:AA29',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );
                
                $event->sheet->styleCells(
                    'AB21:AJ29',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );

                $event->sheet->styleCells(
                    'AK21:AK29',
                    [
                    //Set bordr Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '0000'],
                        ],

                    ],
                    ]
                );
                */
            },
        ];
    }
}
?>