<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Teams extends Model
{
    //
    protected $fillable = ['engineer_id','engineer_name','regions_id','regions_sort_name'];
}
