
<table width="100%">
    <tbody>
    <?php if(!isset($view)) {?>
         <tr>
            <td colspan="12" style="text-align: center;font-weight: bold;font-size:15px">Work Mix</td>
        </tr>
        <tr>
            <td colspan="2"><b>Date :</b>{{date('d-m-Y',strtotime(str_replace('/', '-', $_REQUEST['start_date'])))}} To {{date('d-m-Y',strtotime(str_replace('/', '-', $_REQUEST['end_date'])))}}</td>
            
        </tr> 
        <tr>
        <td colspan="2"><b>Reporting Date :</b>{{date('d-m-Y')}}</td>
        </tr>
        <?php } ?>       
        <tr>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;"></th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Total Jobs</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Dual</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Single</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Other</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">In Hours</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Out of Hours</th>
        </tr>
        @if(isset($national))
        
        <tr>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">National</th>
            <th  style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$national['completed']}}</th>

            
                 <th style="border: 1px solid #000000;" >{{$national['Dual']}}</th>
                 <th style="border: 1px solid #000000;text-align: right;">{{round(($national['Dual']/$national['completed'])*100,2)}}%</th>
                
                <th style="border: 1px solid #000000;" >{{$national['Single']}}</th>
                <th style="border: 1px solid #000000;text-align: right;">{{round(($national['Single']/$national['completed'])*100,2)}}%</th>
                
                <th style="border: 1px solid #000000;" >{{$national['Other']}}</th>
                <th style="border: 1px solid #000000;text-align: right;">{{round(($national['Other']/$national['completed'])*100,2)}}%</th>
                
                <th style="border: 1px solid #000000;" >{{$national['in_hours']}}</th>
                <th style="border: 1px solid #000000;text-align: right;">{{round(($national['in_hours']/$national['completed'])*100,2)}}%</th>
                
                <th style="border: 1px solid #000000;" >{{$national['out_hours']}}</th>
                <th style="border: 1px solid #000000;text-align: right;">{{round(($national['out_hours']/$national['completed'])*100,2)}}%</th>

        </tr>
        @endif
        <tr>
            <td></td>
        </tr>
        @foreach ($data as $ky => $regions)
        
        <tr>
            <th></th>
            <th style="border: 1px solid #000000;text-align: center;font-weight: bold;">Total Job</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Dual</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Single</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Other</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">In Hours</th>
            <th colspan="2" style="border: 1px solid #000000;text-align: center;font-weight: bold;">Out of Hours</th>
            
        </tr>
        <?php
          $total_job=0;
          $completed=0;
          $Single=0;
          $Dual=0;
          $Other=0;
          $in_hours=0;
          $out_hours=0;
          $completed_per=0;
          $Single_per=0;
          $Dual_per=0;
          $Other_per=0;
          $in_hours_per=0;
          $out_hours_per=0;

        ?>
            @foreach ($regions as $k=> $users)
              @if($k!='regions_engineer_total')
            <?php
             
          $total_job = $total_job + $users['total_job'];
          $completed = $completed + (isset($users['completed'])?$users['completed']:0);
          $Single= $Single + (isset($users['Single'])?$users['Single']:0);
          $Dual= $Dual + (isset($users['Dual'])?$users['Dual']:0);
          $Other= $Other + (isset($users['Other'])?$users['Other']:0);
          $in_hours= $in_hours + (isset($users['in_hours'])?$users['in_hours']:0);
          $out_hours= $out_hours + (isset($users['out_hours'])?$users['out_hours']:0);
          $completed_per= $completed_per + (isset($users['completed_per'])?$users['completed_per']:0);
          $Single_per= $Single_per + (isset($users['Single_per'])?$users['Single_per']:0);
          $Dual_per= $Dual_per + (isset($users['Dual_per'])?$users['Dual_per']:0);
          $Other_per= $Other_per + (isset($users['Other_per'])?$users['Other_per']:0);
          $in_hours_per= $in_hours_per + (isset($users['in_hours_per'])?$users['in_hours_per']:0);
          $out_hours_per= $out_hours_per + (isset($users['out_hours_per'])?$users['out_hours_per']:0);
          
        ?>
            <tr>
                <td style="width:20;border: 1px solid #000000;">{{$users['engineer_name']}}</td>
                <td style="border: 1px solid #000000;">{{$users['completed']}}</td>
                
                <td style="border: 1px solid #000000;" >@if(isset($users['Dual'])){{$users['Dual']}} @else 0 @endif</td>
                <td style="border: 1px solid #000000;text-align: right;">@if(isset($users['Dual_per'])){{round($users['Dual_per'],2)}} @else 0.00 @endif %</td>

                <td style="border: 1px solid #000000;" >@if(isset($users['Single'])){{$users['Single']}} @else 0 @endif</td>
                <td style="border: 1px solid #000000;text-align: right;">@if(isset($users['Single_per'])){{round($users['Single_per'],2)}} @else 0.00 @endif %</td>
                
                <td style="border: 1px solid #000000;" >@if(isset($users['Other'])){{$users['Other']}} @else 0 @endif</td>
                <td style="border: 1px solid #000000;text-align: right;">@if(isset($users['Other_per'])){{round($users['Other_per'],2)}} @else 0.00 @endif %</td>
                
                <td style="border: 1px solid #000000;" >@if(isset($users['in_hours'])){{$users['in_hours']}} @else 0 @endif</td>
                <td style="border: 1px solid #000000;text-align: right;">@if(isset($users['in_hours_per'])){{round($users['in_hours_per'],2)}} @else 0.00 @endif %</td>
                
                <td style="border: 1px solid #000000;" >@if(isset($users['out_hours'])){{$users['out_hours']}} @else 0 @endif</td>
                <td style="border: 1px solid #000000;text-align: right;">@if(isset($users['out_hours_per'])){{round($users['out_hours_per'],2)}} @else 0.00 @endif %</td>
            </tr>
            @endif
            @endforeach 
            
           <tr>
                <th style="border: 1px solid #000000;font-weight: bold;">{{$ky}}</th>
                
                <th  style="border: 1px solid #000000;text-align: center;font-weight: bold;">{{$completed}}</th>
                
                <th style="border: 1px solid #000000;font-weight: bold;">{{$Dual}}</th>
                <th style="border: 1px solid #000000;text-align: right;">@if($Dual!=0){{round(($Dual/($completed))*100,2)}}@else 0.00 @endif %</th>

                <th style="border: 1px solid #000000;font-weight: bold;">{{$Single}}</th>
                <th style="border: 1px solid #000000;text-align: right;">@if($Single!=0){{round(($Single/($completed))*100,2)}} @else 0.00 @endif%</th>

                <th style="border: 1px solid #000000;font-weight: bold;">{{$Other}}</th>
                <th style="border: 1px solid #000000;text-align: right;">@if($Other!=0){{round(($Other/($completed))*100,2)}} @else 0.00 @endif %</th>

                <th style="border: 1px solid #000000;font-weight: bold;">{{$in_hours}}</th>
                <th style="border: 1px solid #000000;text-align: right;">@if($in_hours!=0){{round(($in_hours/($completed))*100,2)}} @else 0.00 @endif %</th>

                <th style="border: 1px solid #000000;font-weight: bold;">{{$out_hours}}</th>
                <th style="border: 1px solid #000000;text-align: right;">@if($out_hours!=0){{round(($out_hours/($completed))*100,2)}} @else 0.00 @endif % %</th>
            </tr> 
            <tr><td></td></tr>
        
        @endforeach 
    </tbody>
</table> 
