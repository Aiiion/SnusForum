<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Favourites;
use App\Models\User;
use App\Models\Flavours; 
use App\Models\Snus;

class FavouritesController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $favourites = Favourites::all();
            return ['favourites' => $favourites ];
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
            $favourites = new Favourites();
            $favourites->users_id = Auth::id();
            $favourites->save(); //nu sparar du favorites utan något snus_id, den kommer kasta error då den inte får vara null
            $favourite->Snus = Snus::where('id', $favourite->snus_id)->first(); //du borde döpa variabeln till snuses_id för enhetlig kodstandard, detta är även fel i sql queryn. samt att favorites->snuses_id inte hinns här ännu. syftet här är att skapa den och definiera den
             //du har värdet för snuses_id i requesten (datan användaren skickar för att sparas) så då blir det $request->
            $favourites->username = User::where('id',  $favourites->users_id)->first()->username; //denna ska dock vara efter save då det inte ska sparas till db utan endast skickas till frontend

            return ['favourites' =>  $favourites, 'message' => 'added to your favourites!'];
         } else {
            return ['Please Login to view your Favourites' => 400];
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
            $favourites = Favourites::where('users_id', $id)->get();
            foreach ($favourites as $favourite) {

            $favourite->Snus = Snus::where('id', $favourite->id)->first();

            }
            return ['favourites' => $favourites];
        } else {
            return ['Please Login to view your Favourites' => 400];
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
            $favourite = Favourites::where('id', $id)->first();
            $favourite->delete();
            return ['message' => 'The favourite has been deleted'];
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }
}
