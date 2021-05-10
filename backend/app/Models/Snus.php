<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Snus extends Model
{
    use HasFactory;

    public function flavours(){
        return $this->hasMany('\App\Models\Flavours')->get();
    }

    public function reviews(){
        return $this->hasMany('\App\Models\Reviews')->get();
    }
}
