

//FILE
TISCHf		= require('fs');
jsonf		= require('fs');
result		= TISCHf.readFileSync('tisch.txt', 'utf8');



livres = {
"MT":1,
"MR":2,
"LU":3,
"JOH":4,
"AC":5,
"RO":6,
"1CO":7,
"2CO":8,
"GA":9,
"EPH":10,
"PHP":11,
"COL":12,
"1TH":13,
"2TH":14,
"1TI":15,
"2TI":16,
"TIT":17,
"PHM":18,
"HEB":19,
"JAS":20,
"1PE":21,
"2PE":22,
"1JO":23,
"2JO":24,
"3JO":25,
"JUDE":26,
"RE":27
}


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


//JSON TISCH
JSON_TISCH_livre=[];
JSON_TISCH_chapitre=[];
JSON_TISCH_verset=[];
//JSON_TISCH_mot=[];
JSON_TISCH_mot='';


tes			= 0;
mot			= 0;
ver_avant	= 1;
chap_avant	= 1;
livre_avant	= 1;



mmm = {

'N-':'nom',
'A-':'adjectif',
'T-':'article',
'V-':'verbe',
'P-':'pronom-personnel',
'R-':'pronom-relatif',
'C-':'pronom-réciproque',
'D-':'pronom-démonstratif',
'K-':'pronom-corrélatif',
'I-':'pronom-interrogatif',
'X-':'pronom-indéfini',
'Q-':'pronom-corrélatif-ou-interrogatif',
'F-':'pronom-réfléchi',
'S-':'pronom-possessif',
'ADV':'adverbe',
'CONJ':'conjonction',
'COND':'cond',
'PRT':'particule',
'PREP':'préposition',
'INJ':'interjection',
'ARAM':'araméen',
'HEB':'hébreu',
'N-PRI':'nompropre-indéclinable',
'A-NUI':'chiffre-indéclinable',
'N-LI':'lettre-indéclinable',
'N-OI':'nom-autre-type-indéclinable',

}

mmmend = {
'-S':'superlatif',
'-C':'comparatif',
'-ABB':'abrégé',
'-I':'interrogatif',
'-N':'négatif',
'-ATT':'attique',
'-P':'particule-attachée',
'-K':'crase',
}

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
			JOH	1:1.1	C	Ἐν	Ἐν	PREP	1722	ἐν	!	ἐν
			0	1		2	3	4	5		6		7	8	9
			***/


			word_TISCH		= word_space[3];
			livre			= livres[word_space[0]];

			ch_ve_mo = word_space[1];
			chap=ch_ve_mo.match(/^[0-9]+/)[0];
			ver=ch_ve_mo.match(/:([0-9]+)\./)[1];

			livre	= parseInt(livre);
			chap	= parseInt(chap);
			ver		= parseInt(ver);

			strong = word_space[6];
			morph	= word_space[5];
			lem 	= word_space[7];

			if (livre != livre_avant)
			{

				//console.log(word_space[0]+' '+chap+' '+ver+' '+word_TISCH)

			}



			if (ver_avant != ver)
			{
				mot=0;
				JSON_TISCH_mot = JSON_TISCH_mot.replace(/ +$/,'');
				JSON_TISCH_verset[ver_avant] = JSON_TISCH_mot;
				//console.log(livre_avant+' '+getlivre[livre_avant]+' '+chap_avant+' '+ver_avant+' '+JSON_TISCH_mot)
				JSON_TISCH_mot = '';
				
			}

			if (chap_avant != chap)
			{
				mot=0;
				JSON_TISCH_verset[0] = livre_avant+':'+chap_avant+':'+ver_avant;
				JSON_TISCH_chapitre[chap_avant] = JSON_TISCH_verset;
				JSON_TISCH_verset = []
			}

			if (livre_avant != livre)
			{

					if (chap_avant == 1)
					{
						JSON_TISCH_verset[0] = livre_avant+':'+chap_avant+':'+ver_avant;
						JSON_TISCH_chapitre[chap_avant] = JSON_TISCH_verset;
						JSON_TISCH_verset = []
					}


					mot=0;
					tchap = JSON_TISCH_chapitre.length-1;
					JSON_TISCH_chapitre[0] = livre_avant+'-'+getlivre[livre_avant]+' - '+tchap+' chapitres';
					JSON_TISCH_livre[livre_avant] = JSON_TISCH_chapitre;
					JSON_TISCH_chapitre = []
			}




/*********

make morph

*********/


if (mmm[morph])
morph = mmm[morph]


else if (morph.match(/-/))
{



//split
splitm = morph.split('-');

//mmm1
if (mmm[splitm[0]+'-'])
morph = mmm[splitm[0]+'-']


if (morph == "V-")
{


}



else
{





if (splitm[2])
{
//mmm2
if (mmmend['-'+splitm[2]]) 
morph += mmmend['-'+splitm[2]]
}






}





}
else
{

console.log('nooooooooooooooooooooooooooooooo'+morph)


}




			JSON_TISCH_mot += word_TISCH+'='+morph+'='+lem+' ';

			livre_avant	= livre;
			chap_avant	= chap;
			ver_avant	= ver;

	}


 }


if (line.length == nb+1)
	{
				mot=0;
				JSON_TISCH_mot = JSON_TISCH_mot.replace(/ +$/,'');
				JSON_TISCH_verset[ver_avant] = JSON_TISCH_mot;
				console.log(livre_avant+' '+getlivre[livre_avant]+' '+chap_avant+' '+ver_avant+' '+JSON_TISCH_mot)
				JSON_TISCH_mot = '';
				
	}



}
