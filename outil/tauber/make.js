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



result = fichier.readFileSync('tauber.txt', 'utf8');
lignes = result.match(/^.*$/mg);




function morphconv1 (morph)
{

	morph = morph.replace('A-','adjectif');
	morph = morph.replace('C-','conjonction');
	morph = morph.replace('D-','adverbe');
	morph = morph.replace('I-','interjection');
	morph = morph.replace('N-','nom');
	morph = morph.replace('P-','préposition');
	morph = morph.replace('RA','article-défini'); // ou déterminant-article
	morph = morph.replace('RD','pronom-démonstratif');
	morph = morph.replace('RI','pronom-interrogatif/indéfini');
	morph = morph.replace('RP','pronom-personnel');
	morph = morph.replace('RR','pronom-relatif');
	morph = morph.replace('V-','verbe');
	morph = morph.replace('X-','particule');
	
	return morph;

}



function morphconv2 (morph)
{




morph = morph.split('');





//1
//person (1=1st, 2=2nd, 3=3rd)
morph[0] = morph[0].replace(/1/,'1e');
morph[0] = morph[0].replace(/2/,'2e');
morph[0] = morph[0].replace(/3/,'3e');


//2
//tense (P=present, I=imperfect, F=future, A=aorist, X=perfect, Y=pluperfect)
morph[1] = morph[1].replace(/P/,'présent');
morph[1] = morph[1].replace(/I/,'imparfait');
morph[1] = morph[1].replace(/F/,'futur');
morph[1] = morph[1].replace(/A/,'aoriste');
morph[1] = morph[1].replace(/X/,'parfait');
morph[1] = morph[1].replace(/Y/,'plus-que-parfait');


//3
//voice (A=active, M=middle, P=passive)
morph[2] = morph[2].replace(/A/,'actif');
morph[2] = morph[2].replace(/M/,'moyen');
morph[2] = morph[2].replace(/P/,'passif');


//4
//mood (I=indicative, D=imperative, S=subjunctive, O=optative, N=infinitive, P=participle)
morph[3] = morph[3].replace(/I/,'indicatif');
morph[3] = morph[3].replace(/D/,'impératif');
morph[3] = morph[3].replace(/S/,'subjonctif');
morph[3] = morph[3].replace(/O/,'optatif');
morph[3] = morph[3].replace(/N/,'infinitif');
morph[3] = morph[3].replace(/P/,'participe');


//5
//case (N=nominative, G=genitive, D=dative, A=accusative)
morph[4] = morph[4].replace(/N/,'nominatif');
morph[4] = morph[4].replace(/G/,'génitif');
morph[4] = morph[4].replace(/D/,'datif');
morph[4] = morph[4].replace(/A/,'accusatif');


//6
//number (S=singular, P=plural)
morph[5] = morph[5].replace(/S/,'singulier');
morph[5] = morph[5].replace(/P/,'pluriel');


//7
//gender (M=masculine, F=feminine, N=neuter)
morph[6] = morph[6].replace(/M/,'masculin');
morph[6] = morph[6].replace(/F/,'féminin');
morph[6] = morph[6].replace(/N/,'neutre');


//8
//degree (C=comparative, S=superlative)
morph[7] = morph[7].replace(/C/,'comparatif');
morph[7] = morph[7].replace(/S/,'superlatif');



//T Ἀναστὰς=ἀνίστημι=verbe,aoriste,actif,participe,nominatif,singulier,masculin
//B ἀναστὰς=ἀνίστημι=verbe,participe,aoriste,actif,nominatif,masculin,singulier
//B        indicatif,   aoriste,     actif,       3e,             singulier


morph_end = morph[3]+','+morph[1]+','+morph[2]+','+morph[0]+','+','+morph[4]+','+morph[6]+','+morph[5]+','+morph[7];

morph_end = morph_end.replace(/-,|,-/g,'');
morph_end = morph_end.replace(/,,/g,',');
morph_end = morph_end.replace(/^,/g,'');
//morph_end = morph_end.replace(/,$/g,'');

return morph_end;

}


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
		
		
		
		

		word = lignes[ligne].split(' ');

		lcv = word[0].match(/.{1,2}/g);
		l = parseInt(lcv[0]);
		c = parseInt(lcv[1]);
		v = parseInt(lcv[2]);
		l_name = getlivre[l];

		morph1 = morphconv1(word[1]);
		morph2 = morphconv2(word[2]);

		lemme = word[6];
		//replace(/^πρωΐ$/,'πρωΐ');
		//replace(/^θανάσιμον$/,'θανάσιμος'); // θανάσιμον
		//.replace(/\⸀|\⸂/g,'')


		wordm = word[3]; 

		//morphology
		if (morph2 == "")
			morph = morphconv1(word[1]);
		else
			morph = morphconv1(word[1])+','+morphconv2(word[2]);



		if (cb != c)
		{
			chapitre_a[cb] = verset_a;
			verset_a =[];
		}

		if (lb != l)
		{
			livre_a[lb] = chapitre_a;
			chapitre_a	=[];
		}


		//phrase
		if (v != vb)
		{	
			console.log(lb+':'+cb+':'+vb+':'+getlivre[lb]+':1:0:2018:TAUBER '+phrase.replace(/\s+$/g,''))
			phrase = wordm+'='+lemme+'='+morph+' ';
			
		}
		else
			phrase += wordm+'='+lemme+'='+morph+' ';

		
		//add verset
		verset_a[v] = phrase.replace(/\s+$/,'');

		
		
		
		
		vb = v;
		cb = c;
		lb = l;
	
	
	
	
	
	}

}

console.log(lb+':'+cb+':'+vb+':'+getlivre[lb]+':1:0:2018:TAUBER '+phrase.replace(/\s+$/g,''))

chapitre_a[c] = verset_a;
livre_a[l] = chapitre_a;

tlivre = livre_a.length-1;
livre_a[0]='BIBLE SBL TAUBER - '+tlivre+' livres';


//FILE_JSON
//fichier.writeFileSync('sbltauber.js', 'sbltauber='+JSON.stringify(livre_a, null, 1), 'utf8');