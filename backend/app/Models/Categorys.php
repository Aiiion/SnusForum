<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorys extends Model
{
    use HasFactory;
    public function categotrys(){
        return $this->hasMany('\App\Models\Category')->get();
    }
}
