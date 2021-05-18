<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;
    public function categorys(){
        return $this->hasOne('\App\Models\Categorys')->get();
    }

    public function comments(){
        return $this->hasMany('\App\Models\Comments')->get();
    }

}
