<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sms_teams extends Model
{
    protected $fillable = ['parent_engineer_id','parent_engineer','child_engineer_id','child_engineer_name','team_id','regions_sort_name','from_date','to_date'];
}
