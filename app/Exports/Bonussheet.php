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

class Bonussheet implements FromView,WithTitle,WithEvents 
{
    public $data;
    public $output;
    public function __construct($data) {
        
      $this->data=$data;
    }

    public function title(): string
        {
            return 'Bonus Output Report';
        }
    public function view(): View
    {
        $team = $this->data;
        
        return view('reports.sms_bonus', ['data' => $team]);
    }    
     

        public function registerEvents(): array
    {

        return [
            AfterSheet::class    => function(AfterSheet $event) {
    
    //table 1


    
    $current_column = 'A';
    $subject_data =2; //10 + $site_engineer;

    for($i=0; $i < $subject_data; $i++) {
    $current_column; // Will be C, D, E, etc...
    $current_column++; // Increment letter
    }
   // $event->sheet->getActiveSheet()->mergeCells('A1:'.$current_column.'1');
   
   $row= '3';
   $engineer = $this->data;
   foreach($engineer  as $k => $d){

        $second_row = $row + 1;
       
               $event->sheet->styleCells(
                   'A'.$row.':'.$current_column.$second_row,
                   ['fill' => [
                           'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                           'startColor' => [
                               'rgb' => 'D3D3D3',
                           ]           
                       ],
                   ]
               );
               $second_row = count($d) +$row+1;
               $event->sheet->getStyle('A'.$row.':T'.$second_row)->applyFromArray([
                   'borders' => [
                       'allBorders' => [
                           'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                           'color' => ['argb' => '000000'],
                       ],
                   ],
             ]);
           
            /*
             $event->sheet->styleCells(
                $current_column-1.$row.':'.$current_column.count($d) +$row+6,
                ['fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => [
                            'rgb' => 'D3D3D3',
                        ]           
                    ],
                ]
            );
            */
             $row = count($d) +$row+6;

             
       
           }
                
            },
        ];
    }
}
?>
