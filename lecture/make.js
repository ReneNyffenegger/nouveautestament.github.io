
//FILE
fs = require('fs');



database_fr = fs.readFileSync('../../database/database_fr.txt', 'utf8').split(/\r?\n/);



//CHECK NB NO STRONG
nb_no_found	=	1;
strong_spec	=	0;

//INDEX 
index_nb_name = {
1:'MATTHIEU',
2:'MARC',
3:'LUC',
4:'JEAN',
5:'ACTES',
6:'ROMAINS',
7:'1 CORINTHIENS',
8:'2 CORINTHIENS',
9:'GALATES',
10:'EPHESIENS',
11:'PHILIPPIENS',
12:'COLOSSIENS',
13:'1 THESSALONICIENS',
14:'2 THESSALONICIENS',
15:'1 TIMOTHEE',
16:'2 TIMOTHEE',
17:'TITE',
18:'PHILEMON',
19:'HEBREUX',
20:'JACQUES',
21:'1 PIERRE',
22:'2 PIERRE',
23:'1 JEAN',
24:'2 JEAN',
25:'3 JEAN',
26:'JUDAS',
27:'APOCALYPSE'
}


//HEAD HTML
head_html = `<!DOCTYPE html><html lang="fr">
<head>
<title>BIBLE</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<style type="text/css">

body {
	font-family: "Proxima","Helvetica Neue",Helvetica,Arial,sans-serif;
}

h2 {
	text-align:center;
}

.c {
	font-size: 20px;
}

.l, .r {
	font-size: 15px;
}
.v {
	font-size: 12px;
	color: #2f70e6;
}

</style>
</head><body>`;



//fsall.writeFileSync('all.html',head_html, 'utf8');



//livre
for (livre = 1 ; livre != 28 ; livre++)
{	
	
	body_html = '<table width="100%" cellpadding="15" cellspacing="15"><h2>'+livre+' - '+index_nb_name[livre]+'</h2>';

//body_html += '<table width="100%" cellpadding="0" cellspacing="0">'; 
/*	
body_html = '\n<tr>\
<td width="48%" class="c"><h2>'+index_nb_name[livre]+'</h2></td>\
<td width="2%"> </td>\
<td width="48%"></td>\
</tr>';
*/
	
	
	maxchapitres = Math.max(
	sebastien_brut[livre].length,
	dumont[livre].length)
	
	//chapitre
	for (chapitre = 1 ; chapitre != maxchapitres; chapitre++)
	{


body_html 	+= '\n<tr>\
<td width="23%" class="c"><div id="c'+chapitre+'"></div>Chapitre '+chapitre+'</td>\
<td width="1%"> </td>\
<td width="23%"></td>\
<td width="1%"> </td>\
<td width="23%"></td>\
</tr>';
		
		
		maxversets = Math.max(
		sebastien_brut[livre][chapitre].length,
		dumont[livre][chapitre].length,
		osty[livre][chapitre].length)
		
		
		//verset
		for (verset = 1 ; verset != maxversets; verset++)
		{
		
			body_html_seb		= '\n<span class="v"><b>'+chapitre+':'+verset+'</b></span> ';
			body_html_dumont	= '\n<span class="v"><b>'+chapitre+':'+verset+'</b></span> ';
			body_html_osty		= '\n<span class="v"><b>'+chapitre+':'+verset+'</b></span> ';

			
			body_html_seb		+= sebastien_brut[livre][chapitre][verset].replace(/#/g,' ');
			body_html_dumont	+= dumont[livre][chapitre][verset];
			body_html_osty		+= osty[livre][chapitre][verset];


body_html	+= '\n<tr>'+
'<td style="border: none; padding: 0cm" width="23%" class="l" valign="top">'+body_html_seb+'</td>'+
'<td width="1%"> </td>'+
'<td style="border: none; padding: 0cm" width="23%" class="r" valign="top">'+body_html_dumont+'</td>'+
'<td width="1%"> </td>'+
'<td style="border: none; padding: 0cm" width="23%" class="r" valign="top">'+body_html_osty+'</td>'+
'<td width="1%"> </td>';


		}
		
		
		 
	}
	

	body_html +='</table>';

	
	//SEND --> N-book - N-chapitre .html
	fs.writeFileSync(livre+'.html',head_html+body_html+'</body></html>', 'utf8');
	//fsall.appendFileSync('all.html',body_html, 'utf8');
}


//fsall.appendFileSync('all.html','</body></html>', 'utf8');





