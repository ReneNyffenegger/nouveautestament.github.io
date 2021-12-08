fichier = require('fs');

getlivre = {
01:'MATTHIEU',
02:'MARC',
03:'LUC',
04:'JEAN',
05:'ACTES',
06:'ROMAINS',
07:'1CORINTHIENS',
08:'2CORINTHIENS',
09:'GALATES',
10:'EPHESIENS',
11:'PHILIPPIENS',
12:'COLOSSIENS',
13:'1THESSALONICIENS',
14:'2THESSALONICIENS',
15:'1TIMOTHEE',
16:'2TIMOTHEE',
17:'TITE',
18:'PHILEMON',
19:'HEBREUX',
20:'JACQUES',
21:'1PIERRE',
22:'2PIERRE',
23:'1JEAN',
24:'2JEAN',
25:'3JEAN',
26:'JUDAS',
27:'APOCALYPSE' }



result = fichier.readFileSync('robinson.txt', 'utf8');
lignes = result.match(/^.*$/mg);







//ARRAY
livre_a		=[];
chapitre_a	=[];
verset_a	=[];


phrase	= '';
vb		= '1';
cb		= '0';
lb		= '0';




for (ligne = 0 ; ligne != lignes.length ; ligne++)
{
	if (lignes[ligne] != "")
	{


		word = lignes[ligne].split(/\s+/g);
		
		li = word[0];
		ch = word[1];
		ve = word[2];
		el = word[3];
		st = word[4];
		le = word[5];
		mo = word[7];


		l_name = getlivre[li];


		lemme = el;

		if (cb != ch)
		{
			chapitre_a[cb] = verset_a;
			verset_a =[];
		}

		if (lb != li)
		{
			livre_a[lb] = chapitre_a;
			chapitre_a	=[];
		}


		//phrase
		if (ve != vb)
		{	
			console.log(lb+':'+cb+':'+vb+':'+getlivre[lb]+':1:0:2019:ROBINSON-ET-PIERPONT '+phrase.replace(/\s+$/g,''))
			//console.log(phrase.replace(/\s+$/g,''))
			
			phrase = el+'='+le+'='+mo+' ';
			//phrase = el+' ';
			
		}
		else
			//phrase += el+' ';
		phrase += el+'='+le+'='+mo+' ';
			

		
		//add verset
		verset_a[ve] = phrase.replace(/\s+$/,'');

		
		
		
		
		vb = ve;
		cb = ch;
		lb = li;
	
	
	
	
	
	}

}

console.log(lb+':'+cb+':'+vb+':'+getlivre[lb]+':1:0:2019:ROBINSON-ET-PIERPONT '+phrase.replace(/\s+$/g,''))
//console.log(phrase.replace(/\s+$/g,''))
