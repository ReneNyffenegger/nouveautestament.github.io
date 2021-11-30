



file1		= require('fs')
file2		= require('fs')
fs			= require('../database/lemme.js')

sebastien_te	= file1		.readFileSync('../database/sebastien_te.txt',"utf-8")
sebastien_te	= sebastien_te	.split('\n')


sebastien_fr	= file1			.readFileSync('../database/sebastien_fr.txt',"utf-8")
sebastien_fr	= sebastien_fr	.split('\n')


//HTML
intro = `<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Nouveau Testament">
		<meta name="keywords" content="Nouveau Testament">
	
		<title>NOUVEAU TESTAMENT</title>

		<style>
			html {
				font-size:	15px;
			}
			
			body {
				font-family: sans-serif;
			}
		
			h2 {
				font-family: serif;
			}
		
			a {
				color:				black;
				text-decoration:	none;
				font-family:		sans-serif;
			}

			a:hover {
				text-decoration:	underline;
			}
			
			.c {
				background-color:	yellow;
			}
			
			.l {
				font-size:13px;
			}
			
			td {
				padding-left:		10px;
			}
			
			tr:hover {
				background-color:	#f6f8fa;
			}			
		</style>
	</head>
<body>
`



//HTML
end = `</body></html>`


lemmes = ''
incoherences = ''
x = 0

for (lem in lemme)
{


	trad	= lemme[lem][0]
	exemp	= lemme[lem][1]
	morph	= lemme[lem][2]
	origin	= lemme[lem][3]

	
	main  = '<h2>' + lem + '</h2>\n'

	main += '<h3>' + trad + '</h3>\n'
	
	main += '<br>'+exemp

	main += '<br>'+morph

	main += '<br>'+origin

	main += '<br><br><br>\n'




	for (l = 0 ; l != sebastien_te.length ; l++)
	{     
		
		if (sebastien_te[l].indexOf('='+lem+'=') != -1)
		{
				
			te		= sebastien_te[l].split(' ');
			fr		= sebastien_fr[l].split(' ');
			
			lcvteinfo	= te[0].split(':');
			lcvfrinfo	= fr[0].split(':');

			lcvte = lcvteinfo[0]+':'+lcvteinfo[1]+':'+lcvteinfo[2]
			lcvfr = lcvfrinfo[0]+':'+lcvfrinfo[1]+':'+lcvfrinfo[2]
			
			//check 3
			if (lcvte != lcvfr)
				console.log(lcvte + ' '+ lcvfr)
		
		
			textete = sebastien_te[l].replace(te[0]+' ', "").split(' ')
			textefr = sebastien_fr[l].replace(fr[0]+' ', "").split('#')
			
			
			lcv = '<br>'+lcvteinfo[3]+' '+lcvteinfo[1]+' '+lcvteinfo[2]+'<br>'
			
			main += '<b>'+lcv+'</b>'
			
			
			
			elline = ''
			frline = ''
			for (y=0 ; y!=textete.length ; y++)
			{
				split2 = textete[y].split('=')
				
				if (split2[1] == lem)
				{
					elline += '<span class="c">'+split2[0]+'</span><span class="l">('+split2[2]+')</span> '
					frline += '<span class="c">'+textefr[y]+'</span> '
				}
				else
				{
					elline += split2[0]+' '
					frline += textefr[y]+' '
				}
				
				
			}

			main += elline+'<br><br>'+frline+'<br><br>\n' 

		}
		
	}

	
	file2.writeFileSync(lem + '.html' , intro + main + end , "utf-8")
	
	
	
	x++;
	lemmes += '<tr><td><b>'+x+'</b></td><td><a target="_blank" href="'+lem+'.html">'+lem+'</a></td><td>'+trad+'</td></tr>\n'
	


	//incoherences
	for (lem2 in lemme)
	{
		trad1	= trad.split(',')[0]
		trad2	= lemme[lem2][0].split(',')[0]
		
		if (lem != lem2)
		{
			if (trad1 == trad2)
			{
				incoherences += '<tr><td><a target="_blank" href="'+lem+'.html">'+lem+'</a></td><td>'+trad1+'</td><td><a target="_blank" href="'+lem2+'.html">'+lem2+'</a></td><td>'+trad2+'</td></tr>\n'
			}
		}

	}
	


}



file2.writeFileSync('lemmes.html' , intro + '<table>' + lemmes + '</table>' + end , "utf-8")

file2.writeFileSync('incoherences.html' , intro + '<table>' + incoherences + '</table>' + end , "utf-8")
