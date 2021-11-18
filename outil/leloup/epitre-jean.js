
livrejean = {
1:'1JEAN',
2:'2JEAN',
3:'3JEAN',
}

//FILE
fs		= require('fs');
fichier	= fs.readFileSync('epitre-jean.html', 'utf8');



//livre

livres = fichier.match(/<body>.*?<\/body>/sg);

for (nblivre = 0 ; nblivre != livres.length ; nblivre++)
{
	
	livre = nblivre+1;

	chapitres = livres[nblivre].match(/<ol.*?<\/ol>/sg);
	
	for (nbchap = 0 ; nbchap != chapitres.length ; nbchap++)
	{
		chapitre = nbchap+1;
		
		versets	=	chapitres[nbchap].match(/<li>.*?<\/li>/sg);
		
		for (nbvers = 0 ; nbvers != versets.length ; nbvers++)
		{
			
			verset = nbvers+1;
			
			texte = versets[nbvers].replace(/<.*?>/g,'');
			console.log(livrejean[livre]+':'+chapitre+':'+verset+' '+texte);
			
		}
		
	}
	
	


}
