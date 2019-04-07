<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
  public function clearCache() {
      \Artisan::call('cache:clear');
      \Artisan::call('config:cache');
      \Artisan::call('view:clear');
      \Artisan::call('route:clear');

      return [
          'data' => 'Cache successfully cleared',
      ];
  }

  public function validateToken() {
      return [
          'data' => 'Token is valid'
      ];
  }
}
