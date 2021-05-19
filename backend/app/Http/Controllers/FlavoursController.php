<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flavours;

class FlavoursController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $flavours = Flavours::all();

        return ['flavours' => $flavours];
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $flavours = Flavours::where('id', $id)->first();
        return ['flavour' => $flavour];
    }


}
