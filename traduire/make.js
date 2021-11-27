

fichier1 = require('fs')

require('../database/lemme.js');
require('../database/verbes.js');

sebastien_te	= fichier1.readFileSync('../database/sebastien_te.txt', 'utf8').split('\n')


xbook = {
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


function convnumber(a,b,c)
{
	if (a.length == 1) a = '0'+a;
	if (b.length == 1) b = '0'+b;
	if (c.length == 1) c = '0'+c;

	return a+b+c;
}




for (lineseb = 0 ; lineseb != sebastien_te.length ; lineseb++) {

if (sebastien_te[lineseb] != "" && sebastien_te[lineseb]) { 



allinfo		=	sebastien_te[lineseb].split(' ')
lcvte		=	allinfo[0].split(':')



livre		= lcvte[0]
chapitre	= lcvte[1]
verset		= lcvte[2]
livrename	= lcvte[3]
motfr		= ''

for (x = 1 ; x != allinfo.length ; x++)
{


mot		= allinfo[x].split('=')
ellen	= mot[0]
lemma	= mot[1]
morph	= mot[2]
fr		= ''



//lcvm = convnumber(livre, chapitre, verset)




//check lemme
if (!lemme[lemma])
{
	if (sebastien_te[lineseb] != allinfo[0]+' ')
		console.log(allinfo)
}
else
{
	
	

	fr = lemme[lemma][0];


	if (fr.indexOf(',') != -1)
	{


		fr = fr.split(',');


		// -----> ἑαυτοῦ
		//lui-même, nous-mêmes, vous-mêmes, eux-mêmes, elle-même, nous-mêmes, vous-mêmes, elles-mêmes
		if ( lemma == 'ἑαυτοῦ' )
		{


		if (morph.includes('1e') && morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}


		else if (morph.includes('2e') && morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[2].replace(/^ | $/,'');
		}
		else if (morph.includes('2e') && morph.includes('neutre') && morph.includes('pluriel'))
		{
		fr = fr[2].replace(/^ | $/,'');
		}
		else if (morph.includes('2e') && morph.includes('féminin') && morph.includes('pluriel'))
		{
		fr = fr[6].replace(/^ | $/,'');
		}


		else if (morph.includes('3e') && morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('3e') && morph.includes('neutre') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('3e') && morph.includes('féminin') && morph.includes('singulier'))
		{
		fr = fr[4].replace(/^ | $/,'');
		}


		else if (morph.includes('3e') && morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}
		else if (morph.includes('3e') && morph.includes('neutre') && morph.includes('pluriel'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}
		else if (morph.includes('3e') && morph.includes('féminin') && morph.includes('pluriel'))
		{
		fr = fr[7].replace(/^ | $/,'');
		}

		else
		console.log('NO MORPH --->'+morph+' '+lemma);

		}




		// -----> ἐγώ
		else if ( lemma == 'ἐγώ' )
		{

		if (morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}

		else if (morph.includes('pluriel'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}

		else
		console.log('NO MORPH --->'+morph+' '+lemma);

		}

		// -----> σύ
		else if ( lemma == 'σύ' )
		{
		if (morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}

		else if (morph.includes('pluriel'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}

		else
		console.log('NO MORPH --->'+morph+' '+lemma);

		}


		// -----> ὁ
		//le, la, les, ce, celui, celle, ces, ceux, celles
		else if ( lemma == 'ὁ' )
		{


		if (morph.includes('déterminant'))
		{

		if (morph.includes('neutre') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('neutre') && morph.includes('pluriel'))
		{
		fr = fr[2].replace(/^ | $/,'');
		}


		else if (morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[2].replace(/^ | $/,'');
		}


		else if (morph.includes('féminin') && morph.includes('singulier'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}
		else if (morph.includes('féminin') && morph.includes('pluriel'))
		{
		fr = fr[2].replace(/^ | $/,'');
		}

		else
		console.log('NO MORPH --->'+morph+' '+lemma);

		}


		else if (morph.includes('pronom'))
		{

		if (morph.includes('neutre') && morph.includes('singulier'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}
		else if (morph.includes('neutre') && morph.includes('pluriel'))
		{
		fr = fr[6].replace(/^ | $/,'');
		}


		else if (morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[4].replace(/^ | $/,'');
		}
		else if (morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[7].replace(/^ | $/,'');
		}


		else if (morph.includes('féminin') && morph.includes('singulier'))
		{
		fr = fr[5].replace(/^ | $/,'');
		}
		else if (morph.includes('féminin') && morph.includes('pluriel'))
		{
		fr = fr[8].replace(/^ | $/,'');
		}
		else
		console.log('NO MORPH --->'+morph+' '+lemma);

		}

		else
		console.log('NO MORPH --->'+morph+' '+lemma);

		}




		// -----> αὐτός
		//même, lui-même, elle-même, mêmes, eux-mêmes, elles-mêmes, lui, eux, elle, elles, nous-mêmes, vous-mêmes
		else if ( lemma == 'αὐτός' )
		{

		//même, mêmes
		if (morph.includes('déterminant-démonstratif'))
		{

		if (morph.includes('neutre') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('neutre') && morph.includes('pluriel'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}


		else if (morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}


		else if (morph.includes('féminin') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('féminin') && morph.includes('pluriel'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}

		else
		console.log('NO MORPH --->'+morph+' '+lemma);

		}

		//même, lui-même, elle-même, mêmes, eux-mêmes, elles-mêmes, lui, eux, elle, elles, nous-mêmes, vous-mêmes
		else if (morph.includes('pronom-personnel'))
		{

		//lui eux, elle, elles

		if (morph.includes('neutre') && morph.includes('singulier'))
		{
		fr = fr[6].replace(/^ | $/,'');
		}
		else if (morph.includes('neutre') && morph.includes('pluriel'))
		{
		fr = fr[7].replace(/^ | $/,'');
		}


		else if (morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[6].replace(/^ | $/,'');
		}
		else if (morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[7].replace(/^ | $/,'');
		}


		else if (morph.includes('féminin') && morph.includes('singulier'))
		{
		fr = fr[8].replace(/^ | $/,'');
		}
		else if (morph.includes('féminin') && morph.includes('pluriel'))
		{
		fr = fr[9].replace(/^ | $/,'');
		}

		else
		console.log('NO MORPH --->'+morph+' '+lemma);

		}


		//	même,	lui-même,	elle-même,	mêmes,	eux-mêmes,	elles-mêmes,	lui,	eux,	elle,	elles,	moi-même,	toi-même,	nous-mêmes,	vous-mêmes
		//	0		1			2			3		4			5				6		7		8		9		10			11			12			13
		else if (morph.includes('pronom-réfléchi'))
		{

		//neutre singulier : lui-même même
		if (morph.includes('3e') && morph.includes('neutre') && morph.includes('singulier'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}
		else if (morph.includes('neutre') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}

		//neutre pluriel : eux-mêmes
		else if (morph.includes('3e') && morph.includes('neutre') && morph.includes('pluriel'))
		{
		fr = fr[4].replace(/^ | $/,'');
		}

		//masculin singulier : moi-même toi-même lui-même lui-même
		else if (morph.includes('1e') && morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[10].replace(/^ | $/,'');
		}
		else if (morph.includes('2e') && morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[11].replace(/^ | $/,'');
		}
		else if (morph.includes('3e') && morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}
		else if (morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}

		//masculin pluriel : nous-mêmes vous-mêmes eux-mêmes
		else if (morph.includes('1e') && morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[12].replace(/^ | $/,'');
		}
		else if (morph.includes('2e') && morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[13].replace(/^ | $/,'');
		}
		else if (morph.includes('3e') && morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[4].replace(/^ | $/,'');
		}

		//féminin singulier : elle-même elles-mêmes
		else if (morph.includes('3e') && morph.includes('féminin') && morph.includes('singulier'))
		{
		fr = fr[2].replace(/^ | $/,'');
		}
		else if (morph.includes('3e') && morph.includes('féminin') && morph.includes('pluriel'))
		{
		fr = fr[5].replace(/^ | $/,'');
		}

		else
		console.log('NO MORPH --->'+morph+' '+lemma);

		}


		else if (morph.includes('pronom-démonstratif'))
		{
		//même mêmes
		if (morph.includes('neutre') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('neutre') && morph.includes('pluriel'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}

		//même mêmes
		else if (morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}

		//même mêmes
		else if (morph.includes('féminin') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('féminin') && morph.includes('pluriel'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}

		}


		}



		else if ( lemma == 'διά')
		{
		if (morph.includes('génitif'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('accusatif'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}
		else
		console.log('NO MORPH --->'+morph+' '+lemma);
		}


		//de haut en bas, contre, selon
		else if ( lemma == 'κατά')
		{

		if (morph.includes('accusatif'))
		{
		fr = fr[2].replace(/^ | $/,'');
		}
		else if (morph.includes('génitif'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}
		else if (morph.includes('préposition'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else
		console.log('NO MORPH --->'+morph+' '+lemma);
		}


		//au-delà, avec
		else if ( lemma == 'μετά')
		{

		if (morph.includes('accusatif'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('génitif'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}
		else
		console.log('NO MORPH --->'+morph+' '+lemma);
		}


		else if ( lemma == 'καί')
		{
		if (morph.includes('conjonction'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph == 'adverbe')
		{
		fr = fr[1].replace(/^ | $/,'');
		}
		else
		console.log('NO MORPH --->'+morph+' '+lemma);
		}


		//voir, voici
		else if ( lemma == 'ὁράω')
		{
		if (morph.includes('interjection'))
		{
		fr = fr[1].replace(/^ | $/,'');
		morph="INDECLINABLE";
		}
		else if (morph.includes('verbe'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else
		console.log('NO MORPH --->'+morph+' '+lemma);
		}




		else if (!morph.includes('verbe'))
		{
		if (morph.includes('neutre') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('neutre') && morph.includes('pluriel'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}


		else if (morph.includes('masculin') && morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}
		else if (morph.includes('masculin') && morph.includes('pluriel'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}


		else if (morph.includes('féminin') && morph.includes('singulier'))
		{
		fr = fr[2].replace(/^ | $/,'');
		}
		else if (morph.includes('féminin') && morph.includes('pluriel'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}


		else
		{
		console.log('NO MORPH --->'+morph+' '+lemma);
		}

		}


		else if (morph.includes('verbe'))
		{

		if (morph.includes('féminin') && morph.includes('singulier'))
		{
		fr = fr[2].replace(/^ | $/,'');
		}

		else if (morph.includes('féminin') && morph.includes('pluriel'))
		{
		fr = fr[3].replace(/^ | $/,'');
		}

		else if (morph.includes('singulier'))
		{
		fr = fr[0].replace(/^ | $/,'');
		}

		else if (morph.includes('pluriel'))
		{
		fr = fr[1].replace(/^ | $/,'');
		}

		else
		{
		fr = fr[0].replace(/^ | $/,'');
		}	
		}





	}






// -- VERBE --
if (morph.split(',')[0] == 'verbe' || morph.includes('interjection,impératif'))
{


	//INIT
	conjugaison	= ''
	frconj		= fr.split(' ')[0];










			//INFINITIF PRESENT
			if (morph.includes('infinitif,présent,actif'))
			{
			conjugaison=verbes[frconj]['infinitif']['présent'][0];
			}

			else if (morph.includes('infinitif,présent,moyen'))
			{
			conjugaison='se '+verbes[frconj]['infinitif']['présent'][0];
			}

			else if (morph.includes('infinitif,présent,passif'))
			{
			conjugaison=verbes['être']['infinitif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];
			}



			//INFINITIF PARFAIT
			else if (morph.includes('infinitif,parfait,actif'))
			{
			conjugaison='avoir '+verbes[frconj]['infinitif']['passé'][0];
			}

			else if (morph.includes('infinitif,parfait,moyen'))
			{
			conjugaison='se avoir '+verbes[frconj]['infinitif']['passé'][0];
			}

			else if (morph.includes('infinitif,parfait,passif'))
			{
			conjugaison='avoir été '+verbes[frconj]['participe']['passé'][1];
			}



			//INFINITIF AORISTE
			else if (morph.includes('infinitif,aoriste,actif'))
			{
			conjugaison=verbes[frconj]['infinitif']['présent'][0];
			}

			else if (morph.includes('infinitif,aoriste,moyen'))
			{
			conjugaison='se '+verbes[frconj]['infinitif']['présent'][0];
			}

			else if (morph.includes('infinitif,aoriste,passif'))
			{
			conjugaison=verbes['être']['infinitif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];
			}





			//INFINITIF FUTUR
			else if (morph.includes('infinitif,futur,actif'))
			{
			conjugaison='avoir à '+verbes[frconj]['infinitif']['présent'][0];
			}

			else if (morph.includes('infinitif,futur,moyen'))
			{
			conjugaison='se avoir à '+verbes[frconj]['infinitif']['présent'][0];
			}



			//PARTICIPE PRESENT
			else if (morph.includes('participe,présent,actif'))
			{

			conjugaison=verbes[frconj]['participe']['présent'][0];

			if (morph.includes('féminin'))
			conjugaison = conjugaison + 'e';

			if (morph.includes('pluriel'))
			{
			if (conjugaison[conjugaison.length-1] != 's')
				conjugaison = conjugaison + 's';

			}
			}

			else if (morph.includes('participe,présent,moyen'))
			{

			conjugaison=verbes[frconj]['participe']['présent'][0];

			if (morph.includes('féminin'))
			conjugaison = conjugaison + 'e';

			if (morph.includes('pluriel'))
			conjugaison = conjugaison + 's';

			conjugaison = 'se '+conjugaison;


			}

			else if (morph.includes('participe,présent,passif'))
			{


			v1 = verbes['être']['participe']['présent'][0];
			v2 = verbes[frconj]['participe']['passé'][1];

			if (morph.includes('féminin'))
			{
			v1 = v1 + 'e';
			v2 = v2 + 'e';
			}

			if (morph.includes('pluriel'))
			{
			if (v1[v1.length-1] != 's')
				v1 = v1 + 's';
			if (v2[v2.length-1] != 's')
				v2 = v2 + 's';	
			}

			conjugaison = v1 + ' ' + v2;

			}






			//PARTICIPE PARFAIT
			else if (morph.includes('participe,parfait,actif'))
			{

			if (morph.includes('féminin') && morph.includes('pluriel'))
			conjugaison='ayantes '+verbes[frconj]['participe']['passé'][0]+ 's';

			else if (morph.includes('féminin'))
			conjugaison='ayante '+verbes[frconj]['participe']['passé'][0];

			else if (morph.includes('masculin') && morph.includes('pluriel'))
			conjugaison='ayants '+verbes[frconj]['participe']['passé'][1]+ 's';

			else if (morph.includes('neutre') && morph.includes('pluriel'))
			conjugaison='ayants '+verbes[frconj]['participe']['passé'][1]+ 's';

			else
			conjugaison='ayant '+verbes[frconj]['participe']['passé'][1];


			}

			else if (morph.includes('participe,parfait,moyen'))
			{

			if (morph.includes('féminin') && morph.includes('pluriel'))
			conjugaison='ayantes '+verbes[frconj]['participe']['passé'][0]+ 's';

			else if (morph.includes('féminin'))
			conjugaison='ayante '+verbes[frconj]['participe']['passé'][0];

			else if (morph.includes('masculin') && morph.includes('pluriel'))
			conjugaison='ayants '+verbes[frconj]['participe']['passé'][1]+ 's';

			else if (morph.includes('neutre') && morph.includes('pluriel'))
			conjugaison='ayants '+verbes[frconj]['participe']['passé'][1]+ 's';

			else
			conjugaison='ayant '+verbes[frconj]['participe']['passé'][1];


			conjugaison = 'se '+conjugaison;


			}

			else if (morph.includes('participe,parfait,passif'))
			{
			if (morph.includes('féminin') && morph.includes('pluriel'))
			conjugaison='ayantes étées '+verbes[frconj]['participe']['passé'][0]+ 's';

			else if (morph.includes('féminin'))
			conjugaison='ayante étée '+verbes[frconj]['participe']['passé'][0];

			else if (morph.includes('masculin') && morph.includes('pluriel'))
			{
				if 	(verbes[frconj]['participe']['passé'][1][verbes[frconj]['participe']['passé'][1].length-1] != 's')
					conjugaison='ayants étés '+verbes[frconj]['participe']['passé'][1]+ 's';
				else
					conjugaison='ayants étés '+verbes[frconj]['participe']['passé'][1];
				
			}
			else if (morph.includes('neutre') && morph.includes('pluriel'))
			{
				if 	(verbes[frconj]['participe']['passé'][1][verbes[frconj]['participe']['passé'][1].length-1] != 's')
					conjugaison='ayants étés '+verbes[frconj]['participe']['passé'][1]+ 's';
				else
					conjugaison='ayants étés '+verbes[frconj]['participe']['passé'][1];
				
			}

			else
			conjugaison='ayant été '+verbes[frconj]['participe']['passé'][1];
			}






			//PARTICIPE FUTUR
			else if (morph.includes('participe,futur,actif'))
			{

			if (morph.includes('singulier'))
			{
			conjugaison='qui '+verbes[frconj]['indicatif']['futur simple'][2];
			}


			if (morph.includes('pluriel'))
			{
			conjugaison='qui '+verbes[frconj]['indicatif']['futur simple'][5];
			}


			}



			else if (morph.includes('participe,futur,moyen'))
			{

			if (morph.includes('singulier'))
			{
			conjugaison='qui se '+verbes[frconj]['indicatif']['futur simple'][2];
			}


			if (morph.includes('pluriel'))
			{
			conjugaison='qui se '+verbes[frconj]['indicatif']['futur simple'][5];
			}



			}

			else if (morph.includes('participe,futur,passif'))
			{

			if (morph.includes('singulier'))
			{
			conjugaison='qui sera '+verbes[frconj]['participe']['passé'][1];
			}


			if (morph.includes('pluriel'))
			{
			conjugaison='qui seront '+verbes[frconj]['participe']['passé'][1];
			}

			if (morph.includes('féminin'))
			{
			conjugaison = conjugaison + 'e';
			}

			if (morph.includes('pluriel'))
			{
			conjugaison = conjugaison + 's';
			}


			}





			//PARTICIPE AORISTE
			else if (morph.includes('participe,aoriste,actif'))
			{

			v1 = verbes['avoir']['participe']['présent'][0];
			v2 = verbes[frconj]['participe']['passé'][1];

			if (morph.includes('féminin'))
			{
			v1 = v1 + 'e';
			v2 = v2 + 'e';
			}

			if (morph.includes('pluriel'))
			{
			if (v1[v1.length-1] != 's')
				v1 = v1 + 's';
			if (v2[v2.length-1] != 's')
				v2 = v2 + 's';	
			}

			conjugaison = v1 + ' ' + v2;

			}

			else if (morph.includes('participe,aoriste,moyen'))
			{

			v1 = 'se '+verbes['avoir']['participe']['présent'][0];
			v2 = verbes[frconj]['participe']['passé'][1];

			if (morph.includes('féminin'))
			{
			v1 = v1 + 'e';
			v2 = v2 + 'e';
			}

			if (morph.includes('pluriel'))
			{
			if (v1[v1.length-1] != 's')
				v1 = v1 + 's';
			if (v2[v2.length-1] != 's')
				v2 = v2 + 's';	
			}

			conjugaison = v1 + ' ' + v2;



			}

			else if (morph.includes('participe,aoriste,passif'))
			{


			v1 = verbes['avoir']['participe']['présent'][0];
			v2 = verbes['être']['participe']['passé'][1];
			v3 = verbes[frconj]['participe']['passé'][1];

			if (morph.includes('féminin'))
			{
			v1 = v1 + 'e';
			v2 = v2 + 'e';
			v3 = v3 + 'e';
			}

			if (morph.includes('pluriel'))
			{
				
			if (v1[v1.length-1] != 's')
				v1 = v1 + 's';
			if (v2[v2.length-1] != 's')
				v2 = v2 + 's';	
			if (v3[v3.length-1] != 's')
				v3 = v3 + 's';

			}

			conjugaison = v1 + ' ' + v2 + ' ' + v3;

			}





			//INDICATIF PRESENT
			else if (morph.includes('indicatif,présent,actif'))
			{

			if		(morph.includes('1e,singulier')) {
			conjugaison=verbes[frconj]['indicatif']['présent'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="j'"+conjugaison;
			}
			else
			{
			conjugaison="je "+conjugaison;
			}
			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu '+verbes[frconj]['indicatif']['présent'][1]; }

			else if (morph.includes('3e,singulier')) {
			conjugaison=verbes[frconj]['indicatif']['présent'][2]; }

			else if (morph.includes('1e,pluriel')) {
			conjugaison='nous '+verbes[frconj]['indicatif']['présent'][3]; }

			else if (morph.includes('2e,pluriel')) {
			conjugaison='vous '+verbes[frconj]['indicatif']['présent'][4]; }

			else if (morph.includes('3e,pluriel')) {
			conjugaison=verbes[frconj]['indicatif']['présent'][5]; }

			}

			else if (morph.includes('indicatif,présent,moyen'))
			{


			if (morph.includes('1e,singulier')) 
			{
			conjugaison=verbes[frconj]['indicatif']['présent'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="je m'"+conjugaison;
			}
			else
			{
			conjugaison="je me "+conjugaison;
			}
			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu te '+verbes[frconj]['indicatif']['présent'][1]; }

			else if (morph.includes('3e,singulier')) {
			conjugaison='se '+verbes[frconj]['indicatif']['présent'][2]; }

			else if (morph.includes('1e,pluriel')) {
			conjugaison='nous nous '+verbes[frconj]['indicatif']['présent'][3]; }

			else if (morph.includes('2e,pluriel')) {
			conjugaison='vous vous '+verbes[frconj]['indicatif']['présent'][4]; }

			else if (morph.includes('3e,pluriel')) {
			conjugaison='se '+verbes[frconj]['indicatif']['présent'][5]; }


			}

			else if (morph.includes('indicatif,présent,passif'))
			{

			if (morph.includes('1e,singulier'))
			{
			
			conjugaison=verbes['être']['indicatif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="j'"+conjugaison;
			}
			else
			{
			conjugaison="je "+conjugaison;
			}


			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu '+
			verbes['être']['indicatif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,singulier')) {
			conjugaison=
			verbes['être']['indicatif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1e,pluriel')) 
			{
				if (verbes[frconj]['participe']['passé'][1][verbes[frconj]['participe']['passé'][1].length-1] != 's')
					conjugaison='nous '+ verbes['être']['indicatif']['présent'][3]+' '+verbes[frconj]['participe']['passé'][1]+'s';
				else
					conjugaison='nous '+ verbes['être']['indicatif']['présent'][3]+' '+verbes[frconj]['participe']['passé'][1];
			}

			else if (morph.includes('2e,pluriel')) 
			{
				conjugaison='vous '+verbes['être']['indicatif']['présent'][4]+' '+verbes[frconj]['participe']['passé'][1]+'s';
			}

			else if (morph.includes('3e,pluriel')) 
			{
				if (verbes[frconj]['participe']['passé'][1][verbes[frconj]['participe']['passé'][1].length-1] != 's')
					conjugaison=verbes['être']['indicatif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1]+'s';
				else
					conjugaison=verbes['être']['indicatif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1];
			}
			
			}





			//INDICATIF PARFAIT
			else if (morph.includes('indicatif,parfait,actif'))
			{

			if (morph.includes('1e,singulier')) {
			conjugaison="j'ai "+verbes[frconj]['indicatif']['passé composé'][0];
			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu as '+verbes[frconj]['indicatif']['passé composé'][1];
			}

			else if (morph.includes('3e,singulier')) {
			conjugaison='a '+verbes[frconj]['indicatif']['passé composé'][2];
			}

			else if (morph.includes('1e,pluriel')) {
			conjugaison='nous avons '+verbes[frconj]['indicatif']['passé composé'][3];
			}

			else if (morph.includes('2e,pluriel')) {
			conjugaison='vous avez '+verbes[frconj]['indicatif']['passé composé'][4];
			}

			else if (morph.includes('3e,pluriel')) {
			conjugaison='ont '+verbes[frconj]['indicatif']['passé composé'][5];
			}




			}



			else if (morph.includes('indicatif,parfait,moyen'))
			{

			if (morph.includes('1e,singulier')) {
			conjugaison="je m'ai "+verbes[frconj]['indicatif']['passé composé'][0];
			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu t\'as '+verbes[frconj]['indicatif']['passé composé'][1];
			}

			else if (morph.includes('3e,singulier')) {
			conjugaison='s\'a '+verbes[frconj]['indicatif']['passé composé'][2];
			}

			else if (morph.includes('1e,pluriel')) {
			conjugaison='nous nous avons '+verbes[frconj]['indicatif']['passé composé'][3];
			}

			else if (morph.includes('2e,pluriel')) {
			conjugaison='vous vous avez '+verbes[frconj]['indicatif']['passé composé'][4];
			}

			else if (morph.includes('3e,pluriel')) {
			conjugaison='s\'ont '+verbes[frconj]['indicatif']['passé composé'][5];
			}

			}

			else if (morph.includes('indicatif,parfait,passif'))
			{

			if (morph.includes('1e,singulier')) {
			conjugaison="j'ai été "+verbes[frconj]['indicatif']['passé composé'][0];
			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu as été '+verbes[frconj]['indicatif']['passé composé'][1];
			}

			else if (morph.includes('3e,singulier')) {
			conjugaison='a été '+verbes[frconj]['indicatif']['passé composé'][2];
			}

			else if (morph.includes('1e,pluriel')) {
			conjugaison='nous avons été '+verbes[frconj]['indicatif']['passé composé'][3]+'s';
			}

			else if (morph.includes('2e,pluriel')) {
			conjugaison='vous avez été '+verbes[frconj]['indicatif']['passé composé'][4]+'s';
			}

			else if (morph.includes('3e,pluriel')) {
			conjugaison='ont été '+verbes[frconj]['indicatif']['passé composé'][5]+'s';
			}

			}





			//INDICATIF IMPARFAIT
			else if (morph.includes('indicatif,imparfait,actif'))
			{

			if		(morph.includes('1e,singulier')) {
			conjugaison=verbes[frconj]['indicatif']['imparfait'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="j'"+conjugaison;
			}
			else
			{
			conjugaison="je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu '+
			verbes[frconj]['indicatif']['imparfait'][1]; }

			else if (morph.includes('3e,singulier')) {
			conjugaison=
			verbes[frconj]['indicatif']['imparfait'][2]; }

			else if (morph.includes('1e,pluriel')) {
			conjugaison='nous '+
			verbes[frconj]['indicatif']['imparfait'][3]; }

			else if (morph.includes('2e,pluriel')) {
			conjugaison='vous '+
			verbes[frconj]['indicatif']['imparfait'][4]; }

			else if (morph.includes('3e,pluriel')) {
			conjugaison=
			verbes[frconj]['indicatif']['imparfait'][5]; }

			}

			else if (morph.includes('indicatif,imparfait,moyen'))
			{

			if (morph.includes('1e,singulier')) {
			conjugaison=verbes[frconj]['indicatif']['imparfait'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="je m'"+conjugaison;

			}
			else
			{
			conjugaison="je me "+conjugaison;

			}

			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu te '+
			verbes[frconj]['indicatif']['imparfait'][1]; 
			}

			else if (morph.includes('3e,singulier')) {
			conjugaison='se '+
			verbes[frconj]['indicatif']['imparfait'][2]; }

			else if (morph.includes('1e,pluriel')) {
			conjugaison='nous nous '+
			verbes[frconj]['indicatif']['imparfait'][3]; }

			else if (morph.includes('2e,pluriel')) {
			conjugaison='vous vous '+
			verbes[frconj]['indicatif']['imparfait'][4]; }

			else if (morph.includes('3e,pluriel')) {
			conjugaison='se '+
			verbes[frconj]['indicatif']['imparfait'][5]; }

			}

			else if (morph.includes('indicatif,imparfait,passif'))
			{

			if (morph.includes('1e,singulier')) {
			conjugaison=verbes['être']['indicatif']['imparfait'][0]+' '+verbes[frconj]['participe']['passé'][1];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="j'"+conjugaison;
			}
			else
			{
			conjugaison="je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu '+
			verbes['être']['indicatif']['imparfait'][1]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,singulier')) {
			conjugaison=
			verbes['être']['indicatif']['imparfait'][2]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1e,pluriel')) {
			conjugaison='nous '+
			verbes['être']['indicatif']['imparfait'][3]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('2e,pluriel')) {
			conjugaison='vous '+
			verbes['être']['indicatif']['imparfait'][4]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,pluriel')) {
			conjugaison=
			verbes['être']['indicatif']['imparfait'][5]+' '+verbes[frconj]['participe']['passé'][1];}

			}





			//INDICATIF PLUS QUE PARFAIT
			else if (morph.includes('indicatif,plus-que-parfait,actif'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison='j\''+
			verbes['avoir']['indicatif']['imparfait'][0]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][0]; }

			else if (morph.includes('2e,singulier'))	{
			conjugaison='tu '+
			verbes['avoir']['indicatif']['imparfait'][1]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison=
			verbes['avoir']['indicatif']['imparfait'][2]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][2]; }

			else if (morph.includes('1e,pluriel'))	{
			conjugaison='nous '+
			verbes['avoir']['indicatif']['imparfait'][3]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][3]; }

			else if (morph.includes('2e,pluriel'))	{
			conjugaison='vous '+
			verbes['avoir']['indicatif']['imparfait'][4]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][4]; }

			else if (morph.includes('3e,pluriel'))	{
			conjugaison=
			verbes['avoir']['indicatif']['imparfait'][5]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][5]; }

			}

			else if (morph.includes('indicatif,plus-que-parfait,moyen'))
			{

			if (morph.includes('1e,singulier'))	{
			conjugaison='je m\''+
			verbes['avoir']['indicatif']['imparfait'][0]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][0]; }

			else if (morph.includes('2e,singulier'))	{
			conjugaison='tu te '+
			verbes['avoir']['indicatif']['imparfait'][1]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison='s\''+
			verbes['avoir']['indicatif']['imparfait'][2]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][2]; }

			else if (morph.includes('1e,pluriel'))	{
			conjugaison='nous nous '+
			verbes['avoir']['indicatif']['imparfait'][3]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][3]; }

			else if (morph.includes('2e,pluriel'))	{
			conjugaison='vous vous '+
			verbes['avoir']['indicatif']['imparfait'][4]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][4]; }

			else if (morph.includes('3e,pluriel'))	{
			conjugaison='s\''+
			verbes['avoir']['indicatif']['imparfait'][5]+' '+
			verbes[frconj]['indicatif']['plus-que-parfait'][5]; }


			}

			else if (morph.includes('indicatif,plus-que-parfait,passif'))
			{

			if		(morph.includes('1e,singulier')) {
			conjugaison='j\''+
			verbes['avoir']['indicatif']['imparfait'][0]+' '+
			verbes['être']['indicatif']['plus-que-parfait'][0]+' '+
			verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu '+
			verbes['avoir']['indicatif']['imparfait'][1]+' '+
			verbes['être']['indicatif']['plus-que-parfait'][1]+' '+
			verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,singulier')) {
			conjugaison=
			verbes['avoir']['indicatif']['imparfait'][2]+' '+
			verbes['être']['indicatif']['plus-que-parfait'][2]+' '+
			verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1e,pluriel')) {
			conjugaison='nous '+
			verbes['avoir']['indicatif']['imparfait'][3]+' '+
			verbes['être']['indicatif']['plus-que-parfait'][3]+' '+
			verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('2e,pluriel')) {
			conjugaison='vous '+
			verbes['avoir']['indicatif']['imparfait'][4]+' '+
			verbes['être']['indicatif']['plus-que-parfait'][4]+' '+
			verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,pluriel')) {
			conjugaison=
			verbes['avoir']['indicatif']['imparfait'][5]+' '+
			verbes['être']['indicatif']['plus-que-parfait'][5]+' '+
			verbes[frconj]['participe']['passé'][1];}


			}






			//INDICATIF FUTUR
			else if (morph.includes('indicatif,futur,actif'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison=verbes[frconj]['indicatif']['futur simple'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="j'"+conjugaison;
			}
			else
			{
			conjugaison="je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier'))	{
			conjugaison='tu '+
			verbes[frconj]['indicatif']['futur simple'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison=
			verbes[frconj]['indicatif']['futur simple'][2]; }

			else if (morph.includes('1e,pluriel')) 	{
			conjugaison='nous '+
			verbes[frconj]['indicatif']['futur simple'][3]; }

			else if (morph.includes('2e,pluriel'))	{
			conjugaison='vous '+
			verbes[frconj]['indicatif']['futur simple'][4]; }

			else if (morph.includes('3e,pluriel'))	{
			conjugaison=
			verbes[frconj]['indicatif']['futur simple'][5]; }

			}

			else if (morph.includes('indicatif,futur,moyen'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison=verbes[frconj]['indicatif']['futur simple'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="je m'"+conjugaison;
			}
			else
			{
			conjugaison="je me "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier'))	{
			conjugaison='tu te '+
			verbes[frconj]['indicatif']['futur simple'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison='se '+
			verbes[frconj]['indicatif']['futur simple'][2]; }

			else if (morph.includes('1e,pluriel')) 	{
			conjugaison='nous nous '+
			verbes[frconj]['indicatif']['futur simple'][3]; }

			else if (morph.includes('2e,pluriel'))	{
			conjugaison='vous vous '+
			verbes[frconj]['indicatif']['futur simple'][4]; }

			else if (morph.includes('3e,pluriel'))	{
			conjugaison='se '+
			verbes[frconj]['indicatif']['futur simple'][5]; }


			}

			else if (morph.includes('indicatif,futur,passif'))
			{

			if		(morph.includes('1e,singulier')) {
			conjugaison=verbes['être']['indicatif']['futur simple'][0]+' '+verbes[frconj]['participe']['passé'][1];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="j'"+conjugaison;
			}
			else
			{
			conjugaison="je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='tu '+
			verbes['être']['indicatif']['futur simple'][1]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,singulier')) {
			conjugaison=
			verbes['être']['indicatif']['futur simple'][2]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1e,pluriel')) {
			conjugaison='nous '+
			verbes['être']['indicatif']['futur simple'][3]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('2e,pluriel')) {
			conjugaison='vous '+
			verbes['être']['indicatif']['futur simple'][4]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,pluriel')) {
			conjugaison=
			verbes['être']['indicatif']['futur simple'][5]+' '+verbes[frconj]['participe']['passé'][1];}

			}





			//INDICATIF aoriste : passé composé ou passé simple
			else if (morph.includes('indicatif,aoriste,actif'))
			{

			if (morph.includes('1') && morph.includes('singulier')) {
			conjugaison=verbes[frconj]['indicatif']['passé simple'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="j'"+conjugaison;
			}
			else
			{
			conjugaison="je "+conjugaison;
			}

			}

			else if (morph.includes('2') && morph.includes('singulier')) {
			conjugaison='tu '+
			verbes[frconj]['indicatif']['passé simple'][1]; }

			else if (morph.includes('3') && morph.includes('singulier')) {
			conjugaison=
			verbes[frconj]['indicatif']['passé simple'][2]; }

			else if (morph.includes('1') && morph.includes('pluriel')) {
			conjugaison='nous '+
			verbes[frconj]['indicatif']['passé simple'][3]; }

			else if (morph.includes('2') && morph.includes('pluriel')) {
			conjugaison='vous '+
			verbes[frconj]['indicatif']['passé simple'][4]; }

			else if (morph.includes('3') && morph.includes('pluriel')) {
			conjugaison=
			verbes[frconj]['indicatif']['passé simple'][5]; }

			}

			else if (morph.includes('indicatif,aoriste,moyen'))
			{

			if (morph.includes('1') && morph.includes('singulier')) {
			conjugaison=verbes[frconj]['indicatif']['passé simple'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="je m'"+conjugaison;
			}
			else
			{
			conjugaison="je me "+conjugaison;
			}

			}

			else if (morph.includes('2') && morph.includes('singulier')) {
			conjugaison='tu te '+
			verbes[frconj]['indicatif']['passé simple'][1]; }

			else if (morph.includes('3') && morph.includes('singulier')) {
			conjugaison="se "+
			verbes[frconj]['indicatif']['passé simple'][2]; }

			else if (morph.includes('1') && morph.includes('pluriel')) {
			conjugaison='nous nous '+
			verbes[frconj]['indicatif']['passé simple'][3]; }

			else if (morph.includes('2') && morph.includes('pluriel')) {
			conjugaison='vous vous '+
			verbes[frconj]['indicatif']['passé simple'][4]; }

			else if (morph.includes('3') && morph.includes('pluriel')) {
			conjugaison="se "+
			verbes[frconj]['indicatif']['passé simple'][5]; }




			}

			else if (morph.includes('indicatif,aoriste,passif'))
			{

			if		(morph.includes('1') && morph.includes('singulier')) {
			conjugaison=verbes['être']['indicatif']['passé simple'][0]+' '+verbes[frconj]['participe']['passé'][1];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="j'"+conjugaison;
			}
			else
			{
			conjugaison="je "+conjugaison;
			}

			}

			else if (morph.includes('2') && morph.includes('singulier')) {
			conjugaison='tu '+
			verbes['être']['indicatif']['passé simple'][1]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3') && morph.includes('singulier')) {
			conjugaison=
			verbes['être']['indicatif']['passé simple'][2]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1') && morph.includes('pluriel')) {
			conjugaison='nous '+
			verbes['être']['indicatif']['passé simple'][3]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('2') && morph.includes('pluriel')) {
			conjugaison='vous '+
			verbes['être']['indicatif']['passé simple'][4]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3') && morph.includes('pluriel')) {
			conjugaison=
			verbes['être']['indicatif']['passé simple'][5]+' '+verbes[frconj]['participe']['passé'][1];}

			}





			//IMPERATIF PRESENT
			else if (morph.includes('impératif,présent,actif'))
			{

			//if 		(morph.includes('1e,singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][0]; }
			if (morph.includes('2e,singulier')) { conjugaison=verbes[frconj]['impératif']['présent'][0]; }
			else if (morph.includes('3e,singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][2]; }
			else if (morph.includes('1e,pluriel')) { conjugaison=verbes[frconj]['impératif']['présent'][1]; }
			else if (morph.includes('2e,pluriel')) { conjugaison=verbes[frconj]['impératif']['présent'][2]; }
			else if (morph.includes('3e,pluriel')) { conjugaison=verbes[frconj]['subjonctif']['présent'][5]; }





			}

			else if (morph.includes('impératif,présent,moyen'))
			{

			//if 		(morph.includes('1e,singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][0]; }
			if (morph.includes('2e,singulier')) { conjugaison='te '+verbes[frconj]['impératif']['présent'][0]; }
			else if (morph.includes('3e,singulier')) { conjugaison='se '+verbes[frconj]['subjonctif']['présent'][2]; }
			else if (morph.includes('1e,pluriel')) { conjugaison='que nous nous '+verbes[frconj]['impératif']['présent'][1]; }
			else if (morph.includes('2e,pluriel')) { conjugaison='que vous vous '+verbes[frconj]['impératif']['présent'][2]; }
			else if (morph.includes('3e,pluriel')) { conjugaison='se '+verbes[frconj]['subjonctif']['présent'][5]; }

			}

			else if (morph.includes('impératif,présent,passif'))
			{

			//if 		(morph.includes('1e,singulier')) {
			//conjugaison=verbes['être']['impératif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];}

			if (morph.includes('2e,singulier')) {
			conjugaison=verbes['être']['impératif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,singulier')) {
			conjugaison=verbes['être']['subjonctif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1e,pluriel')) {
			conjugaison=verbes['être']['impératif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1]+'s';}

			else if (morph.includes('2e,pluriel')) 
			{
				if (verbes[frconj]['participe']['passé'][1][verbes[frconj]['participe']['passé'][1].length-1] != 's')
					conjugaison=verbes['être']['impératif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1]+'s';
				else
					conjugaison=verbes['être']['impératif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];
			}

			else if (morph.includes('3e,pluriel')) {
			conjugaison=verbes['être']['subjonctif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1]+'s';}


			}





			//IMPERATIF PARFAIT
			else if (morph.includes('impératif,parfait,actif'))
			{

			if (morph.includes('2e,singulier')) {
			conjugaison=verbes['avoir']['impératif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('2e,pluriel')) {
			conjugaison=verbes['avoir']['impératif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1]+'s';}




			}

			else if (morph.includes('impératif,parfait,passif'))
			{

			if (morph.includes('2e,singulier')) {
			conjugaison=verbes['avoir']['impératif']['présent'][0]+' été '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('2e,pluriel')) {
			conjugaison=verbes['avoir']['impératif']['présent'][2]+' été '+verbes[frconj]['participe']['passé'][1]+'s';}

			}





			//IMPERATIF aoriste
			else if (morph.includes('impératif,aoriste,actif'))
			{
			//if 		(morph.includes('1e,singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][0]; }
			if (morph.includes('2e,singulier')) { conjugaison=verbes[frconj]['impératif']['présent'][0]; }
			else if (morph.includes('3e,singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][2]; }
			else if (morph.includes('1e,pluriel')) { conjugaison=verbes[frconj]['impératif']['présent'][1]; }
			else if (morph.includes('2e,pluriel')) { conjugaison=verbes[frconj]['impératif']['présent'][2]; }
			else if (morph.includes('3e,pluriel')) { conjugaison=verbes[frconj]['subjonctif']['présent'][5]; }

			}

			else if (morph.includes('impératif,aoriste,moyen'))
			{
			//if 		(morph.includes('1e,singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][0]; }
			if (morph.includes('2e,singulier')) { conjugaison='te '+verbes[frconj]['impératif']['présent'][0]; }
			else if (morph.includes('3e,singulier')) { conjugaison='se '+verbes[frconj]['subjonctif']['présent'][2]; }
			else if (morph.includes('1e,pluriel')) { conjugaison='que nous nous '+verbes[frconj]['impératif']['présent'][1]; }
			else if (morph.includes('2e,pluriel')) { conjugaison='que vous vous '+verbes[frconj]['impératif']['présent'][2]; }
			else if (morph.includes('3e,pluriel')) { conjugaison='se '+verbes[frconj]['subjonctif']['présent'][5]; }


			}

			else if (morph.includes('impératif,aoriste,passif'))
			{


			//if 		(morph.includes('1e,singulier')) {
			//conjugaison=verbes['être']['impératif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];}

			if (morph.includes('2e,singulier')) {
			conjugaison=verbes['être']['impératif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,singulier')) {
			conjugaison=verbes['être']['subjonctif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1e,pluriel')) {
			conjugaison=verbes['être']['impératif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1]+'s';}

			else if (morph.includes('2e,pluriel')) {
			conjugaison=verbes['être']['impératif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1]+'s';}

			else if (morph.includes('3e,pluriel')) {
			conjugaison=verbes['être']['subjonctif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1]+'s';}



			}




			//SUBJONCTIF PRESENT
			else if (morph.includes('subjonctif,présent,actif'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison=verbes[frconj]['subjonctif']['présent'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que j'"+conjugaison;
			}
			else
			{
			conjugaison="que je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier'))	{
			conjugaison = 'que tu '+
			verbes[frconj]['subjonctif']['présent'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison = 'que '+
			verbes[frconj]['subjonctif']['présent'][2]; }


			else if (morph.includes('1e,pluriel'))	{
			conjugaison = 'que nous '+
			verbes[frconj]['subjonctif']['présent'][3]; }


			else if (morph.includes('2e,pluriel'))	{
			conjugaison='que vous '+
			verbes[frconj]['subjonctif']['présent'][4]; }


			else if (morph.includes('3e,pluriel'))	{
			conjugaison='que '+
			verbes[frconj]['subjonctif']['présent'][5]; }


			}

			else if (morph.includes('subjonctif,présent,moyen'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison=verbes[frconj]['subjonctif']['présent'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que je m'"+conjugaison;
			}
			else
			{
			conjugaison="que je me "+conjugaison;
			}

			}


			else if (morph.includes('2e,singulier'))	{
			conjugaison = 'que tu te '+
			verbes[frconj]['subjonctif']['présent'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison = 'que se '+
			verbes[frconj]['subjonctif']['présent'][2]; }


			else if (morph.includes('1e,pluriel'))	{
			conjugaison = 'que nous nous '+
			verbes[frconj]['subjonctif']['présent'][3]; }


			else if (morph.includes('2e,pluriel'))	{
			conjugaison='que vous vous '+
			verbes[frconj]['subjonctif']['présent'][4]; }


			else if (morph.includes('3e,pluriel'))	{
			conjugaison='que se '+
			verbes[frconj]['subjonctif']['présent'][5]; }





			}

			else if (morph.includes('subjonctif,présent,passif'))
			{


			if 		(morph.includes('1e,singulier')) {
			conjugaison=verbes['être']['subjonctif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que j'"+conjugaison;
			}
			else
			{
			conjugaison="que je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='que tu '+
			verbes['être']['subjonctif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,singulier')) {
			conjugaison='que '+
			verbes['être']['subjonctif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1e,pluriel')) {
			conjugaison='que nous '+
			verbes['être']['subjonctif']['présent'][3]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('2e,pluriel')) {
			conjugaison='que vous '+
			verbes['être']['subjonctif']['présent'][4]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,pluriel')) {
			conjugaison='que '+
			verbes['être']['subjonctif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1];}

			}





			//SUBJONCTIF PARFAIT
			else if (morph.includes('subjonctif,parfait,actif'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison="que j'ai "+verbes[frconj]['participe']['passé'][1];}


			else if (morph.includes('2e,singulier'))	{
			conjugaison = 'que tu aies '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1e,pluriel'))	{
			conjugaison = 'que nous ayons '+verbes[frconj]['participe']['passé'][1];}


			else if (morph.includes('2e,pluriel'))	{
			conjugaison='que vous ayez '+verbes[frconj]['participe']['passé'][1];}



			}





			//SUBJONCTIF AORISTE
			else if (morph.includes('subjonctif,aoriste,actif'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison=verbes[frconj]['subjonctif']['présent'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que j'"+conjugaison;
			}
			else
			{
			conjugaison="que je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier'))	{
			conjugaison = 'que tu '+
			verbes[frconj]['subjonctif']['présent'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison = 'que '+
			verbes[frconj]['subjonctif']['présent'][2]; }


			else if (morph.includes('1e,pluriel'))	{
			conjugaison = 'que nous '+
			verbes[frconj]['subjonctif']['présent'][3]; }


			else if (morph.includes('2e,pluriel'))	{
			conjugaison='que vous '+
			verbes[frconj]['subjonctif']['présent'][4]; }


			else if (morph.includes('3e,pluriel'))	{
			conjugaison='que '+
			verbes[frconj]['subjonctif']['présent'][5]; }

			}

			else if (morph.includes('subjonctif,aoriste,moyen'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison=verbes[frconj]['subjonctif']['présent'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que je m'"+conjugaison;
			}
			else
			{
			conjugaison="que je me "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier'))	{
			conjugaison = 'que tu te '+
			verbes[frconj]['subjonctif']['présent'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison = 'que se '+
			verbes[frconj]['subjonctif']['présent'][2]; }


			else if (morph.includes('1e,pluriel'))	{
			conjugaison = 'que nous nous '+
			verbes[frconj]['subjonctif']['présent'][3]; }


			else if (morph.includes('2e,pluriel'))	{
			conjugaison='que vous vous '+
			verbes[frconj]['subjonctif']['présent'][4]; }


			else if (morph.includes('3e,pluriel'))	{
			conjugaison='que se '+
			verbes[frconj]['subjonctif']['présent'][5]; }

			}

			else if (morph.includes('subjonctif,aoriste,passif'))
			{

			if 		(morph.includes('1e,singulier')) {
			conjugaison=verbes['être']['subjonctif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que j'"+conjugaison;
			}
			else
			{
			conjugaison="que je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='que tu '+
			verbes['être']['subjonctif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,singulier')) {
			conjugaison='que '+
			verbes['être']['subjonctif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1e,pluriel')) {
			conjugaison='que nous '+
			verbes['être']['subjonctif']['présent'][3]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('2e,pluriel')) {
			conjugaison='que vous '+
			verbes['être']['subjonctif']['présent'][4]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,pluriel')) {
			conjugaison='que '+
			verbes['être']['subjonctif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1];}

			}





			//OPTATIF PRESENT
			else if (morph.includes('optatif,présent,actif'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison=verbes[frconj]['subjonctif']['présent'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que j'"+conjugaison;
			}
			else
			{
			conjugaison="que je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier'))	{
			conjugaison = 'que tu '+
			verbes[frconj]['subjonctif']['présent'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison = 'que '+
			verbes[frconj]['subjonctif']['présent'][2]; }


			else if (morph.includes('1e,pluriel'))	{
			conjugaison = 'que nous '+
			verbes[frconj]['subjonctif']['présent'][3]; }


			else if (morph.includes('2e,pluriel'))	{
			conjugaison='que vous '+
			verbes[frconj]['subjonctif']['présent'][4]; }


			else if (morph.includes('3e,pluriel'))	{
			conjugaison='que '+
			verbes[frconj]['subjonctif']['présent'][5]; }

			}

			else if (morph.includes('optatif,présent,moyen'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison=verbes[frconj]['subjonctif']['présent'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que je m'"+conjugaison;
			}
			else
			{
			conjugaison="que je me "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier'))	{
			conjugaison = 'que tu te '+
			verbes[frconj]['subjonctif']['présent'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison = 'que se '+
			verbes[frconj]['subjonctif']['présent'][2]; }


			else if (morph.includes('1e,pluriel'))	{
			conjugaison = 'que nous nous '+
			verbes[frconj]['subjonctif']['présent'][3]; }


			else if (morph.includes('2e,pluriel'))	{
			conjugaison='que vous vous '+
			verbes[frconj]['subjonctif']['présent'][4]; }


			else if (morph.includes('3e,pluriel'))	{
			conjugaison='que se '+
			verbes[frconj]['subjonctif']['présent'][5]; }





			}




			//OPTATIF AORISTE
			else if (morph.includes('optatif,aoriste,actif'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison=verbes[frconj]['subjonctif']['présent'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que j'"+conjugaison;
			}
			else
			{
			conjugaison="que je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier'))	{
			conjugaison = 'que tu '+
			verbes[frconj]['subjonctif']['présent'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison = 'que '+
			verbes[frconj]['subjonctif']['présent'][2]; }


			else if (morph.includes('1e,pluriel'))	{
			conjugaison = 'que nous '+
			verbes[frconj]['subjonctif']['présent'][3]; }


			else if (morph.includes('2e,pluriel'))	{
			conjugaison='que vous '+
			verbes[frconj]['subjonctif']['présent'][4]; }


			else if (morph.includes('3e,pluriel'))	{
			conjugaison='que '+
			verbes[frconj]['subjonctif']['présent'][5]; }


			}

			else if (morph.includes('optatif,aoriste,moyen'))
			{

			if		(morph.includes('1e,singulier'))	{
			conjugaison=verbes[frconj]['subjonctif']['présent'][0];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que je m'"+conjugaison;
			}
			else
			{
			conjugaison="que je me "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier'))	{
			conjugaison = 'que tu te '+
			verbes[frconj]['subjonctif']['présent'][1]; }

			else if (morph.includes('3e,singulier'))	{
			conjugaison = 'que se '+
			verbes[frconj]['subjonctif']['présent'][2]; }


			else if (morph.includes('1e,pluriel'))	{
			conjugaison = 'que nous nous '+
			verbes[frconj]['subjonctif']['présent'][3]; }


			else if (morph.includes('2e,pluriel'))	{
			conjugaison='que vous vous '+
			verbes[frconj]['subjonctif']['présent'][4]; }


			else if (morph.includes('3e,pluriel'))	{
			conjugaison='que se '+
			verbes[frconj]['subjonctif']['présent'][5]; }




			}

			else if (morph.includes('optatif,aoriste,passif'))
			{


			if 		(morph.includes('1e,singulier')) {
			conjugaison=verbes['être']['subjonctif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];

			if (conjugaison.match(/^[aeéêiîoôuy]/i))
			{
			conjugaison="que j'"+conjugaison;
			}
			else
			{
			conjugaison="que je "+conjugaison;
			}

			}

			else if (morph.includes('2e,singulier')) {
			conjugaison='que tu '+
			verbes['être']['subjonctif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,singulier')) {
			conjugaison='que '+
			verbes['être']['subjonctif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('1e,pluriel')) {
			conjugaison='que nous '+
			verbes['être']['subjonctif']['présent'][3]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('2e,pluriel')) {
			conjugaison='que vous '+
			verbes['être']['subjonctif']['présent'][4]+' '+verbes[frconj]['participe']['passé'][1];}

			else if (morph.includes('3e,pluriel')) {
			conjugaison='que '+
			verbes['être']['subjonctif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1];}

			}

			else
			console.log('! PAS DE CONJUGAISON !');






		//CHECK I DOUBLE S
		if (conjugaison.match(/ss$/i))
		{	
			console.log(conjugaison+' '+morph)
			//conjugaison = conjugaison.replace(/ss$/,'is');
		}




		//CHECK II CONJUGAISON
		if (conjugaison == '')
			console.log('ERREUR Conjugaison :'+morph+' '+livre+':'+chapitre+':'+verset);

		else
		{
			if (fr.split(' ').length == 1)
			{
				fr = conjugaison;
			}
			else
			{
				//delete first word-verb and add new word-verb at first
				fr = conjugaison+' '+fr.split(' ').slice(1).join(' ');
				
			}
		}




//END VERBE
}



//CHECK III FR
if (fr.includes('undefined'))	{console.log('E1] '+lcvte+' '+fr+' '+lemma+' '+morph)}
if (fr == '')					{console.log('E2] '+lcvte+' '+fr+' '+lemma+' '+morph)}
if (fr == '--')					{console.log('E3] '+lcvte+' '+fr+' '+lemma+' '+morph)}
if (!fr)						{console.log('E4] '+lcvte+' '+fr+' '+lemma+' '+morph)}
if (fr.includes(','))			{console.log('E5] '+lcvte+' '+fr+' '+lemma+' '+morph)}
if (fr.includes('|'))			{console.log('E6] '+lcvte+' '+fr+' '+lemma+' '+morph)}



//MAJ
maj = 0;
if (ellen[0] == ellen[0].toUpperCase())
{
	fr	= fr[0].toUpperCase() + fr.substr(1)
	maj	= 1;

}



//PONC
if ( ellen[ellen.length-1] == '·' ) fr += '·';
if ( ellen[ellen.length-1] == '.' ) fr += '.';
if ( ellen[ellen.length-1] == ',' ) fr += ',';
if ( ellen[ellen.length-1] == ';' ) fr += '?';
if ( ellen[ellen.length-1] == ';' ) fr += '?';





//GENITIF
if (morph.includes('génitif') && !morph.includes('préposition'))
{
	if (ellen != "ἐν" || ellen != "παρά")
	{
		/*
		if (maj==1) fr = 'De '+fr;
		else		fr = 'de '+fr;
		*/
		fr = 'de '+fr;
	}
}


//DATIF
else if (morph.includes('datif') && !morph.includes('préposition'))
{
	/*
	if (maj==1)	fr = 'À '+fr;
	else		fr = 'à '+fr;
	*/
	fr = 'à '+fr;
}




motfr += fr+'#';






//if lemme exist
}


//for mot
}



//END #
motfr = motfr.slice(0,-1);





console.log(livre+':'+chapitre+':'+verset+':'+xbook[livre]+':3:1:2021:SEBASTIEN-D-G '+motfr)









//if line
}
//for line
}