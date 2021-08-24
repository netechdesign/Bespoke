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

class SmsListsheet implements FromView,WithTitle,WithEvents 
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
        
        $job =$this->data;
        
        return view('reports.sms_list_report', ['data' => $job]);
    }    
     

        public function registerEvents(): array
    {

        return [
            AfterSheet::class    => function(AfterSheet $event) {
    
    //table 1


    
    $current_column = 'A';
    $subject_data = 17; //10 + $site_engineer;

    for($i=0; $i < $subject_data; $i++) {
    $current_column; // Will be C, D, E, etc...
    $current_column++; // Increment letter
    }
   // $event->sheet->getActiveSheet()->mergeCells('A1:'.$current_column.'1');
   

    //National Total
    $event->sheet->styleCells(
        'A4:BN4',
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
    
            },
        ];
    }
}
?>
