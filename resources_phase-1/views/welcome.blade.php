<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#000000" />
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <meta charset="utf-8" />
        <link rel="apple-touch-icon" sizes="76x76" href="https://irp-cdn.multiscreensite.com/d1cedec6/site_favicon_16_1579260633151.ico">
        <link rel="icon" type="image/png" href="https://irp-cdn.multiscreensite.com/d1cedec6/site_favicon_16_1579260633151.ico">
       
        <meta http-equiv='cache-control' content='no-cache'>
        <meta http-equiv='expires' content='0'>
        <meta http-equiv='pragma' content='no-cache'>
        <title>Bespoke Metering Solutions</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
        <!-- Google Fonts Style -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
        <link href="{{url('assets/fonts/datta/datta-icons.css')}}" rel="stylesheet">
        <link href="{{url('assets/fonts/feather/icon-font.css')}}" rel="stylesheet">
       
        <!-- Styles -->
        <style>
            /** chart report css */
                #chart {
                max-width: 760px;
                margin: 35px auto;
                opacity: 0.9;
                }

                .arrow_box {
                position: relative;
                background: #fffff;
                border: 2px solid #000000;
                width:100%;
                }


                #StackedBar .apexcharts-tooltip {
                
                transform: translateX(10px) translateY(10px);
                overflow: visible !important;
                white-space: normal !important;
                width:70% !important;
                left: 100 !important;
                
                }

                #StackedBar .apexcharts-tooltip span {
                padding: 5px 10px;
                display: inline-block;
                }
                .apexcharts-yaxistooltip{
                    z-index:700000 !important;
                }
        </style>
    </head>
    <body>
        <div id="root">
            
        </div>
        {{ Html::script(mix('js/app.js')) }}
    </body>
</html>
