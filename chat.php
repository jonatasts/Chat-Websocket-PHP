<?php

require './vendor/autoload.php';

ini_set('default_charset', 'utf-8');
mb_internal_encoding("UTF-8");

use Chat\ChatServer;

$app = new Ratchet\App('localhost', 9990);
$app->route('/chat', new ChatServer, ['*']);
$app->run();