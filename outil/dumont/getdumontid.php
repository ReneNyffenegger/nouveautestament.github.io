<?php






function get($url)
{
$error=9;
$ch = curl_init();


$agents = array(
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36');
	curl_setopt($ch,CURLOPT_USERAGENT,$agents[array_rand($agents)]);


$header=array(
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
		'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
		'Accept-Language: en-US,en;q=0.5',
		'Accept-Charset: utf-8;q=0.7,*;q=0.7',
		'Keep-Alive: 115',
		'Connection: keep-alive',
	);
	curl_setopt($ch,CURLOPT_HTTPHEADER,$header);


curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_VERBOSE, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);
$result = curl_exec($ch);
$statue = curl_getinfo($ch, CURLINFO_HTTP_CODE);



if ($statue >= 300 || $statue == 500)
{
	//echo 'N '.$statue.' '.$url;
	//echo "\n";
	$error=1;
}

else if ($statue == 0)
{
	$error=0;
	//echo 'N '.$statue.' '.$url;
	//echo "\n";
}

else if ($statue == 200)
{
	$error=10;
	//echo 'Y '.$statue.' '.$url;
	//echo "\n";




//GET BOOK NUMBER LINE
if (preg_match('/itemprop="URL">(.*?)<\/a>/si', $result, $nameid)) // REGEX i : URL ou url
{	
//echo $nameid[1];

//GET BOOK NAME
if (preg_match('/MATTHIEU/si', $nameid[1])) $book=1;
else if (preg_match('/MARC/si', $nameid[1])) $book=2;
else if (preg_match('/LUC/si', $nameid[1])) $book=3;
else if (preg_match('/Évangile selon Saint Jean/si', $nameid[1])) $book=4;
else if (preg_match('/Actes des Apôtres/si', $nameid[1])) $book=5;
else if (preg_match('/Lettre aux Romains /si', $nameid[1])) $book=6;
else if (preg_match('/1ère Lettre aux Corinthiens/si', $nameid[1])) $book=7;
else if (preg_match('/2e Lettre aux Corinthiens/si', $nameid[1])) $book=8;
else if (preg_match('/Galates/si', $nameid[1])) $book=9;
else if (preg_match('/Éphésiens/si', $nameid[1])) $book=10;
else if (preg_match('/PHILIPPIENS/si', $nameid[1])) $book=11;
else if (preg_match('/COLOSSIENS/si', $nameid[1])) $book=12;
else if (preg_match('/1ère Lettre aux Thessaloniciens/si', $nameid[1])) $book=13;
else if (preg_match('/2e Lettre aux Thessaloniciens/si', $nameid[1])) $book=14;
else if (preg_match('/1ère Lettre à Timothée/si', $nameid[1])) $book=15;
else if (preg_match('/2e Lettre à Timothée/si', $nameid[1])) $book=16;
else if (preg_match('/TITE/si', $nameid[1])) $book=17;
else if (preg_match('/Philémon/si', $nameid[1])) $book=18;
else if (preg_match('/Hébreux/si', $nameid[1])) $book=19;
else if (preg_match('/JACQUES/si', $nameid[1])) $book=20;
else if (preg_match('/Lettre de Saint Pierre 1 /si', $nameid[1])) $book=21;
else if (preg_match('/Lettre de Saint Pierre 2/si', $nameid[1])) $book=22;
else if (preg_match('/Lettre de Saint Jean 1/si', $nameid[1])) $book=23;
else if (preg_match('/Lettre de Saint Jean 2/si', $nameid[1])) $book=24;
else if (preg_match('/Lettre de Saint Jean 3/si', $nameid[1])) $book=25;
else if (preg_match('/JUDE/si', $nameid[1])) $book=26;
else if (preg_match('/Apocalypse/si', $nameid[1])) $book=27;



if (isset($book))
{



//GET CHAP
if ($book != 18 && $book != 24 && $book != 25 && $book != 26)
{
	if (preg_match('/chapitre +([0-9]+)/i', $nameid[1], $booknum))
		$chap=$booknum[1];
}
else
{
	$chap=1;
}


echo $nameid[1].' : '.$book.' '.$chap;
echo "\n";




//Clean other
$result = preg_replace('/&nbsp;/si',' ',$result);
$result = preg_replace('/<head>.*?<\/head>/si','',$result);
$result = preg_replace('/<script.*?<\/script>/si','',$result);
$result = preg_replace('/<a.*?<\/a>/si','',$result);



//Clean Greek
$result = preg_replace('/<td><span style="font-family: Bwgrkl; font-size:.*?<\/td>/si','',$result);
$result = preg_replace('/<td><em><span style="color: #993300; font-size:.*?<\/span><\/em><\/td>/i','',$result); //mt17;mt23
$result = preg_replace('/<td.*?Bwgrkl.*?<\/td>/i','',$result);


//Clean false end matthew 27.67
$result = preg_replace('/<tr>.<td><span style="font-family: Bwgrkl; font-size: 13pt;"><\/span><\/td>.<td> <\/td>.<\/tr>/si','',$result);

//Clean marc 16
$result = preg_replace('/<tr>\s+<td style="text-align: left;"><span class="s1"><span class="s1"><em><span style="color: #993300;"><strong>.*?<\/td>\s+<\/tr>/si','',$result);
$result = preg_replace('/<span style="color: #993300;"><strong><em>— Finale longue —<\/em><\/strong><\/span><br \/><br \/>/i','',$result);

//john+Acts+...
$result = preg_replace('/<td><em style="font-size: 10.9090909957886px;"><span style="color: #993300; font-size: 8pt;">.*?<\/em><\/td>/si','',$result);
$result = preg_replace('/<td><em><span style="color: #993300; font-size: 10.9090909957886px;">.*?<\/td>/si','',$result);


//MATCH
preg_match('/<table class="table table-hover">.*?<\/table>/si', $result, $result_end);

file_put_contents($book.'-'.$chap.'.htm', $result_end);

}
}





}

return $error;

}







//ID 1  -> 310
//ID 28 -> 307
//https://www.bible-tutoriel.com/index.php?option=com_content&view=article&id=28


for ($id=28 ; $id !=308 ; $id++)
{

$err = get("https://www.bible-tutoriel.com/index.php?option=com_content&view=article&id=".$id);

if ($err == 0){$id--;}

}

?>