<?php

$message = 'привет';

$example = function () {
    var_dump($message);
};
$example(); // ?

$example = function () use ($message) {
    var_dump($message);
};
$example(); // ?

$message = 'мир';
$example(); // ?

$message = 'привет';

$example = function () use (&$message) {
    var_dump($message);
};
$example(); // ?

$message = 'мир';
echo $example(); // ?
