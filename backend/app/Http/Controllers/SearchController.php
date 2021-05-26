<?php

namespace App\Http\Controllers;

use App\Models\Flavours;
use App\Models\Snus;
use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function search($key) {
        $snus = Snus::query()
        ->where('name', 'LIKE', "%{$key}%")
        ->orWhere('type', 'LIKE', "%{$key}%")
        ->get();

        $flavours = Flavours::query()
        ->where('flavour_type', 'LIKE', "%{$key}%")
        ->get();

        return ['snus' => $snus, 'flavours' => $flavours];
    }
}
