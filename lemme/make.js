



file1		= require('fs')
file2		= require('fs')
fs			= require('../database/lemme.js')

sebastien	= file1		.readFileSync('../database/sebastien_te.txt',"utf-8")
sebastien	= sebastien	.split('\n')




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




	for (l = 0 ; l != sebastien.length ; l++)
	{     
		
		if (sebastien[l].indexOf('='+lem+'=') != -1)
		{
			

			splitline	= sebastien[l].split(' ')
			debline		= splitline[0].split(':');
			lcv = debline[3]+' '+debline[1]+' '+debline[2]+'<br>'

			main += '<b>'+lcv+'</b>'
			
			line = ''
			for (y=1 ; y!=splitline.length ; y++)
			{
				split2 = splitline[y].split('=')
				
				if (split2[1] == lem)
					line += '<span class="c">'+split2[0]+'</span> '
				else
					line += split2[0]+' '
				
			}

			main += line+'<br><br>\n' 

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
