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

class Workmixsheet implements FromView,WithTitle,WithEvents 
{
    public $data;
    public $output;
    public function __construct($data) {
        
      $this->data=$data;
    }

    public function title(): string
        {
            return 'Work Mix';
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
         
      $national['total_job']=0;
      $national['completed']=0;
      $national['completed_per']=0;
      $national['Single_per']=0;
      $national['Dual_per']=0;
      $national['Other_per']=0;
      $national['in_hours_per']=0;
      $national['out_hours_per']=0;

      $national['Single']=0;
      $national['Dual']=0;
      $national['Other']=0;
      $national['in_hours']=0;
      $national['out_hours']=0;
      

        foreach($job as $vl)
        {
            $work_type= ($vl->select_work_type!=''?$vl->select_work_type:$vl->work_type);
            
            
            
            
            
            $national['total_job'] = $national['total_job']+1;
            
            if(isset($team[$vl->teams_engineer_name][$vl->engineer_id])){
                 //working_day 
                 
                 if (in_array($vl->appointment_date, $team[$vl->teams_engineer_name][$vl->engineer_id]['appointment_date'])) {
                    //$team[$vl->teams_engineer_name][$vl->engineer_id]['working_day'] = $team[$vl->teams_engineer_name][$vl->engineer_id]['working_day']+1;
                }else{
                    
                    $team[$vl->teams_engineer_name][$vl->engineer_id]['working_day'] =$team[$vl->teams_engineer_name][$vl->engineer_id]['working_day']+1;
                }
                //total
                    $team[$vl->teams_engineer_name][$vl->engineer_id]['total_job'] = (isset($team[$vl->teams_engineer_name][$vl->engineer_id]['total_job'])?$team[$vl->teams_engineer_name][$vl->engineer_id]['total_job']+1:1);
                //Completed 
                    if($vl->status!='cancelled'){
                        $team[$vl->teams_engineer_name][$vl->engineer_id]['completed'] = (isset($team[$vl->teams_engineer_name][$vl->engineer_id]['completed'])?$team[$vl->teams_engineer_name][$vl->engineer_id]['completed']+1:1);
                        //pu
                        $pu_result =Job_lookup::select('mix','pu','revenue')->where('job_type',$work_type)->first();
                        if($pu_result){
                         $team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix] = (isset($team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix])?$team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix]+1:1);
                        
                        }

                    
                    if($vl->in_hours_start<= $vl->engineer_arrived && $vl->in_hours_end >= $vl->engineer_arrived){
                        $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours'] = (isset($team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours'])?$team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours']+1:1);
                    }else{
                        $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours'] = (isset($team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours'])?$team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours']+1:1);
                    }
                }

            }else{
                //engineer_name
                $total_engineer += 1;
                $team[$vl->teams_engineer_name]['regions_engineer_total'] =(isset($team[$vl->teams_engineer_name]['regions_engineer_total'])?$team
                [$vl->teams_engineer_name]['regions_engineer_total']+1:1);
                    $team[$vl->teams_engineer_name][$vl->engineer_id]['engineer_name'] =$vl->engineer;
                    $team[$vl->teams_engineer_name][$vl->engineer_id]['appointment_date'][] =$vl->appointment_date;
                    $team[$vl->teams_engineer_name][$vl->engineer_id]['working_day'] =1;
                //total
                     $team[$vl->teams_engineer_name][$vl->engineer_id]['total_job'] =1;
                
                //Completed  
                
                if($vl->status!='cancelled'){
                            $team[$vl->teams_engineer_name][$vl->engineer_id]['completed'] = 1;
                        
                            $pu_result =Job_lookup::select('mix','pu','revenue')->where('job_type',$work_type)->first();
                            if($pu_result){
                                
                                if($pu_result->mix=='Single'){
                                 $team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix] =1;
                                }
                                else{
                                    $team[$vl->teams_engineer_name][$vl->engineer_id]['Single'] = 0;
                                }
                                if($pu_result->mix=='Dual'){
                                    $team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix] =1;
                                  }  else{
                                       $team[$vl->teams_engineer_name][$vl->engineer_id]['Dual'] =0;
                                   }
                                   if($pu_result->mix=='Other'){
                                    $team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix] =1;
                                   }else{
                                       $team[$vl->teams_engineer_name][$vl->engineer_id]['Other'] =0;
                                   }
                                
                                }
                        
                        if($vl->in_hours_start<= $vl->engineer_arrived && $vl->in_hours_end >= $vl->engineer_arrived){
                            $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours'] =1;
                            $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours'] =0;
                        }else{
                            $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours'] =1;
                            $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours'] =0;
                        }        
                    }
                 
                    
            }

            
         }
         
         //Percentage Calculator

         foreach($job as $vl)
         {
            
             if(isset($team[$vl->teams_engineer_name][$vl->engineer_id])){
                 
                 //Completed per
                     
                        
                         $team[$vl->teams_engineer_name][$vl->engineer_id]['completed_per'] = round(($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;

                       //  $national['completed_per'] = $team[$vl->teams_engineer_name][$vl->engineer_id]['completed_per'] + $national['completed_per'];
                     
                         if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['Single']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['Single']!=0){
                         $team[$vl->teams_engineer_name][$vl->engineer_id]['Single_per'] = round(($team[$vl->teams_engineer_name][$vl->engineer_id]['Single']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                         
                         
                         }else{
                            $team[$vl->teams_engineer_name][$vl->engineer_id]['Single_per'] = 0.00 ;
                         }
                   
                         if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['Dual']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['Dual']!=0){
                            $team[$vl->teams_engineer_name][$vl->engineer_id]['Dual_per'] = round(($team[$vl->teams_engineer_name][$vl->engineer_id]['Dual']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                            
                           
                            }else{
                               $team[$vl->teams_engineer_name][$vl->engineer_id]['Dual_per'] = 0.00 ;
                            }

                          if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['Other']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['Other']!=0){
                                $team[$vl->teams_engineer_name][$vl->engineer_id]['Other_per'] = round(($team[$vl->teams_engineer_name][$vl->engineer_id]['Other']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                                
                               
                                }else{
                                   $team[$vl->teams_engineer_name][$vl->engineer_id]['Other_per'] = '0.00' ;
                                }
                                
                                if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours']!=0){
                                    $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours_per'] = round(($team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                                    
                                    
                                    }else{
                                       $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours_per'] = 0.00 ;
                                    }
                                
                                if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours']!=0){
                                    $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours_per'] = round(($team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                                    
                                    
                                    }else{
                                       $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours_per'] = 0.00 ;
                                    }
                 
             }
             
             
          }
         foreach($team as $k => $tm){
            
            foreach($tm as $d => $t){
                
                if($d!='regions_engineer_total'){

                    if(isset($t['completed'])){
                      $national['completed'] = $t['completed'] + $national['completed'];
                    }
                    
                    if(isset($t['Single'])){
                        $national['Single'] = $t['Single'] + $national['Single'];
                      }
                    
                    if(isset($t['Dual'])){
                        $national['Dual'] = $t['Dual'] + $national['Dual'];
                      }
                    
                    if(isset($t['Other'])){
                        $national['Other'] = $t['Other'] + $national['Other'];
                      }
                    
                    if(isset($t['in_hours'])){
                        $national['in_hours'] = $t['in_hours'] + $national['in_hours'];
                      }
                    
                    if(isset($t['out_hours'])){
                        $national['out_hours'] = $t['out_hours'] + $national['out_hours'];
                      }

                }
                
            }
         }
      //  echo '<pre/>'; print_r($team); exit;
         
       $this->output = $team;
        return view('reports.workmix_report', ['data' => $team,'national'=>$national]);
    }    
     

        public function registerEvents(): array
    {

        return [
            AfterSheet::class    => function(AfterSheet $event) {
    
    //table 1


    
    $current_column = 'A';
    $subject_data = 11; //10 + $site_engineer;

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
