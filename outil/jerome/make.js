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


//INIT
err=0;

//JSON
JSON_livre=[];
JSON_chapitre=[];
JSON_verset=[];





for (book = 40 ; book != 67 ; book++)
{

for (chap=1 ; chap != 200 ; chap++)
{

//GET BOOK AND CHAP
get=book+'-'+chap+'.htm';


//EXIST TEST
if (fst.existsSync(get))
{
	 
	verset_all = fs.readFileSync(get, 'utf8');
	  
	 
   //GET ALL VERSET
   //verset_all=verset_all.split(/\n\n/);
	verset_all=verset_all.match(/^.*<.*?>$/gm)
  
   
   
   
   //init ver 1
   verset=1;
   
   //console.log(verset_all)
   
   for (list=0 ; list != verset_all.length ; list++)
   {
   
   //console.log(verset_all[list])
   
   lcv = getlivre[book-39]+' '+chap+' '+verset;
   
   //GET NB VERSET
   num_verset=verset_all[list].match(/<span class="verse" data-location=".*?">(.*?)<\/span>/i);

   
    //verifier verset et reparer
    if (num_verset[1] != verset)
	{
		// !!!! ACTES 8.37 && 
		//console.log(lcv+' '+verset_all[list])
		JSON_verset[verset]="[ ]";
		verset++;
	}
   
   
   
   //FILTRE
   verset_split=verset_all[list].replace(/<h4 id="h0">.*?<\/h4>/gi,' ');
   
   verset_split=verset_split.replace(/<span class="chapter">.*?<\/span>/gi,' ');
   verset_split=verset_split.replace(/<span class="auslegung">.*?<\/span><\/p>/gi,' ');
   verset_split=verset_split.replace(/<span class="chapter">.*?<\/span>/gi,' ');
   verset_split=verset_split.replace(/<span class="verse" data-location=".*?">.*?<\/span>/gi,' ');
   verset_split=verset_split.replace(/<.*?>/gi,' ');
   verset_split=verset_split.replace(/&emsp;/gi,' '); // '  '
   verset_split=verset_split.replace(/\(|\)/g,''); 
   //verset_split=verset_split.replace(/;,/g,';');
   verset_split=verset_split.replace(/\*/g,'');
   //verset_split=verset_split.replace(/–/g,'-');
   verset_split=verset_split.replace(/–/g,' – ');
   verset_split=verset_split.replace(/^\s+|\s+$/g, ' ');
   verset_split=verset_split.replace(/\s+/g, ' ');
   verset_split=verset_split.replace(/^ +| +$/g, '');
   verset_split=verset_split.replace(/ +, /g, ', ');
   verset_split=verset_split.replace(/ +,$/g, ',');
  
   verset_split=verset_split.replace(/’/g, '᾽');
   
   //verset_split=verset_split.replace(/;/g, ';');
   verset_split=verset_split.replace(/ +;/g, ';');
   
   verset_split=verset_split.replace(/ +\·/g,'·'); // ·  
   //verset_split=verset_split.replace(/\./g,'');
   //verset_split=verset_split.replace(/,/g,' ');
   //verset_split=verset_split.replace(/’/g,'');*
   //verset_split=verset_split.replace(/\[|\]/g,'');
   //verset_split=verset_split.replace(/&rsquo;/g,'\’'); // ' ’ ' 

	//ERREUR OFFICIELLE DU SITE
	/*
	if (book == 40 && chap == 12 && verset == 46)
	{
		if (verset_split.match(/ \[$/)) 
			verset_split=verset_split.replace(/ \[$/,'')
	}
	
	if (book == 40 && chap == 12 && verset == 47)
	{
		if (!verset_split.match(/^\[/)) 
			verset_split='['+verset_split;
	}
	
	if (book == 40 && chap == 14 && verset == 12)
	{
		//αὐτὸ [ν] | space !
		verset_split=verset_split.replace('αὐτὸ [ν]','αὐτὸ[ν]')
	}

	if (book == 40 && chap == 21 && verset == 43)
	{
		if (verset_split.match(/ \[$/)) 
			verset_split=verset_split.replace(/ \[$/,'')
	}
	
	if (book == 40 && chap == 21 && verset == 44)
	{
		if (!verset_split.match(/^\[/)) 
			verset_split='['+verset_split;
	}
	
	if (book == 41 && chap == 3 && verset == 17)
	{
		//ὀνόμα [τα] | space !
		verset_split=verset_split.replace('ὀνόμα [τα]','ὀνόμα[τα]')
	}

	if (book == 41 && chap == 4 && verset == 28)
	{
		//space !
		verset_split=verset_split.replace('πλήρη [ς]','πλήρη[ς]')
	}

	if (book == 41 && chap == 16 && verset == 8)
	{
		//CROCHET !
		verset_split=verset_split.replace('Πάντα δὲ τὰ παρηγγελμένα','⟦Πάντα δὲ τὰ παρηγγελμένα')
		verset_split=verset_split.replace('σωτηρίας. ἀμήν.','σωτηρίας. ἀμήν.⟧')
	}

	
	if (book == 41 && chap == 16 && verset == 9)
	{
		//CROCHET !
		verset_split=verset_split.replace('Ἀναστὰς δὲ πρωῒ','⟦Ἀναστὰς δὲ πρωῒ')
	}

	if (book == 41 && chap == 16 && verset == 20)
	{
		//CROCHET !
		verset_split=verset_split.replace('σημείων.','σημείων.⟧')
	}


	if (book == 42 && chap == 4 && verset == 41)
	{
		//space !
		verset_split=verset_split.replace('κρ [αυγ]άζοντα','κρ[αυγ]άζοντα')
	}

	if (book == 42 && chap == 11 && verset == 10)
	{
		//space !
		verset_split=verset_split.replace('ἀνοιγ [ήσ]εται','ἀνοιγ[ήσ]εται')
	}
	
	if (book == 42 && chap == 19 && verset == 29)
	{
		//space !
		verset_split=verset_split.replace('Βηθανία [ν]','Βηθανία[ν]')
	}
	
	if (book == 42 && chap == 22 && verset == 43)
	{
		//space !
		verset_split=verset_split.replace('ὤφθη δὲ','⟦ὤφθη δὲ')
	}
	
	if (book == 42 && chap == 22 && verset == 44)
	{
		//space !
		verset_split=verset_split.replace('ἐπὶ τὴν γῆν.','ἐπὶ τὴν γῆν.⟧')
	}
		
	if (book == 42 && chap == 23 && verset == 34)
	{
		//space !
		verset_split=verset_split.replace
		('ὁ δὲ Ἰησοῦς ἔλεγεν· πάτερ, ἄφες αὐτοῖς, οὐ γὰρ οἴδασιν τί ποιοῦσιν.','⟦ὁ δὲ Ἰησοῦς ἔλεγεν· πάτερ, ἄφες αὐτοῖς, οὐ γὰρ οἴδασιν τί ποιοῦσιν.⟧')
	}	
	
	
	
	
	if (book == 43 && chap == 6 && verset == 23)
	{
		//space !
		verset_split=verset_split.replace('πλοιά [ρια]','πλοιά[ρια]')
	}
	
	if (book == 43 && chap == 7 && verset == 53)
	{
		//space !
		verset_split=verset_split.replace('Καὶ ἐπορεύθησαν','⟦Καὶ ἐπορεύθησαν')
	}
	
	if (book == 43 && chap == 8 && verset == 11)
	{
		//space !
		verset_split=verset_split.replace('μηκέτι ἁμάρτανε.','μηκέτι ἁμάρτανε.⟧')
	}
	
	if (book == 43 && chap == 19 && verset == 35)
	{
		//space !
		verset_split=verset_split.replace('πιστεύ [σ]ητε.','πιστεύ[σ]ητε.')
	}
	
	if (book == 43 && chap == 20 && verset == 31)
	{
		//space !
		verset_split=verset_split.replace('πιστεύ [σ]ητε','πιστεύ[σ]ητε')
	}
	
	
	if (book == 44 && chap == 16 && verset == 12)
	{
		//space !
		verset_split=verset_split.replace('πρώτη [ς]','πρώτη[ς]')
	}
	
	
	//NORMALIZE space !
	if (book == 45 && chap == 15 && verset == 30)
	{
		verset_split=verset_split.replace('[, ἀδελφοί,]','[,ἀδελφοί,]')
	}
	
	
	
	if (book == 45 && chap == 16 && verset == 23)
	{
		if (verset_split.match(/ \[$/)) 
			verset_split=verset_split.replace(/ \[$/,'')
	}

	if (book == 45 && chap == 16 && verset == 25)
	{
		if (!verset_split.match(/^\[/)) 
			verset_split='['+verset_split;
	}
	
	
	if (book == 46 && chap == 2 && verset == 4)
	{
		verset_split=verset_split.replace('πειθοῖ [ς]','πειθοῖ[ς]')
	}
	
	
	if (book == 46 && chap == 4 && verset == 14)
	{
		verset_split=verset_split.replace('νουθετῶ [ν]','νουθετῶ[ν]')
	}
	
	
	if (book == 47 && chap == 12 && verset == 15)
	{
		verset_split=verset_split.replace('ἀγαπῶ [ν]','ἀγαπῶ[ν]')
	}



	if (book == 58 && chap == 3 && verset == 6)
	{
		verset_split=verset_split.replace('ἐάν [περ]','ἐάν[περ]')
	}

	if (book == 58 && chap == 8 && verset == 6)
	{
		verset_split=verset_split.replace('νυν [ὶ]','νυν[ὶ]')
	}


	if (book == 66 && chap == 2 && verset == 25)
	{
		verset_split=verset_split.replace('ἄχρι [ς]','ἄχρι[ς]')
	}


	if (book == 66 && chap == 3 && verset == 18)
	{
		verset_split=verset_split.replace('κολλ [ο]ύριον','κολλ[ο]ύριον')
	}


	if (book == 66 && chap == 13 && verset == 1)
	{
		verset_split=verset_split.replace('ὀνόμα [τα]','ὀνόμα[τα]')
	}
	
	if (book == 66 && chap == 17 && verset == 3)
	{
		verset_split=verset_split.replace('γέμον [τα]','γέμον[τα]')
	}
	
	*/
	
   //PUT ALL WORD IN VERSET
    JSON_verset[verset]=verset_split;
  

	//INFO
	tver = JSON_verset.length-1;
	JSON_verset[0]=book-39+':'+chap+':'+tver;
	verset++;   
	
   }
   
    //PUT ALL VERSET IN CHAPITRE
    JSON_chapitre[chap]=JSON_verset;
	JSON_verset=[];
   
   
 
}
else 
{
	chap=199;
}


}


tchap = JSON_chapitre.length-1;
JSON_chapitre[0] = book-39+'-'+getlivre[book-39]+' - '+tchap+' chapitres';

JSON_livre[book-39]=JSON_chapitre;
JSON_chapitre=[];
}


tlivre = JSON_livre.length-1;
JSON_livre[0]='BIBLE JEROME - '+tlivre+' livres';

fs2.writeFileSync('jerome.js', 'jerome='+JSON.stringify(JSON_livre, null, 1), 'utf8');

