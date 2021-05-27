<?php

namespace Database\Seeders;

use App\Models\Categorys;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $categorys = [
            'GÖRA EGET SNUS',
            'MATCHA SNUS MED KÄK Å DRYCK',
            'ODLA TOBAK',
            'SNUSTIPSET',
            'ÖVRIGT'
        ];

        \App\Models\User::factory(10)->create();
        \App\Models\Flavours::factory(10)->create();
        \App\Models\Snus::factory(10)->create();
        \App\Models\Reviews::factory(50)->create();
        foreach($categorys as $category){
            \App\Models\Categorys::create([
                'category' => $category
            ]);
        };
        
        \App\Models\Posts::factory(20)->create();
        \App\Models\Comments::factory(50)->create();
        \App\Models\Favourites::factory(10)->create();
    }
}