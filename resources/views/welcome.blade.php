<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#000000" />
        <title>Job</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
        <!-- Google Fonts Style -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
        <link href="{{url('assets/fonts/datta/datta-icons.css')}}" rel="stylesheet">
        <link href="{{url('assets/fonts/feather/icon-font.css')}}" rel="stylesheet">
        <!-- Styles -->
        <style>

        </style>
    </head>
    <body>
        <div id="root">
            
        </div>
        {{ Html::script(mix('js/app.js')) }}
    </body>
</html>
