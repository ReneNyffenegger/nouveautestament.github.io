


book = {
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
13:'1 TESSALONICIENS',
14:'2 TESSALONICIENS',
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


function filtre(mo)
{
	mo=mo.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	mo=mo.toLowerCase();
	mo=mo.replace(/¶|⋄|\?|!|\(|\)|–|:|;|,|\.|\·|“|”|‘|’|᾽|ʼ|\*|\[|\]|…|\|/gi,'');

	return mo;
}





fs		= require('fs');
/*
na28-sma		= require('../na28/na28-sma.json');
na28_n			= 'NA28';

sebastien_grec	= require('../ntgr/sebastien_grec.json');
seb_n			= 'SEB';
*/

require('../../database/bible/grec/na28/na28.js'); //na28
na28_n	= 'NA28';
na28_sma = na28;


require('../../database/bible/grec/seb/sebastien_lemme.js'); //sebastien_grec
seb_n	= 'SEB';
sebastien_grec = sebastien_lemme;

json_m	= {}
json_v	= {}
json_c	= {}
json_l	= {}



diff_maj	= 0;
diff_min	= 0;
diff_t		= 0;
diff_mot_v	= 0;
tableau		= '';

quegrec = 1;


array_anth	= []
array_anth_t	= []

//livre
for (livre = 1 ; livre != 28 ; livre++)
{


console.log(biblos[livre])


maxchapitres	= Math.max(
				sebastien_grec[livre].length,
				na28_sma[livre].length)

	//chapitre
	for (chapitre = 1 ; chapitre != maxchapitres; chapitre++)
	{




		maxversets	= Math.max(
						sebastien_grec[livre][chapitre].length,
						na28_sma[livre][chapitre].length)

		//verset
		for (verset = 1 ; verset != maxversets; verset++)
		{

			lcv=livre+':'+chapitre+':'+verset;
			cv=chapitre+':'+verset;

			tdnb		= '<tr><td>CH</td><td></td>';
			tdna28		= '<tr><td nowrap>'+na28_n+'</td><td></td>';
			tdseb		= '<tr><td nowrap>'+seb_n+'</td><td></td>';

			tdna28s		= '<tr><td nowrap>'+na28_n+'</td><td></td>';
			tdsebs		= '<tr><td nowrap>'+seb_n+'</td><td></td>';

			tdna28m		= '<tr><td nowrap>'+na28_n+'</td><td></td>';
			tdsebm		= '<tr><td nowrap>'+seb_n+'</td><td></td>';

			diff		= 0;
			egal		= 0;
			mosebgr		= 0;
			diffcroch_v	= 0;


			na28_array 		= []
			na28_array_s	= []
			na28_array_m	= []



			//ARRAY NA28
			verset_na28 = na28_sma[livre][chapitre][verset].split(' ');

   if (verset_na28 != "" && verset_na28)
	 {

	 	if (quegrec != 1)
	 	{
			for (mot = 0 ; mot != verset_na28.length ; mot++)
			{
				gsm = verset_na28[mot].split('=');


				na28_array.push(gsm[0])
				na28_array_s.push(gsm[1])


				sgsm = gsm[2].split(',');
				newmorph = '';
				for (nbnas = 0 ; nbnas != sgsm.length ; nbnas++)
				{
					if (!sgsm[nbnas][1]) { console.log(sgsm[nbnas]) }
					newmorph += sgsm[nbnas][0]+sgsm[nbnas][1]
				}

				na28_array_m.push(newmorph)

			}
		}
		else if (quegrec == 1)
		{
			na28_array = verset_na28;

		}


   }




			//ARRAY SEB
			seb_array 	= []
			seb_array_s	= []
			seb_array_m	= []

			verset_sebastien = sebastien_grec[livre][chapitre][verset].split(' ');

   if (verset_sebastien != "" && verset_sebastien)
	 {	for (mot = 0 ; mot != verset_sebastien.length ; mot++)
			{

				gsm = verset_sebastien[mot].split('=');
				seb_array.push(gsm[0])
				seb_array_s.push(gsm[1])

				if (quegrec != 1)
				{
				sgsm = gsm[2].split(',');
				newmorph = '';
				for (nbnas = 0 ; nbnas != sgsm.length ; nbnas++)
				{
					if (!sgsm[nbnas][1]) { console.log(sgsm[nbnas]) }
					newmorph += sgsm[nbnas][0]+sgsm[nbnas][1]
				}

				seb_array_m.push(newmorph)
				}
			}
  }

			//ARRAY LE PLUS LONG
			array_long = [];
			if ( seb_array.length >= na28_array.length)
				array_long = seb_array;
			else
				array_long = na28_array;



		if (JSON.stringify(seb_array) != JSON.stringify(na28_array))
		{

			//BOUCLE MOTS
			for (mot = 0 ; mot != array_long.length ; mot++)
			{

				diffcroch	= 0;
				egal		= 0;
				tarin		= 0;


				//NA 0-1 -- SEB 0
				if (na28_array[mot] && na28_array[mot+1] && seb_array[mot])
				{
					na28sanscroche	= na28_array[mot].replace(/\[|\]/g,'');
					na28filtre		= filtre(na28_array[mot]);
					na28filtre_p1	= filtre(na28_array[mot+1]);

					sebfiltre		= filtre(seb_array[mot]);

					if (na28_array[mot].includes('[') && na28filtre != sebfiltre)
					{
						if (na28filtre_p1 == sebfiltre)
						{
							seb_array.splice(mot,0,'');
							seb_array_s.splice(mot,0,'');
							seb_array_m.splice(mot,0,'');
							diffcroch	= 1;
							diffcroch_v	= 1;


							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length){
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log(livre+' '+chapitre+' '+verset+' '+mot);}
						}
					}
				}



				//NA 0-1 -- SEB 0-1-2
				if (na28_array[mot]	&& na28_array[mot+1]
					&&	seb_array[mot]	&& seb_array[mot+1] && seb_array[mot+2])
				{

					na28filtre	= filtre(na28_array[mot]);
					na28filtre1	= filtre(na28_array[mot+1]);

					sebfiltre		= filtre(seb_array[mot]);
					sebfiltre1		= filtre(seb_array[mot+1]);
					sebfiltre2		= filtre(seb_array[mot+2]);


					if (na28filtre != sebfiltre && na28filtre1 != sebfiltre1)
					{


						if (na28filtre == sebfiltre1 && na28filtre1 == sebfiltre2)
						{

							na28_array.splice(mot,0,'');


							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;


							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}
						}
					}

				}




				//NA 0-1 -- SEB 0-1-2-3-4
				if (na28_array[mot]	&& na28_array[mot+1]
					&&	seb_array[mot]	&& seb_array[mot+1] && seb_array[mot+2] && seb_array[mot+3] && seb_array[mot+4])
				{

					na28filtre	= filtre(na28_array[mot]);
					na28filtre1	= filtre(na28_array[mot+1]);

					sebfiltre		= filtre(seb_array[mot]);
					sebfiltre1		= filtre(seb_array[mot+1]);
					sebfiltre2		= filtre(seb_array[mot+2]);
					sebfiltre3		= filtre(seb_array[mot+3]);
					sebfiltre4		= filtre(seb_array[mot+4]);

					if (na28filtre != sebfiltre && na28filtre1 != sebfiltre1)
					{


						if (na28filtre == sebfiltre3 && na28filtre1 == sebfiltre4)
						{

							na28_array.splice(mot,0,'');
							na28_array.splice(mot,0,'');
							na28_array.splice(mot,0,'');

							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;


							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}
						}
					}

				}



					//NA 0-1 -- SEB 0-1-2-3-4
				if (na28_array[mot]	&& na28_array[mot+1]
					&&	seb_array[mot]	&& seb_array[mot+1] && seb_array[mot+2] && seb_array[mot+3] && seb_array[mot+4] && seb_array[mot+5])
				{

					na28filtre	= filtre(na28_array[mot]);
					na28filtre1	= filtre(na28_array[mot+1]);

					sebfiltre		= filtre(seb_array[mot]);
					sebfiltre1		= filtre(seb_array[mot+1]);
					sebfiltre2		= filtre(seb_array[mot+2]);
					sebfiltre3		= filtre(seb_array[mot+3]);
					sebfiltre4		= filtre(seb_array[mot+4]);
					sebfiltre5		= filtre(seb_array[mot+5]);

					if (na28filtre != sebfiltre && na28filtre1 != sebfiltre1)
					{


						if (na28filtre == sebfiltre4 && na28filtre1 == sebfiltre5)
						{

							na28_array.splice(mot,0,'');
							na28_array.splice(mot,0,'');
							na28_array.splice(mot,0,'');
							na28_array.splice(mot,0,'');

							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;


							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}
						}
					}

				}






				//NA 0-1-2 -- SEB 0
				if (na28_array[mot] && na28_array[mot+1] && na28_array[mot+2]
					&& seb_array[mot])
				{
					na28filtre	= filtre(na28_array[mot]);
					na28filtre1	= filtre(na28_array[mot+1]);
					na28filtre2	= filtre(na28_array[mot+2]);

					sebfiltre		= filtre(seb_array[mot]);


					if (na28filtre != sebfiltre)
					{

						if (na28filtre2 == sebfiltre)
						{

							seb_array.splice(mot,0,'');
							seb_array.splice(mot,0,'');

							diffcroch	= 1;
							diffcroch_v	= 1;

							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;

							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}

						}
					}
				}






				//NA 0-1-2-3-4-5 -- SEB 0-1
				if (na28_array[mot] && na28_array[mot+1] && na28_array[mot+2] && na28_array[mot+3] && na28_array[mot+4] && na28_array[mot+5]
					&& seb_array[mot] && seb_array[mot+1])
				{
					na28filtre	= filtre(na28_array[mot]);
					na28filtre1	= filtre(na28_array[mot+1]);
					na28filtre2	= filtre(na28_array[mot+2]);
					na28filtre3	= filtre(na28_array[mot+3]);
					na28filtre4	= filtre(na28_array[mot+4]);
					na28filtre5	= filtre(na28_array[mot+5]);

					sebfiltre		= filtre(seb_array[mot]);
					sebfiltre1		= filtre(seb_array[mot+1]);

					if (na28filtre != sebfiltre && na28filtre1 != sebfiltre1 )
					{
						if (na28filtre4 == sebfiltre && na28filtre5 == sebfiltre1)
						{
							seb_array.splice(mot,0,'');
							seb_array.splice(mot,0,'');
							seb_array.splice(mot,0,'');
							seb_array.splice(mot,0,'');

							diffcroch	= 1;
							diffcroch_v	= 1;

							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;

							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}
						}
					}
				}





				//NA 0-1-2-3 -- SEB 0-1
				if (na28_array[mot] && na28_array[mot+1] && na28_array[mot+2] && na28_array[mot+3]
					&& seb_array[mot] && seb_array[mot+1])
				{
					na28filtre	= filtre(na28_array[mot]);
					na28filtre1	= filtre(na28_array[mot+1]);
					na28filtre2	= filtre(na28_array[mot+2]);
					na28filtre3	= filtre(na28_array[mot+3]);

					sebfiltre		= filtre(seb_array[mot]);
					sebfiltre1		= filtre(seb_array[mot+1]);

					if (na28_array[mot].includes('[') && na28_array[mot+1].includes(']')
						&& na28filtre != sebfiltre && na28filtre1 != sebfiltre1 )
					{
						if (na28filtre2 == sebfiltre && na28filtre3 == sebfiltre1)
						{
							seb_array.splice(mot,0,'');
							seb_array.splice(mot,0,'');

							seb_array_s.splice(mot,0,'');
							seb_array_s.splice(mot,0,'');

							seb_array_m.splice(mot,0,'');
							seb_array_m.splice(mot,0,'');

							diffcroch	= 1;
							diffcroch_v	= 1;

							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;

							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}

						}
					}



					if (na28filtre != sebfiltre && na28filtre1 != sebfiltre1 )
					{
						if (na28filtre2 == sebfiltre && na28filtre3 == sebfiltre1)
						{
							seb_array.splice(mot,0,'');
							seb_array.splice(mot,0,'');

							diffcroch	= 1;
							diffcroch_v	= 1;

							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;

							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}

						}
					}







				//NA 0-1-2-3-4 -- SEB 0-1
				if (na28_array[mot] && na28_array[mot+1] && na28_array[mot+2] && na28_array[mot+3] && na28_array[mot+4]
					&& seb_array[mot] && seb_array[mot+1])
				{
					na28filtre	= filtre(na28_array[mot]);
					na28filtre1	= filtre(na28_array[mot+1]);
					na28filtre2	= filtre(na28_array[mot+2]);
					na28filtre3	= filtre(na28_array[mot+3]);
					na28filtre4	= filtre(na28_array[mot+4]);

					sebfiltre		= filtre(seb_array[mot]);
					sebfiltre1		= filtre(seb_array[mot+1]);

					if (na28filtre != sebfiltre && na28filtre1 != sebfiltre1 )
					{
						if (na28filtre3 == sebfiltre && na28filtre4 == sebfiltre1)
						{
							seb_array.splice(mot,0,'');
							seb_array.splice(mot,0,'');
							seb_array.splice(mot,0,'');

							diffcroch	= 1;
							diffcroch_v	= 1;

							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;

							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}
						}
					}
				}






					if (na28filtre != sebfiltre && na28filtre1 != sebfiltre1 && seb_array[mot+2])
					{
						sebfiltre2		= filtre(seb_array[mot+2]);

						if (na28filtre == sebfiltre1 && na28filtre1 == sebfiltre2)
						{

							na28_array.splice(mot,0,'');


							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;


							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}
						}
					}



					if (na28filtre != sebfiltre && na28filtre1 != sebfiltre1 && seb_array[mot+2])
					{
						sebfiltre2		= filtre(seb_array[mot+2]);

						if (na28filtre1 == sebfiltre && na28filtre2 == sebfiltre1)
						{
							seb_array.splice(mot,0,'');


							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;


							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}
						}
					}





				}




				//NA 0-1 -- SEB 0-1-2-3
				if (na28_array[mot]	&& na28_array[mot+1]
					&&	seb_array[mot]	&& seb_array[mot+1] && seb_array[mot+2] && seb_array[mot+3])
				{

					na28filtre	= filtre(na28_array[mot]);
					na28filtre1	= filtre(na28_array[mot+1]);

					sebfiltre		= filtre(seb_array[mot]);
					sebfiltre1		= filtre(seb_array[mot+1]);
					sebfiltre2		= filtre(seb_array[mot+2]);
					sebfiltre3		= filtre(seb_array[mot+3]);

					if (na28filtre != sebfiltre && na28filtre1 != sebfiltre1)
					{


						if (na28filtre == sebfiltre2 && na28filtre1 == sebfiltre3)
						{

							na28_array.splice(mot,0,'');
							na28_array.splice(mot,0,'');

							if ( seb_array.length >= na28_array.length)
								array_long = seb_array;
							else
								array_long = na28_array;


							//! CONTROL CHECK LONG !
							if (seb_array.length > array_long.length || na28_array.length > array_long.length)
							{
								console.log(na28_array[mot]+' '+seb_array[mot])
								console.log('ERREUR !!! --> '+lcv+':'+mot);
								console.log('nb ar na28 :'+na28_array.length)
								console.log('nb ar seb :'+seb_array.length)
								console.log('nb ar long :'+array_long.length)
							}
						}
					}

				}










				if (na28_array[mot])
				{
					na28sanscroche = na28_array[mot].replace(/\[|\]/g,'');

					if (na28_array[mot].match(/\[|\]/) && seb_array[mot] == "")
					{
						diffcroch = 1;
					}
					else if (na28_array[mot].match(/\[|\]/) && !seb_array[mot])
					{
						diffcroch = 1;
					}
				}

				else
				{
					na28sanscroche = '';
				}



				if (seb_array[mot] != na28_array[mot])
				{
					diff_t++;




					if	(na28_array_s[mot] == seb_array_s[mot] && na28_array_m[mot] == seb_array_m[mot])
					{
						color='orange';
						diff_min++;
					}
					else
					{
						color='red';
						diff_maj++;
					}

					color='red';

					if (na28_array[mot] || na28_array[mot] == '')
					{
						tdna28+='<td><font color="'+color+'">'+na28_array[mot]+'</font></u></td>';
						tdna28s+='<td><font color="'+color+'">'+na28_array_s[mot]+'</font></u></td>';
						tdna28m+='<td><font color="'+color+'">'+na28_array_m[mot]+'</font></u></td>';
					}
					else
					{
						tdna28+='<td><font color="'+color+'"></font></u></td>';
						tdna28s+='<td><font color="'+color+'"></font></u></td>';
						tdna28m+='<td><font color="'+color+'"></font></u></td>';
					}

					if (seb_array[mot] || seb_array[mot] == '')
					{
						tdseb+='<td><font color="'+color+'">'+seb_array[mot]+'</font></u></td>';
						tdsebs+='<td><font color="'+color+'">'+seb_array_s[mot]+'</font></u></td>';
						tdsebm+='<td><font color="'+color+'">'+seb_array_m[mot]+'</font></u></td>';
					}
					else
					{
						tdseb+='<td><font color="'+color+'"></font></u></td>';
						tdsebs+='<td><font color="'+color+'"></font></u></td>';
						tdsebm+='<td><font color="'+color+'"></font></u></td>';
					}


					diff=1;

				}

				else
				{

					if (na28_array[mot] || na28_array[mot] == '')
					{
						tdna28+='<td>'+na28_array[mot]+'</td>';
						tdna28s+='<td>'+na28_array_s[mot]+'</td>';
						tdna28m+='<td>'+na28_array_m[mot]+'</td>';
					}
					else
					{
						tdna28+='<td></td>';
						tdna28s+='<td></td>';
						tdna28m+='<td></td>';
					}

					if (seb_array[mot] || seb_array[mot] == '')
					{
						tdseb+='<td>'+seb_array[mot]+'</td>';
						tdsebs+='<td>'+seb_array_s[mot]+'</td>';
						tdsebm+='<td>'+seb_array_m[mot]+'</td>';
					}
					else
					{
						tdseb+='<td></td>';
						tdsebs+='<td></td>';
						tdsebm+='<td></td>';
					}
				}



				//ADD MOT
				/*
				if (seb_array[mot] != "" && seb_array[mot])
				{
					mosebgr++;
					json_m[0]		= livre+':'+chapitre+':'+verset;
					json_m[mosebgr]	= {'g':seb_array[mot],'s':seb_array_s[mot],'m':seb_array_m[mot]}


				}
				*/

				//TD NB
				motac=mot+1;
				tdnb +='<td nowrap>[ '+ motac+' ]</td>';

			} //fin boucle mot

		} //fin test string array

			//fin TR
			tdnb	+='</tr>';

			tdna28	+='</tr>';
			tdseb	+='</tr>';

			tdna28s	+='</tr>';
			tdsebs	+='</tr>';

			tdna28m	+='</tr>';
			tdsebm	+='</tr>';


			if (diff == 1)
			{
				lien='../../comparer-grec/'+livre+'-'+chapitre+'.html#v'+verset;

				diff_mot_v++;

				if (quegrec == 1)
				{
					tableau+='<h3><a target="_blank" href="'+lien+'">['+diff_mot_v+'] '+book[livre]+' '+chapitre+' '+verset+'</a></h3>'
				+'<table>'
				+ tdnb

				+ tdna28


				+ tdseb


				+'</table>\n';


				}

				else
				{
					tableau+='<h3><a target="_blank" href="'+lien+'">['+diff_mot_v+'] '+book[livre]+' '+chapitre+' '+verset+'</a></h3>'
				+'<table>'
				+ tdnb

				+ tdna28
				+ tdna28s
				+ tdna28m

				+ tdseb
				+ tdsebs
				+ tdsebm

				+'</table>\n';


				}






			}


			//json_v[verset] = json_m;
			//json_m = {}
		}


		//json_c[chapitre] = json_v;
		//json_v = {}

	}

	//json_l[livre] = json_c;
	//json_c = {}


}



/*
<tr><td><font color="red">Différences Majeurs</font></td><td>`+diff_maj+`</td></tr>
<tr><td><font color="orange">Différences Mineurs</font></td><td>`+diff_min+`</td></tr>
<tr><td><font color="grey">Différences Totales</font></td><td>`+diff_t+`</td></tr>
*/


//add intro
intro_book=`<?xml version='1.0' encoding='utf-8'?> <html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>BIBLE</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<style type="text/css">
body,td {font-family:arial;font-size:16px;}
b{color:orange;}
a{color:blue;text-decoration:none;}
</style>
</head><body><br><br>
<table>
<tr><td><font color="blue">Différences Versets</font></td><td>`+diff_mot_v+`</td></tr>
<tr><td><font color="red">Différences Mots</font></td><td>`+diff_t+`</td></tr>
</table>
`;


fin=`
</body></html>`

fs.writeFileSync('index.html',intro_book+tableau+fin, 'utf8');
