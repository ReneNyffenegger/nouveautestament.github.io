<?php



function get($url)
{
$e=0;
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_VERBOSE, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);
$result = curl_exec($ch);
$statue = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($statue >= 300)
{

	$result = '300';
}
else 
{
	


	$result = preg_replace('/\s+/',' ',$result);
	

}

return $result;
}



for ($livre=1; $livre !=28 ; $livre++)
{
	
	if ($livre < 10)
		$livrehttp = '00'.$livre;

	else 
		$livrehttp = '0'.$livre;

	
	for ($chap=1 ; $chap!=30 ; $chap++)
	{
		
		$verset='0';
		
		while(1)
		{
			$verset++;
			
			
			$res=get('https://scaife.perseus.org/library/passage/urn:cts:greekLit:tlg0031.tlg'.$livrehttp.'.perseus-grc2:'.$chap.'.'.$verset.'/text/');
			
			if ($res == '300'){break;}
			
			echo "\n".$livre.':'.$chap.':'.$verset.' '.$res;
		}
		
		if ($res == 0){$chap=29;}
	
	}	
}





?>
