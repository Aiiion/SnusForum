<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Snus;
use App\Models\User;
use App\Models\Reviews;
use App\Models\Flavours;


class SnusController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $snuses = Snus::all();
            // foreach ($snuses as $snus){
            //     $snus->avgRating = $snus->avgRating();
            // } SAVE TO LATER!!!
            foreach($snuses as $snus){
                $snus->flavour_name = Flavours::where('id', $snus->flavours_id)->first()->flavour_type;
            }
            return ['snuses' => $snuses];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(Auth::check()){
            $snus = new Snus();
            $snus->name = $request->name;
            $snus->type = $request->type;
            $snus->strength = $request->strength;
            $snus->img_url = $request->img_url;
            $snus->flavours_id = $request->flavours_id;
            $snus->save();
            return ['snus' => $snus, 'message' => 'The snus ' . $snus->name . ' ' . $snus->type . ' has been created!'];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (Auth::check()) {
            $snus = Snus::where('id', $id)->first();
            $snus->avgRating = $snus->avgRating(); 
            $reviews = Reviews::where('snuses_id', $id)->get();
            
            $snus->flavour_name = Flavours::where('id', $snus->flavours_id)->first()->flavour_type;
            foreach ($reviews as $review){
                $review->username = User::where('id', $review->users_id)->first()->username;
            }
            return ['snus' => $snus, 'reviews' => $reviews];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Auth::check()){
            $snus = Snus::where('id', $id)->first();
            $snus->delete();
            return ['message' => 'The snus ' . $snus->name . ' ' . $snus->type . ' has been deleted'];
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }
}
