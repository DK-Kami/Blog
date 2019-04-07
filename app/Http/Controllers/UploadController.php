<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
  private function _checkFilesMimeType($files, $mime_type) {
      $success = true;

      foreach($files as $file) {
          if(!starts_with($file->getClientMimeType(), $mime_type)) {
              $success = false;
          }
      }

      return $success;
  }

  public function saveFiles(Request $request) {
      $files      = $request->file('files');
      $mime_type  = $request['mime_type'];

      $access = $this->_checkFilesMimeType($files, $mime_type);

      if($access) {
          $filenames = [];
          foreach($files as $file) {
              $filename = '/' . $mime_type . '/' . time() . '__' . $file->getClientOriginalName();

              $file->move(public_path($mime_type), $filename);

              $filenames[] = $filename;
          }
          return [
              'data' => [
                  'files' => $filenames,
              ],
          ];
      } else {
          return [
              'data' => [
                  'error' => 'Не все выбранные файлы одного типа!'
              ]
          ];
      }
  }
}
