
fichier1		= require('fs')
//datafile	= fichier1.readFileSync('../database/sebastien_te.txt', 'utf8').split('\n')
//datafile	= fichier1.readFileSync('../database/robinson_te.txt', 'utf8').split('\n')
datafile	= fichier1.readFileSync('../database/tauber_te.txt', 'utf8').split('\n')


function convnumber(a,b,c)
{
	if (a.length == 1) a = '0'+a;
	if (b.length == 1) b = '0'+b;
	if (c.length == 1) c = '0'+c;

	return a+b+c;
}



function clean(verset) {
	

	verset = verset.replace(/[a-zA-Z0-9⟦⟧ˉ!"'*,-\\.\/:;᾽?\[\]`¶*+\-\/:;\··͵᾿—†↔◦⳨⸀⸁⸄⸅̣0\·ëʹʼ– ;‘()’⸃⸂“”…�]/g,'');
	//verset = verset.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	verset = verset.toLowerCase();
	//verset = verset.replace(/ς/ig,'σ');
	//verset = verset.replace(/ϗ/ig,'και');

	return verset;
}






for  (lineseb=0 ; lineseb!=datafile.length ; lineseb++)
{
	
	if (datafile[lineseb] != "" && datafile[lineseb]) 
	{

		
		lcvteinfo	= datafile[lineseb].split(' ')
		
		if (lcvteinfo.length > 2) 
		{

			textete		= datafile[lineseb].replace(lcvteinfo[0]+' ',"").split(' ');
			
			
			for (s = 0 ; s != textete.length ; s++)
			{
				
				mot=textete[s].split('=')
				el		= clean(mot[0])
				lem		= mot[1]
				morph	= mot[2]
				
				console.log(el+' '+lem+' '+morph)

			}
			
		}
		
		

	}
	
}