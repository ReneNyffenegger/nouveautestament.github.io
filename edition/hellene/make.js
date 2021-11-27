head_html = `<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Nouveau Testament">
		<meta name="keywords" content="Nouveau Testament">
	
		<title>NOUVEAU TESTAMENT</title>
`

css_web = `
		<style>
		
		html {
			margin:30px;
		}


		body {
			font-family: sans-serif;
			font-size:17px;
		}


		.chap {
			font-size:20px;
			float:left;
			margin:10px;
		}

		.ver {
			font-size:17px;
			font-weight:bold;
		}

		.text {
			font-size:17px;


		}

		</style>
	</head>
<body>
`;



css_papier = `
		<style>
		
		html {
			margin:0px;
		}


		body {
			margin:0px;
			font-family: Serif;
			font-size:11px;
		}


		.chap {
			font-size:14px;
		}

		.ver {
			font-size:11px;
			font-weight:bold;
		}

		.text {
			font-size:11px;
		}

		</style>
	</head>
<body>
`;



biblos = {
1:'ΚΑΤΑ ΜΑΘΘΑΙΟΝ',
2:'ΚΑΤΑ ΜΑΡΚΟΝ',
3:'ΚΑΤΑ ΛΟΥΚΑΝ',
4:'ΚΑΤΑ ΙΩΑΝΝΗΝ',
5:'ΠΡΑΞΕΙΣ ΑΠΟΣΤΟΛΩΝ',
6:'ΠΡΟΣ ΡΩΜΑΙΟΥΣ',
7:'ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Α',
8:'ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Β',
9:'ΠΡΟΣ ΓΑΛΑΤΑΣ',
10:'ΠΡΟΣ ΕΦΕΣΙΟΥΣ',
11:'ΠΡΟΣ ΦΙΛΙΠΠΗΣΙΟΥΣ',
12:'ΠΡΟΣ ΚΟΛΟΣΣΑΕΙΣ',
13:'ΠΡΟΣ ΘΕΣΣΑΛΟΝΙΚΕΙΣ Α',
14:'ΠΡΟΣ ΘΕΣΣΑΛΟΝΙΚΕΙΣ Β',
15:'ΠΡΟΣ ΤΙΜΟΘΕΟΝ Α',
16:'ΠΡΟΣ ΤΙΜΟΘΕΟΝ Β',
17:'ΠΡΟΣ ΤΙΤΟΝ',
18:'ΠΡΟΣ ΦΙΛΗΜΟΝΑ',
19:'ΠΡΟΣ ΕΒΡΑΙΟΥΣ',
20:'ΙΑΚΩΒΟΥ',
21:'ΠΕΤΡΟΥ Α',
22:'ΠΕΤΡΟΥ Β',
23:'ΙΩΑΝΝΟΥ Α',
24:'ΙΩΑΝΝΟΥ Β',
25:'ΙΩΑΝΝΟΥ Γ',
26:'ΙΟΥΔΑ',
27:'ΑΠΟΚΑΛΥΨΙΣ ΙΩΑΝΝΟΥ'
}




body_html_all	= '';
body_html		= '';
chapitreb		= 0;
livreb			= '';

fs			= require('fs');
file		= require('fs');
file2		= require('fs');
result	= fs.readFileSync('../../database/sebastien_te.txt', 'utf8');


line = result.split(/\r?\n/);

for (nb=0;nb!=line.length;nb++)
{
	if (line[nb] != '')
	{

/**

        V5      1:1:1:MATTHIEU:1:0:2021:SEBASTIEN-D-G Βίβλος=βίβλος=nom,nominatif,féminin,singulier γενέσεως=γένεσις=nom,génitif,féminin,singulier Ἰησοῦ=Ἰησοῦς=nom,génitif,masculin,singulier Χριστοῦ=Χριστός=nom,génitif,masculin,singulier υἱοῦ=υἱός=nom,génitif,masculin,singulier Δαυὶδ=Δαυίδ=nom,génitif,masculin,singulier υἱοῦ=υἱός=nom,génitif,masculin,singulier Ἀβραάμ.=Ἀβραάμ=nom,génitif,masculin,singulier
                0 1 2 3        4 5 6    7             		
**/

		lcvt		= line[nb].split(' ');
		lcv			= lcvt[0];
		texte		= '';
	
		lcv_split	= lcv.split(':');
		livre		= lcv_split[0];
		chapitre	= lcv_split[1];
		verset		= lcv_split[2];
		nomdulivre	= biblos[livre];
		langue		= lcv_split[4];
		classement	= lcv_split[5];
		date		= lcv_split[6];
		traducteur	= lcv_split[7];


		for ( x = 1 ; x != lcvt.length ; x++)
		{
			
			texte += lcvt[x].split('=')[0]+' '
			
		}


		if (livreb != livre)
		{
			chapitreb	= 0;
			if (livreb != '')
				file2.appendFileSync(livreb+'.html','</body></html>', 'utf8');
			file2.writeFileSync(livre+'.html',head_html+css_web, 'utf8');
		}


		if (chapitre == 1 && verset == 1)
		{
			body_html_all	+= '\n<h3><center>'+nomdulivre+'</center></h3>\n';
			file2.appendFileSync(livre+'.html','\n<h3><center>'+nomdulivre+'</center></h3>\n', 'utf8');
		}


		if (chapitreb != chapitre)
		{
			body_html_all	+= '<br><br><div class="chap">'+nomdulivre+' &ensp;'+chapitre+'</div>\n';
			file2.appendFileSync(livre+'.html','<br><br><div class="chap">'+nomdulivre+' &ensp;'+chapitre+'</div>\n', 'utf8');
		}


		body_html_all	+= '<span class="ver"><b>'+verset+'</b></span> ';
		body_html_all	+= '<span class="text">'+texte+'</span>\n';

		body_html	+= '<span class="ver"><b>'+verset+'</b></span> ';
		body_html	+= '<span class="text">'+texte+'</span>\n';

		file2.appendFileSync(livre+'.html','<span class="ver"><b>'+verset+'</b></span> <span class="text">'+texte+'</span>\n', 'utf8');

		if (livre == 27 && chapitre == 22 && verset == 21)
			file2.appendFileSync(livreb+'.html','</body></html>', 'utf8');

		livreb		= livre;
		chapitreb	= chapitre;
	}


}

file.writeFileSync('all.html',head_html+css_papier+body_html_all+'</body></html>', 'utf8');
