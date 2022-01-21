<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class M25_postcodes extends Model
{
    //
    protected $table= 'm25_postcodes';
    use SoftDeletes;
    protected $fillable = ['name','created_at'];
}
