<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class utilita_job extends Model
{
    //
    protected $fillable = ['sheets_id',
    'month',
    'week_day',
    'week_no',
    'week_date',
    'day_no',
    'customer_id',
    'job_id',
    'post_code',
    'job_type',
    'job_status',
    'fault',
    'job_booked',
    'appointment_time',
    'schedule_start_time',
    'schedule_end_time',
    'on_site_time',
    'cancelled_by',
    'cancelled_time',
    'engineer_id',
    'engineer',
    'company_name',
    'schedule_date',
    'region',
    'created_by'];

}
