/*****************************************************************************

1997
Alain DUMONT 


OK Actes 			13	7	homme()capable
OK Éphésiens		5	17	comprenez()quelle
OK 2 Corinthiens	8	22	σπουδαιοτερον : plus-à-la-hâte

Romains			15	15	avec -'plus'- d'audace 

*********************************************************/

//FILE
fs = require('fs');
fs2 = require('fs');
fst = require('fs');

//JSON
JSON_livre={};
JSON_chapitre={};
JSON_verset={};
JSON_mot={};




getlivre = {
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
27:'APOCALYPSE' }


//ARRAY
livre_a		= []
chapitre_a	= []
verset_a	= []

//BOOK
for (book = 1 ; book != 28 ; book++ )
{


//CHAP
for (chap=1; chap!=200 ; chap++)
{


get=book+'-'+chap;
result = fs.readFileSync(get+'.htm', 'utf8');



//TR
tr_all=result.match(/<tr>.*?<\/tr>/gsi);

trnb=1;
for (tr = 0; tr != tr_all.length ; tr++)
{
 	
	//CLEAN
	verset=tr_all[tr].replace(/<.*?>/gsi,'');
	verset=verset.replace(/^\s+|\s+$/gsi,'');
	
	
	ver_nb=verset.match(/[0-9]+/i);
	
	verset=verset.replace(ver_nb,'');
	verset=verset.replace(/^\s|\s$/gsi,'');
	 
	//CHECK
	tr_test=tr+1;
	
	if (tr_test != ver_nb)
	{
		console.log('TR HTML en trop : '+book+':'+chap+':'+tr_test);
	}
	
	else 
	{
		//JSON_verset[ver_nb]=verset;
		//JSON_verset[0]='book '+book+' chap '+chap+' vers '+ver_nb;
		verset_a[ver_nb]=verset
		verset_a[0]=book+':'+ chap +':'+ ver_nb;
	}

}

//JSON_chapitre[chap]=JSON_verset;
//JSON_verset={};
chapitre_a[chap]=verset_a;
verset_a=[];



//TEST & QUIT CHAP
chaptest=chap+1;

gettest=book+'-'+chaptest+'.htm';
if (!fst.existsSync(gettest))
{chap=199;}
}

//JSON_livre[book]=JSON_chapitre;
//JSON_chapitre={};

chapitre_a[0] = book+'-'+getlivre[book]+' - '+Object.entries(chapitre_a).length+' chapitres';
livre_a[book]=chapitre_a;
chapitre_a=[];


}


livre_a[0] = 'BIBLE DUMONT - '+Object.entries(livre_a).length+' livres';

//fs2.writeFileSync('dumont.json', JSON.stringify(JSON_livre, null, 1), 'utf8');

fs2.writeFileSync('dumont.js', 'dumont='+JSON.stringify(livre_a,null,1), 'utf8');