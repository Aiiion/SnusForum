<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Comments;
use App\Models\User;

class CommentsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::check()){
            $comments = Comment::all();

            return ['comments' => $comments];
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
            $comment = new Comments();
            $comment->users_id = Auth::id();
            $comment->body = $request->body;
            $comment->posts_id = $request->posts_id;
            $comment->save();
            $comment->username = User::where('id', $comment->users_id)->first()->username;

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
        if (Auth::check()) {
            $comments = Comments::where('id', $id)->first();
            return ['comments' => $comments];
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
            $comment = Comments::where('id', $id)->first();
            $comment->delete();
            return 'The comment has been deleted';
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }
}