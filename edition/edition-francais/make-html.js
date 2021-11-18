


index = {
	'MATTHIEU':1,
	'MARC':2,
	'LUC':3,
	'JEAN':4,
	'ACTES':5,
	'ROMAINS':6,
	'1-CORINTHIENS':7,
	'2-CORINTHIENS':8,
	'GALATES':9,
	'EPHESIENS':10,
	'PHILIPPIENS':11,
	'COLOSSIENS':12,
	'1-THESSALONICIENS':13,
	'2-THESSALONICIENS':14,
	'1-TIMOTHEE':15,
	'2-TIMOTHEE':16,
	'TITE':17,
	'PHILEMON':18,
	'HEBREUX':19,
	'JACQUES':20,
	'1-PIERRE':21,
	'2-PIERRE':22,
	'1-JEAN':23,
	'2-JEAN':24,
	'3-JEAN':25,
	'JUDAS':26,
	'APOCALYPSE':27 }




head_html = `<!DOCTYPE html><html lang="fr">
<head>
<title>BIBLE</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<style type="text/css">
/*
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



*/
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

</style></head><body>`;

body_html_all	= '';
body_html		= '';
chapitreb		= 0;
livreb			= '';

fs			= require('fs');
file		= require('fs');
file2		= require('fs');
result	= fs.readFileSync('nt-manuel-seb-final.txt', 'utf8');


line = result.match(/^.*$/mg);

for (nb=0;nb!=line.length;nb++)
{
	if (line[nb] != '')
	{
		word_space = line[nb].match(/\S+/g);

		/**

		MATTHIEU:1:1 Bible de genèse de Iésou de Christ de fils de David de fils de Abraam.

		**/

		lcv				= word_space[0].split(':');
		livre			= lcv[0];
		chapitre	= lcv[1];
		verset		= lcv[2];
		texte			= line[nb].replace(word_space[0],'')
		texte			= texte.replace(/^\s+/,'')
		//if (word_space.length == 1) console.log(texte)


		if (livreb != livre)
		{
			chapitreb		= 0;
			file2.writeFileSync(index[livre]+'.html',head_html, 'utf8');
			//console.log(index[livre]+' '+livre)
		}


		if (chapitre == 1 && verset == 1)
		{
			body_html_all	+= '\n<h3><center>'+livre+'</center></h3>\n';
			//body_html		=  '\n<h3><center>'+livre+'</center></h3>\n';
			file2.appendFileSync(index[livre]+'.html','\n<h3><center>'+livre+'</center></h3>\n', 'utf8');
		}


		if (chapitreb != chapitre)
		{
			//DELETE BR . pour papier
			body_html_all	+= '<br><br><div class="chap">'+livre+' &ensp;'+chapitre+'</div>\n';
			//body_html	+= '<br><br><div class="chap">'+livre+' &ensp;'+chapitre+'</div>\n';
			file2.appendFileSync(index[livre]+'.html','<br><br><div class="chap">'+livre+' &ensp;'+chapitre+'</div>\n', 'utf8');
		}


		body_html_all	+= '<span class="ver"><b>'+verset+'</b></span> ';
		body_html_all	+= '<span class="text">'+texte+'</span>\n';

		body_html	+= '<span class="ver"><b>'+verset+'</b></span> ';
		body_html	+= '<span class="text">'+texte+'</span>\n';

		file2.appendFileSync(index[livre]+'.html','<span class="ver"><b>'+verset+'</b></span> <span class="text">'+texte+'</span>\n', 'utf8');


		livreb		= livre;
		chapitreb	= chapitre;
	}


}

file.writeFileSync('all.html',head_html+body_html_all+'</body></html>', 'utf8');
