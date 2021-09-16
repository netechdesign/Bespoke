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
use App\Models\Job_lookup;
use App\Models\Engineer_lookup;

class Smssheet implements FromView,WithTitle,WithEvents 
{
    public $data;
    public $output;
    public function __construct($data) {
        
      $this->data=$data;
    }

    public function title(): string
        {
            return 'Smssheet';
        }
    public function view(): View
    {
        $team=[];
        $job =$this->data;
        $total_engineer=0;
        $seleceted_days = 0;
      if(isset($_REQUEST['start_date'])){
        $start_date = strtotime(str_replace('/', '-', $_REQUEST['start_date']));
      }
      if(isset($_REQUEST['end_date'])){
        $enfday_date=strtotime(str_replace('/', '-', $_REQUEST['end_date']));
        $datediff = $enfday_date - $start_date;
        $seleceted_days = round($datediff / (60 * 60 * 24));
        if($_REQUEST['end_date']==$_REQUEST['start_date']){
            $seleceted_days = 1;
        }
//dd($seleceted_days);
      }
      $national=[];
      $national['total_work_day']=0; 
      $national['total_job']=0;
      $national['completed']=0;
      $national['completed_per']=0;
      $national['aborted']=0;
      $national['aborted_per']=0;
      $national['cancelled']=0;
      $national['pu']=0;
      $national['open']=0;
      $national['pu_day']=0;
      $national['bonus_pus']=0;
      $national['bonus_pus_day']=0;
      $national['bonus']=0;
      $national['bonus_day']=0;
      $national['revenue']=0;
      $national['revenue_day']=0;
      $national['profit']=0;
      $national['profit_day']=0;

        foreach($job as $vl)
        {
            $work_type= ($vl->select_work_type!=''?$vl->select_work_type:$vl->work_type);
            
            
            if($vl->status=='completed'){
                $national['completed'] = $national['completed'] +1;
            }
            if($vl->status=='aborted'){
                $national['aborted'] = $national['aborted'] +1;
            }
            if($vl->status=='cancelled'){
                $national['cancelled'] = $national['cancelled'] +1;
            }
            if($vl->status=='awaiting info' || $vl->status=='arrived' || $vl->status=='received' || $vl->status=='started')
                 {
                $national['open'] = $national['open'] +1;
                }
            
            $national['total_job'] = $national['total_job']+1;
            
            if(isset($team[$vl->regions_sort_name][$vl->engineer_id])){
                 //working_day 
                 
                 if (in_array($vl->appointment_date, $team[$vl->regions_sort_name][$vl->engineer_id]['appointment_date'])) {
                    //$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['working_day']+1;
                }else{
                    $team[$vl->regions_sort_name][$vl->engineer_id]['appointment_date'][] =$vl->appointment_date;
                    $team[$vl->regions_sort_name][$vl->engineer_id]['working_day'] =$team[$vl->regions_sort_name][$vl->engineer_id]['working_day']+1;
                }
                //total
                    $team[$vl->regions_sort_name][$vl->engineer_id]['total_job'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['total_job'])?$team[$vl->regions_sort_name][$vl->engineer_id]['total_job']+1:1);
                //Completed 
                    if($vl->status=='completed'){
                        $team[$vl->regions_sort_name][$vl->engineer_id]['completed'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['completed'])?$team[$vl->regions_sort_name][$vl->engineer_id]['completed']+1:1);
                        //pu
                        $pu_result =Job_lookup::select('pu','revenue')->where('job_type',$work_type)->whereDate('from_date', '<=', $vl->appointment_date)->whereDate('to_date', '>=', $vl->appointment_date)->first();
                        if($pu_result){
                            $team[$vl->regions_sort_name][$vl->engineer_id]['work_type'][] =$work_type;
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu'])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu']+$pu_result->pu:0);
                        $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['revenue'])?$team[$vl->regions_sort_name][$vl->engineer_id]['revenue']+$pu_result->revenue:0);
                        }

                    }
                //cancelled     
                if($vl->status=='cancelled'){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'])?$team[$vl->regions_sort_name][$vl->engineer_id]['cancelled']+1:1);
                 } 
                //aborted
                if($vl->status=='aborted'){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['aborted'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['aborted'])?$team[$vl->regions_sort_name][$vl->engineer_id]['aborted']+1:1);

                    $pu_result =Job_lookup::select('pu_aborted','revenue_aborted')->where('job_type',$work_type)->whereDate('from_date', '<=', $vl->appointment_date)->whereDate('to_date', '>=', $vl->appointment_date)->first();

                    if($pu_result){
                      $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu'])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu']+$pu_result->pu_aborted:0);
                      $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['revenue'])?$team[$vl->regions_sort_name][$vl->engineer_id]['revenue']+$pu_result->revenue_aborted:0);
                    }else{
                     // $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = 0;
                     // $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = 0;
                    }


                 } 
                //awaiting info  
                 if($vl->status=='assigned' || $vl->status=='departed' || $vl->status=='awaiting info' || $vl->status=='arrived' || $vl->status=='received' || $vl->status=='started')
                 {
                    $team[$vl->regions_sort_name][$vl->engineer_id]['open']=(isset($team[$vl->regions_sort_name][$vl->engineer_id]['open'])?$team[$vl->regions_sort_name][$vl->engineer_id]['open']+1:1);
                    }

                //Cost per working day 
                // $cost_per_day = Engineer_lookup::where('engineer_id',$vl->engineer_id)->first();   
                // if($cost_per_day){
                //    $team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day'])?$team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day']+$pu_result->cost:0);
                // }    

            }else{
                //engineer_name
                $total_engineer += 1;
                $team[$vl->regions_sort_name]['regions_engineer_total'] =(isset($team[$vl->regions_sort_name]['regions_engineer_total'])?$team
                [$vl->regions_sort_name]['regions_engineer_total']+1:1);
                    $team[$vl->regions_sort_name][$vl->engineer_id]['engineer_name'] =$vl->engineer;
                    $team[$vl->regions_sort_name][$vl->engineer_id]['appointment_date'][] =$vl->appointment_date;
                    $team[$vl->regions_sort_name][$vl->engineer_id]['working_day'] =1;
                //total
                     $team[$vl->regions_sort_name][$vl->engineer_id]['total_job'] =1;
                //cancelled     
                     if($vl->status=='cancelled'){
                        $team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'] = 1;
                     }else{
                        $team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'] = 0;
                     }
                //aborted
                if($vl->status=='aborted'){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['aborted'] = 1;
                    //pu
                    $pu_result =Job_lookup::select('pu_aborted','revenue_aborted')->where('job_type',$work_type)->whereDate('from_date', '<=', $vl->appointment_date)->whereDate('to_date', '>=', $vl->appointment_date)->first();
                    
                    if($pu_result){
                        $team[$vl->regions_sort_name][$vl->engineer_id]['work_type'][] =$work_type;
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = $pu_result->pu_aborted;
                        $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = $pu_result->revenue_aborted;
                        }else{
                               
                            $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = 0;
                            $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = 0;
                        }
                   }else{
                    $team[$vl->regions_sort_name][$vl->engineer_id]['aborted'] = 0;
                    $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = 0;
                            $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = 0;
                   }
                 if($vl->status=='awaiting info'){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['open'] = 1;
                    }else{
                        $team[$vl->regions_sort_name][$vl->engineer_id]['open'] = 0;
                    }
                //Completed  
                    if($vl->status=='completed'){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['completed'] = 1;
                    //pu
                    $pu_result =Job_lookup::select('pu','revenue')->where('job_type',$work_type)->whereDate('from_date', '<=', $vl->appointment_date)->whereDate('to_date', '>=', $vl->appointment_date)->first();
                    if($pu_result){
                        $team[$vl->regions_sort_name][$vl->engineer_id]['work_type'][] =$work_type;
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = $pu_result->pu;
                        $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = $pu_result->revenue;
                        }else{
                            $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = 0;
                            $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = 0;
                        }
                        
                    }else{
                        $team[$vl->regions_sort_name][$vl->engineer_id]['completed'] = 0; 
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = 0;
                            $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = 0;
                    }
                //awaiting info    
                if($vl->status=='assigned' || $vl->status=='departed' || $vl->status=='awaiting info' || $vl->status=='arrived' || $vl->status=='received' || $vl->status=='started')
                 {
                    $team[$vl->regions_sort_name][$vl->engineer_id]['open'] = 1;
                    }
                //Cost per working day 
                 $cost_per_day = Engineer_lookup::where('engineer_id',$vl->engineer_id)->first();   
                 if($cost_per_day){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day'] = $cost_per_day->cost;
                 }else{
                    $team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day'] = 0;
                 }
                    
            }

            
         }
         //Percentage Calculator

         foreach($job as $vl)
         {
            
             if(isset($team[$vl->regions_sort_name][$vl->engineer_id])){
                 
                
                 //Completed per
                     if($vl->status=='completed'){
                        
                         $team[$vl->regions_sort_name][$vl->engineer_id]['completed_per'] = number_format(($team[$vl->regions_sort_name][$vl->engineer_id]['completed']/($team[$vl->regions_sort_name][$vl->engineer_id]['total_job']-(isset($team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'])?$team[$vl->regions_sort_name][$vl->engineer_id]['cancelled']:0)))*100,2) ;

                         $national['completed_per'] = $team[$vl->regions_sort_name][$vl->engineer_id]['completed_per'] + $national['completed_per'];
                     }else{
                        if(!isset($team[$vl->regions_sort_name][$vl->engineer_id]['completed_per'])){
                         $team[$vl->regions_sort_name][$vl->engineer_id]['completed_per'] =0;
                        }
                       }
                 
                 //aborted per
                 if($vl->status=='aborted'){
                    
                     $team[$vl->regions_sort_name][$vl->engineer_id]['aborted_per'] = number_format(($team[$vl->regions_sort_name][$vl->engineer_id]['aborted']/($team[$vl->regions_sort_name][$vl->engineer_id]['total_job']-(isset($team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'])?$team[$vl->regions_sort_name][$vl->engineer_id]['cancelled']:0)))*100,2) ;

                     $national['aborted_per'] = $team[$vl->regions_sort_name][$vl->engineer_id]['aborted_per'] + $national['aborted_per'];
                  }else{
                   // $team[$vl->regions_sort_name][$vl->engineer_id]['aborted_per'] =0;
                   if(!isset($team[$vl->regions_sort_name][$vl->engineer_id]['aborted_per'])){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['aborted_per'] =0;
                   }
                  }
                    
                //pu_day  
                   if(isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu'])){
                       //$team[$vl->regions_sort_name][$vl->engineer_id]['pu_day'] = number_format(($team[$vl->regions_sort_name][$vl->engineer_id]['pu']/$seleceted_days)/$total_engineer,4) ;
                       
                      // $team[$vl->regions_sort_name][$vl->engineer_id]['pu_day'] = number_format(($team[$vl->regions_sort_name][$vl->engineer_id]['pu']/$seleceted_days)/$team[$vl->regions_sort_name]['regions_engineer_total'],4) ;
                      $total_engineer=1;
                      $team[$vl->regions_sort_name][$vl->engineer_id]['pu_day'] = number_format(($team[$vl->regions_sort_name][$vl->engineer_id]['pu']/$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'])/$total_engineer,4) ;
                     $team[$vl->regions_sort_name][$vl->engineer_id]['regions_engineer_total']=$team[$vl->regions_sort_name]['regions_engineer_total'];
                      
                     //$team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus'] = max(0,$team[$vl->regions_sort_name][$vl->engineer_id]['pu_day']-6);
                      $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus'] = max(0,$team[$vl->regions_sort_name][$vl->engineer_id]['pu']-($team[$vl->regions_sort_name][$vl->engineer_id]['working_day']*6));
                      
                     // $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus']/$seleceted_days;
                      $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus']/$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'];
                      
                      $team[$vl->regions_sort_name][$vl->engineer_id]['bonus'] = ($team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus']*20)+($team[$vl->regions_sort_name][$vl->engineer_id]['working_day']*10);     
                       //=(Bonus PU*20)+10
                      // $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['bonus']/$seleceted_days;
                       $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['bonus']/$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'];
                       
                     // $team[$vl->regions_sort_name][$vl->engineer_id]['revenue_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['revenue']/$seleceted_days;
                       $team[$vl->regions_sort_name][$vl->engineer_id]['revenue_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['revenue']/$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'];
                    }
                 //profit
                 $team[$vl->regions_sort_name][$vl->engineer_id]['profit'] = $team[$vl->regions_sort_name][$vl->engineer_id]['revenue']-(($team[$vl->regions_sort_name][$vl->engineer_id]['working_day']*$team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day'])+$team[$vl->regions_sort_name][$vl->engineer_id]['bonus']);
                 //Profit/Day
                // $team[$vl->regions_sort_name][$vl->engineer_id]['profit_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['profit']/$seleceted_days;
                $team[$vl->regions_sort_name][$vl->engineer_id]['profit_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['profit']/$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'];  
                 
                 $team[$vl->regions_sort_name][$vl->engineer_id]['seleceted_DATE_days'] = $seleceted_days;
            
                
             }
             
             
          }
         foreach($team as $k => $tm){
            foreach($tm as $d => $t){
                if($d!='regions_engineer_total'){
                    if(isset($t['working_day'])){
                        $national['total_work_day'] = $t['working_day'] + $national['total_work_day'];
                        }
                                if(isset($t['pu'])){
                                $national['pu'] = $t['pu'] + $national['pu'];
                                }
                                if(isset($t['pu_day'])){
                                $national['pu_day'] = $t['pu_day'] + $national['pu_day'];
                                }
                                if(isset($t['bonus_pus'])){
                                $national['bonus_pus'] = $t['bonus_pus'] + $national['bonus_pus'];
                                }
                                if(isset($t['bonus_pus_day'])){
                                $national['bonus_pus_day'] = $t['bonus_pus_day'] + $national['bonus_pus_day'];
                                } 
                                if(isset($t['bonus'])){
                                $national['bonus'] = $t['bonus'] + $national['bonus'];
                                }  
                                if(isset($t['bonus_day'])){
                                $national['bonus_day'] = $t['bonus_day'] + $national['bonus_day'];
                                }  

                                if(isset($t['revenue'])){
                                $national['revenue'] = $t['revenue'] + $national['revenue'];
                                }

                                if(isset($t['revenue_day'])){
                                $national['revenue_day'] = $t['revenue_day'] + $national['revenue_day'];
                                }

                                if(isset($t['profit'])){
                                $national['profit'] = $t['profit'] + $national['profit'];
                                }

                                if(isset($t['profit_day'])){
                                $national['profit_day'] = $t['profit_day'] + $national['profit_day'];
                                }
                }
                
            }
         }
       //  echo '<pre/>'; print_r($team['SC1']); exit;
       ksort($team); 
       $this->output = $team;
       
        return view('reports.sms_report', ['data' => $team,'national'=>$national]);
    }    
     

        public function registerEvents(): array
    {

        return [
            AfterSheet::class    => function(AfterSheet $event) {
    
    //table 1


    
    $current_column = 'A';
    $subject_data = 7; //10 + $site_engineer;

    $role=0;
      if(isset($_REQUEST['role'])){
        $role=$_REQUEST['role'];
      }
      if($role==8 || $role==7 || $role==6 || $role==5 || $role==1) {
        $subject_data = 11;
      } 
      if($role==7 || $role==6 || $role==5 || $role==1){
        $subject_data = 17;
      }
    for($i=0; $i < $subject_data; $i++) {
    $current_column; // Will be C, D, E, etc...
    $current_column++; // Increment letter
    }
   // $event->sheet->getActiveSheet()->mergeCells('A1:'.$current_column.'1');
   

    //National Total
    $event->sheet->styleCells(
        'A4:'.$current_column.'5',
        ['fill' => [
                'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                'startColor' => [
                    'rgb' => 'D3D3D3',
                ]           
            ],
        ]
    );
    $row= '7';
    $region= $this->output;
    
    foreach($region  as $k => $d){
        if($k!='regions_engineer_total'){
                $event->sheet->styleCells(
                    'A'.$row.':'.$current_column.$row,
                    ['fill' => [
                            'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                            'startColor' => [
                                'rgb' => 'D3D3D3',
                            ]           
                        ],
                    ]
                );
                $event->sheet->getStyle('A'.$row.':'.$current_column.$row)->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],
              ]);
              //bottom footer 
              $footer=count($region[$k])+$row;
              $event->sheet->styleCells(
                'A'.$footer.':'.$current_column.$footer,
                ['fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => [
                            'rgb' => 'D3D3D3',
                        ]           
                    ],
                ]
            );
            $event->sheet->getStyle('A'.$footer.':'.$current_column.$footer)->applyFromArray([
                'borders' => [
                    'allBorders' => [
                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                        'color' => ['argb' => '000000'],
                    ],
                ],
          ]);
             
              $row = count($region[$k])+$row +2;
        }
            }
            
                /*
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
                */
            },
        ];
    }
}
?>
