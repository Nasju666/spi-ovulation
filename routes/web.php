<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OvulationController;

Route::get('/', [OvulationController::class, 'showCalculator']);