
<table id="view_report" width="100%">
    <tbody>
        <?php
        
        if(!isset($view)) {?>
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
        </tr>
       <?php } ?>        
        <tr>
          
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;"></th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Total Jobs</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Completed</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Aborted</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Open</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Cancelled</th>
            @if($query->role==8 || $query->role==7 || $query->role==1)
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">MPL</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">PU</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">PU/Day</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU/Day</th>
            @endif
            @if($query->role==7 || $query->role==1)
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus/Day</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Revenue</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Revenue/Day</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Profit</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Profit/Day</th>
            @endif
        </tr>
        @if(isset($national))
        <?php
        
        if($national['profit']<0){
            $national_profit_vl = str_replace('-','-£',number_format($national['profit'],2));
        }else{
          $national_profit_vl = '£'.number_format($national['profit'],2);
        }
        $profit_day = str_replace(',','',number_format($national['profit']/$national['total_work_day'],2));
        if($profit_day<0){
            $national_profit_day = str_replace('-','-£',number_format($profit_day,2));
        }else{
          $national_profit_day = '£'.number_format($profit_day,2);
        }
        $Nquerylist = "&start_date=".$query->start_date."&end_date=".$query->end_date."&job_type=".$query->job_type."&work_completed=".$query->job_type."&work_type=".json_encode($query->work_type);
        ?>
        <tr>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">National</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$national['total_job']}}</th>
            <th  style="border: 1px solid #000000;text-align: center;font-weight: bold;"><a  target='_blank' href='{{url("sms/list?status=completed".$Nquerylist)}}'>{{$national['completed']}}</a></th>
<td style="border: 1px solid #000000;text-align: right;"><a  target='_blank' href='{{url("sms/list?status=completed".$Nquerylist)}}'>{{number_format(($national['completed']/($national['total_job']-$national['cancelled']))*100,2)}}%<a></td>
            <th  style="border: 1px solid #000000;text-align: center;font-weight: bold;"><a  target='_blank' href='{{url("sms/list?status=aborted".$Nquerylist)}}'>{{$national['aborted']}}</a></th>
             <td style="border: 1px solid #000000;text-align: right;"><a  target='_blank' href='{{url("sms/list?status=aborted".$Nquerylist)}}'>{{number_format(($national['aborted']/($national['total_job']-$national['cancelled']))*100,2)}}%</a></td>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;"><a  target='_blank' href='{{url("sms/list?status=open".$Nquerylist)}}'>{{$national['open']}}</a></th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;"><a  target='_blank' href='{{url("sms/list?status=cancelled".$Nquerylist)}}'>{{$national['cancelled']}}</a></th>
            @if($query->role==8 || $query->role==7 || $query->role==1)
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$national['mpl_pu']}}</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$national['pu']}}</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{number_format($national['pu']/$national['total_work_day'],2)}}</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{number_format($national['bonus_pus'],2)}}</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{number_format($national['bonus_pus']/$national['total_work_day'],2)}}</th>
            @endif
            @if($query->role==7 || $query->role==1)
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{number_format($national['bonus'],2)}}</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{number_format($national['bonus']/$national['total_work_day'],2)}}</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($national['revenue'],2))}}</th> 
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;" data-format="£#,##0.00_-">{{str_replace(',','',number_format($national['revenue']/$national['total_work_day'],2))}}</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;" data-format="£#,##0.00_-" >{{$national_profit_vl}}</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;" data-format="£#,##0.00_-">{{$national_profit_day}}</th>
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
            @if($query->role==8 || $query->role==7 || $query->role==6 || $query->role==5 || $query->role==1)
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">MPL</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">PU</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">PU/Day</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU</th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Bonus PU/Day</th>
            @endif
            @if($query->role==7 || $query->role==6 || $query->role==5 || $query->role==1)
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
            $mpl_pu=0;
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
          $mpl_pu=$mpl_pu + $users['mpl_pu'];
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

          if($users['profit']<0){
              $profit_vl = str_replace('-','-£',number_format($users['profit'],2));
          }else{
            $profit_vl = '£'.number_format($users['profit'],2);
          }
          if($users['profit_day']<0){
            $profit_day_vl = str_replace('-','-£',number_format($users['profit_day'],2));
        }else{
          $profit_day_vl = '£'.number_format($users['profit_day'],2);
        }
        $querylist = "&engineer_id=".$users['engineer_id']."&start_date=".$query->start_date."&end_date=".$query->end_date."&job_type=".$query->job_type."&work_completed=".$query->job_type."&work_type=".json_encode($query->work_type);
        ?>
            <tr>
                <td style="width:20;border: 1px solid #000000;">{{$users['engineer_name']}}</td>
                <td style="width:10;border: 1px solid #000000;text-align: center;">{{$users['total_job']}}</td>
                <td style="border: 1px solid #000000;text-align: center;">
                @if($users['completed']>0)
                   <a  target='_blank' href='{{url("sms/list?status=completed".$querylist)}}'>{{$users['completed']}}</a>
                   @else   
                  {{$users['completed']}}
                  @endif
                </td>
                <td style="border: 1px solid #000000;text-align: center;">
                @if($users['completed']>0)
                   <a  target='_blank' href='{{url("sms/list?status=completed".$querylist)}}'>@if(isset($users['completed_per'])){{str_replace(',','',number_format($users['completed_per'],2))}}@else 0.00 @endif%</a>
                @else   
                @if(isset($users['completed_per'])){{str_replace(',','',number_format($users['completed_per'],2))}}@else 0.00 @endif%
                  @endif
            </td>
                <td style="border: 1px solid #000000;text-align: center;" >
                 
                 @if($users['aborted']>0)
                 <a  target='_blank' href='{{url("sms/list?status=aborted".$querylist)}}'>{{$users['aborted']}}<a>
                   @else   
                  {{$users['aborted']}}
                  @endif
                </td>
                 </td>
                <td style="border: 1px solid #000000;text-align: center;">
                @if($users['aborted']>0)
                <a  target='_blank' href='{{url("sms/list?status=aborted".$querylist)}}'>@if(isset($users['aborted_per'])){{str_replace(',','',number_format($users['aborted_per'],2))}}@else 0.00 @endif%</a>
                @else   
                @if(isset($users['aborted_per'])){{str_replace(',','',number_format($users['aborted_per'],2))}}@else 0.00 @endif%
                  @endif
            </td>
                
                <td style="width:10;border: 1px solid #000000;text-align: center;">
                  @if($users['open']>0)
                     <a target='_blank' href='{{url("sms/list?status=open".$querylist)}}'>{{$users['open']}}</a>
                  @else   
                  {{$users['open']}}
                  @endif
                </td>
                <td style="width:10;border: 1px solid #000000;text-align: center;">
                @if($users['cancelled']>0)
                <a  target='_blank' href='{{url("sms/list?status=cancelled".$querylist)}}'>{{$users['cancelled']}}</a>
                @else   
                  {{$users['cancelled']}}
                  @endif
            </td>
                 @if($query->role==8 || $query->role==7 || $query->role==6 || $query->role==5 || $query->role==1)
                 
                 <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="#,##0.00_-">
                        {{str_replace(',','',number_format($users['mpl_pu'],2))}}
                        </td>       
                 <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="#,##0.00_-">
                        {{str_replace(',','',number_format($users['pu'],2))}}
                        </td>
                        <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($users['pu_day'],2))}}</td>
                        <td class="pound_sign" style="width:10;border: 1px solid #000000;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($users['bonus_pus'],2))}}</td>
                        <td style="width:15;border: 1px solid #000000;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($users['bonus_pus_day'],2))}}</td>
                @endif
                @if($query->role==7 || $query->role==6 || $query->role==5 || $query->role==1)
                        <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">£{{str_replace(',','',number_format($users['bonus'],2))}}</td>
                        <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">£{{
                            str_replace(',','',number_format($users['bonus_day'],2))}}</td>
                        <td style="width:10;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">£{{str_replace(',','',number_format($users['revenue'],2))}}</td>
                        <td style="width:15;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">£{{str_replace(',','',number_format($users['revenue_day'],2))}}</td>
                        <td style="width:15;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">{{$profit_vl}}</td>
                        <td style="width:15;border: 1px solid #000000;text-align: center;" data-format="£#,##0.00_-">{{$profit_day_vl}}</td>
                @endif
            </tr>
            @endif
            @endforeach 
            <?php
             if($profit<0){
                $total_profit_vl = str_replace('-','-£',number_format($profit,2));
            }else{
                $total_profit_vl = '£'.number_format($profit,2);
            }
            $total_profit_day =str_replace(',','',number_format($profit/$engineer_days,2));
            if($total_profit_day<0){
              $total_profit_day_vl = str_replace('-','-£',$total_profit_day);
          }else{
            $total_profit_day_vl = '£'.$total_profit_day;
          }
            ?>
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
                @if($query->role==8 || $query->role==7 || $query->role==6 || $query->role==5 || $query->role==1)
                <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="#,##0.00_-" >
                    {{str_replace(',','',number_format($mpl_pu,2))}}</th>    
                <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="#,##0.00_-" >
                    {{str_replace(',','',number_format($pu,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($pu/$engineer_days,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($bonus_pus,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="#,##0.00_-">{{str_replace(',','',number_format($bonus_pus/$engineer_days,2))}}</th>
                @endif
                @if($query->role==7 || $query->role==6 || $query->role==5 || $query->role==1)
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-">£{{str_replace(',','',number_format($bonus,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-" >£{{str_replace(',','',number_format($bonus/$engineer_days,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-">£{{str_replace(',','',number_format($revenue,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-">£{{str_replace(',','',number_format($revenue/$engineer_days,2))}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-">{{$total_profit_vl}}</th>
                    <th style="border: 1px solid #000000;font-weight: bold;text-align: center;" data-format="£#,##0.00_-">{{$total_profit_day_vl}}</th>
                @endif
            </tr>
            <tr><td>&nbsp;</td></tr>
        
        @endforeach 
    </tbody>
</table> 
