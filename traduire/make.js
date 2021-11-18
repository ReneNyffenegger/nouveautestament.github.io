

require('../database/bible/grec/seb/sebastien_lemme.js');
require('../database/lemme/lemme.js');
require('../database/verbes/verbes.js');


//var fichier
fs		= require('fs');
ffr		= require('fs');


//var array
livre_fr	=[];
chapitre_fr	=[];
verset_fr	=[];

//other var
mot_fr			= '';
nb_no_found		=  1;
vgrec_avant		= '';
vlem_avant		= '';
vmorph_avant	= '';


//index : ex index_nb_name[1] --> MATTHIEU
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
27:'APOCALYPSE' }






// BOUCLE DE TOUT LE ARRAY sebastien_lemme


//LIVRE
for (livre = 1 ; livre != sebastien_lemme.length ; livre++)
{


	chapitre_fr=[];


	//CHAPITRE
	for (chapitre = 1 ; chapitre != sebastien_lemme[livre].length ; chapitre++)
	{

		verset_fr=[];

		//VERSET
		for (verset = 1 ; verset != sebastien_lemme[livre][chapitre].length ; verset++)
		{

			mot_fr		= '';
			lcv 		= livre+' '+chapitre+' '+verset;

			//si verset existe
			if (sebastien_lemme[livre][chapitre][verset] && sebastien_lemme[livre][chapitre][verset] != "")
			{

			//division des mots
			mot_v = sebastien_lemme[livre][chapitre][verset].match(/\S+/g);

			//BOUCLE MOT
			for (nbm = 0 ; nbm != mot_v.length ; nbm++)
			{

				vgrec	= mot_v[nbm].split('=')[0];
				vlem	= mot_v[nbm].split('=')[1];
				vmorph	= mot_v[nbm].split('=')[2];



				MORPH_INFO	= vmorph.replace(/,/g,', ');
				fr			= '--';


				//console.log(mot_v[nbm])

				//CHECK LEMMA EXIST
				if (lemme[vlem])
				{

					fr = lemme[vlem][0];


		
		
		// --- MASCULIN FEMININ PLURIEL ---


		// -->  ,
		if (fr.includes(','))
		{


					fr = fr.split(',');



				// -----> ἑαυτοῦ
				//lui-même, nous-mêmes, vous-mêmes, eux-mêmes, elle-même, nous-mêmes, vous-mêmes, elles-mêmes
				if ( vlem == 'ἑαυτοῦ' )
				{


					if (MORPH_INFO.includes('1e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}


					else if (MORPH_INFO.includes('2e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[2].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('2e') && MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[2].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('2e') && MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[6].replace(/^ | $/,'');
					}


					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('féminin') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[4].replace(/^ | $/,'');
					}


					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[3].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[3].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[7].replace(/^ | $/,'');
					}

					else
							console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);


				}

				// -----> ἐγώ
				else if ( vlem == 'ἐγώ' )
				{

					if (MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}

					else if (MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}

					else
							console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);

				}

				// -----> σύ
				else if ( vlem == 'σύ' )
				{
					if (MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}

					else if (MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}

					else
							console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);

				}


				// -----> ὁ
				//le, la, les, ce, celui, celle, ces, ceux, celles
				else if ( vlem == 'ὁ' )
				{


					if (MORPH_INFO.includes('déterminant'))
					{

						if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[2].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[2].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[1].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[2].replace(/^ | $/,'');
						}

						else
							console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);

					}


					else if (MORPH_INFO.includes('pronom'))
					{

						if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[6].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[4].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[7].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[5].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[8].replace(/^ | $/,'');
						}
						else
							console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);

					}

					else
							console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);

				}




				// -----> αὐτός
				//même, lui-même, elle-même, mêmes, eux-mêmes, elles-mêmes, lui, eux, elle, elles, nous-mêmes, vous-mêmes
				else if ( vlem == 'αὐτός' )
				{

					//même, mêmes
					if (MORPH_INFO.includes('déterminant-démonstratif'))
					{

						if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}

						else
							console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);

					}

					//même, lui-même, elle-même, mêmes, eux-mêmes, elles-mêmes, lui, eux, elle, elles, nous-mêmes, vous-mêmes
					else if (MORPH_INFO.includes('pronom-personnel'))
					{

						//lui eux, elle, elles

						if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[6].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[7].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[6].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[7].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[8].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[9].replace(/^ | $/,'');
						}

						else
							console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);

					}


					//	même,	lui-même,	elle-même,	mêmes,	eux-mêmes,	elles-mêmes,	lui,	eux,	elle,	elles,	moi-même,	toi-même,	nous-mêmes,	vous-mêmes
					//	0		1			2			3		4			5				6		7		8		9		10			11			12			13
					else if (MORPH_INFO.includes('pronom-réfléchi'))
					{

						//neutre singulier : lui-même même
						if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[1].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}

						//neutre pluriel : eux-mêmes
						else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[4].replace(/^ | $/,'');
						}

						//masculin singulier : moi-même toi-même lui-même lui-même
						else if (MORPH_INFO.includes('1e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[10].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('2e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[11].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[1].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[1].replace(/^ | $/,'');
						}

						//masculin pluriel : nous-mêmes vous-mêmes eux-mêmes
						else if (MORPH_INFO.includes('1e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[12].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('2e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[13].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[4].replace(/^ | $/,'');
						}

						//féminin singulier : elle-même elles-mêmes
						else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('féminin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[2].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[5].replace(/^ | $/,'');
						}

						else
							console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);

					}


					else if (MORPH_INFO.includes('pronom-démonstratif'))
					{
						//même mêmes
						if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}

						//même mêmes
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}

						//même mêmes
						else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}

					}


				}
				
				
				
				else if ( vlem == 'διά')
				{
					if (MORPH_INFO.includes('génitif'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('accusatif'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}
					else
						console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);
				}

				
				//de haut en bas, contre, selon
				else if ( vlem == 'κατά')
				{
					
					if (MORPH_INFO.includes('accusatif'))
					{
						fr = fr[2].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('génitif'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('préposition'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else
						console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);
				}
				
				
				//au-delà, avec
				else if ( vlem == 'μετά')
				{
					
					if (MORPH_INFO.includes('accusatif'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('génitif'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}
					else
						console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);
				}
				
				
				else if ( vlem == 'καί')
				{
					if (MORPH_INFO.includes('conjonction'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO == 'adverbe')
					{
						fr = fr[1].replace(/^ | $/,'');
					}
					else
						console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);
				}
				
			
				//voir, voici
				else if ( vlem == 'ὁράω')
				{
					if (MORPH_INFO.includes('interjection'))
					{
						fr = fr[1].replace(/^ | $/,'');
						MORPH_INFO="INDECLINABLE";
					}
					else if (MORPH_INFO.includes('verbe'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else
						console.log('NO MORPH --->'+MORPH_INFO+' '+vlem);
				}
				
				


				else if (!MORPH_INFO.includes('verbe'))
				{
					if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}


					else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}


					else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[2].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[3].replace(/^ | $/,'');
					}


					else
					{
						console.log('FR virgule, ne trouve pas la MORPH -> '+fr+' '+MORPH_INFO+' '+vgrec+' '+vlem+' '+lcv);
					}

				}


				else if (MORPH_INFO.includes('verbe'))
				{
					
					if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[2].replace(/^ | $/,'');
					}
					
					else if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[3].replace(/^ | $/,'');
					}
					
					else if (MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}

					else if (MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}

					else
					{
						fr = fr[0].replace(/^ | $/,'');
					}	
				}
				
				
				
				
		}



				}
				//CHECK ERROR
				else
				{
					console.log('Ne Trouve pas la LEMM : '+vlem+' '+nb_no_found+' '+lcv+':'+fr+' '+vgrec);
					nb_no_found++;
				}





// -- VERBE --
if (MORPH_INFO.split(',')[0] == 'verbe' || MORPH_INFO.includes('interjection, impératif'))
{


	//INIT
	conjugaison	= '--';
	frconj=fr.split(' ')[0];
	
	//console.log(MORPH_INFO+' : '+vlem+' '+index_nb_name[livre]+' '+chapitre+' '+verset+' : '+fr+' '+vgrec+' '+conjugaison);
	


		// ------------- //


		//INFINITIF PRESENT
		if (MORPH_INFO.includes('infinitif, présent, actif'))
		{
			conjugaison=verbes[frconj]['infinitif']['présent'][0];
		}

		else if (MORPH_INFO.includes('infinitif, présent, moyen'))
		{
			conjugaison='se '+verbes[frconj]['infinitif']['présent'][0];
		}

		else if (MORPH_INFO.includes('infinitif, présent, passif'))
		{
			conjugaison=verbes['être']['infinitif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];
		}




		// ------------- //




		//INFINITIF PARFAIT
		else if (MORPH_INFO.includes('infinitif, parfait, actif'))
		{
			conjugaison='avoir '+verbes[frconj]['infinitif']['passé'][0];
		}

		else if (MORPH_INFO.includes('infinitif, parfait, moyen'))
		{
			conjugaison='se avoir '+verbes[frconj]['infinitif']['passé'][0];
		}

		else if (MORPH_INFO.includes('infinitif, parfait, passif'))
		{
			conjugaison='avoir été '+verbes[frconj]['participe']['passé'][1];
		}





		// ------------- //







		//INFINITIF AORISTE
		else if (MORPH_INFO.includes('infinitif, aoriste, actif'))
		{
			conjugaison=verbes[frconj]['infinitif']['présent'][0];
		}

		else if (MORPH_INFO.includes('infinitif, aoriste, moyen'))
		{
			conjugaison='se '+verbes[frconj]['infinitif']['présent'][0];
		}

		else if (MORPH_INFO.includes('infinitif, aoriste, passif'))
		{
			conjugaison=verbes['être']['infinitif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];
		}




		// ------------- //






		//INFINITIF FUTUR
		else if (MORPH_INFO.includes('infinitif, futur, actif'))
		{
			conjugaison='avoir à '+verbes[frconj]['infinitif']['présent'][0];
		}

		else if (MORPH_INFO.includes('infinitif, futur, moyen'))
		{
			conjugaison='se avoir à '+verbes[frconj]['infinitif']['présent'][0];
		}





		// ------------- //





		//PARTICIPE PRESENT
		else if (MORPH_INFO.includes('participe, présent, actif'))
		{

					conjugaison=verbes[frconj]['participe']['présent'][0];

					if (MORPH_INFO.includes('féminin'))
					conjugaison = conjugaison + 'e';

					if (MORPH_INFO.includes('pluriel'))
					conjugaison = conjugaison + 's';


		}

		else if (MORPH_INFO.includes('participe, présent, moyen'))
		{

					conjugaison=verbes[frconj]['participe']['présent'][0];

					if (MORPH_INFO.includes('féminin'))
					conjugaison = conjugaison + 'e';

					if (MORPH_INFO.includes('pluriel'))
					conjugaison = conjugaison + 's';
				
					conjugaison = 'se '+conjugaison;


		}

		else if (MORPH_INFO.includes('participe, présent, passif'))
		{


					v1 = verbes['être']['participe']['présent'][0];
					v2 = verbes[frconj]['participe']['passé'][1];

					if (MORPH_INFO.includes('féminin'))
					{
					v1 = v1 + 'e';
					v2 = v2 + 'e';
					}

					if (MORPH_INFO.includes('pluriel'))
					{
					v1 = v1 + 's';
					v2 = v2 + 's';
					}

					conjugaison = v1 + ' ' + v2;

		}








		// ------------- //








		//PARTICIPE PARFAIT
		else if (MORPH_INFO.includes('participe, parfait, actif'))
		{
					
				if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayantes '+verbes[frconj]['participe']['passé'][0]+ 's';
					
				else if (MORPH_INFO.includes('féminin'))
					conjugaison='ayante '+verbes[frconj]['participe']['passé'][0];

				else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants '+verbes[frconj]['participe']['passé'][1]+ 's';
					
				else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants '+verbes[frconj]['participe']['passé'][1]+ 's';

				else
					conjugaison='ayant '+verbes[frconj]['participe']['passé'][1];

					
		}

		else if (MORPH_INFO.includes('participe, parfait, moyen'))
		{

				if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayantes '+verbes[frconj]['participe']['passé'][0]+ 's';
					
				else if (MORPH_INFO.includes('féminin'))
					conjugaison='ayante '+verbes[frconj]['participe']['passé'][0];

				else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants '+verbes[frconj]['participe']['passé'][1]+ 's';
					
				else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants '+verbes[frconj]['participe']['passé'][1]+ 's';

				else
					conjugaison='ayant '+verbes[frconj]['participe']['passé'][1];


				conjugaison = 'se '+conjugaison;
				

		}

		else if (MORPH_INFO.includes('participe, parfait, passif'))
		{
				if (MORPH_INFO.includes('féminin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayantes étées '+verbes[frconj]['participe']['passé'][0]+ 's';
					
				else if (MORPH_INFO.includes('féminin'))
					conjugaison='ayante étée '+verbes[frconj]['participe']['passé'][0];

				else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants étés '+verbes[frconj]['participe']['passé'][1]+ 's';
					
				else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants étés '+verbes[frconj]['participe']['passé'][1]+ 's';

				else
					conjugaison='ayant été '+verbes[frconj]['participe']['passé'][1];
		}




		// ------------- //





		//PARTICIPE FUTUR
		else if (MORPH_INFO.includes('participe, futur, actif'))
		{

				if (MORPH_INFO.includes('singulier'))
				{
					conjugaison='qui '+verbes[frconj]['indicatif']['futur simple'][2];
				}
					
					
				if (MORPH_INFO.includes('pluriel'))
				{
					conjugaison='qui '+verbes[frconj]['indicatif']['futur simple'][5];
				}
		

		}
	


		else if (MORPH_INFO.includes('participe, futur, moyen'))
		{

				if (MORPH_INFO.includes('singulier'))
				{
					conjugaison='qui se '+verbes[frconj]['indicatif']['futur simple'][2];
				}
					
					
				if (MORPH_INFO.includes('pluriel'))
				{
					conjugaison='qui se '+verbes[frconj]['indicatif']['futur simple'][5];
				}
				
				

		}

		else if (MORPH_INFO.includes('participe, futur, passif'))
		{

			if (MORPH_INFO.includes('singulier'))
			{
				conjugaison='qui sera '+verbes[frconj]['participe']['passé'][1];
			}
					
					
			if (MORPH_INFO.includes('pluriel'))
			{
				conjugaison='qui seront '+verbes[frconj]['participe']['passé'][1];
			}

			if (MORPH_INFO.includes('féminin'))
			{
				conjugaison = conjugaison + 'e';
			}

			if (MORPH_INFO.includes('pluriel'))
			{
				conjugaison = conjugaison + 's';
			}


		}



		// ------------- //





		//PARTICIPE aoriste FEMININ passif && actif
		else if (MORPH_INFO.includes('participe, aoriste, actif'))
		{

					v1 = verbes['avoir']['participe']['présent'][0];
					v2 = verbes[frconj]['participe']['passé'][1];

					if (MORPH_INFO.includes('féminin'))
					{
					v1 = v1 + 'e';
					v2 = v2 + 'e';
					}

					if (MORPH_INFO.includes('pluriel'))
					{
					v1 = v1 + 's';
					v2 = v2 + 's';
					}

					conjugaison = v1 + ' ' + v2;

		}

		else if (MORPH_INFO.includes('participe, aoriste, moyen'))
		{

					v1 = 'se '+verbes['avoir']['participe']['présent'][0];
					v2 = verbes[frconj]['participe']['passé'][1];

					if (MORPH_INFO.includes('féminin'))
					{
					v1 = v1 + 'e';
					v2 = v2 + 'e';
					}

					if (MORPH_INFO.includes('pluriel'))
					{
					v1 = v1 + 's';
					v2 = v2 + 's';
					}

					conjugaison = v1 + ' ' + v2;
					
					

		}

		else if (MORPH_INFO.includes('participe, aoriste, passif'))
		{


					v1 = verbes['avoir']['participe']['présent'][0];
					v2 = verbes['être']['participe']['passé'][1];
					v3 = verbes[frconj]['participe']['passé'][1];

					if (MORPH_INFO.includes('féminin'))
					{
					v1 = v1 + 'e';
					v2 = v2 + 'e';
					v3 = v3 + 'e';
					}

					if (MORPH_INFO.includes('pluriel'))
					{
					v1 = v1 + 's';
					v2 = v2 + 's';
					v3 = v3 + 's';
					}

					conjugaison = v1 + ' ' + v2 + ' ' + v3;

		}




		// ------------- //






		//INDICATIF PRESENT
		else if (MORPH_INFO.includes('indicatif, présent, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
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

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+verbes[frconj]['indicatif']['présent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=verbes[frconj]['indicatif']['présent'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+verbes[frconj]['indicatif']['présent'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+verbes[frconj]['indicatif']['présent'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=verbes[frconj]['indicatif']['présent'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, présent, moyen'))
		{


					if (MORPH_INFO.includes('1e, singulier')) 
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

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu te '+verbes[frconj]['indicatif']['présent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison='se '+verbes[frconj]['indicatif']['présent'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous nous '+verbes[frconj]['indicatif']['présent'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous vous '+verbes[frconj]['indicatif']['présent'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison='se '+verbes[frconj]['indicatif']['présent'][5]; }
					

		}

		else if (MORPH_INFO.includes('indicatif, présent, passif'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
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

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes['être']['indicatif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes['être']['indicatif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes['être']['indicatif']['présent'][3]+' '+verbes[frconj]['participe']['passé'][1]+'s';}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes['être']['indicatif']['présent'][4]+' '+verbes[frconj]['participe']['passé'][1]+'s';}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes['être']['indicatif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1]+'s';}

		}







		// ------------- //





		//INDICATIF PARFAIT
		else if (MORPH_INFO.includes('indicatif, parfait, actif'))
		{

					if (MORPH_INFO.includes('1e, singulier')) {
						conjugaison="j'ai "+verbes[frconj]['indicatif']['passé composé'][0];
					}

					else if (MORPH_INFO.includes('2e, singulier')) {
						conjugaison='tu as '+verbes[frconj]['indicatif']['passé composé'][1];
					}

					else if (MORPH_INFO.includes('3e, singulier')) {
						conjugaison='a '+verbes[frconj]['indicatif']['passé composé'][2];
					}

					else if (MORPH_INFO.includes('1e, pluriel')) {
						conjugaison='nous avons '+verbes[frconj]['indicatif']['passé composé'][3];
					}

					else if (MORPH_INFO.includes('2e, pluriel')) {
						conjugaison='vous avez '+verbes[frconj]['indicatif']['passé composé'][4];
					}

					else if (MORPH_INFO.includes('3e, pluriel')) {
						conjugaison='ont '+verbes[frconj]['indicatif']['passé composé'][5];
					}
					
					
					

		}
		
		

		else if (MORPH_INFO.includes('indicatif, parfait, moyen'))
		{

					if (MORPH_INFO.includes('1e, singulier')) {
						conjugaison="je m'ai "+verbes[frconj]['indicatif']['passé composé'][0];
					}

					else if (MORPH_INFO.includes('2e, singulier')) {
						conjugaison='tu t\'as '+verbes[frconj]['indicatif']['passé composé'][1];
					}

					else if (MORPH_INFO.includes('3e, singulier')) {
						conjugaison='s\'a '+verbes[frconj]['indicatif']['passé composé'][2];
					}

					else if (MORPH_INFO.includes('1e, pluriel')) {
						conjugaison='nous nous avons '+verbes[frconj]['indicatif']['passé composé'][3];
					}

					else if (MORPH_INFO.includes('2e, pluriel')) {
						conjugaison='vous vous avez '+verbes[frconj]['indicatif']['passé composé'][4];
					}

					else if (MORPH_INFO.includes('3e, pluriel')) {
						conjugaison='s\'ont '+verbes[frconj]['indicatif']['passé composé'][5];
					}

		}

		else if (MORPH_INFO.includes('indicatif, parfait, passif'))
		{



					if (MORPH_INFO.includes('1e, singulier')) {
						conjugaison="j'ai été "+verbes[frconj]['indicatif']['passé composé'][0];
					}

					else if (MORPH_INFO.includes('2e, singulier')) {
						conjugaison='tu as été '+verbes[frconj]['indicatif']['passé composé'][1];
					}

					else if (MORPH_INFO.includes('3e, singulier')) {
						conjugaison='a été '+verbes[frconj]['indicatif']['passé composé'][2];
					}

					else if (MORPH_INFO.includes('1e, pluriel')) {
						conjugaison='nous avons été '+verbes[frconj]['indicatif']['passé composé'][3]+'s';
					}

					else if (MORPH_INFO.includes('2e, pluriel')) {
						conjugaison='vous avez été '+verbes[frconj]['indicatif']['passé composé'][4]+'s';
					}

					else if (MORPH_INFO.includes('3e, pluriel')) {
						conjugaison='ont été '+verbes[frconj]['indicatif']['passé composé'][5]+'s';
					}
					
					
					
					

		}




		// ------------- //





		//INDICATIF IMPARFAIT
		else if (MORPH_INFO.includes('indicatif, imparfait, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
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

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes[frconj]['indicatif']['imparfait'][1]; }

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes[frconj]['indicatif']['imparfait'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes[frconj]['indicatif']['imparfait'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes[frconj]['indicatif']['imparfait'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes[frconj]['indicatif']['imparfait'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, imparfait, moyen'))
		{

					if (MORPH_INFO.includes('1e, singulier')) {
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

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu te '+
					verbes[frconj]['indicatif']['imparfait'][1]; 
					}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison='se '+
					verbes[frconj]['indicatif']['imparfait'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous nous '+
					verbes[frconj]['indicatif']['imparfait'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous vous '+
					verbes[frconj]['indicatif']['imparfait'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison='se '+
					verbes[frconj]['indicatif']['imparfait'][5]; }
					
		}

		else if (MORPH_INFO.includes('indicatif, imparfait, passif'))
		{

					if (MORPH_INFO.includes('1e, singulier')) {
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

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes['être']['indicatif']['imparfait'][1]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes['être']['indicatif']['imparfait'][2]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes['être']['indicatif']['imparfait'][3]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes['être']['indicatif']['imparfait'][4]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes['être']['indicatif']['imparfait'][5]+' '+verbes[frconj]['participe']['passé'][1];}

		}





		// ------------- //





		//INDICATIF PLUS QUE PARFAIT
		else if (MORPH_INFO.includes('indicatif, plus-que-parfait, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison='j\''+
					verbes['avoir']['indicatif']['imparfait'][0]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][0]; }

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison='tu '+
					verbes['avoir']['indicatif']['imparfait'][1]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison=
					verbes['avoir']['indicatif']['imparfait'][2]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison='nous '+
					verbes['avoir']['indicatif']['imparfait'][3]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='vous '+
					verbes['avoir']['indicatif']['imparfait'][4]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison=
					verbes['avoir']['indicatif']['imparfait'][5]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, plus-que-parfait, moyen'))
		{

					if (MORPH_INFO.includes('1e, singulier'))	{
					conjugaison='je m\''+
					verbes['avoir']['indicatif']['imparfait'][0]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][0]; }

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison='tu te '+
					verbes['avoir']['indicatif']['imparfait'][1]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison='s\''+
					verbes['avoir']['indicatif']['imparfait'][2]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison='nous nous '+
					verbes['avoir']['indicatif']['imparfait'][3]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='vous vous '+
					verbes['avoir']['indicatif']['imparfait'][4]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='s\''+
					verbes['avoir']['indicatif']['imparfait'][5]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][5]; }
					

		}

		else if (MORPH_INFO.includes('indicatif, plus-que-parfait, passif'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison='j\''+
					verbes['avoir']['indicatif']['imparfait'][0]+' '+
					verbes['être']['indicatif']['plus-que-parfait'][0]+' '+
					verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes['avoir']['indicatif']['imparfait'][1]+' '+
					verbes['être']['indicatif']['plus-que-parfait'][1]+' '+
					verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes['avoir']['indicatif']['imparfait'][2]+' '+
					verbes['être']['indicatif']['plus-que-parfait'][2]+' '+
					verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes['avoir']['indicatif']['imparfait'][3]+' '+
					verbes['être']['indicatif']['plus-que-parfait'][3]+' '+
					verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes['avoir']['indicatif']['imparfait'][4]+' '+
					verbes['être']['indicatif']['plus-que-parfait'][4]+' '+
					verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes['avoir']['indicatif']['imparfait'][5]+' '+
					verbes['être']['indicatif']['plus-que-parfait'][5]+' '+
					verbes[frconj]['participe']['passé'][1];}


		}





		// ------------- //







		//INDICATIF FUTUR
		else if (MORPH_INFO.includes('indicatif, futur, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
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

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison='tu '+
					verbes[frconj]['indicatif']['futur simple'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison=
					verbes[frconj]['indicatif']['futur simple'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) 	{
					conjugaison='nous '+
					verbes[frconj]['indicatif']['futur simple'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='vous '+
					verbes[frconj]['indicatif']['futur simple'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison=
					verbes[frconj]['indicatif']['futur simple'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, futur, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
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

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison='tu te '+
					verbes[frconj]['indicatif']['futur simple'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison='se '+
					verbes[frconj]['indicatif']['futur simple'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) 	{
					conjugaison='nous nous '+
					verbes[frconj]['indicatif']['futur simple'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='vous vous '+
					verbes[frconj]['indicatif']['futur simple'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='se '+
					verbes[frconj]['indicatif']['futur simple'][5]; }
					

		}

		else if (MORPH_INFO.includes('indicatif, futur, passif'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
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

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes['être']['indicatif']['futur simple'][1]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes['être']['indicatif']['futur simple'][2]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes['être']['indicatif']['futur simple'][3]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes['être']['indicatif']['futur simple'][4]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes['être']['indicatif']['futur simple'][5]+' '+verbes[frconj]['participe']['passé'][1];}

		}




		// ------------- //





		//INDICATIF aoriste : passé composé ou passé simple
		else if (MORPH_INFO.includes('indicatif, aoriste, actif'))
		{

					if (MORPH_INFO.includes('1') && MORPH_INFO.includes('singulier')) {
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

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('singulier')) {
					conjugaison='tu '+
					verbes[frconj]['indicatif']['passé simple'][1]; }

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('singulier')) {
					conjugaison=
					verbes[frconj]['indicatif']['passé simple'][2]; }

					else if (MORPH_INFO.includes('1') && MORPH_INFO.includes('pluriel')) {
					conjugaison='nous '+
					verbes[frconj]['indicatif']['passé simple'][3]; }

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('pluriel')) {
					conjugaison='vous '+
					verbes[frconj]['indicatif']['passé simple'][4]; }

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('pluriel')) {
					conjugaison=
					verbes[frconj]['indicatif']['passé simple'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, aoriste, moyen'))
		{

					if (MORPH_INFO.includes('1') && MORPH_INFO.includes('singulier')) {
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

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('singulier')) {
					conjugaison='tu te '+
					verbes[frconj]['indicatif']['passé simple'][1]; }

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('singulier')) {
					conjugaison="se "+
					verbes[frconj]['indicatif']['passé simple'][2]; }

					else if (MORPH_INFO.includes('1') && MORPH_INFO.includes('pluriel')) {
					conjugaison='nous nous '+
					verbes[frconj]['indicatif']['passé simple'][3]; }

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('pluriel')) {
					conjugaison='vous vous '+
					verbes[frconj]['indicatif']['passé simple'][4]; }

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('pluriel')) {
					conjugaison="se "+
					verbes[frconj]['indicatif']['passé simple'][5]; }




		}

		else if (MORPH_INFO.includes('indicatif, aoriste, passif'))
		{

					if		(MORPH_INFO.includes('1') && MORPH_INFO.includes('singulier')) {
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

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('singulier')) {
					conjugaison='tu '+
					verbes['être']['indicatif']['passé simple'][1]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('singulier')) {
					conjugaison=
					verbes['être']['indicatif']['passé simple'][2]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1') && MORPH_INFO.includes('pluriel')) {
					conjugaison='nous '+
					verbes['être']['indicatif']['passé simple'][3]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('pluriel')) {
					conjugaison='vous '+
					verbes['être']['indicatif']['passé simple'][4]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('pluriel')) {
					conjugaison=
					verbes['être']['indicatif']['passé simple'][5]+' '+verbes[frconj]['participe']['passé'][1];}

		}




		// ------------- //




		//IMPERATIF PRESENT
		else if (MORPH_INFO.includes('impératif, présent, actif'))
		{

					//if 		(MORPH_INFO.includes('1e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][0]; }
						 if (MORPH_INFO.includes('2e, singulier')) { conjugaison=verbes[frconj]['impératif']['présent'][0]; }
					else if (MORPH_INFO.includes('3e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][2]; }
					else if (MORPH_INFO.includes('1e, pluriel')) { conjugaison=verbes[frconj]['impératif']['présent'][1]; }
					else if (MORPH_INFO.includes('2e, pluriel')) { conjugaison=verbes[frconj]['impératif']['présent'][2]; }
					else if (MORPH_INFO.includes('3e, pluriel')) { conjugaison=verbes[frconj]['subjonctif']['présent'][5]; }





		}

		else if (MORPH_INFO.includes('impératif, présent, moyen'))
		{

					//if 		(MORPH_INFO.includes('1e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][0]; }
						 if (MORPH_INFO.includes('2e, singulier')) { conjugaison='te '+verbes[frconj]['impératif']['présent'][0]; }
					else if (MORPH_INFO.includes('3e, singulier')) { conjugaison='se '+verbes[frconj]['subjonctif']['présent'][2]; }
					else if (MORPH_INFO.includes('1e, pluriel')) { conjugaison='que nous nous '+verbes[frconj]['impératif']['présent'][1]; }
					else if (MORPH_INFO.includes('2e, pluriel')) { conjugaison='que vous vous '+verbes[frconj]['impératif']['présent'][2]; }
					else if (MORPH_INFO.includes('3e, pluriel')) { conjugaison='se '+verbes[frconj]['subjonctif']['présent'][5]; }

		}

		else if (MORPH_INFO.includes('impératif, présent, passif'))
		{

					//if 		(MORPH_INFO.includes('1e, singulier')) {
					//conjugaison=verbes['être']['impératif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];}

					if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison=verbes['être']['impératif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=verbes['être']['subjonctif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison=verbes['être']['impératif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1]+'s';}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison=verbes['être']['impératif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1]+'s';}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=verbes['être']['subjonctif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1]+'s';}




		}




		// ------------- //





		//IMPERATIF PARFAIT
		else if (MORPH_INFO.includes('impératif, parfait, actif'))
		{

					//if 		(MORPH_INFO.includes('2e, singulier')) { conjugaison=verbes[frconj]['impératif']['présent'][0]; }
					//else if (MORPH_INFO.includes('2e, pluriel')) { conjugaison=verbes[frconj]['impératif']['présent'][2]; }
					
					
					if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison=verbes['avoir']['impératif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison=verbes['avoir']['impératif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1]+'s';}
					
					
					

		}

		else if (MORPH_INFO.includes('impératif, parfait, passif'))
		{

					if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison=verbes['avoir']['impératif']['présent'][0]+' été '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison=verbes['avoir']['impératif']['présent'][2]+' été '+verbes[frconj]['participe']['passé'][1]+'s';}

		}




	// ------------- //







		//IMPERATIF aoriste
		else if (MORPH_INFO.includes('impératif, aoriste, actif'))
		{
					//if 		(MORPH_INFO.includes('1e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][0]; }
						 if (MORPH_INFO.includes('2e, singulier')) { conjugaison=verbes[frconj]['impératif']['présent'][0]; }
					else if (MORPH_INFO.includes('3e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][2]; }
					else if (MORPH_INFO.includes('1e, pluriel')) { conjugaison=verbes[frconj]['impératif']['présent'][1]; }
					else if (MORPH_INFO.includes('2e, pluriel')) { conjugaison=verbes[frconj]['impératif']['présent'][2]; }
					else if (MORPH_INFO.includes('3e, pluriel')) { conjugaison=verbes[frconj]['subjonctif']['présent'][5]; }

		}

		else if (MORPH_INFO.includes('impératif, aoriste, moyen'))
		{
					//if 		(MORPH_INFO.includes('1e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['présent'][0]; }
						 if (MORPH_INFO.includes('2e, singulier')) { conjugaison='te '+verbes[frconj]['impératif']['présent'][0]; }
					else if (MORPH_INFO.includes('3e, singulier')) { conjugaison='se '+verbes[frconj]['subjonctif']['présent'][2]; }
					else if (MORPH_INFO.includes('1e, pluriel')) { conjugaison='que nous nous '+verbes[frconj]['impératif']['présent'][1]; }
					else if (MORPH_INFO.includes('2e, pluriel')) { conjugaison='que vous vous '+verbes[frconj]['impératif']['présent'][2]; }
					else if (MORPH_INFO.includes('3e, pluriel')) { conjugaison='se '+verbes[frconj]['subjonctif']['présent'][5]; }
					

		}

		else if (MORPH_INFO.includes('impératif, aoriste, passif'))
		{


					//if 		(MORPH_INFO.includes('1e, singulier')) {
					//conjugaison=verbes['être']['impératif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];}

					if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison=verbes['être']['impératif']['présent'][0]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=verbes['être']['subjonctif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison=verbes['être']['impératif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1]+'s';}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison=verbes['être']['impératif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1]+'s';}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=verbes['être']['subjonctif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1]+'s';}



		}





		// ------------- //






		//SUBJONCTIF PRESENT
		else if (MORPH_INFO.includes('subjonctif, présent, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
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

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['présent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['présent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['présent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['présent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['présent'][5]; }


		}

		else if (MORPH_INFO.includes('subjonctif, présent, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
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


					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu te '+
					verbes[frconj]['subjonctif']['présent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que se '+
					verbes[frconj]['subjonctif']['présent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous nous '+
					verbes[frconj]['subjonctif']['présent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous vous '+
					verbes[frconj]['subjonctif']['présent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que se '+
					verbes[frconj]['subjonctif']['présent'][5]; }
					
					
					
					

		}

		else if (MORPH_INFO.includes('subjonctif, présent, passif'))
		{


					if 		(MORPH_INFO.includes('1e, singulier')) {
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

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='que tu '+
					verbes['être']['subjonctif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison='que '+
					verbes['être']['subjonctif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='que nous '+
					verbes['être']['subjonctif']['présent'][3]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='que vous '+
					verbes['être']['subjonctif']['présent'][4]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison='que '+
					verbes['être']['subjonctif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1];}

		}





		// ------------- //





		//SUBJONCTIF PARFAIT
		else if (MORPH_INFO.includes('subjonctif, parfait, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison="que j'ai "+verbes[frconj]['participe']['passé'][1];}


					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu aies '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous ayons '+verbes[frconj]['participe']['passé'][1];}


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous ayez '+verbes[frconj]['participe']['passé'][1];}



		}





		// ------------- //





		//SUBJONCTIF AORISTE
		else if (MORPH_INFO.includes('subjonctif, aoriste, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
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

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['présent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['présent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['présent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['présent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['présent'][5]; }

		}

		else if (MORPH_INFO.includes('subjonctif, aoriste, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
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

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu te '+
					verbes[frconj]['subjonctif']['présent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que se '+
					verbes[frconj]['subjonctif']['présent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous nous '+
					verbes[frconj]['subjonctif']['présent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous vous '+
					verbes[frconj]['subjonctif']['présent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que se '+
					verbes[frconj]['subjonctif']['présent'][5]; }

		}

		else if (MORPH_INFO.includes('subjonctif, aoriste, passif'))
		{

					if 		(MORPH_INFO.includes('1e, singulier')) {
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

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='que tu '+
					verbes['être']['subjonctif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison='que '+
					verbes['être']['subjonctif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='que nous '+
					verbes['être']['subjonctif']['présent'][3]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='que vous '+
					verbes['être']['subjonctif']['présent'][4]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison='que '+
					verbes['être']['subjonctif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1];}

		}







		// ------------- //





		//OPTATIF PRESENT
		else if (MORPH_INFO.includes('optatif, présent, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
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

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['présent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['présent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['présent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['présent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['présent'][5]; }

		}

		else if (MORPH_INFO.includes('optatif, présent, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
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

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu te '+
					verbes[frconj]['subjonctif']['présent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que se '+
					verbes[frconj]['subjonctif']['présent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous nous '+
					verbes[frconj]['subjonctif']['présent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous vous '+
					verbes[frconj]['subjonctif']['présent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que se '+
					verbes[frconj]['subjonctif']['présent'][5]; }
					
					
					


		}





		// ------------- //





		//OPTATIF AORISTE
		else if (MORPH_INFO.includes('optatif, aoriste, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
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

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['présent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['présent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['présent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['présent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['présent'][5]; }


		}

		else if (MORPH_INFO.includes('optatif, aoriste, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
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

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu te '+
					verbes[frconj]['subjonctif']['présent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que se '+
					verbes[frconj]['subjonctif']['présent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous nous '+
					verbes[frconj]['subjonctif']['présent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous vous '+
					verbes[frconj]['subjonctif']['présent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que se '+
					verbes[frconj]['subjonctif']['présent'][5]; }
					
					
					

		}

		else if (MORPH_INFO.includes('optatif, aoriste, passif'))
		{


					if 		(MORPH_INFO.includes('1e, singulier')) {
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

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='que tu '+
					verbes['être']['subjonctif']['présent'][1]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison='que '+
					verbes['être']['subjonctif']['présent'][2]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='que nous '+
					verbes['être']['subjonctif']['présent'][3]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='que vous '+
					verbes['être']['subjonctif']['présent'][4]+' '+verbes[frconj]['participe']['passé'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison='que '+
					verbes['être']['subjonctif']['présent'][5]+' '+verbes[frconj]['participe']['passé'][1];}

		}
		
		else
			console.log('! PAS DE CONJUGAISON !');




if (conjugaison.match(/iss$/i))
{
	conjugaison = conjugaison.replace(/iss$/,'is');
}
// CHECK DOUBLE SS if (conjugaison.match(/ss$/i)) console.log(lcv+' '+conjugaison);



//adaptation fr --->>> CONJUGAISON
if (conjugaison != '--')
{
if (fr.split(' ').length == 1)
	{
		fr=conjugaison;
	}
else
	{
		//delete first word
		fr=fr.split(' ').slice(1).join(' ');
		//add new word
		fr=conjugaison+' '+fr;
	}
}

//CHECK CONJUGAISON
else if (conjugaison == '--')
	console.log('ERREUR Conjugaison :'+MORPH_INFO+' '+livre+':'+chapitre+':'+verset+':'+fr+' '+vgrec+' '+vlem);

}



		//CHECK FR
		if (fr.includes('undefined'))	{console.log('E1] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}
		if (fr == '')					{console.log('E2] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}
		if (fr == '--')					{console.log('E3] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}
		if (!fr)						{console.log('E4] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}
		if (fr.includes(','))			{console.log('E5] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}
		if (fr.includes('|'))			{console.log('E6] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}


//MAJ

point_avant = 0;
if (vgrec_avant.includes('·') || vgrec_avant.includes('.'))
{

	if (MORPH_INFO.includes('datif') && !MORPH_INFO.includes('préposition'))
	{
		//if (vgrec[0] == vgrec[0].toUpperCase()) console.log(vgrec_avant+' '+vgrec)
	}

}


maj = 0;
if (vgrec[0] == vgrec[0].toUpperCase())
{
	firstmaj	= fr[0].toUpperCase();
	fr		= fr.substr(1);
	fr		= firstmaj+fr;
	maj		= 1;
}




//PONC
if (vgrec.match(/\·$/)) fr = fr+'·';
if (vgrec.match(/\.$/)) fr = fr+'.';
if (vgrec.match(/,$/)) fr = fr+',';
if (vgrec.match(/;$/)) fr = fr+'?';
if (vgrec.match(/;$/)) fr = fr+'?';


//add genitif
if (MORPH_INFO.includes('génitif') && !MORPH_INFO.includes('préposition'))
{
	if (vlem != "ἐν" || vlem != "παρά")
	{
		//if (maj==1) fr = 'De '+fr;
		//else
		fr = 'de '+fr;
	}

}


//add datif
else if (MORPH_INFO.includes('datif') && !MORPH_INFO.includes('préposition'))
{

	//if (maj==1) fr = 'À '+fr;

	//else
	fr = 'à '+fr;
}


mot_fr += fr+'#';







vgrec_avant = vgrec;
vlem_avant = vlem;
vmorph_avant = vmorph;





			} // for mot
			} //si verset existe


			mot_fr = mot_fr.replace(/#+$/,'');
			verset_fr[verset] = mot_fr;
			verset_fr[0] = livre+':'+chapitre+':'+verset;




		} //for verset


		chapitre_fr[chapitre] = verset_fr;

	} //for chapitre




	//livre fr
	livre_fr[livre] = chapitre_fr;
	nbchapfr = livre_fr[livre].length-1;
	livre_fr[livre][0] = livre+'-'+index_nb_name[livre]+' - '+nbchapfr+' chapitres';


} //for livre

//livre fr
nblivrefr = livre_fr.length-1;
livre_fr[0] = 'BIBLE SEBASTIEN BRUT - '+nblivrefr+' livres';
fs.writeFileSync('../database/bible/francais/sebastien/sebastien_brut.js','sebastien_brut='+JSON.stringify(livre_fr, null, 1), 'utf8');
