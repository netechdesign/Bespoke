
<table>
    <tbody>
     
    <tr><td></td></tr>
    <tr><td></td></tr>
    <?php $total_bonus=0; $total_revenue=0; ?>
    @foreach ($data as $ky => $engineer)
    <tr style="background-color: #f1f1f1">
        <td  style="width:20;border: 1px solid #000000;text-align: center;font-weight: bold;" rowspan="2" >Engineer</td>
        <td style="width:10;border: 1px solid #000000;text-align: center;font-weight: bold;" rowspan="2" >Period</td>
        <td style="width:15;border: 1px solid #000000;text-align: center;font-weight: bold;" rowspan="2">W/C</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;" colspan="3">Monday</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;" colspan="3" >Tueday</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;" colspan="3">Wednesday</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;" colspan="3">Thursday</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;" colspan="3">Friday</td>
        <td style="width:15;border: 1px solid #000000;text-align: center;font-weight: bold;" rowspan="2">Total Bonus</td>
        <td style="width:15;border: 1px solid #000000;text-align: center;font-weight: bold;" rowspan="2">Revenue</td>
        
     </tr>
     <tr style="background-color: #f1f1f1">
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus</td>
    </tr>

        <tr>
            <td valign="center" rowspan="{{count($engineer)}}">
            {{$ky}}
            </td>
            <td valign="center" style="text-align: center;" rowspan="{{count($engineer)}}">
                {{$_REQUEST['period']}} 
            </td>
        </tr>   
        <tr>
             <td>
                 <table>
                     
                    @foreach ($engineer as $wy => $week_date)
                            <tr>
                            <td style="text-align: center;">{{date('d/m/Y',strtotime($wy)) }}</td>
                            <?php $revenue=0; ?>
                            <?php $bonus=0; ?>
                                       @if(isset($week_date['Monday']))
                                         <td style="text-align: center;">{{$week_date['Monday']['pu']}}</td>
                                         <td style="text-align: center;">{{$week_date['Monday']['bonus_pus']}}</td>
                                        <td style="text-align: center;">£{{$week_date['Monday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Monday']['revenue'] + $revenue;
                                        $bonus= $week_date['Monday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;">0</td>
                                        <td style="text-align: center;">0</td>
                                        <td style="text-align: center;">0</td>
                                     @endif

                                     @if(isset($week_date['Tuesday']))
                                         <td style="text-align: center;">{{$week_date['Tuesday']['pu']}}</td>
                                         <td style="text-align: center;">{{$week_date['Tuesday']['bonus_pus']}}</td>
                                        <td style="text-align: center;">£{{$week_date['Tuesday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Tuesday']['revenue'] + $revenue;
                                        $bonus= $week_date['Tuesday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;">0</td>
                                        <td style="text-align: center;">0</td>
                                        <td style="text-align: center;">0</td>
                                     @endif

                                     
                                     @if(isset($week_date['Wednesday']))
                                         <td style="text-align: center;">{{$week_date['Wednesday']['pu']}}</td>
                                         <td style="text-align: center;">{{$week_date['Wednesday']['bonus_pus']}}</td>
                                        <td style="text-align: center;">£{{$week_date['Wednesday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Wednesday']['revenue'] + $revenue;
                                        $bonus= $week_date['Wednesday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;">0</td>
                                        <td style="text-align: center;">0</td>
                                        <td style="text-align: center;">0</td>
                                     @endif
                                     
                                     @if(isset($week_date['Thursday']))
                                         <td style="text-align: center;">{{$week_date['Thursday']['pu']}}</td>
                                         <td style="text-align: center;">{{$week_date['Thursday']['bonus_pus']}}</td>
                                        <td style="text-align: center;">£{{$week_date['Thursday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Thursday']['revenue'] + $revenue;
                                        $bonus= $week_date['Thursday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;">0</td>
                                        <td style="text-align: center;">0</td>
                                        <td style="text-align: center;">0</td>
                                     @endif
                                     
                                     @if(isset($week_date['Friday']))
                                         <td style="text-align: center;">{{$week_date['Friday']['pu']}}</td>
                                         <td style="text-align: center;">{{$week_date['Friday']['bonus_pus']}}</td>
                                        <td style="text-align: center;">£{{$week_date['Friday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Friday']['revenue'] + $revenue;
                                        $bonus= $week_date['Friday']['bonus'] + $bonus;
                                        
                                        ?>
                                        @else
                                        <td style="text-align: center;">0</td>
                                        <td style="text-align: center;">0</td>
                                        <td style="text-align: center;">0</td>
                                     @endif
                                        <?php $total_bonus= $total_bonus + $bonus; $total_revenue= $total_revenue + $revenue; ?>
                                <td style="text-align: center;">£{{$bonus}}</td>
                                <td style="text-align: center;">£{{$revenue}}</td>            
                            </tr>
                    @endforeach    
                 </table>    
             <td>    
        <tr>
    @endforeach   
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    <td></td><td></td><td></td><td></td><td></td><td style="text-align: center;">£{{$total_bonus}}</td><td style="text-align: center;">£{{$total_revenue}}</td></tr> 
        
    </tbody>    
<table>    
