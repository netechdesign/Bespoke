
<table width="100%">
    <tbody>
     
    <tr><td></td></tr>
    <tr><td></td></tr>
    <?php $total_bonus=0; $total_revenue=0; ?>
    @foreach ($data as $ky => $engineer)
    
    
    <tr style="background-color: #f1f1f1;color:white;">
        <td  style="width:5%;border: 1px solid #000000;text-align: center;font-weight: bold;color:black;" rowspan="2" >Engineer</td>
        <td style="width:5%;border: 1px solid #000000;text-align: center;font-weight: bold;color:black" rowspan="2" >Period</td>
        <td style="width:10%;border: 1px solid #000000;text-align: center;font-weight: bold;color:black" rowspan="2">W/C</td>
        <td style="width: 14%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#FFB801" colspan="3">Monday</td>
        <td style="width: 14%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#E8A801" colspan="3" >Tueday</td>
        <td style="width: 14%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#C28C01" colspan="3">Wednesday</td>
        <td style="width: 14%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#9C7001" colspan="3">Thursday</td>
        <td style="width: 14%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#755501" colspan="3">Friday</td>
        <td style="width:5%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#FF7F23" rowspan="2">Total Bonus</td>
        <td style="width:5%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#FF7F23" rowspan="2">Revenue</td>
        
     </tr>
     <tr style="background-color: #f1f1f1;color:white;">
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#FFB801">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#FFB801">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#FFB801">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#E8A801">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#E8A801">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#E8A801">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#C28C01">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#C28C01">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#C28C01">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#9C7001">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#9C7001">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#9C7001">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#755501">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#755501">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#755501">Bonus</td>
    </tr>

        <tr>
            
            <td style="text-align: center;border: 1px solid #000000;color:black;" valign="center" rowspan="{{count($engineer)+1}}">
            {{$ky}}
            </td>
            <td valign="center" style="text-align: center;border: 1px solid #000000;color:black;" rowspan="{{count($engineer)+1}}">
               @if(isset($_REQUEST['period'])) {{$_REQUEST['period']}} @else {{$period}} @endif 
            </td>
        </tr>   
        
                 <?php $total_engineer_bonus=0; $total_engineer_revenue=0; ?>
                    @foreach ($engineer as $wy => $week_date)
                            <tr style="color:black;">
                                
                            <td style="text-align: center;width:10.2%;border: 1px solid #000000;color:black;">{{date('d/m/Y',strtotime($wy)) }}</td>
                            <?php $revenue=0; ?>
                            <?php $bonus=0; ?>
                                       @if(isset($week_date['Monday']))
                                         <td style="text-align: center;border: 1px solid #000000;width:3.1%">{{$week_date['Monday']['pu']}}</td>
                                         <td style="text-align: center;border: 1px solid #000000;width:6.8%">{{$week_date['Monday']['bonus_pus']}}</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:4.7%" data-format="£#,##0.00_-" >{{$week_date['Monday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Monday']['revenue'] + $revenue;
                                        $bonus= $week_date['Monday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;border: 1px solid #000000;width:3.2%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:7.5%">0</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:5%">0</td>
                                     @endif

                                     @if(isset($week_date['Tuesday']))
                                         <td style="text-align: center;border: 1px solid #000000;width:3.1%">{{$week_date['Tuesday']['pu']}}</td>
                                         <td style="text-align: center;border: 1px solid #000000;width:6.8%">{{$week_date['Tuesday']['bonus_pus']}}</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:4.7%" data-format="£#,##0.00_-">{{$week_date['Tuesday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Tuesday']['revenue'] + $revenue;
                                        $bonus= $week_date['Tuesday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;border: 1px solid #000000;width:3.2%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:7.5%">0</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:5%">0</td>
                                     @endif

                                     
                                     @if(isset($week_date['Wednesday']))
                                         <td style="text-align: center;border: 1px solid #000000;width:3.2%">{{$week_date['Wednesday']['pu']}}</td>
                                         <td style="text-align: center;border: 1px solid #000000;width:7.5%">{{$week_date['Wednesday']['bonus_pus']}}</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:5%" data-format="£#,##0.00_-" >{{$week_date['Wednesday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Wednesday']['revenue'] + $revenue;
                                        $bonus= $week_date['Wednesday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;border: 1px solid #000000;width:3.2%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:7.5%">0</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:5%">0</td>
                                     @endif
                                     
                                     @if(isset($week_date['Thursday']))
                                         <td style="text-align: center;border: 1px solid #000000;width:3.2%">{{$week_date['Thursday']['pu']}}</td>
                                         <td style="text-align: center;border: 1px solid #000000;width:7.5%">{{$week_date['Thursday']['bonus_pus']}}</td>
                                        <td style="text-align: center;background:#04AF0A;width:5%;border: 1px solid #000000;">£{{$week_date['Thursday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Thursday']['revenue'] + $revenue;
                                        $bonus= $week_date['Thursday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;border: 1px solid #000000;width:3.2%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:7.5%">0</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;">0</td>
                                     @endif
                                     
                                     @if(isset($week_date['Friday']))
                                         <td style="text-align: center;border: 1px solid #000000;width:3.2%">{{$week_date['Friday']['pu']}}</td>
                                         <td style="text-align: center;border: 1px solid #000000;width:7.5%">{{$week_date['Friday']['bonus_pus']}}</td>
                                        <td style="text-align: center;background:#04AF0A;width:5%;border: 1px solid #000000;" data-format="£#,##0.00_-">{{$week_date['Friday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Friday']['revenue'] + $revenue;
                                        $bonus= $week_date['Friday']['bonus'] + $bonus;
                                        
                                        ?>
                                        @else
                                        <td style="text-align: center;border: 1px solid #000000;width:3.2%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:7.5%">0</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:5%">0</td>
                                     @endif
                                        <?php
                                        
                                        $total_engineer_bonus= $total_engineer_bonus + $bonus; 
                                        $total_engineer_revenue = $total_engineer_revenue + $revenue; 
                                        $total_bonus= $total_bonus + $bonus;
                                        $total_revenue= $total_revenue + $revenue; ?>
                                <td style="text-align: center;background:#FF7F23;border: 1px solid #000000;width:1%" data-format="£#,##0.00_-">{{$bonus}}</td>
                                <td style="text-align: center;background:#FF7F23;border: 1px solid #000000;width:1%" data-format="£#,##0.00_-">{{$revenue}}</td>            
                            </tr>
                    @endforeach  
                    <tr style="color:black;"><td></td><td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    <td></td><td></td><td></td><td style="text-align: center;background:#FF7F23;border: 1px solid #000000;" data-format="£#,##0.00_-">{{$total_engineer_bonus}}</td><td style="text-align: center;background:#FF7F23;border: 1px solid #000000;" data-format="£#,##0.00_-">{{$total_engineer_revenue}}</td></tr> 
    <tr><td>&nbsp;</td></tr>   
            
        
        @endforeach   
    <tr  style="color:black;"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    <td></td><td></td><td></td><td></td><td></td><td style="text-align: center;background:#FF7F23;border: 1px solid #000000;" data-format="£#,##0.00_-" >{{$total_bonus}}</td><td style="text-align: center;background:#FF7F23;border: 1px solid #000000;" data-format="£#,##0.00_-" >{{$total_revenue}}</td></tr> 
        
    </tbody>    
<table>    
