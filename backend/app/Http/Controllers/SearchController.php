<?php

namespace App\Http\Controllers;

use App\Models\Flavours;
use App\Models\Snus;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request, Snus $snus, Flavours $flavours) {
        $query = $request->input('query');

        $snus = Snus::query()->where('name', 'like', "%$query%")->orWhere('type', 'like', "%$query%")->get();
        $flavours = Flavours::query()->where('flavour_type', 'like', "%$query%")->get();

}
}
