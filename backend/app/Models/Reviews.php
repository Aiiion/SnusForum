<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reviews extends Model
{
    use HasFactory;

    public function snus(){
        $this->belongsTo('\App\Models\Snus')->first();
    }

    public function users(){
        $this->belongsTo('\App\Models\User')->first();
    }

}
