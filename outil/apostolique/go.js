

book = {
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




function clean(verset) {
	

	verset = verset.replace(/[a-zA-Z0-9⟦⟧ˉ!"'*,-\\.\/:;᾽?\[\]`¶*+\-\/:;\··͵᾿—†↔◦⳨⸀⸁⸄⸅̣0\·ëʹʼ– ;‘’“”…�]/g,'');
	verset = verset.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	verset = verset.toLowerCase();
	verset = verset.replace(/ς/ig,'σ');


	//ϗ
	verset = verset.replace(/ϗ/ig,'και');

	return verset;
}



function multi_array(list, n = 0, result = [], current = [])
{
    
	if (n == list.length) 
		result.push(current)
    else 
		list[n].some(function (item) { multi_array(list, n+1, result, [...current, item])})
 
    return result

}


fichier		= require('fs');
fichier2	= require('fs');



apostolique	= fichier.readFileSync(process.argv[2], 'utf8');
database	= fichier.readFileSync('../../database/database_el.txt', 'utf8');


splitfile = process.argv[2].split('.')[0].split('-')

nbf		= parseInt(splitfile[0])
date	= splitfile[1]
if (splitfile.length == 4)
nomf	= splitfile[2].toUpperCase()+'-'+splitfile[3].toUpperCase()
else

nomf	= splitfile[2].toUpperCase()


codagetexte = ':'+nbf+':'+date+':'+nomf+':'

//console.log(codagetexte)
//15:200:mathetes-DIOGNETUS


//line by line
ligneapostolique	= apostolique.match(/^.*$/mg);
lignedatabase		= database.match(/^.*$/mg);


//pure line by line
ligneapostolique_pure	= apostolique.match(/^.*$/mg);
lignedatabase_pure		= database.match(/^.*$/mg);


//CLEAN 1
for (x=0 ; x!=ligneapostolique.length ; x++)
{
	arraysplit = ligneapostolique[x].split(' ');
	lcv = arraysplit[0];
	arraysplit.shift();
	arraysplit = arraysplit.join('');
	ligneapostolique[x] = clean(arraysplit);
	ligneapostolique[x] = lcv +' '+ ligneapostolique[x];
}






//CLEAN 2
for (x=0 ; x!=lignedatabase.length ; x++)
{
	arraysplit = lignedatabase[x].split(' ');
	
	lcv		= arraysplit[0];
	arraysplit.shift();
	texte	= arraysplit.join('');
	texte	= clean(texte);
	
	if (lignedatabase[x].indexOf('AP-CRITIQUE') == -1)
	{


		if (lignedatabase[x].indexOf('|(') != -1)
		{
			texte = texte.replace(/\|.*?\|\((.*?)\)/gi, "($1)")

			
			allnominasacra = texte.match(/(\(.*?)\)/g)
			arrayns = []	


			

			for (nomina = 0 ; nomina != allnominasacra.length ; nomina++)
			{

				if (allnominasacra[nomina].indexOf('_') != -1)
				{

					arrayns2 = []
					alldivunderscore = allnominasacra[nomina].slice(1,-1);
					alldivunderscore = alldivunderscore.split('_');


					for (divunderscore=0 ; divunderscore != alldivunderscore.length ; divunderscore++)
					{
						arrayns2.push(allnominasacra[nomina]+'::'+alldivunderscore[divunderscore])
					}
					arrayns.push(arrayns2)
					
				}
				
				
				
			}


		if (lignedatabase[x].indexOf('_') != -1)
			{
			marrayns = multi_array(arrayns);
			//xc = 0;
			for (xnb=0 ; xnb != marrayns.length ; xnb++)
			{
				newtexte = texte;
				for (ynb=0; ynb != marrayns[xnb].length; ynb++)
				{
					newtexte = newtexte.replace( marrayns[xnb][ynb].split('::')[0] , marrayns[xnb][ynb].split('::')[1] )
				}
				//xc++;

				//newtexte= lcv+'-phrase'+xc+' '+newtexte.replace(/[()]/g,"")
				newtexte= lcv+'-NSTEST'+' '+newtexte.replace(/[()]/g,"")
				lignedatabase.push(newtexte)
				lignedatabase_pure.push(lignedatabase[x])
				
			}
			texte = '';
				

			}
			
			
			
		}

		texte = texte.replace(/[()|_]/g,"")

	}


	lignedatabase[x] = lcv +' '+ texte;

}





for (x0=0 ; x0!=ligneapostolique.length ; x0++)
{
	for (yy=0 ; yy<=ligneapostolique[x0].length-20 ; yy++)
	{
		getcode = ligneapostolique[x0].slice(yy,yy+20);
	
		for (x1 = 0 ; x1 != lignedatabase.length ; x1++)
		{
				
				if (lignedatabase[x1].indexOf(getcode) != -1)
				{
					num_verset_apostolique = ligneapostolique[x0].split(' ')[0];
					num_verset_database = lignedatabase[x1].split(' ')[0];
					console.log(num_verset_database+codagetexte+ligneapostolique_pure[x0]+' --||-- '+lignedatabase_pure[x1]);
				}

		}	
	}
}