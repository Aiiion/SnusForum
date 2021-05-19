<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
<<<<<<< HEAD:backend/app/Http/Controllers/FlavourController.php
use Illuminate\Support\Facades\Auth;
use App\Models\Flavour;
=======
use App\Models\Flavours;
>>>>>>> 85ca89315af11b23e22b9668662d153cc09f26af:backend/app/Http/Controllers/FlavoursController.php

class FlavoursController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
<<<<<<< HEAD:backend/app/Http/Controllers/FlavourController.php
        $flavour = Flavour::all();
=======
        $flavours = Flavours::all();

        return ['flavours' => $flavours];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
>>>>>>> 85ca89315af11b23e22b9668662d153cc09f26af:backend/app/Http/Controllers/FlavoursController.php

        return ['flavour' => $flavour];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
<<<<<<< HEAD:backend/app/Http/Controllers/FlavourController.php
        $flavour = Flavour::where('id', $id)->first();
=======
        $flavours = Flavours::where('id', $id)->first();
    }
>>>>>>> 85ca89315af11b23e22b9668662d153cc09f26af:backend/app/Http/Controllers/FlavoursController.php

        return ['flavour' => $flavour];
    }


<<<<<<< HEAD:backend/app/Http/Controllers/FlavourController.php
}
=======
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
>>>>>>> 85ca89315af11b23e22b9668662d153cc09f26af:backend/app/Http/Controllers/FlavoursController.php
