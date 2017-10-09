<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
<div class="container-fluid" id="app">
    <navigation></navigation>
    <!-- Survey goes here -->
    <div class="row">
        <div class="col-md-4">
            <create-product></create-product>
        </div>
    </div>
    <!-- End of survey component -->
</div>
<script src="/js/app.js"></script>
</body>
</html>