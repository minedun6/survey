<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/products/create', function () {
    return view('products.create');
});

Route::get('/dashboard', function () {
    return view('dashboard.index');
});

Route::get('/player', function () {
    return view('player.index');
});

Route::get('/api/video', function () {
    return 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
})->name('api.video');
