<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SheetDupdatas extends Model
{
    //
    protected $fillable = ['sheets_id','file_id',
    'data','is_deleted'];
}
