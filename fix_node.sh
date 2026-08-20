#!/bin/bash
docker exec -i panel-panel-1 php -r '
require "/app/vendor/autoload.php";
$app = require_once "/app/bootstrap/app.php";
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$token = "W1luVDhLYUQ3MDhDR2hVVE5SaXZTSGNoMVV3Y0ZLWkVleWtYUEdCdjR5MHhYQktySFFuMmtMUktSdE1NOHNPOVNJZTNXa0Uwa2VKZU51MDliaWk4NjdzenEzMUFoQm9Eb3ZWbHRvc1R1ZWs9";
$encrypted = Illuminate\Support\Facades\Crypt::encrypt($token);

\DB::table("nodes")->where("id", 1)->update([
    "daemon_token" => $encrypted,
    "daemonListen" => 8081,
    "fqdn" => "localhost",
    "scheme" => "http"
]);

echo "Updated node 1 token with Crypt::encrypt successfully\n";
'
