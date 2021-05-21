<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Reviews;
use App\Models\User;

class ReviewsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reviews = Reviews::all();
        return ['reviews' => $reviews];
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
            $review = new Reviews();
            $review->users_id = Auth::id();
            $review->snuses_id = $request->snuses_id;
            $review->title = $request->title;
            $review->body = $request->body;
            $review->rating = $request->rating;
            $review->save();
            $review->username = User::where('id', $review->users_id)->first()->username;

            return ['review' => $review];
        } else{
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
         $review = Reviews::where('id', $id)->first();
         $review->username = User::where('id', $review->users_id)->first()->username;

         return ['review' => $review];
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
            $review = Reviews::where('id', $id)->first();
            $review->delete();
            return 'The review was deleted';
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }
}