<?php

namespace App\Http\Controllers\Admin;

use App\Article;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\ArticleMinimalResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
      return new ArticleResource(Article::create($request->all()));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Article $article
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Article $article)
  {
      return new ArticleResource($article->update($request->all()));
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Article $article
   * @return \Illuminate\Http\Response
   */
  public function destroy(Article $article)
  {
      $article->delete();

      return response('ok', 204);
  }
}
