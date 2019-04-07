<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
      'tag', 'text', 'picture',
    ];

    public function comments() {
      return $this->hasMany('App\Comment');
    }

    public function likes() {
      return $this->hasMany('App\Like');
    }
}
