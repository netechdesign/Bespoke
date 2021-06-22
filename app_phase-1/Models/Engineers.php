<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Engineers extends Model
{
    //
    protected $fillable = ['engineer_id','engineer_name','file_id','is_delete','created_at'];
}
