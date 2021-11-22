
//FILE
file		= require('fs');
filetest	= require('fs');



nomsacre = {
"αθν":"ανθρωπων",
"α":"μιας_χιλιας_χιλιων",
"αναστρεσ":"ανασταυρουντες",
"ανε":"ανθρωπε",
"αννω":"ανθρωπων",
"ανοι":"ανθρωποι",
"ανοισ":"ανθρωποις",
"ανον":"ανθρωπον",
"ανοσ":"ανθρωπος",
"ανου":"ανθρωπου",
"ανουν":"ανθρωπου",
"ανουσ":"ανθρωπους",
"ανω":"ανθρωπω",
"ανων":"ανθρωπων",
"ανωπσ":"ανθρωποις",
"αου":"ανθρωπου",
"αυ":"ιησου",
"β":"δευτερον_δευτερος_δυο_δυσιν",
"͵β":"δισχιλιοι",
"βι":"δωδεκα",
"βλεεμ":"βηθλεεμ",
"βλειαν":"βασιλειαν",
"βλευσ":"βασιλευς",
"γ":"τρεις_τρισιν_τριτη_τριτην_τριτον_τριτος_τριτου_τριων",
"δαδ":"δαυιδ",
"δδ":"δαυιδ",
"δ":"τεσσαρα_τεσσαρας_τεσσαρες_τεσσαρων_τεταρτος",
"δʹ":"τεσσαρες",
"δυμι":"δυναμει",
"δε":"δε",
"εα":"πεντακισχιλιοι",
"ε":"πεμπτος_πεντε",
"εσ⳨αν":"εσταυρωσαν",
"εσ⳨θη":"εσταυρωθη",
"εστρωθη":"εσταυρωθη",
"εσραν":"εσταυρωσαν",
"εσταν":"εσταυρωσαν",
"εστραι":"εσταυρωται",
"εστραν":"εσταυρωσαν",
"εστρθη":"εσταυρωθη",
"εστρον":"εσταυρωμενον",
"εστρω":"εσταυρωθη",
"εσ⳨ωθη":"εσταυρωθη",
"εσ⳨ωσατε":"εσταυρωσατε",
"ϛ":"εκτης_εκτος_εξ",
"ζ":"εβδομην_εβδομος_εβδομου_επτα",
"η":"ογδοος_οκτω",
"θε":"θεε",
"θ":"ενατης_ενατος_εννεα",
"θεω":"θεω",
"θν":"θεον",
"θσ":"θεος",
"θυ":"θεου",
"θω":"θεω",
"ια":"ενδεκα_ενδεκατος",
"ιβ":"δωδεκα_δωδεκατος",
"ιβʹ":"δωδεκα",
"ιδ":"δεκατεσσαρες",
"ι":"δεκα_δεκατος",
"ιε":"δεκαπεντε",
"ιελ":"ισραηλ",
"ιη":"δεκαοκτω_ιησου_ιησουν_ιησους",
"ιηλ":"ισραηλ",
"ιηλμ":"ιερουσαλημ",
"ιην":"ιησουν",
"ιυν":"ιησουν",
"ιησ":"ιησους",
"ιησυ":"ιησου",
"ιηυ":"ιησου",
"ιιησ":"ιησους",
"ιηυσ":"ιησους",
"ιιυ":"ιησου",
"ιλη":"ιερουσαλημ",
"ιλημ":"ιεροσολυμα_ιερουσαλημ",
"ιν":"ιησουν",
"ισηλ":"ισραηλ",
"ισ":"ιησους",
"ισλ":"ισραηλ",
"ισρλ":"ισραηλ",
"ιυ":"ιησου",
"ιω":"ιησου",
"κ":"εικοσι",
"και":"και",
"κε":"κυριε",
"κμου":"κοσμου",
"κν":"κυριον",
"κσ":"κυριος",
"κυ":"κυριου",
"κω":"κυριω",
"κων":"κυριων",
"λ":"τριακοντα",
"μδ":"τεσσερακοντατεσσαρων",
"μηρ":"μητηρ",
"μρα":"μητερα",
"μρι":"μητρι",
"μρσ":"μητρος",
"μ":"τεσσερακοντα",
"ν":"πεντηκοντα",
"ξ":"εξηκοντα",
"ο":"εβδομηκοντα",
"οβ":"εβδομηκονταδυο",
"ουνε":"ουρανε",
"ουνοι":"ουρανοι",
"ουνοισ":"ουρανοις",
"ουνον":"ουρανον",
"ουνοσ":"ουρανος",
"ουνου":"ουρανου",
"ουνουσ":"ουρανους",
"ουνων":"ουρανων",
"ουνω":"ουρανω",
"ουρον":"ουρανον",
"ουρου":"ουρανου",
"παρι":"πατρι",
"παρ":"πατηρ",
"παρσ":"πατρος",
"περ":"πατερ",
"πηρ":"πατηρ",
"πναι":"πνευματι",
"πνα":"πνευμα_πνευματα",
"πνασιν":"πνευμασιν",
"πνασι":"πνευμασι_πνευμασιν",
"πνατα":"πνευματα",
"πνατικασ":"πνευματικας",
"πνατικοσ":"πνευματικος",
"πνατοσ":"πνευματος",
"πνατων":"πνευματων",
"πνει":"πνει",
"πνευν":"πνευμασιν",
"πνευνα":"πνευμασιν",
"πνικαισ":"πνευματικαις",
"πνικα":"πνευματικα",
"πνικασ":"πνευματικας",
"πνικην":"πνευματικην",
"πνικη":"πνευματικη",
"πνικησ":"πνευματικης",
"πνικοι":"πνευματικοι",
"πνικοισ":"πνευματικοις",
"πνικον":"πνευματικον",
"πνικοσ":"πνευματικος",
"πνικων":"πνευματικων",
"πνικω":"πνευματικω",
"πνικωσ":"πνευματικως",
"πνι":"πνευματι",
"πνκον":"πνευματικον",
"πνκοσ":"πνευματικος",
"πνοσ":"πνευματος",
"πν":"πνευμα",
"πνσι":"πνευμασι",
"πνσ":"πνευματος",
"πντα":"πνευματα",
"πντι":"πνευματι",
"πνων":"πνευματων",
"π":"ογδοηκοντα",
"ππνα":"πνευμα",
"πδ":"ογδοηκοντατεσσαρων",
"πρα":"πατερα",
"πρασιν":"πατρασιν",
"πρασ":"πατερας",
"πρεσ":"πατερες",
"πρι":"πατρι",
"προσ":"πατρος",
"πρ":"πατερ_πατηρ",
"πρσ":"πατερας_πατρος",
"πρων":"πατερων",
"πσ":"πατερας_πατερες_πατρος",
"πτρα":"πατερα",
"ϟ":"ενενηκοντα",
"ρ":"εκατον",
"ρκ":"εκατονεικοσι",
"ρνγ":"εκατονπεντηκοντατριων",
"σ⳨αν":"εσταυρωσαν",
"σ⳨ατε":"σταυρωσατε",
"σ":"διακοσιας_εκτος_εκτω_εξ",
"ςʹ.":"εξ",
"σηρ":"σωτηρ",
"σησ":"ιησους",
"σ⳨θη":"σταυρωθη",
"σ⳨ναι":"σταυρωθηναι",
"σ⳨ν":"σταυρον",
"σ⳨ον":"σταυρον_σταυρωσον",
"σ⳨ου":"σταυρου",
"σρι":"σωτηρι",
"σρου":"σταυρου",
"σρσ":"σωτηρος",
"σρω":"σταυρω",
"στη":"σταυρωθη",
"στιγμα":"εκτης",
"στν":"σταυρωσον",
"στου":"σταυρου",
"στρθη":"σταυρωθη",
"στρν":"σταυρον_σταυρωσον",
"στροσ":"σταυρος",
"στρου":"σταυρου",
"στρυ":"σταυρου",
"στρω":"σταυρω",
"συνεστραι":"συνεσταυρωμαι",
"σ⳨υσιν":"σταυρουσιν",
"σ⳨υ":"σταυρου",
"σ⳨ωθηναι":"σταυρωθηναι",
"σωρ":"σωτηρ",
"σ⳨ω":"σταυρω",
"σ⳨ωσωσιν":"σταυρωσωσιν",
"σ⳨ωσω":"σταυρωσω",
"τ":"τριακοσιων",
"του":"του",
"τρισ":"τρις",
"υε":"υιε",
"υι":"ιησου_υιοι",
"υιν":"υιον",
"υισ":"υιος",
"υιυ":"υιου",
"υν":"υιον",
"υσ":"υιος",
"υ":"τετρακοσια_τετρακοσιοις_τετρακοσιων",
"υυ":"υιου",
"υυω":"υιω",
"υω":"υιω",
"χ":"εξακοσιοι_εξακοσιων",
"χε":"χριστε",
"χν":"χριστον",
"χρανουσ":"χριστιανους",
"χρε":"χριστε",
"χρν":"χριστον",
"χρσ":"χριστος",
"χρυ":"χριστου",
"χρ":"χριστος_χριστου",
"χρω":"χριστω",
"χσ":"χριστος",
"χυ":"χριστου",
"χω":"χριστω",
"ω":"ω"

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



function clean_all(word)
{
	
	word=word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	word=word.toLowerCase();

	word=word.replace(/¶|⋄|\?|!|\(|\)|–|:|;|,|\.|\·|“|”|‘|’|᾽|ʼ|\*|\[|\]|…|\|/gi,'');
	word=word.replace(/<.*?>/gi,'');
	word=word.replace(/σ$/i,'ς');
	
	//word=word.replace('','ˉ'); //ν
	//word=word.replace('ˉ','ν');
	
	return word;
}



function clean_ns(word)
{
	
	word=word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	word=word.toLowerCase();
	
	return word;
}



function clean_ns_for_test(word)
{
	word=word.replace('ˉ','ν');
	word=word.replace(/\̣/g,"");
	word=word.replace(/[⟦⟧'_`"]/g,"");
	return word;
}


function sigmatest(phrase) {

phrase = phrase.replace(/¶|⋄|\?|!|\(|\)|–|:|;|,|\.|\·|“|”|‘|’|᾽|ʼ|\*|\[|\]|…|\|/gi,'');
phrase = phrase.replace(/[⟦⟧]/g,"");
phrase = phrase.replace(/<.*?>/gi,'');

if (phrase.match(/σ$|σ /))
	return 1;
else
	return 0;

}


//BOOK 40 ---> 67
for (book = 40 ; book != 67 ; book++)
{

	tbook=book-39;

	//CHAP 1 ---> 30
	for (chap=1; chap!=30 ; chap++)
	{

		//GET BOOK AND CHAP
		if (chap <= 9)	chapf	=	'0'+chap;
		else			chapf	= 	chap;
		get			=	book+'0'+chapf;
		result		=	file.readFileSync(get+'.htm', 'utf8');

		
		
		

		//TABLE
		//regex_TABLE		=	/<table>(.*?)<\/table>/gsi;
		verset 			= 	1;
		
		alltable = result.match(/<table>(.*?)<\/table>/gsi)
		//while ((table	=	regex_TABLE.exec(result)) !== null)
		for (alltablenb = 0 ; alltablenb != alltable.length ; alltablenb++)
		{
			
			table = alltable[alltablenb].match(/<table>(.*?)<\/table>/si)

			//LIVRE:CHAP:VERSET
			lcv = getlivre[tbook]+':'+chap+':'+verset; 

			
			
			//SPACE CARACTER CHANGER
			// : nu de fin nomina
			table[1] = table[1].replace(//gi,'ˉ'); //ν
			//⋄ : changement de verset losange
			table[1] = table[1].replace(/⋄/gi,'');
			//mou sinaiticus caractere special
			table[1] = table[1].replace(//gi,'μου');
			//strange P
			table[1] = table[1].replace(/𝔓/gi,'PAPYRUS');

			//⳨ : staurogramme
			//� : non lisible
			
			

			//REPLACE BHP 
			table[1] = table[1].replace(/<tr class=koine><td>BHP<\/td>/gi,'<tr class=koine><td>BHP1</td>');
			table[1] = table[1].replace(/<tr class=modern><td><\/td>/gi,'<tr class=koine><td>BHP2</td>');


			//ADD DATATION CNTRI
			table[1] = table[1].replace(/<tr class=intl><td colspan=2>CNTR<br>Interlinear<\/td>/gi,'<tr class=intl><td colspan=2>CNTR<br>Interlinear</td><td>2019</td>');



			//TOUS LES TR
			verset_cntr = table[1].match(/^<tr.*$/gmi);
			
			//TR CNTRI
			versetcntri = table[1].match(/<tr class=intl><td colspan=2>CNTR.*$/gi);
			
			//TD CNTRI
			tdcntri = versetcntri[0].match(/<td.*?>(.*?)<\/td>/gi);

			
			//CHECK numero 1 2 3 4 5 6 7 8 9 10
			if (!verset_cntr[0].match(/rule/i)) console.log('erreur');
		
			//LIST TR : line by line sans numero
			for ( linetr = 1 ; verset_cntr.length != linetr ; linetr++ )
			{
			
				
				//check TD
				checktd=verset_cntr[linetr].match(/<\/td>/gi)
				
				
			if (!verset_cntr[linetr].match(/<tr class=intl><td colspan=2>CNTR/i))
			{		
				
				//TD
				if (linetd=verset_cntr[linetr].match(/<td>(.*?)<\/td>/gi))
				{
					
					
				allmot = '';
				manuscrit='';
	
				for ( mottd = 0 ; mottd != linetd.length ;  mottd++ )
				{
					

					//TD 1 : manuscrit
					if (mottd == 0)
					{
						
						//if (linetd[mottd].match(/𝔓/i)) { linetd[mottd] = linetd[mottd].replace(/𝔓/gi,'PAPYRUS'); }
						
						manuscrit = linetd[mottd].replace(/<.*?>/g,'');	
						
						if (
								manuscrit == "01" || manuscrit == "01*" || manuscrit == "01a"
							)
							{
								manuscrit = manuscrit.replace(/([0-9]+)/,"SINAITICUS-E")
							}

						


						else if (
								manuscrit == "02" || manuscrit == "02*" || manuscrit == "02a"
							)
							{
								manuscrit = manuscrit.replace(/([0-9]+)/,"ALEXANDRINUS-E")
							}
						




						else if (
								manuscrit == "03" || manuscrit == "03*" || manuscrit == "03a"
							)
							{
								manuscrit = manuscrit.replace(/([0-9]+)/,"VATICANUS-E")
							}





						else if (
								manuscrit == "04" || manuscrit == "04*" || manuscrit == "04a"
							)
							{
								manuscrit = manuscrit.replace(/([0-9]+)/,"EPHRAEMI-RESCRIPTUS-E")
							}
						



						
						else if (
								manuscrit == "05" || manuscrit == "05*" || manuscrit == "05a"
							)
							{
								manuscrit = manuscrit.replace(/([0-9]+)/,"BEZAE-E")
							}

						else if (
								manuscrit == "029" || manuscrit == "029*" || manuscrit == "029a"
							)
							{
								manuscrit = manuscrit.replace(/([0-9]+)/,"029-E")
							}



						else if (
								manuscrit == "032" || manuscrit == "032*" || manuscrit == "032a"
							)
							{
								manuscrit = manuscrit.replace(/([0-9]+)/,"WASHINGTONIANUS-E")
							}



						else if (
								manuscrit == "WH"
							)
							{
								manuscrit = "WESTCOTT-ET-HORT-E"
							}


						else if (
								manuscrit == "NA"
							)
							{
								manuscrit = "NESTLE-ET-ALAND-E"
							}

						
						else if (
								manuscrit == "SBL"
							)
							{
								manuscrit = "SBL-E"
							}

						

							else if (
								manuscrit == "RP"
							)
							{
								manuscrit = "ROBINSON-ET-PIERPONT-E"
							}

						
						else if (
								manuscrit == "ST"
							)
							{
								manuscrit = "STEPHANUS-E"
							}


							
						else if (
								manuscrit == "KJTR"
							)
							{
								manuscrit = "KING-JAMES-E"
							}

							

					}
					
					if (mottd == 1)
					{
						date = linetd[mottd].replace(/<.*?>/g,'');
						
						if (date.match(/-/))
							date=date.split('-')[1];

						if (manuscrit.match(/VATICANUS-E/i))
							date = "330";

						if (manuscrit.match(/SINAITICUS-E/i))
							date = "360";
	
						if (manuscrit.match(/ALEXANDRINUS-E/i))
							date = "390";

						if (manuscrit.match(/EPHRAEMI-RESCRIPTUS-E/i))
							date = "410";

						if (manuscrit.match(/WASHINGTONIANUS-E/i))
							date = "420";
						
						if (manuscrit.match(/BEZAE-E/i))
							date = "430";
						

							

						if (manuscrit.match(/BHP2/i))
							date = "2019";


					}
					
					//OTHER TD
					if (mottd > 1)
					{
						
						
						/*
						<span class=abbr>

						<span class=vid>
						<span class=sup>
						<span class=edit>
						<span class=dam>
						<span class=corr>
						<span class=exp>
						<span class=inc>

						<span class=hover>
						<span class=koine>
						<span class=popup>
						*/

						

						
		//CLEAN DAM
		if (linetd[mottd].match(/<span class=dam>(.*?)<\/span.*?>/g))
		{

			damall = linetd[mottd].match(/<span class=dam>(.*?)<\/span.*?>/g)
			for (damnb = 0 ; damnb != damall.length ; damnb++)
			{
				damatch = damall[damnb].match(/<span class=dam>(.*?)<\/span.*?>/i);
				//console.log(damatch)
				
				//check
				if (damatch[1].match(/[<>]/)) console.log(damatch[1])


				newdamsplit = damatch[1].split('');
				newdam = '';
				for (newdamsplitnb = 0 ; newdamsplitnb != newdamsplit.length ; newdamsplitnb++)
				{
					newdam += '̣'+newdamsplit[newdamsplitnb];
				}
				
				//console.log(lcv+' '+linetd[mottd]+' --> '+newdam)
				linetd[mottd] = linetd[mottd].replace(damatch[0] , newdam)
				
			}
				
		}




						//OTHER CLEAN
						linetd[mottd] = linetd[mottd].replace(/<span class=vid>(.*?)<\/span.*?>/g,"$1");
						linetd[mottd] = linetd[mottd].replace(/<span class=sup>(.*?)<\/span.*?>/g,"$1");
						linetd[mottd] = linetd[mottd].replace(/<span class=edit>(.*?)<\/span.*?>/g,"$1");
						//linetd[mottd] = linetd[mottd].replace(/<span class=dam>(.*?)<\/span.*?>/g,"$1");
						linetd[mottd] = linetd[mottd].replace(/<span class=corr>(.*?)<\/span.*?>/g,"$1");
						linetd[mottd] = linetd[mottd].replace(/<span class=exp>(.*?)<\/span.*?>/g,"⟦$1⟧");
						linetd[mottd] = linetd[mottd].replace(/<span class=inc>(.*?)<\/span.*?>/g,"$1");
						//linetd[mottd] = linetd[mottd].replace(/<span class=popup>(.*?)<\/span.*?>/g,"$1");

 
						//if (lcv == 'JEAN:18:37' && manuscrit == "PAPYRUS90" && mottd == 14) console.log(mottd+' '+linetd[mottd]+' '+abbrev)
								





						//ABBR : <span class=abbr>ρ</span>
						if (linetd[mottd].match(/class=abbr>/))
						{
							
							
							
							//HOVER 
							if (linetd[mottd].match(/class=hover>/))
							{
								
								



								linetd[mottd] = linetd[mottd].replace(/<span class=koine title.*?<\/span>/g,"");
								linetd[mottd] = linetd[mottd].replace(/<a href=.*?<\/a>/g,"");
								linetd[mottd] = linetd[mottd].replace(/<td>|<\/td>|<br>/g,"");
								linetd[mottd] = linetd[mottd].replace("<span class='r0-49 int'>&nbsp;","");
								linetd[mottd] = linetd[mottd].replace(/<span class=popup.*?$/,"");
								linetd[mottd] = linetd[mottd].replace(/<.*?>/g,"");

								
								
								

								

								
								//check
								//if (!linetd[mottd].match(/<span class=koine.*?>(.*?)<\/span/i)) console.log('erreur '+manuscrit+':'+lcv+"\n"+linetd[mottd]);
								
								abbrev = linetd[mottd]
								abbrev = clean_ns(abbrev)
								abbrevnew = clean_ns_for_test(abbrev)

								//cntri_ns = clean_ns(tdcntri[mottd].match(/title=(.*?)>/)[1])
								
								//CHECK
								//if (abbrevnew == "υι" && cntri_ns == "ιησου")console.log(lcv+' '+abbrevnew+' --> '+cntri_ns)


								if (!nomsacre[abbrevnew])
									console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n : erreur nom sacre' +tbook+':'+chap+':'+verset+':'+getlivre[tbook]+':1:'+date+':'+manuscrit+' '+allmot )
								else
								{
									allmot+='|'+abbrev+'|('+nomsacre[abbrevnew]+') ';
								}


							}
						


							else
							{
								
								abbrev		= linetd[mottd].replace(/<.*?>/gi,"");

								

								abbrev		= clean_ns(abbrev);
								abbrevnew	= clean_ns_for_test(abbrev)
								
								//cntri_ns = clean_ns(tdcntri[mottd].match(/title=(.*?)>/)[1])
								
								//CHECK
								//if (abbrevnew == "υι" && cntri_ns == "ιησου")console.log(lcv+' '+abbrevnew+' --> '+cntri_ns)


					
								if (!nomsacre[abbrevnew])
									console.log('\n\n\n\n : erreur nom sacre ----> \nLIGNE:'+linetd[mottd]+' \nABBREV:'+abbrev+' '+' \nABBREVNEW:'+abbrevnew +' \nLCV:'+tbook+':'+chap+':'+verset+':'+getlivre[tbook]+':1:'+date+':'+manuscrit+' \nALLMOT'+allmot )
								else
								{
									allmot+='|'+abbrev+'|('+nomsacre[abbrevnew]+') ';
								}


							
							}
							
							

						}
						

						
						//HOVER 
						else if (linetd[mottd].match(/class=hover>/))
						{


							
							//new word
							motrec =linetd[mottd].match(/<span class=hover>(.*?)</i)
								
							//check
							if (!linetd[mottd].match(/<span class=hover>(.*?)</i)) console.log('erreur '+manuscrit+':'+lcv);
							
	
							allmot+=motrec[1]+' ';
								

						}

						else
						{
							
							//add in allmot
							

							allmot+=linetd[mottd]+' ';

						}
					
					
					
					
					}
					
					
				}
					
					
					allmot = allmot.replace(/<.*?>/g,'');
					allmot = allmot.replace(/\s+/g,' ');
					allmot = allmot.replace(/^ +| +$/g,'');


					allmot = allmot.replace(/σ$/i,'ς');
					allmot = allmot.replace(/σ\]$/gi,'ς]');
					allmot = allmot.replace(/σ\⟧$/gi,'ς⟧');

					allmot = allmot.replace(/σ /gi,'ς ');

					allmot = allmot.replace(/σ\|\(/gi,'ς|(');
					allmot = allmot.replace(/σ\⟧\|\(/gi,'ς⟧|(');
					allmot = allmot.replace(/σ\⟧ /gi,'ς⟧ ');
					allmot = allmot.replace(/σ\] /gi,'ς] ');
					

					//CHECK
					//if (allmot.match(/[a-z]/i)) console.log('erreur '+manuscrit+':'+lcv+' '+allmot);
					//if (sigmatest(allmot)) console.log('erreur '+manuscrit+':'+lcv+' '+allmot);


					// CAT 1
					if (manuscrit.match(/^PAPYRUS[0-9]/i))		
						console.log(tbook+':'+chap+':'+verset+':'+getlivre[tbook]+':1:1:'+date+':'+manuscrit+' '+allmot);

					// CAT 2
					else if (manuscrit.match(/^0/i) || manuscrit.match(/SINAITICUS-E|ALEXANDRINUS-E|VATICANUS-E|EPHRAEMI-RESCRIPTUS-E|BEZAE-E|WASHINGTONIANUS-E/))		
						console.log(tbook+':'+chap+':'+verset+':'+getlivre[tbook]+':1:2:'+date+':'+manuscrit+' '+allmot);
					
					// CAT 3
					else if (manuscrit.match(/^[1-9]/i))	
						console.log(tbook+':'+chap+':'+verset+':'+getlivre[tbook]+':1:3:'+date+':'+manuscrit+' '+allmot);

					// CAT 4
					else	
						console.log(tbook+':'+chap+':'+verset+':'+getlivre[tbook]+':1:4:'+date+':'+manuscrit+' '+allmot);



					//CHECK TD
					if (checktd.length != linetd.length && !verset_cntr[linetr].match(/CNTR<br>Interlinear/))
					{
						console.log('erreur '+manuscrit+':'+lcv+' '+allmot);
						console.log(verset_cntr[linetr])
					}
			
				}
				else //cntr interlinear without <td></td>
				{
					if (!verset_cntr[linetr].match(/CNTR/i))
						console.log('erreur '+verset_cntr[linetr])
					
				}
				
			}
			
			}
		
			
			verset++;
		}



		
		//TEST & QUIT CHAP
		chaptest	=	chap + 1;
		if (chaptest <= 9){chaptestf='0'+chaptest;} else {chaptestf=chaptest;}
		gettest = book+'0'+chaptestf+'.htm'; if (!filetest.existsSync(gettest)) {chap=29;}

	}





}
