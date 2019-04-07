<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
      'parent_id', 'user_id', 'article_id', 'text',
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function getItems() {
        return Comment::where('parent_id', $this->id)->get();
    }
}
