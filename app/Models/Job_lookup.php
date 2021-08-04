<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job_lookup extends Model
{
    //
    protected $fillable = ['job_type','mix','revenue','pu','pu_aborted','revenue_aborted','contract'];
}
