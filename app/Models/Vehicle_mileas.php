<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicle_mileas extends Model
{
    //
    protected $fillable = ['sheets_id',
    'registration',
    'drive_date',
    'start_time',
    'end_time', 
    'start_location',
    'end_location',
    'start_poi',
    'end_poi',
    'driver',
    'duration',
    'idle',
    'miles',
    'max_speed',
    'start_postcode',
    'end_postcode',
    'driver_name',
    'created_by'
       ];
}
