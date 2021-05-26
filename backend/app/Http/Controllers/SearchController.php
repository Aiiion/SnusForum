<?php

namespace App\Http\Controllers;

use App\Models\Flavours;
use App\Models\Snus;
use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function search($key) {
        $flavours = Flavours::query()
        ->where('flavour_type', 'LIKE', "%{$key}%")
        ->get();
        $snuses = Snus::query()
        ->where('name', 'LIKE', "%{$key}%")
        ->orWhere('type', 'LIKE', "%{$key}%")
        ->get();

        
        foreach($flavours as $flavour){
            $relatedSnus = Snus::where('flavours_id', $flavour->id)->get();
            $snuses = $snuses->merge($relatedSnus); 
        }
        
        
        
        

        

        return ['snuses' => $snuses, 'flavours' => $flavours];
    }
}
