

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
	


	//verset = verset.replace(/[\.\[\]\;\᾽,\·\/#;\;!$%\^&\*;’…\⟦\⟧':{}=\-–_`~\(\) ]/g,''); //with space
	//verset = verset.replace(/[\|a-zA-Z0-9\",-\.\/`¶\·\ʹ\ʼ\͵–‘’“”�]/g,'');

	// !"'()*,-./:;?[]_`|¶·ëʹʼ–‘’“”…�
	verset = verset.replace(/[a-zA-Z0-9\!\"'()*,-.\/:;\?\[\]_`\|¶·ëʹʼ– ‘’“”…�]/g,'');
	verset = verset.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	verset = verset.toLowerCase();
	verset = verset.replace(/ς/ig,'σ');


	return verset;
}





fichier		= require('fs');
fichier2	= require('fs');



apostolique	= fichier.readFileSync(process.argv[2], 'utf8');
database	= fichier.readFileSync('data.txt', 'utf8');



//line by line
ligneapostolique	= apostolique.match(/^.*$/mg);
lignedatabase		= database.match(/^.*$/mg);


//pure line by line
ligneapostolique_pure	= apostolique.match(/^.*$/mg);
lignedatabase_pure	= database.match(/^.*$/mg);



//CLEAN

for (x=0 ; x!=ligneapostolique.length ; x++)
{
	arraysplit = ligneapostolique[x].split(' ');
	lcv = arraysplit[0];
	arraysplit.shift();
	arraysplit = arraysplit.join('');
	ligneapostolique[x] = clean(arraysplit);
	ligneapostolique[x] = lcv +' '+ ligneapostolique[x];
}


for (x=0 ; x!=lignedatabase.length ; x++)
{
	arraysplit = lignedatabase[x].split(' ');
	lcv = arraysplit[0];
	arraysplit.shift();
	arraysplit = arraysplit.join('');
	lignedatabase[x] = clean(arraysplit);
	lignedatabase[x] = lcv +' '+ lignedatabase[x];
}




for (x0=0 ; x0!=ligneapostolique.length ; x0++)
{
	
	
		for (yy=0 ; yy<=ligneapostolique[x0].length-22 ; yy++)
		{
			getcode = ligneapostolique[x0].slice(yy,yy+22);

			
			for (x1 = 0 ; x1 != lignedatabase.length ; x1++)
			{

				
				if (lignedatabase[x1].indexOf(getcode) != -1)
				{
					num_verset_apostolique = ligneapostolique[x0].split(' ')[0];
					num_verset_database = lignedatabase[x1].split(' ')[0];

					console.log(num_verset_database+' '+ligneapostolique_pure[x0]);
				}



			}




			
			
		}
		
		

}
