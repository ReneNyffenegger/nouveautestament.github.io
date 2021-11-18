<?php


function get($url,$file)
{
$error=0;
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_VERBOSE, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);



curl_setopt($ch, CURLOPT_URL,$url);
$result = curl_exec($ch);

$statue = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($statue >= 300)
{
	echo 'N '.$statue.' '.$file;
	echo "\n";
	$error=1;
}
else 
{
	echo 'Y '.$statue.' '.$file;
	echo "\n";

	$result = preg_replace('/<base .*?manuscripts\/ target=_top>/si', '', $result);
	$result = preg_replace('/<link rel=stylesheet type=text\/css href=..\/collation.css>/si', '<link rel=stylesheet type=text/css href="style.css">', $result);
	$result = preg_replace('/<a href=index.htm\?/si', '<a target="_blank" href=https://greekcntr.org/manuscripts/index.htm?', $result);
	file_put_contents($file, $result);
}

return $error;
}


for ($livre=40; $livre !=67 ; $livre++)
{
	echo '-- '.$livre.' --';
	echo "\n";
	
	for ($chap=1 ; $chap!=30 ; $chap++)
	{
		if ($chap <= 9)
		{$chap='0'.$chap;}
		
		
		$err=get('https://greekcntr.org/collation/data/'.$livre.'0'.$chap.'.htm',$livre.'0'.$chap.'.htm');
		
		if ($err == 1)
		{
			$chap=29;
		}
	
	}	
}

?>