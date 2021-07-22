<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Engineer_lookup extends Model
{
    //
    protected $fillable = ['engineer_id','engineer_name','team_id','regions_sort_name','perfomance_level','cost','Monday','Tuesday','Wednesday','Thursday','Friday'];
    
}
