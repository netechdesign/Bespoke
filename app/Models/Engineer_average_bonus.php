<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Engineer_average_bonus extends Model
{
    //
    
    protected $table= 'engineer_average_bonuses';
    protected $fillable = ['engineer_id','average_per_day_bonus','days_in_period','current_period','previous_period'];

    
}
