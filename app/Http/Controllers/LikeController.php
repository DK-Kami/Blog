<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Like;
use App\Article;
use App\Http\Resources\LikeResource;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LikeResource::collection(Like::where('user_id', Auth::user()->id)->get());
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Article $article)
    {
        $like = Like::where('user_id', Auth::user()->id)->where('article_id', $article->id)->get();

        if($like->isEmpty()) {
            $request['user_id'] = Auth::user()->id;
            $request['article_id'] = $article->id;

            $like = Like::create($request->all());

            return new LikeResource($like);
        }

        return \response('exist', 418);
    }
}
