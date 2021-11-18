

//FILE
fs		= require('fs');
fichier	= fs.readFileSync('apocalypse.html', 'utf8');




chapitre	= fichier.match(/<section.*?<\/section>/sg);


for (nb_chap=0 ; nb_chap != chapitre.length ; nb_chap++)
{
	
	chap = nb_chap+1;
	
	line = chapitre[nb_chap].match(/^.*$/mg);
	
	
	for (nb=0 ; nb != line.length ; nb++)
	{
		//line[nb] = line[nb].replace(/<a class="apnb".*?<\/a>/g,'');
		
		if (line[nb].match(/<p class="entete">/i))
		{
			verset = line[nb].match(/([0-9]+)\./);
			console.log('APOCALYPSE:'+chap+':'+verset[1]);
		}
		
		
		//line[nb] = line[nb].replace(/[0-9]+\. /g,'');
		line[nb] = line[nb].replace(/<p class="entete">.*?<\/p>/i,'');
		line[nb] = line[nb].replace(/<h2 class="chap_n" epub:type="title"><span>.*?<\/span><\/h2>/i,'');
		line[nb] = line[nb].replace(/<.*?>/g,'');
		console.log(line[nb]);
		
		
	}
	
	
	
}
