

//FILE
fs			= require('fs');
jsonf		= require('fs');
result		= fs.readFileSync('ntlausanne.txt', 'utf8');

/***********************************************************************************************************
Mat Mar Luk Joh Act Rom 1Co 2Co Gal Eph Phi Col 1Th 2Th 1Ti 2Ti Tit Phm Heb Jam 1Pe 2Pe 1Jo 2Jo 3Jo Jud Rev
************************************************************************************************************/
livres = {
"Mat":1,
"Mar":2,
"Luk":3,
"Joh":4,
"Act":5,
"Rom":6,
"1Co":7,
"2Co":8,
"Gal":9,
"Eph":10,
"Phi":11,
"Col":12,
"1Th":13,
"2Th":14,
"1Ti":15,
"2Ti":16,
"Tit":17,
"Phm":18,
"Heb":19,
"Jam":20,
"1Pe":21,
"2Pe":22,
"1Jo":23,
"2Jo":24,
"3Jo":25,
"Jud":26,
"Rev":27
}


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
livre_a=[];
chapitre_a=[];
verset_a=[];



tes			= 0;
mot			= 0;
ver_avant	= 1;
chap_avant	= 1;
livre_avant	= 1;





line = result.match(/^.*$/mg);


for (nb=0;nb!=line.length;nb++)
{
	if (line[nb] != '')
	{

		//separer par espace
		word_space = line[nb].match(/\S+/g);
		if (word_space.length > 1)
		{

		/***
				Luk 12:34	car où est votre trésor, là aussi sera votre coeur.
				0	1		2
		***/


			//LIVRE CHAP VER
			livre		= livres[word_space[0]];
			ch_ve		= word_space[1];
			chap		= ch_ve.match(/^[0-9]+/)[0];
			ver			= ch_ve.match(/:([0-9]+)/)[1];
			livre		= parseInt(livre);
			chap		= parseInt(chap);
			ver			= parseInt(ver);
			phrase	= line[nb].replace(word_space[0]+' '+word_space[1]+' ','');


			//console.log(phrase)
			ancienplusun=ver_avant+1
			//console.log(ver_avant+' '+ver+' '+nver)

			//CHECK
			if (ver != 1 && ver != ancienplusun)
			{
				console.log('DEPASS '+ver_avant+' '+ver)


			}




			if (chap_avant != chap)
			{
				mot=0;
				verset_a[0] = livre_avant+':'+chap_avant+':'+ver_avant;
				chapitre_a[chap_avant] = verset_a;
				verset_a = []
			}

			if (livre_avant != livre)
			{

					if (chap_avant == 1)
					{
						verset_a[0] = livre_avant+':'+chap_avant+':'+ver_avant;
						chapitre_a[chap_avant] = verset_a;
						verset_a = []
					}


					tchap = chapitre_a.length-1;
					chapitre_a[0] = livre_avant+'-'+getlivre[livre_avant]+' - '+tchap+' chapitres';
					livre_a[livre_avant] = chapitre_a;
					chapitre_a = []
			}

			verset_a[ver]	= phrase;

			livre_avant	= livre;
			chap_avant	= chap;
			ver_avant	= ver;

	}


 }

}


verset_a[0] = livre_avant+':'+chap_avant+':'+ver_avant;
verset_a[ver_avant] = phrase;

chapitre_a[chap_avant] = verset_a;
tchap = chapitre_a.length-1;
chapitre_a[0] = livre_avant+'-'+getlivre[livre_avant]+' - '+tchap+' chapitres';
livre_a[livre_avant] = chapitre_a;

tlivre = livre_a.length-1;
livre_a[0]='BIBLE LAUSANNE - '+tlivre+' livres';


//FILE_JSON_TISCH
jsonf.writeFileSync('lausanne.js', 'lausanne='+JSON.stringify(livre_a, null, 1), 'utf8');
