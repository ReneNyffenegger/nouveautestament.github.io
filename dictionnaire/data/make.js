

file	= require('fs');
fs 		= require("fs");
f		= require("fs");





result			= f.readFileSync("lsj.txt", 'utf8');
lignes			= result.match(/^.*$/mg);



lemtest = {};
lemlist = "";



for (ligne = 0 ; ligne != lignes.length ; ligne++)
{
	
	lignesplit	= lignes[ligne].split('|||');
	lem			= lignesplit[0].replace(/^ +| +$/, "");
	info		= lignesplit[1];
	


	if (lemtest[lem])
	{
		lem = '+'+lem;

		if (lemtest[lem]) console.log(lem)
	}
		

	if (lem.match(/\s+/))
	{
		lem = lem.replace(/\s+/g,"-")
	}
	
	if (lem.match(/\*/))
	{
		lem = lem.replace(/\*/g,"+")
	}



	if (fs.existsSync('./lsj/'+lem+'.html')) {

		lem = '-'+lem;
		if (fs.existsSync('./lsj/'+lem+'.html')) console.log('exist:'+lem+'.html');
		
	}



	//file.writeFileSync('./lsj/'+lem+'.html', '<b>'+lem+'</b> &ensp; '+info , 'utf8');
	file.writeFileSync('./lsj/'+lem+'.html', info , 'utf8');
	//console.log('|'+info+'|')

	lemtest[lem] = "x";
	lemlist += lem+' ';

}

console.log(lignes.length)
file.writeFileSync('lsj_mots.txt', lemlist , 'utf8');