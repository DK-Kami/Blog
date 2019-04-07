<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Article;
use App\Comment;
use App\Http\Resources\CommentMinimalResource;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Article $article)
    {
        $request['user_id'] = Auth::user()->id;
        $request['article_id'] = $article->id;

        return new CommentMinimalResource(Comment::create($request->all()));
    }
}
