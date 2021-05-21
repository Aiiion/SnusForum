<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Posts;
use App\Models\User;


class PostsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::check()) {
            $posts = Posts::all();

            return ['posts' => $posts];
        } else {
            return ['Not authorized' => 400];
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
            $post = new Posts();
            $post->user_id = Auth::id();
            $post->title = $request->title;
            $post->body = $request->body;
            $post->categorys_id = $request->categorys_id;
            $post->save();
            $post->username = User::where('id', $post->users_id)->first()->username;

            return ['post' => $post];
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
        if(Auth::check()){
            $post = Posts::where('id', $id)->first();
            $categorys = $post->categorys();
            $comments = $post->comments();
            return ['post' => $post, 'categorys' => $categorys, 'comments' => $comments];
        }else{
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
            $post = Posts::where('id', $id)->first();
            $post->delete();
            return 'The post has been deleted';
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }
}