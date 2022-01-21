<?php
$role=0;
if(isset($_REQUEST['role'])){
  $role=$_REQUEST['role'];
}

?>
<table id="view_report" width="100%">
    <tbody>
        <?php if(!isset($view)) {?>
         <tr>
            <td colspan="18" style="text-align: center;font-weight: bold;font-size:15px">Performance</td>
        </tr>
        <tr>
            <td colspan="2"><b>Date :</b>{{date('d-m-Y',strtotime(str_replace('/', '-', $_REQUEST['start_date'])))}} To {{date('d-m-Y',strtotime(str_replace('/', '-', $_REQUEST['end_date'])))}}</td>
            @if(isset($_REQUEST['work_completed']))<td colspan="3">

                <b>Work Completed :</b>@if($_REQUEST['work_completed']=='out_of_hours') Out of Hours  @elseif($_REQUEST['work_completed']=='in_hours') In Hours @else All @endif</td>
            @endif
        </tr> 
        <tr>
        <td colspan="2"><b>Reporting Date :</b>{{date('d-m-Y')}}</td>
        @if(isset($_REQUEST['company']))<td colspan="3">

                <b>Company :</b>@if($_REQUEST['company']=='0') All  @elseif($_REQUEST['company']=='1') Utilita @else Sms @endif</td>
            @endif
        </tr>
       <?php } ?>        
        <tr>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;"></th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Total Jobs</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Completed</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Aborted</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Open</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Cancelled</th>
            @if($role==8 || $role==7 || $role==6 || $role==5 || $role==1)
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">PU</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">PU/Day</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU/Day</th>
            @endif
            @if($role==7 || $role==6 || $role==5 || $role==1)
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus/Day</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Revenue</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Revenue/Day</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Profit</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Profit/Day</th>
            @endif
        </tr>
        @if(isset($national))
        
        <tr>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">National</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$national['total_job']}}</th>
            <th  style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$national['completed']}}</th>
<td style="border: 1px solid #000000;text-align: right;">{{number_format(($national['completed']/($national['total_job']-$national['cancelled']))*100,2)}}%</td>
            <th  style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$national['aborted']}}</th>
             <td style="border: 1px solid #000000;text-align: right;">{{number_format(($national['aborted']/($national['total_job']-$national['cancelled']))*100,2)}}%</td>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$national['open']}}</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$national['cancelled']}}</th>
            @if($role==8 || $role==7 || $role==6 || $role==5 || $role==1)
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$national['pu']}}</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{number_format($national['pu']/$national['total_work_day'],2)}}</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{number_format($national['bonus_pus'],2)}}</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{number_format($national['bonus_pus']/$national['total_work_day'],2)}}</th>
            @endif
            @if($role==7 || $role==6 || $role==5 || $role==1)
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{number_format($national['bonus'],2)}}</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{number_format($national['bonus']/$national['total_work_day'],2)}}</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($national['revenue'],2))}}</th> 
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($national['revenue']/$national['total_work_day'],2))}}</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;" data-format="£#,##0.00_-" >{{str_replace(',','',number_format($national['profit'],2))}}</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($national['profit']/$national['total_work_day'],2))}}</th>
            @endif
        </tr>
        @endif
        <tr>
            <td>&nbsp;</td>
        </tr>
        @foreach ($data as $ky => $regions)
        
        <tr>
            <th style="border: 1px solid #000000;font-weight: bold;">{{$ky}}</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Total Jobs</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Completed</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Aborted</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Open</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Cancelled</th>
            @if($role==8 || $role==7 || $role==6 || $role==5 || $role==1)
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">PU</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">PU/Day</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU/Day</th>
            @endif
            @if($role==7 || $role==6 || $role==5 || $role==1)
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus/Day</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Revenue</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Revenue/Day</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Profit</th>
                <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Profit/Day</th>
            @endif
        </tr>
        <?php
          $engineer_days=0;
          $total_job=0;
          $completed=0;
            $aborted=0;
            $open=0;
            $cancelled=0;
            $pu=0;
            $pu_day=0;
            $bonus_pus=0;
            $bonus_pus_day=0;
            $bonus=0;
            $bonus_day=0;
            $revenue=0;
            $revenue_day=0;
            $profit=0;
            $profit_day=0;
        ?>
            @foreach ($regions as $k=> $users)
              @if($k!='regions_engineer_total')
            <?php
          $engineer_days = $engineer_days+$users['working_day'];   
          $total_job = $total_job + $users['total_job'];
          $completed= $completed + $users['completed'];
          $aborted=$aborted + $users['aborted'];;
          $open=$open + $users['open'];;
          $cancelled=$cancelled + $users['cancelled'];
          $pu=$pu + $users['pu'];
          $pu_day=$pu_day + $users['pu_day'];
          $bonus_pus=$bonus_pus + $users['bonus_pus'];
          $bonus_pus_day=$bonus_pus_day + $users['bonus_pus_day'];
          $bonus=$bonus + $users['bonus'];
          $bonus_day=$bonus_day + $users['bonus_day'];
          $revenue=$revenue + $users['revenue'];
          $revenue_day=$revenue_day + $users['revenue_day'];
          $profit=$profit + $users['profit'];
          $profit_day=$profit_day + $users['profit_day'];
        ?>
            <tr>
                <td style="width:20;border: 1px solid #000000;">{{$users['engineer_name']}}</td>
                <td style="width:10;border: 1px solid #000000;text-align: center;">{{$users['total_job']}}</td>
                <td style="border: 1px solid #000000;text-align: center;">{{$users['completed']}}</td>
                <td style="border: 1px solid #000000;text-align: center;">{{$users['completed_per']}}%</td>
                <td style="border: 1px solid #000000;text-align: center;" >{{$users['aborted']}}</td>
                <td style="border: 1px solid #000000;text-align: center;">@if(isset($users['aborted_per'])){{$users['aborted_per']}}@else 0.00 @endif%</td>
                <td style="width:10;border: 1px solid #000000;text-align: center;">{{$users['open']}}</td>
                <td style="width:10;border: 1px solid #000000;text-align: center;">{{$users['cancelled']}}</td>
                @if($role==8 || $role==7 || $role==6 || $role==5 || $role==1)
                    <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="#,##0.00_-">{{$users['pu']}}</td>
                    <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($users['pu_day'],2))}}</td>
                    <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($users['bonus_pus'],2))}}</td>
                    <td style="width:15;border: 1px solid #000000;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($users['bonus_pus_day'],2))}}</td>
                @endif
                @if($role==7 || $role==6 || $role==5 || $role==1)
                    <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($users['bonus'],2))}}</td>
                    <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">{{
                        str_replace(',','',number_format($users['bonus_day'],2))}}</td>
                    <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($users['revenue'],2))}}</td>
                    <td style="width:15;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($users['revenue_day'],2))}}</td>
                    <td style="width:15;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($users['profit'],2))}}</td>
                    <td style="width:15;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($users['profit_day'],2))}}</td>
                    @endif
            </tr>
            @endif
            @endforeach 
            
            <tr>
                <th style="border: 1px solid #000000;font-weight: bold;"></th>
                <th style="border: 1px solid #000000;font-weight: bold;text-align: center;">{{$total_job}}</th>
                <th  style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$completed}}</th>
                <th style="border: 1px solid #000000;text-align: center;">
                @if($completed!=0){{number_format(($completed/($total_job-$cancelled))*100,2)}}@else
                0
                @endif%</th>
                <th  style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$aborted}}</th>
                <th style="border: 1px solid #000000;text-align: center;">
                @if($aborted!=0){{number_format(($aborted/($total_job-$cancelled))*100,2)}}@else
                0 @endif%</th>
                <th style="border: 1px solid #000000;font-weight: bold;text-align: center;">{{$open}}</th>
                <th style="border: 1px solid #000000;font-weight: bold;text-align: center;">{{$cancelled}}</th>
                @if($role==8 || $role==7 || $role==6 || $role==5 || $role==1)
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="#,##0.00_-" >{{$pu}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($pu/$engineer_days,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($bonus_pus,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($bonus_pus/$engineer_days,2))}}</th>
                @endif
                @if($role==7 || $role==6 || $role==5 || $role==1)
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($bonus,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-" >{{str_replace(',','',number_format($bonus/$engineer_days,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($revenue,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($revenue/$engineer_days,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($profit,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($profit/$engineer_days,2))}}</th>
                @endif

            </tr>
            <tr><td>&nbsp;</td></tr>
        
        @endforeach 
    </tbody>
</table> 
