<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SnusController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\CategorysController;
use App\Http\Controllers\FlavoursController;
<<<<<<< Updated upstream
use App\Http\Controllers\ReviewsController;
=======
use App\Http\Controllers\FavouritesController;

>>>>>>> Stashed changes

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider zwithin a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::get('/snuses', [SnusController::class, 'index']);
    Route::get('/snuses/{id}', [SnusController::class, 'show']);
    Route::get('/categorys', [CategorysController::class, 'index']);
    Route::get('/categorys/{id}', [CategorysController::class, 'show']);
    Route::get('/posts', [PostsController::class, 'index']);
    Route::get('/posts/{id}', [PostsController::class, 'show']);
    Route::get('/comments', [CommentsController::class, 'index']);
    Route::get('/comments/{id}', [CommentsController::class, 'show']);  //id === user_id?
    Route::get('/reviews', [ReviewsController::class, 'index']);
    Route::get('/reviews/{id}', [ReviewsController::class, 'show']);
    Route::get('/flavours', [FlavoursController::class, 'index']);
    Route::get('/flavours/{id}', [FlavoursController::class, 'show']);
    Route::post('/store-posts', [PostsController::class, 'store']);
    Route::post('/store-reviews', [ReviewsController::class, 'store']);
   Route::get('/favourites/{id}', [Favouritescontroller::class, 'show']);

});