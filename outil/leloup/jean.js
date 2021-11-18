

//FILE
fs		= require('fs');
fichier	= fs.readFileSync('jean.html', 'utf8');




chapitre	= fichier.match(/<div class="dev">.*?<\/div>/sg);


for (nb_chap=0 ; nb_chap != chapitre.length ; nb_chap++)
{
	
	chap = nb_chap+1;
	
	line = chapitre[nb_chap].match(/^.*$/mg);
	
	
	for (nb=0 ; nb != line.length ; nb++)
	{
		line[nb] = line[nb].replace(/<a class="apnb".*?<\/a>/g,'');
		if (line[nb].match(/([0-9]+)\./))
		{
			verset = line[nb].match(/([0-9]+)\./);
			console.log('JEAN:'+chap+':'+verset[1]);
		}
		
		
		line[nb] = line[nb].replace(/[0-9]+\. /g,'');
		line[nb] = line[nb].replace(/<.*?>/g,'');
		console.log(line[nb]);
		
		
	}
	
	
	//console.log(livres[nb_chap+1])
	
	/*
	//get livre
	if (line[nb].match(/A<small>NNONCE DE/))
	{
		livre++;
		//console.log('LIVRE = '+livre)
	}
	
	
	//get chapitre
	if (line[nb].match(/<h2 class="ch-num">/))
	{
		chapitre = line[nb].match(/([0-9]+)</)
		chapitre = parseInt(chapitre[1]);
		//console.log('CHAPITRE = '+chapitre)
	}
	
	
	//get verset
	if (line[nb].match(/<span class="lis">/))
	{
		verset = line[nb].match(/<span class="lis">([0-9]+)</)
		verset = parseInt(verset[1]);
		//console.log('VERSET = '+verset)
		
		//check verset
		if (verset != ver_avant+1)
			console.log(livre+' '+chapitre+' '+verset)

	}


	
	if (ver_avant != verset)
	{
		verset_a[ver_avant]	= texte.replace(/^ +/,'');
		texte = '';

		
	}


	if (chap_avant != chapitre)
	{
		verset_a[0] = livre_avant+':'+chap_avant+':'+ver_avant;
		verset_a[ver_avant]	= texte.replace(/^ +/,'');
		chapitre_a[chap_avant] = verset_a;
		
		//console.log(verset_a);
		
		
		

		texte = '';
		verset = 0;
		ver_avant = 0;
		verset_a = [];
	}



	if (livre_avant != livre)
	{

		verset_a[ver_avant]	= texte.replace(/^ +/,'');
		verset_a[0] = livre_avant+':'+chap_avant+':'+ver_avant;
		chapitre_a[chap_avant] = verset_a;
		verset_a = [];


		tchap = chapitre_a.length-1;
		chapitre_a[0] = livre_avant+'-'+livres[livre_avant]+' - '+tchap+' chapitres';
		livre_a[livre_avant] = chapitre_a;
		
		chapitre_a = [];
		chap_avant = 0;
		chapitre = 0;
		
	}

	
	//get texte
	if (line[nb].match(/<p class="hang">/))
	{
		texteverset	= line[nb].replace(/<sup>[0-9]+<\/sup>/gi,'');
		texteverset	= texteverset.replace(/<span class="lis">[0-9]+<\/span>/gi,'');
		texteverset	= texteverset.replace(/<.*?>/gi,'');
		
		texte += ' '+texteverset;
		//console.log('TEXTE = '+texteverset)
	}
	

	livre_avant	= livre;
	chap_avant	= chapitre;
	ver_avant	= verset;
	
	
	*/
	
}


/*

verset_a[ver_avant]	= texte.replace(/^ +/,'');

verset_a[0]=livre_avant+':'+chap_avant+':'+ver_avant;
chapitre_a[chap_avant]=verset_a;
		
tchaps = chapitre_a.length-1;
chapitre_a[0] = livre_avant+'-'+livres[livre_avant]+' - '+tchaps+' chapitres';
livre_a[livre_avant] = chapitre_a;

tlivres     = livre_a.length-1;
livre_a[0]  = 'BIBLE ARAMÉEN - CALAME - '+tlivres+' livres';
fs.writeFileSync('calame.js', 'calame='+JSON.stringify(livre_a, null, 1), 'utf8');

*/