<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job_lookup extends Model
{
    //
    protected $fillable = ['job_type','mix','revenue','pu','pu_aborted','revenue_aborted','revenue_M25','revenue_aborted_M25','contract','from_date','to_date'];
}
