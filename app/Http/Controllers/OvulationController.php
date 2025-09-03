<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OvulationController extends Controller
{
    public function showCalculator()
    {
        return view('index'); 
    }
}