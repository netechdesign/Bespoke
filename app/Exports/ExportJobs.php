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


class ExportJobs implements WithMultipleSheets
{
    

    public function sheets(): array
    {
     
        $sheets = [];
        $sheets[] = new FirstSheetImport();
        $sheets[] = new SecondSheetImport();
        return $sheets;
    }
}
class FirstSheetImport implements FromView,WithTitle,WithEvents 
{

    public function view(): View
    {
        $current_column = 'Z';
        $subject_data=['GLEN ROBSON 01','ANDREW BULFORD','LIAM FLAHERTY01','SIMON SNOWDON01','RICH BRANNEN','BIJAN LAJEVARDI','DALE BURRELL'];
for($i=0; $i < count($subject_data); $i++) {
     $current_column; // Will be C, D, E, etc...
    $current_column++; // Increment letter
}
//echo $current_column;

        return view('example', [
            'users' => User::all()
        ]);
    }
    public function title(): string
    {
        return 'Day';
    }

    public function registerEvents(): array
{
    return [
        AfterSheet::class    => function(AfterSheet $event) {
  /*
            $event->sheet->styleCells(
                'B5:B6',
                [
                    //Set border Style
                    'borders' => [ 
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
                            'color' => ['argb' => 'EB2B02'],
                        ],

                    ],

                    //Set font style
                    'font' => [
                        'name'      =>  'Calibri',
                        'size'      =>  15,
                        'bold'      =>  true,
                        'color' => ['argb' => 'EB2B02'],
                    ],

                    //Set background style
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => [
                            'rgb' => 'dff0d8',
                         ]           
                    ],

                ]
            );
*/
//table 1
            $event->sheet->styleCells(
                'B5:U6',
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
            $event->sheet->styleCells(
                'B21:AK21',
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

            $event->sheet->styleCells(
                'B21:C29',
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
                'D21:Q29',
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
        },
    ];
}
}

class SecondSheetImport implements FromView
{
    public function view(): View
    {
        return view('example', [
            'users' => User::all()
        ]);
    }
}
/*
use Maatwebsite\Excel\Concerns\FromCollection;
class ExportJobs implements FromCollection
{
    public function collection()
    {
        //
        return User::get();
    }
}
*/