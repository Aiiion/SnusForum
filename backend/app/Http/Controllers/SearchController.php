<?php

namespace App\Http\Controllers;

use App\Models\Flavours;
use App\Models\Snus;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search($key) {

        return Snus::where('name','Like',"%$key%")->orWhere('type', 'like', "%{$key}%")->get();

    }
}
