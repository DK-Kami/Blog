<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'id'        => $this->id,
            'user'      => $this->user,
            'text'      => $this->text,
            'date'      => new DateResource($this),
            'comments'  => CommentResource::collection($this->getItems())
        ];
    }
}
