<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sms_job extends Model
{
    //
    protected $fillable = [
        'sheets_id',
'week_no',
'week_day',
'week_date',
'engineer_id',
'engineer',
'is_in_team',
'appointment_date',
'regions_sort_name',
'job_reference',
'energy_supplier',
'address',
'town',
'post_code',
'work_type',
'select_work_type',
'meter_type',
'time_slot',
'arrived_at',
'status',
'abort_code',
'abort_comments',
'job_comments',
'time_slot_start',
'time_slot_end',
'completed_at',
'aborted_at',
'client',
'reason_for_abort',
'row_data',
'created_by',
    ];
}
