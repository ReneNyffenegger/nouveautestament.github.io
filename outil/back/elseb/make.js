

function clean_accent_maj(word)
{
	word=word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	word=word.toLowerCase();
	
	return word;
}


function clean_nomina_sacra_barre(word)
{
	word=word.replace(/[\u0305]/g, "");
	return word;
}


function clean_all(word)
{
	
	word=word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	word=word.toLowerCase();

	word=word.replace('ˉ','ν');
	word=word.replace(/¶|⋄|\?|!|\(|\)|–|\⟦|\⟧|:|;|,|\.|\·|“|”|‘|’|᾽|ʼ|\[|\]|…|\|/gi,'');



	//word=word.replace(/<.*?>/gi,'');
	word=word.replace(/ς$/i,'σ');
	//word=word.replace('','ˉ'); //ν
	
	return word;
}



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
"πνσ":"πνευματος_πνευματος",
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
"χρω":"κυριω_χριστω",
"χσ":"χριστος",
"χυ":"χριστου",
"χω":"χριστω",
"ω":"ω"

}







//FILE
fs		= require('fs');
read	= require('fs');
write	= require('fs');



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
27:'APOCALYPSE'
}



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
27:'APOCALYPSE'
}





//	-- BIBLES --


require('../database/bible/grec/ga01/ga01a.js');
require('../database/bible/grec/ga01/ga01b.js');
require('../database/bible/grec/ga01/ga01c.js');
require('../database/bible/grec/ga01/ga01d.js');
require('../database/bible/grec/ga02/ga02a.js');
require('../database/bible/grec/ga02/ga02b.js');
require('../database/bible/grec/ga02/ga02c.js');
require('../database/bible/grec/ga03/ga03a.js');
require('../database/bible/grec/ga03/ga03b.js');
require('../database/bible/grec/ga03/ga03c.js');
require('../database/bible/grec/ga03/ga03d.js');
require('../database/bible/grec/ga04/ga04a.js');
require('../database/bible/grec/ga04/ga04b.js');
require('../database/bible/grec/ga04/ga04c.js');
require('../database/bible/grec/ga04/ga04d.js');
require('../database/bible/grec/ga05/ga05a.js');
require('../database/bible/grec/ga05/ga05b.js');
require('../database/bible/grec/ga05/ga05c.js');
require('../database/bible/grec/ga32/ga32a.js');
require('../database/bible/grec/ga32/ga32b.js');

require('../database/bible/grec/seb/sebastien_lemme.js');
require('../database/bible/grec/na28/na28.js');
require('../database/bible/critique/critique.js');
require('../database/bible/grec/sbl/sbl.js');
require('../database/bible/grec/tisch/tisch.js');
require('../database/bible/grec/wh/wha.js');

require('../database/bible/grec/steph/stephanus1550.js');
require('../database/bible/grec/scr/scrivener1894.js');




count = 0;

//livre
for (livre = 1 ; livre != 28 ; livre++)
{
	//get book name
	book_name=book[livre];


	

	if (!ga01a[livre]) {ga01a[livre] = [];}
	if (!ga01b[livre]) {ga01b[livre] = [];}
	if (!ga01c[livre]) {ga01c[livre] = [];}
	if (!ga01d[livre]) {ga01d[livre] = [];}

	if (!ga02a[livre]) {ga02a[livre] = [];}
	if (!ga02b[livre]) {ga02b[livre] = [];}
	if (!ga02c[livre]) {ga02c[livre] = [];}

	if (!ga03a[livre]) {ga03a[livre] = [];}
	if (!ga03b[livre]) {ga03b[livre] = [];}
	if (!ga03c[livre]) {ga03c[livre] = [];}
	if (!ga03d[livre]) {ga03d[livre] = [];}

	if (!ga04a[livre]) {ga04a[livre] = [];}
	if (!ga04b[livre]) {ga04b[livre] = [];}
	if (!ga04c[livre]) {ga04c[livre] = [];}
	if (!ga04d[livre]) {ga04d[livre] = [];}

	if (!ga05a[livre]) {ga05a[livre] = [];}
	if (!ga05b[livre]) {ga05b[livre] = [];}
	if (!ga05c[livre]) {ga05c[livre] = [];}

	if (!ga32a[livre]) {ga32a[livre] = [];}
	if (!ga32b[livre]) {ga32b[livre] = [];}

	
	
	
	
	maxchapitres	= Math.max(
								ga03a[livre].length,
								ga01a[livre].length,
								ga04a[livre].length,
								ga02a[livre].length,
								ga05a[livre].length,
								ga32a[livre].length,
								sebastien_lemme[livre].length,
								na28[livre].length
								);




	//chapitre
	for (chapitre = 1 ; chapitre != maxchapitres; chapitre++)
	{

		body='';
		
		
		
		if (!ga01a[livre][chapitre]) {ga01a[livre][chapitre] = [];}
		if (!ga01b[livre][chapitre]) {ga01b[livre][chapitre] = [];}
		if (!ga01c[livre][chapitre]) {ga01c[livre][chapitre] = [];}
		if (!ga01d[livre][chapitre]) {ga01d[livre][chapitre] = [];}

		if (!ga02a[livre][chapitre]) {ga02a[livre][chapitre] = [];}
		if (!ga02b[livre][chapitre]) {ga02b[livre][chapitre] = [];}
		if (!ga02c[livre][chapitre]) {ga02c[livre][chapitre] = [];}

		if (!ga03a[livre][chapitre]) {ga03a[livre][chapitre] = [];}
		if (!ga03b[livre][chapitre]) {ga03b[livre][chapitre] = [];}
		if (!ga03c[livre][chapitre]) {ga03c[livre][chapitre] = [];}
		if (!ga03d[livre][chapitre]) {ga03d[livre][chapitre] = [];}

		if (!ga04a[livre][chapitre]) {ga04a[livre][chapitre] = [];}
		if (!ga04b[livre][chapitre]) {ga04b[livre][chapitre] = [];}
		if (!ga04c[livre][chapitre]) {ga04c[livre][chapitre] = [];}
		if (!ga04d[livre][chapitre]) {ga04d[livre][chapitre] = [];}

		if (!ga05a[livre][chapitre]) {ga05a[livre][chapitre] = [];}
		if (!ga05b[livre][chapitre]) {ga05b[livre][chapitre] = [];}
		if (!ga05c[livre][chapitre]) {ga05c[livre][chapitre] = [];}

		if (!ga32a[livre][chapitre]) {ga32a[livre][chapitre] = [];}
		if (!ga32b[livre][chapitre]) {ga32b[livre][chapitre] = [];}



		
		maxversets		= Math.max(
									ga03a[livre][chapitre].length,
									ga01a[livre][chapitre].length,
									ga04a[livre][chapitre].length,
									ga02a[livre][chapitre].length,
									ga05a[livre][chapitre].length,
									ga32a[livre][chapitre].length,
									sebastien_lemme[livre][chapitre].length,
									na28[livre][chapitre].length,
									sbl[livre][chapitre].length,
									tisch[livre][chapitre].length,
									wha[livre][chapitre].length,
									stephanus1550[livre][chapitre].length,
									scrivener1894[livre][chapitre].length,

									);
		

		//verset
		for (verset = 1 ; verset != maxversets; verset++)
		{

			//L C V
			lcv = livre+' '+chapitre+' '+verset;
			//console.log(lcv)
			
			
			//SEBASTIEN
			seb_grec	= '';

			
			if (sebastien_lemme[livre][chapitre][verset] && sebastien_lemme[livre][chapitre][verset] != "")
			{	
				sebastien_a = sebastien_lemme[livre][chapitre][verset].match(/\S+/g);
				for (xb = 0 ; xb != sebastien_a.length ; xb++)
				{
					seb_grec += sebastien_a[xb].split('=')[0]+' '
				}
				
				
				
			}

			
			
			
			
			//critique
			if (critique[livre][chapitre][verset] && critique[livre][chapitre][verset] != "")
				critique[livre][chapitre][verset] = critique[livre][chapitre][verset].replace(/<i>txt<\/i>/g,'<i>NA28</i>')
			
			
			
lch = livre+'-'+chapitre+'.html#v'+verset;



if (!ga01a[livre][chapitre][verset]) ga01a[livre][chapitre][verset] = '';
if (!ga01b[livre][chapitre][verset]) ga01b[livre][chapitre][verset] = '';
if (!ga01c[livre][chapitre][verset]) ga01c[livre][chapitre][verset] = '';
if (!ga01d[livre][chapitre][verset]) ga01d[livre][chapitre][verset] = '';
if (!ga02a[livre][chapitre][verset]) ga02a[livre][chapitre][verset] = '';
if (!ga02b[livre][chapitre][verset]) ga02b[livre][chapitre][verset] = '';
if (!ga02c[livre][chapitre][verset]) ga02c[livre][chapitre][verset] = '';
if (!ga03a[livre][chapitre][verset]) ga03a[livre][chapitre][verset] = '';
if (!ga03b[livre][chapitre][verset]) ga03b[livre][chapitre][verset] = '';
if (!ga03c[livre][chapitre][verset]) ga03c[livre][chapitre][verset] = '';
if (!ga03d[livre][chapitre][verset]) ga03d[livre][chapitre][verset] = '';
if (!ga04a[livre][chapitre][verset]) ga04a[livre][chapitre][verset] = '';
if (!ga04b[livre][chapitre][verset]) ga04b[livre][chapitre][verset] = '';
if (!ga04c[livre][chapitre][verset]) ga04c[livre][chapitre][verset] = '';
if (!ga04d[livre][chapitre][verset]) ga04d[livre][chapitre][verset] = '';
if (!ga05a[livre][chapitre][verset]) ga05a[livre][chapitre][verset] = '';
if (!ga05b[livre][chapitre][verset]) ga05b[livre][chapitre][verset] = '';
if (!ga05c[livre][chapitre][verset]) ga05c[livre][chapitre][verset] = '';
if (!ga32a[livre][chapitre][verset]) ga32a[livre][chapitre][verset] = '';
if (!ga32b[livre][chapitre][verset]) ga32b[livre][chapitre][verset] = '';
if (!stephanus1550[livre][chapitre][verset]) stephanus1550[livre][chapitre][verset] = '';
if (!scrivener1894[livre][chapitre][verset]) scrivener1894[livre][chapitre][verset] = '';
if (!tisch[livre][chapitre][verset]) tisch[livre][chapitre][verset] = '';
if (!wha[livre][chapitre][verset]) wha[livre][chapitre][verset] = '';
if (!sbl[livre][chapitre][verset]) sbl[livre][chapitre][verset] = '';
if (!na28[livre][chapitre][verset]) na28[livre][chapitre][verset] = '';
if (!seb_grec) seb_grec = '';
if (!critique[livre][chapitre][verset]) critique[livre][chapitre][verset] = '';



xbody=``+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:360:SINAITICUS-A `+ga01a[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:360:SINAITICUS-B `+ga01b[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:360:SINAITICUS-C `+ga01c[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:360:SINAITICUS-D `+ga01d[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:390:ALEXANDRINUS-A `+ga02a[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:390:ALEXANDRINUS-B `+ga02b[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:390:ALEXANDRINUS-C `+ga02c[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:330:VATICANUS-A `+ga03a[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:330:VATICANUS-B `+ga03b[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:330:VATICANUS-C `+ga03c[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:330:VATICANUS-D `+ga03d[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:410:EPHRAEMI-RESCRIPTUS-A `+ga04a[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:410:EPHRAEMI-RESCRIPTUS-B `+ga04b[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:410:EPHRAEMI-RESCRIPTUS-C `+ga04c[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:410:EPHRAEMI-RESCRIPTUS-D `+ga04d[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:430:BEZAE-A `+ga05a[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:430:BEZAE-B `+ga05b[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:430:BEZAE-C `+ga05c[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:420:WASHINGTONIANUS-A `+ga32a[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:2:420:WASHINGTONIANUS-B `+ga32b[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:4:1550:STEPHANUS `+stephanus1550[livre][chapitre][verset].replace(/(\r\n|\n|\r|\t)/gmi, " ").replace(/<i>|<\/i>/gmi," ").replace(/\s+/gmi," ")+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:4:1894:SCRIVENER `+scrivener1894[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:4:1869:TISCHENDORF `+tisch[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:4:1885:WESTCOTT-ET-HORT `+wha[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:4:2010:SBL `+sbl[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:4:2012:NESTLE-ET-ALAND `+na28[livre][chapitre][verset]+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:4:2021:SEBASTIEN-D-G `+seb_grec+`
`+livre+`:`+chapitre+`:`+verset+`:`+xbook[livre]+`:1:0:2012:AP-CRITIQUE-NA28 `+critique[livre][chapitre][verset]+``;




if (xbody.match(/̣/))
{
	xbody = xbody.replace(/(.)̣/g,"̣$1")
}

xbody = xbody.replace(/\n[0-9]+:\S+ $/gm,"");
xbody = xbody.replace(/ +/gmi," ");
xbody = xbody.replace(/ +$/gmi,"");



xbody = xbody.replace(/σ$/gm,'ς');
xbody = xbody.replace(/σ /g,'ς ');
xbody = xbody.replace(/σ\|/g,'ς|');
xbody = xbody.replace(/σ\] /g,'ς] ');
xbody = xbody.replace(/σ\]$/gm,'ς]');
xbody = xbody.replace(/σ̅ /g,'ς̅ ');
xbody = xbody.replace(/σ̅$/gm,'ς̅');




mots_separe = xbody.match(/\S+/gi);


for (numword = 0 ; numword != mots_separe.length ; numword++)
{
	if (mots_separe[numword].match(/\̅/))
	{
		
		//del barre du haut
		mot_separe_sans_barre = clean_nomina_sacra_barre(mots_separe[numword])
		
		//temp all clean
		mot_separe_clean = clean_all(mots_separe[numword])
		
		//si exist pas if (!nomsacre[mot_separe_clean]) console.log(mots_separe[numword]+' '+mot_separe_sans_barre+' '+mot_separe_clean)
	
		if (nomsacre[mot_separe_clean])
			mot_ns_end = '|'+mot_separe_sans_barre+'|'+'('+nomsacre[mot_separe_clean]+')';
		
		else
			mot_ns_end = '|'+mot_separe_sans_barre+'|';
		
		
		xbody = xbody.replace(mots_separe[numword],mot_ns_end);

	}

}


console.log(xbody);



}










	}

}
