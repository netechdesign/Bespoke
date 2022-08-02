<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Holiday_mpl extends Model
{
    protected $table= 'holiday_mpls';
    protected $fillable = ['engineer_id',
    'employee_ref_no',
    'teamhrs_user_id',
    'holiday_type',
    'holiday_date',
    'holiday_hours',
    'holiday_minutes',
    'pu_value_reduction',
    'mpl_pu'];


}
