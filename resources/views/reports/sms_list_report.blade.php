
<table id="view_report" width="100%">
    <tbody>
        <?php if(!isset($view)) {
            
            ?>
            
            <tr>
                <td colspan="18" style="text-align: center;font-weight: bold;font-size:15px">
                @if(isset($_REQUEST['engineer_id']))
                {{$data[0]->engineer}}
                @endif
            </td>
            </tr>
            
        <tr>
            <td colspan="2"><b>Date :</b>
            
            @if(isset($_REQUEST['appointment_date']))
                {{date('d-m-Y',strtotime(str_replace('/', '-', $_REQUEST['appointment_date'])))}}
            @else
              {{date('d-m-Y',strtotime(str_replace('/', '-', $_REQUEST['start_date'])))}} To {{date('d-m-Y',strtotime(str_replace('/', '-', $_REQUEST['end_date'])))}}
            @endif
           
        </td>
            @if(isset($_REQUEST['work_completed']))
            <td colspan="3">

                <b>Work Completed :</b>@if($_REQUEST['work_completed']=='out_of_hours') Out of Hours  @elseif($_REQUEST['work_completed']=='in_hours') In Hours @else All @endif</td>
            @endif
            @if(isset($_REQUEST['status']))
            <td colspan="3">

                <b>Status :</b>{{$_REQUEST['status']}}</td>
            @endif
        </tr> 
        <tr>
        <td colspan="2"><b>Reporting Date :</b>{{date('d-m-Y')}}</td>
        </tr>
       <?php } ?>        
        <tr>
            <th style="border: 1px solid #000000;font-weight: bold;">Job Reference</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Energy Supplier</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Address</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Town</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Post Code</th>
            <th style="border: 1px solid #000000;font-weight: bold;">MPAN</th>
            <th style="border: 1px solid #000000;font-weight: bold;">MPRN</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Work Type</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Please select Work Type</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Meter Type</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Appointment Date</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Time Slot</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Arrived At</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Status</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Engineer</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Abort Code</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Abort Comments</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Access Info</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Job Comments</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Customer been left OFF supply?</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Customer Vulnerabilities</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Elec Removed Meter Serial</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Elec Removed Read 1</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Elec Removed Read 2</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Elec Meter Balance</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Gas Removed Meter Serial</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Gas Old Module Number</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Gas Removed Read 1</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Gas Meter Balance</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Regulator Serial Number</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Elec New Meter Serial Number</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Initial Elec Read</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Hub Serial</th>
            <th style="border: 1px solid #000000;font-weight: bold;">In Home Display Serial</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Gas New Meter Serial Number</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Initial Gas Read</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Device Type</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Electricity prepayment card number</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Gas prepayment card number</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Contactor Serial No	</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Time Slot Start</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Time Slot End</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Planned Start Date</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Communications Check Successful?</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Completed At</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Aborted At</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Client</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Reason for Abort</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Responsible Party</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Cancellation Reason</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Cancellation Comments</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Received At</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Was the customer spoken to about the rearranged time?</th>
            <th style="border: 1px solid #000000;font-weight: bold;">When was the customer spoken to?</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Meter Box door used</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Isolator used</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Semi-Con kit used</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Contactor used</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Back Board used</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Required By Time</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Service Ref</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Customer Data Choice</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Additional device to join type</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Additional device ID</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Job Path</th>
            <th style="border: 1px solid #000000;font-weight: bold;">Reused?</th>

        </tr>
    
    @foreach ($data as $ky => $vl)
        <?php $row_data = json_decode($vl->row_data); ?>
        <tr>
        <td style="border: 1px solid #000000;">{{$row_data->job_reference}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->energy_supplier}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->address}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->town}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->post_code}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->mpan}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->mprn}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->work_type}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->please_select_work_type}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->meter_type}}</td>
        <td style="border: 1px solid #000000;">{{date('d/m/Y',strtotime($row_data->appointment_date))}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->time_slot}}</td>
        <td style="border: 1px solid #000000;">
        @if(date('Y',strtotime($row_data->arrived_at))!='1970')
          {{date('d/m/Y H:i',strtotime($row_data->arrived_at))}}
        @endif
        </td>
        <td style="border: 1px solid #000000;">{{$row_data->status}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->engineer}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->abort_code}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->abort_comments}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->access_info}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->job_comments}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->customer_been_left_off_supply}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->customer_vulnerabilities}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->elec_removed_meter_serial}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->elec_removed_read_1}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->elec_removed_read_2}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->elec_meter_balance}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->gas_removed_meter_serial}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->gas_old_module_number}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->gas_removed_read_1}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->gas_meter_balance}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->regulator_serial_number}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->elec_new_meter_serial_number}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->initial_elec_read}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->hub_serial}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->in_home_display_serial}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->gas_new_meter_serial_number}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->initial_gas_read}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->device_type}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->electricity_prepayment_card_number}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->gas_prepayment_card_number}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->contactor_serial_no}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->time_slot_start}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->time_slot_end}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->planned_start_date}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->communications_check_successful}}</td>
        <td style="border: 1px solid #000000;">
        @if(date('Y',strtotime($row_data->completed_at))!='1970')
        {{date('d/m/Y',strtotime($row_data->completed_at))}}
        @endif
    </td>
        <td style="border: 1px solid #000000;">
        @if(date('Y',strtotime($row_data->aborted_at))!='1970')
        {{date('d/m/Y',strtotime($row_data->aborted_at))}}
        @endif
        </td>
        
        <td style="border: 1px solid #000000;">{{$row_data->client}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->reason_for_abort}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->responsible_party}}</td>
            <td style="border: 1px solid #000000;">{{$row_data->cancellation_reason}}</td>
<td style="border: 1px solid #000000;">{{$row_data->cancellation_comments}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->received_at}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->was_the_customer_spoken_to_about_the_rearranged_time}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->when_was_the_customer_spoken_to}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->meter_box_door_used}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->isolator_used}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->semi_con_kit_used}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->contactor_used}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->back_board_used}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->required_by_time}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->service_ref}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->customer_data_choice}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->additional_device_to_join_type}}</td>
        <td style="border: 1px solid #000000;">{{$row_data->additional_device_id}}</td>
        <td style="border: 1px solid #000000;"> @if(isset($row_data->job_path)) {{$row_data->job_path}} @endif</td>
        <td style="border: 1px solid #000000;">{{$row_data->reused}}</td>
    }
        </tr>
@endforeach
    
    </tbody>
</table> 
