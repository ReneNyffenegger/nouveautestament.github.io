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
	


	
	//MATCH
	preg_match('/<div class="markdown.*?>(.*?)<\/div>/is', $result, $result_end);
	

	$test = $result_end[1];
	$test = preg_replace('/<.*?>/','',$test);
	$test = preg_replace('/\s+/','',$test);

	if($test == '')
	{echo 'N '.$statue.' '.$file;
	echo "\n";
	$error=1;}
	else {
	echo 'Y '.$statue.' '.$file;
	echo "\n";
	
	
	//PUT AND DECODE
	file_put_contents($file, html_entity_decode($result_end[1]));
	
	}


}

return $error;
}




for ($livre=50; $livre !=77 ; $livre++)
{
	$livre_2=$livre-10;
	echo '-- '.$livre_2.' --';
	echo "\n";
	
	for ($chap=1 ; $chap!=30 ; $chap++)
	{
				//https://www.academic-bible.com/en/online-bibles/biblia-sacra-vulgata/read-the-bible-text/bibel/text/lesen/stelle/50                /10001        /19999/
		$err=get('https://www.academic-bible.com/en/online-bibles/biblia-sacra-vulgata/read-the-bible-text/bibel/text/lesen/stelle/'.$livre.'/'.$chap.'0001/'.$chap.'9999/' , $livre_2.'-'.$chap.'.htm');

		if ($err == 1){$chap=29;}
	
	}	
}

?>