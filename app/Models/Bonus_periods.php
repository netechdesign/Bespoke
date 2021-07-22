<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bonus_periods extends Model
{
    protected $fillable = ['year','month','period','wc','created_by'];
}
