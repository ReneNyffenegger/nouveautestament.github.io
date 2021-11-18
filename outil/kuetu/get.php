<?php


$book = array (

'40'=>'MT',
'41'=>'MK',
'42'=>'LK',
'43'=>'JN',
'44'=>'AC',
'45'=>'RM',
'46'=>'C1',
'47'=>'C2',
'48'=>'GL',
'49'=>'EP',
'50'=>'PP',
'51'=>'CL',
'52'=>'H1',
'53'=>'H2',
'54'=>'T1',
'55'=>'T2',
'56'=>'TT',
'57'=>'PM',
'58'=>'HB',
'59'=>'JM',
'60'=>'P1',
'61'=>'P2',
'62'=>'J1',
'63'=>'J2',
'64'=>'J3',
'65'=>'JD',
'66'=>'RV'

);

function get($url,$file)
{
$error=9;
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
if ($statue == 200)
{
	echo 'Y '.$statue.' '.$file;
	echo "\n";

	$result = preg_replace('/<span class="note" id=".*?"><a class="key" href="#foot.*?">.*?<\/a><\/span>/si', '', $result);
	file_put_contents($file, $result);
}
else if ($statue == 0)
{
	$error=0;
}

return $error;
}


for ($livre=40; $livre !=67 ; $livre++)
{
	echo '-- '.$book[$livre].' --';
	echo "\n";

	for ($chap=1 ; $chap!=30 ; $chap++)
	{
		$err=get('https://www.bibledeyehoshouahamashiah.org/content/texts/fra_bjc/'.$book[$livre].$chap.'.html',$livre.'-'.$chap.'.htm');

		if ($err == 1)
		{
			$chap=29;
		}

		if ($err == 0)
		{
			$chap--;
		}

	}
}

?>
