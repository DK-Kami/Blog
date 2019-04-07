<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/clear-cache', 'ServiceController@clearCache');

Route::get('/article', 'ArticleController@index');
Route::get('/article/{article}', 'ArticleController@show');

Route::post('user/register', 'UserController@create');

Route::middleware('auth:api')->group( function () {
    Route::get('/validate-token', 'ServiceController@validateToken');

    Route::post('/comment/{article}', 'CommentController@store');
    Route::post('/like/{article}', 'LikeController@store');
    Route::get('/like', 'LikeController@index');

    Route::get('/guest-book', 'GuestBookController@index');
    Route::post('/guest-book', 'GuestBookController@store');

    Route::group(['middleware' => 'admin'], function() {
        Route::post('/article', 'Admin\ArticleController@store');
        Route::put('/article/{article}', 'Admin\ArticleController@update');
        Route::delete('/article/{article}', 'Admin\ArticleController@destroy');

        Route::post('/user', 'UserController@store', ['as' => 'admin']);
        Route::put('/user/{user}', 'UserController@update', ['as' => 'admin']);
        Route::delete('/article/{user', 'UserController@destroy', ['as' => 'admin']);
    });

});
