<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Engineer_group extends Model
{
    protected $fillable = ['parent_engineer_id','parent_engineer','child_engineer_id','child_engineer_name'];
}
