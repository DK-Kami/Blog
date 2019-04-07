<?php

namespace App\Http\Resources;

use App\Comment;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'      => $this->id,
            'tag'     => $this->tag,
            'text'    => $this->text,
            'picture' => $this->picture,
            'date'    => new DateResource($this),
            'comments' => CommentResource::collection(Comment::where('parent_id', 0)->where('article_id', $this->id)->get()),
            'likes' => new LikeResource($this),
        ];
    }
}
