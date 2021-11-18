
getlivre = {
1:'MATTHIEU',
2:'MARC',
3:'LUC',
4:'JEAN',
5:'ACTES',
6:'ROMAINS',
7:'1CORINTHIENS',
8:'2CORINTHIENS',
9:'GALATES',
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


//FILE
fs = require('fs');
fs2 = require('fs');
fst = require('fs');


livre_a		= []
chapitre_a	= []
verset_a	= []


for (book = 40 ; book != 67 ; book++ )
{


for (chap=1; chap!=200 ; chap++)
{




get=book+'-'+chap;
result = fs.readFileSync(get+'.htm', 'utf8');



//GET ALL VERSET
versets_all=result.match(/<span id=".*?class=".*?data-id=.*?>.*?<\/span>/gsi);

versnb=1;
for (verset = 0; verset != versets_all.length ; verset++)
{
	
	//GET VERS NB
	vnb=versets_all[verset].match(/_(.*?)"/si)[1];
	
	//console.log(vnb);
	take=versets_all[verset].replace(/<.*?>/gsi,'');
	//console.log(take);
	verset_a[vnb]=take;
	


	//1:1:1:MATTHIEU:3:15:2021:SHORA-KUETU
	bo=book-39;
	console.log(bo+':'+chap+':'+vnb+':'+getlivre[bo]+':3:15:2021:SHORA-KUETU '+take)

	//add info
	verset_a[0]=book-39+':'+ chap +':'+ vnb;
	
	
	
	//CHECK
	if (vnb != versnb)
	{
		console.log('ERROR --------------------- book '+book+' chap '+chap+' vers '+vnb)
	}
	
	
versnb++;	
}
chapitre_a[chap]=verset_a;
verset_a=[];




//TEST & QUIT CHAP
chaptest=chap+1;

gettest=book+'-'+chaptest+'.htm';
if (!fst.existsSync(gettest))
{chap=199;}
}

chapitre_a[0] = book-39+'-'+getlivre[book-39]+' - '+Object.entries(chapitre_a).length+' chapitres';
livre_a[book-39]=chapitre_a;
chapitre_a=[];


}

//livre_a[0] = 'BIBLE KUETU - '+Object.entries(livre_a).length+' livres';
//fs2.writeFileSync('kuetu.js', 'kuetu='+JSON.stringify(livre_a, null, 1), 'utf8');