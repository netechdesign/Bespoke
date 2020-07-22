<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jobs extends Model
{
    //
    protected $fillable = ['sheets_id',
    'file_id',
    'file_name',
    'month',
    'week_day',
    'week_date',
    'date',
    'start_time',
    'end_time',
    'time_difference',
    'work_master_sign_id',
    'name',
    'area',
    'geo_area',
    'report_group',
    'field_force',
    'leaver_flg',
    'week_summary',
    'num',
    'complete',
    'abort',
    'no_access_rate',
    'smart_book',
    'warrant_book',
    'traditional_book',
    'smart_complete',
    'warrant_complete',
    'traditional_complete',
    'smart_abort',
    'warrant_abort',
    'traditional_abort',
    'smart_no_access',
    'warrant_no_access',
    'traditional_no_access',
    'sf_df',
    'job_type',
    'sf_df_helper',
    'work_type',
    'job_id',
    'schedule_date',
    'appointment_type',
    'description',
    'engineer_comment',
    'time_slot',
    'company_name',
    'created_by'];
    protected $guarded = [];
}
