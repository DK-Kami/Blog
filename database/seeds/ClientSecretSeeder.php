<?php

use Illuminate\Database\Seeder;

class ClientSecretSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('oauth_clients')->insert([
          'name' => 'Laravel Password Grant Client',
          'secret' => 'vynIbonjI6it443aBUGCW97tsmrzU5D2zhWz9LXF',
          'redirect' => 'http://localhost',
          'personal_access_client' => false,
          'password_client' => true,
          'revoked' => false,
      ]);
    }
}
