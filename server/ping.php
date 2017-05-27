<?php 

$postdata = json_decode(file_get_contents("php://input"));

print_r(pingDomain(trim($postdata->ip)));

function pingDomain($domain){
    $starttime = microtime(true);
    $file      = fsockopen ($domain, 80, $errno, $errstr, 10);
    $stoptime  = microtime(true);
    $status    = 0;

    if (!$file) $status = -1;
    else {
        fclose($file);
        $status = ($stoptime - $starttime) * 1000;
        $status = floor($status);
    }

    return $status;
}

?>