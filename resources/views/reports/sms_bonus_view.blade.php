<?php

?>
<table width="100%">
    <tbody>
     
    <tr><td></td></tr>
    <tr><td></td></tr>
    <?php $total_bonus=0; $total_revenue=0; ?>
    @foreach ($data as $ky => $engineer)
    
    <?php $holiday_mpl_list=[];
    $average_per_day_bonus='';
    $total_mpl=0;
    $Total_Working_Days =0;
    $Bank_Holiday	=0;
    $Total_PU=0;
    $Total_Bonus_PU=0;
    $pu_value_reduction=0;
    ?>
    <tr style="background-color: #f1f1f1;color:white;">
    @if($role==8 || $role==7 || $role==6 || $role==5 || $role==1)
        <td  style="width:5%;border: 1px solid #000000;text-align: center;font-weight: bold;color:black;" rowspan="2" >Engineer</td>
        <td style="width:5%;border: 1px solid #000000;text-align: center;font-weight: bold;color:black" rowspan="2" >Period</td>
        <td style="width:10%;border: 1px solid #000000;text-align: center;font-weight: bold;color:black" rowspan="2">W/C</td>
        <td style="width: 14%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#FFB801" colspan="4">Monday</td>
        <td style="width: 14%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#E8A801" colspan="4" >Tueday</td>
        <td style="width: 14%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#C28C01" colspan="4">Wednesday</td>
        <td style="width: 14%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#9C7001" colspan="4">Thursday</td>
        <td style="width: 14%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#755501" colspan="4">Friday</td>
        <td style="width:5%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#FF7F23" rowspan="2">Total Bonus</td>
        @endif
            @if($role==7 || $role==6 || $role==5 || $role==1)
        <td style="width:5%;border: 1px solid #000000;text-align: center;font-weight: bold;background:#FF7F23" rowspan="2">Revenue</td>
        @endif
     </tr>
     <tr style="background-color: #f1f1f1;color:white;">
     @if($role==8 || $role==7 || $role==6 || $role==5 || $role==1)
     
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#FFB801">MPL</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#FFB801">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#FFB801">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#FFB801">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#E8A801">MPL</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#E8A801">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#E8A801">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#E8A801">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#C28C01">MPL</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#C28C01">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#C28C01">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#C28C01">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#9C7001">MPL</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#9C7001">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#9C7001">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#9C7001">Bonus</td>

        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#755501">MPL</td> 
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#755501">PUs</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#755501">Bonus PU</td>
        <td style="border: 1px solid #000000;text-align: center;font-weight: bold;background:#755501">Bonus</td>
        @endif
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
                            @if($role==8 || $role==7 || $role==6 || $role==5 || $role==1)   
                            <td style="text-align: center;width:10.2%;border: 1px solid #000000;color:black;">{{date('d/m/Y',strtotime($wy)) }}</td>
                            <?php $revenue=0; ?>
                            <?php $bonus=0; ?>
                                       @if(isset($week_date['Monday']))
                                       <?php
                        if(isset($week_date['Monday']['holiday_mpl_list'])){
                           $holiday_mpl_date = json_decode($week_date['Monday']['holiday_mpl_list']);
                           $holiday_mpl_list[$holiday_mpl_date->holiday_type][]= $holiday_mpl_date;
                         }
                         if(isset($week_date['Monday']['average_per_day_bonus'])){
                           $average_per_day_bonus = $week_date['Monday']['average_per_day_bonus'];
                         }
                         if(isset($week_date['Monday']['mpl_pu'])){
                           $total_mpl = $total_mpl + $week_date['Monday']['mpl_pu'];
                         }
                         $Total_Working_Days = $Total_Working_Days +1;
                         
                         if(isset($week_date['Monday']['pu'])){
                           $Total_PU = $Total_PU + $week_date['Monday']['pu'];
                         }
                                                  
                         if(isset($week_date['Monday']['bonus_pus'])){
                           $Total_Bonus_PU = $Total_Bonus_PU + $week_date['Monday']['bonus_pus'];
                         }
                         
                         if(isset($week_date['Monday']['pu_value_reduction'])){
                           $pu_value_reduction = $pu_value_reduction + $week_date['Monday']['pu_value_reduction'];
                         }
                                       ?>
                                      <td style="text-align: center;border: 1px solid #000000;width:3%">{{$week_date['Monday']['mpl_pu']}}</td>
                                         <td style="text-align: center;border: 1px solid #000000;width:3.1%">
                                         @if($week_date['Monday']>0)
                                            <?php
                                            $querylist = "&engineer_id=".$week_date['Monday']['engineer_id']."&appointment_date=".$week_date['Monday']['appointment_date'];
                                            ?>
                                            <a  target='_blank' href='{{url("sms/list?status=completed".$querylist)}}'>
                                            {{$week_date['Monday']['pu']}}
                                            </a>
                                         @else
                                         0
                                         @endif   
                                        </td>
                                         <td style="text-align: center;border: 1px solid #000000;width:6.8%">{{$week_date['Monday']['bonus_pus']}}</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:4.7%" data-format="£#,##0.00_-" >£{{$week_date['Monday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Monday']['revenue'] + $revenue;
                                        $bonus= $week_date['Monday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;border: 1px solid #000000;width:3%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:3.2%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:7.5%">0</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:5%">0</td>
                                     @endif

                                     @if(isset($week_date['Tuesday']))
                                     <?php 
                                                if(isset($week_date['Tuesday']['holiday_mpl_list'])){
                                                   $holiday_mpl_date = json_decode($week_date['Tuesday']['holiday_mpl_list']);
                                                   $holiday_mpl_list[$holiday_mpl_date->holiday_type][]= $holiday_mpl_date;
                                                 }
                                                 if(isset($week_date['Tuesday']['average_per_day_bonus'])){
                                                   $average_per_day_bonus = $week_date['Tuesday']['average_per_day_bonus'];
                                                 }
                                                 if(isset($week_date['Tuesday']['mpl_pu'])){
                                                   $total_mpl = $total_mpl + $week_date['Tuesday']['mpl_pu'];
                                                 }
                                                 $Total_Working_Days = $Total_Working_Days +1;
                                                 if(isset($week_date['Tuesday']['pu'])){
                                                   $Total_PU = $Total_PU + $week_date['Tuesday']['pu'];
                                                 }
                                                 if(isset($week_date['Tuesday']['bonus_pus'])){
                                                   $Total_Bonus_PU = $Total_Bonus_PU + $week_date['Tuesday']['bonus_pus'];
                                                 }
                                                 if(isset($week_date['Tuesday']['pu_value_reduction'])){
                                                   $pu_value_reduction = $pu_value_reduction + $week_date['Tuesday']['pu_value_reduction'];
                                                 }
                                     ?>
                          
                                     <td style="text-align: center;border: 1px solid #000000;width:3%">{{$week_date['Tuesday']['mpl_pu']}}</td>
                                         <td style="text-align: center;border: 1px solid #000000;width:3.1%">
                                         
                                         @if($week_date['Tuesday']>0)
                                            <?php
                                            $querylist = "&engineer_id=".$week_date['Tuesday']['engineer_id']."&appointment_date=".$week_date['Tuesday']['appointment_date'];
                                            ?>
                                            <a  target='_blank' href='{{url("sms/list?status=completed".$querylist)}}'>
                                            {{$week_date['Tuesday']['pu']}}
                                            </a>
                                         @else
                                         0
                                         @endif
                                        </td>
                                         <td style="text-align: center;border: 1px solid #000000;width:6.8%">{{$week_date['Tuesday']['bonus_pus']}}</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:4.7%" data-format="£#,##0.00_-">£{{$week_date['Tuesday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Tuesday']['revenue'] + $revenue;
                                        $bonus= $week_date['Tuesday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;border: 1px solid #000000;width:3%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:3.2%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:7.5%">0</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:5%">0</td>
                                     @endif

                                     
                                     @if(isset($week_date['Wednesday']))
                                     <?php 
                                     if(isset($week_date['Wednesday']['holiday_mpl_list'])){
                                       $holiday_mpl_date = json_decode($week_date['Wednesday']['holiday_mpl_list']);
                                       $holiday_mpl_list[$holiday_mpl_date->holiday_type][]= $holiday_mpl_date;
                                     }
                                     if(isset($week_date['Wednesday']['average_per_day_bonus'])){
                                       $average_per_day_bonus = $week_date['Wednesday']['average_per_day_bonus'];
                                     }
                                     if(isset($week_date['Wednesday']['mpl_pu'])){
                                       $total_mpl = $total_mpl + $week_date['Wednesday']['mpl_pu'];
                                     }
                                     $Total_Working_Days = $Total_Working_Days +1;
                                     if(isset($week_date['Wednesday']['pu'])){
                                       $Total_PU = $Total_PU + $week_date['Wednesday']['pu'];
                                     }
                                     if(isset($week_date['Wednesday']['bonus_pus'])){
                                       $Total_Bonus_PU = $Total_Bonus_PU + $week_date['Wednesday']['bonus_pus'];
                                     }
                                     if(isset($week_date['Wednesday']['pu_value_reduction'])){
                                       $pu_value_reduction = $pu_value_reduction + $week_date['Wednesday']['pu_value_reduction'];
                                     }
                                     ?>
                                     <td style="text-align: center;border: 1px solid #000000;width:3%">{{$week_date['Wednesday']['mpl_pu']}}</td>
                                         <td style="text-align: center;border: 1px solid #000000;width:3.2%">
                                         
                                         @if($week_date['Wednesday']>0)
                                            <?php
                                            $querylist = "&engineer_id=".$week_date['Wednesday']['engineer_id']."&appointment_date=".$week_date['Wednesday']['appointment_date'];
                                            ?>
                                            <a  target='_blank' href='{{url("sms/list?status=completed".$querylist)}}'>
                                            {{$week_date['Wednesday']['pu']}}
                                            </a>
                                         @else
                                         0
                                         @endif
                                        </td>
                                         <td style="text-align: center;border: 1px solid #000000;width:7.5%">{{$week_date['Wednesday']['bonus_pus']}}</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:5%" data-format="£#,##0.00_-" >£{{$week_date['Wednesday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Wednesday']['revenue'] + $revenue;
                                        $bonus= $week_date['Wednesday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;border: 1px solid #000000;width:3%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:3.2%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:7.5%">0</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:5%">0</td>
                                     @endif
                                     
                                     @if(isset($week_date['Thursday']))
                                     <?php 
                                     if(isset($week_date['Thursday']['holiday_mpl_list'])){
                                       $holiday_mpl_date = json_decode($week_date['Thursday']['holiday_mpl_list']);
                                       $holiday_mpl_list[$holiday_mpl_date->holiday_type][]= $holiday_mpl_date;
                                     }
                                     if(isset($week_date['Thursday']['average_per_day_bonus'])){
                                       $average_per_day_bonus = $week_date['Thursday']['average_per_day_bonus'];
                                     }
                                     if(isset($week_date['Thursday']['mpl_pu'])){
                                       $total_mpl = $total_mpl + $week_date['Thursday']['mpl_pu'];
                                     }
                                     $Total_Working_Days = $Total_Working_Days +1;
                                     if(isset($week_date['Thursday']['pu'])){
                                       $Total_PU = $Total_PU + $week_date['Thursday']['pu'];
                                     }
                                     if(isset($week_date['Thursday']['bonus_pus'])){
                                       $Total_Bonus_PU = $Total_Bonus_PU + $week_date['Thursday']['bonus_pus'];
                                     }
                                     if(isset($week_date['Thursday']['pu_value_reduction'])){
                                       $pu_value_reduction = $pu_value_reduction + $week_date['Thursday']['pu_value_reduction'];
                                     }
                                     ?>
                                     <td style="text-align: center;border: 1px solid #000000;width:3%">{{$week_date['Thursday']['mpl_pu']}}</td>
                                         <td style="text-align: center;border: 1px solid #000000;width:3.2%">
                                         
                                         @if($week_date['Thursday']>0)
                                            <?php
                                            $querylist = "&engineer_id=".$week_date['Thursday']['engineer_id']."&appointment_date=".$week_date['Thursday']['appointment_date'];
                                            ?>
                                            <a  target='_blank' href='{{url("sms/list?status=completed".$querylist)}}'>
                                            {{$week_date['Thursday']['pu']}}
                                            </a>
                                         @else
                                         0
                                         @endif
                                        </td>
                                         <td style="text-align: center;border: 1px solid #000000;width:7.5%">{{$week_date['Thursday']['bonus_pus']}}</td>
                                        <td style="text-align: center;background:#04AF0A;width:5%;border: 1px solid #000000;">£{{$week_date['Thursday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Thursday']['revenue'] + $revenue;
                                        $bonus= $week_date['Thursday']['bonus'] + $bonus;
                                        ?>
                                        @else
                                        <td style="text-align: center;border: 1px solid #000000;width:3%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:3.2%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:7.5%">0</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;">0</td>
                                     @endif
                                     
                                     @if(isset($week_date['Friday']))
                                     <?php 
                                      if(isset($week_date['Friday']['holiday_mpl_list'])){
                                       $holiday_mpl_date = json_decode($week_date['Friday']['holiday_mpl_list']);
                                       $holiday_mpl_list[$holiday_mpl_date->holiday_type][]= $holiday_mpl_date;
                                     }
                                     if(isset($week_date['Friday']['average_per_day_bonus'])){
                                       $average_per_day_bonus = $week_date['Friday']['average_per_day_bonus'];
                                     }
                                     if(isset($week_date['Friday']['mpl_pu'])){
                                       $total_mpl = $total_mpl + $week_date['Friday']['mpl_pu'];
                                     }
                                     $Total_Working_Days = $Total_Working_Days +1;
                                     if(isset($week_date['Friday']['pu'])){
                                       $Total_PU = $Total_PU + $week_date['Friday']['pu'];
                                     }
                                     if(isset($week_date['Friday']['bonus_pus'])){
                                       $Total_Bonus_PU = $Total_Bonus_PU + $week_date['Friday']['bonus_pus'];
                                     }
                                     if(isset($week_date['Friday']['pu_value_reduction'])){
                                       $pu_value_reduction = $pu_value_reduction + $week_date['Friday']['pu_value_reduction'];
                                     }
                                     ?>
                                     <td style="text-align: center;border: 1px solid #000000;width:3%">{{$week_date['Friday']['mpl_pu']}}</td>
                                         <td style="text-align: center;border: 1px solid #000000;width:3.2%">
                                         
                                         @if($week_date['Friday']>0)
                                            <?php
                                            $querylist = "&engineer_id=".$week_date['Friday']['engineer_id']."&appointment_date=".$week_date['Friday']['appointment_date'];
                                            ?>
                                            <a  target='_blank' href='{{url("sms/list?status=completed".$querylist)}}'>
                                            {{$week_date['Friday']['pu']}}
                                            </a>
                                         @else
                                         0
                                         @endif
                                        </td>
                                         <td style="text-align: center;border: 1px solid #000000;width:7.5%">{{$week_date['Friday']['bonus_pus']}}</td>
                                        <td style="text-align: center;background:#04AF0A;width:5%;border: 1px solid #000000;" data-format="£#,##0.00_-">£{{$week_date['Friday']['bonus']}}</td>
                                        <?php $revenue = $week_date['Friday']['revenue'] + $revenue;
                                        $bonus= $week_date['Friday']['bonus'] + $bonus;
                                        
                                        ?>
                                        @else
                                        <td style="text-align: center;border: 1px solid #000000;width:3%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:3.2%">0</td>
                                        <td style="text-align: center;border: 1px solid #000000;width:7.5%">0</td>
                                        <td style="text-align: center;background:#04AF0A;border: 1px solid #000000;width:5%">0</td>
                                     @endif
                                        <?php
                                        
                                        $total_engineer_bonus= $total_engineer_bonus + $bonus; 
                                        $total_engineer_revenue = $total_engineer_revenue + $revenue; 
                                        $total_bonus= $total_bonus + $bonus;
                                        $total_revenue= $total_revenue + $revenue; ?>
                                <td style="text-align: center;background:#FF7F23;border: 1px solid #000000;width:1%" data-format="£#,##0.00_-">£{{$bonus}}</td>
                                @endif
            @if($role==7 || $role==1)
                                <td style="text-align: center;background:#FF7F23;border: 1px solid #000000;width:1%" data-format="£#,##0.00_-">£{{$revenue}}</td>  
                                @endif          
                            </tr>
                    @endforeach  
                    <tr style="color:black;">
                    @if($role==8 || $role==7 || $role==6 || $role==5 || $role==1)
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td> <td></td> <td></td> <td></td> <td></td>
                    <td style="text-align: center;background:#FF7F23;border: 1px solid #000000;" data-format="£#,##0.00_-">£{{$total_engineer_bonus}}</td>
                    @endif
            @if($role==7 || $role==6 || $role==5 || $role==1)
    <td style="text-align: center;background:#FF7F23;border: 1px solid #000000;" data-format="£#,##0.00_-">£{{$total_engineer_revenue}}</td>
    @endif
</tr> 
    <tr><td>&nbsp;</td></tr>   
    <tr  style="color:black;">       
    <td colspan='3' style="vertical-align: top;">
                  <?php
                  $total_first_holiday_bonus=0;
                   if(count($holiday_mpl_list)>0){
                     if(isset($holiday_mpl_list['holiday'])){
                           foreach($holiday_mpl_list['holiday'] as $hb){
                              $holiday_bonus = round((((-$hb->pu_value_reduction/0.75)/8)*-1)*$average_per_day_bonus,2);
                              $total_first_holiday_bonus= $total_first_holiday_bonus+$holiday_bonus;
                           }
                     }
                  }
                  
                  ?>
    <table border="1">
       <tr><th colspan="2">Summary</th></tr>
       <tr><td>Total Working Days</td><td>{{$Total_Working_Days}}</td></tr>
       <tr><td>Actual Working Days</td><td>{{$Actual_Working_Days=round($total_mpl/6,2)}}</td></tr>
       <tr><td>Total MPL</td><td>{{$total_mpl}}</td></tr>
       <tr><td>Total PU</td><td>{{$Total_PU}}</td></tr>
       <tr><td>Average PU/Day</td><td>{{ round($Total_PU/$Actual_Working_Days,2)}}</td></tr>
       <tr><td>Total Bonus PU</td><td>{{$Total_Bonus_PU}}</td></tr>
       <tr><td>Average Bonus PU/Day</td><td>{{ round($Total_Bonus_PU/$Actual_Working_Days,2)}}</td></tr>
       <tr><td>Average Productivity Bonus/Day</td><td>£{{round($total_engineer_bonus/$Actual_Working_Days,2)}}</td></tr>
       <tr><td>Average Bonus Previous 3 Periods</td><td>£{{$average_per_day_bonus}}</td></tr>
       <tr><td>Compliance Bonus Oportunity</td>
           <td>£{{$Compliance_Bonus_Oportunity=($Total_Working_Days-((($pu_value_reduction/0.75)/8)*1))*10}}</td></tr>
       <tr><td>Compliance Rating	</td><td style='background:#FFB801;'>&nbsp;</td></tr>
       <tr><td>Compliance Bonus Paid</td><td>£{{$Compliance_Bonus_Paid=round(($Compliance_Bonus_Oportunity/2),2)}}</td></tr>
       <tr><td>Total Bonus Paid</td><td>£{{$total_engineer_bonus+$Compliance_Bonus_Paid+$total_first_holiday_bonus}}</td></tr>       
     </table>  
    </td> 
    <td></td>
        <?php if(count($holiday_mpl_list)>0){
         
           foreach($holiday_mpl_list as $ky => $vl)
              {

                ?>
                @if($ky=='holiday')
                <?php //continue; ?>
                @endif
                <td colspan="4" style="vertical-align: top;">
                  <table border="1">
                     <tr>
                        <th colspan="3">
                         @if($ky=='sickness_absence')   
                         Sickness
                         @elseif($ky=='general_absence')
                         Absence
                         @elseif($ky=='unproductive_time_absence')
                         Unproductive Time
                         @elseif($ky=='holiday')
                         Holiday
                         @else
                         {{$ky}}
                         @endif

                        
                        </th> 
                     </tr>   
                     <tr><td>Date</td><td>PU Adjust</td>@if($ky=='holiday')<td>Bonus</td> @endif</tr>
                     <?php
                     $total_holiday_bonus=0;
                     foreach($vl as $itm){
                     ?>
                     <tr>
                     <td>{{ date('d-m-y',strtotime($itm->holiday_date))}}</td> 
                     <td>-{{$itm->pu_value_reduction}}</td> 
                     @if($ky=='holiday')<td>${{$holiday_bonus=round((((-$itm->pu_value_reduction/0.75)/8)*-1)*$average_per_day_bonus,2)}}</td>
                     <?php $total_holiday_bonus= $total_holiday_bonus+$holiday_bonus; ?>
                     @endif
                     </tr>
                     <?php
                     }
                     ?>
                     @if($ky=='holiday')
                     <tr>
                      <td></td>
                      <td></td>  
                     <td>${{$total_holiday_bonus}}</td>
                     </tr>
                     @endif
                  </table>   
                </td>
                <?php
              }
        } ?>
      </tr>  
         <tr><td>&nbsp;</td></tr>  
      
      @endforeach   
    <tr  style="color:black;">
    @if($role==7 || $role==6 || $role==5 || $role==1)
    <td></td><td></td><td></td><td></td><td></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    <td></td><td></td><td></td><td></td><td></td><td style="text-align: center;background:#FF7F23;border: 1px solid #000000;" data-format="£#,##0.00_-" >£{{$total_bonus}}</td>
    @endif
            @if($role==7 || $role==6 || $role==5 || $role==1)
    <td style="text-align: center;background:#FF7F23;border: 1px solid #000000;" data-format="£#,##0.00_-" >£{{$total_revenue}}</td></tr> 
    @endif
    </tbody>    
<table>    
