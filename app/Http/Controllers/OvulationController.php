<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OvulationController extends Controller
{
    public function showCalculator()
    {
        return view('index'); // This should match the filename of your Blade view (index.blade.php)
    }
}