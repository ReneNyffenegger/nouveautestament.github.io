



tablegrec = {
'Α':'A',
'α':'a',
'Β':'B',
'β':'b',
'Γ':'G',
'γ':'g',
'Δ':'D',
'δ':'d',
'Ε':'E',
'ε':'e',
'Ζ':'Z',
'ζ':'z',
'Η':'Ê',
'η':'ê',
'Θ':'Th',
'θ':'th',
'Ι':'I',
'ι':'i',
'Κ':'K',
'κ':'k',
'Λ':'L',
'λ':'l',
'Μ':'M',
'μ':'m',
'Ν':'N',
'ν':'n',
'Ξ':'Ks',
'ξ':'ks',
'Ο':'O',
'ο':'o',
'Π':'P',
'π':'p',
'Ρ':'R',
'ρ':'r',
'Σ':'S',
'σ':'s',
'ς':'s',
'Τ':'T',
'τ':'t',
'Υ':'Y',
'υ':'y',
'Φ':'PH',
'φ':'ph',
'Χ':'Ch',
'χ':'ch',
'Ψ':'Ps',
'ψ':'ps',
'Ω':'Ô',
'ω':'ô',
'-':'-',
'–':'–',
'_':'_',
' ':' ',
'1':'1'}

function grectofrench(grw) {
	

	grw=grw.split('');
	send='';
	for (z=0; z != grw.length;z++)
	{
		if (!tablegrec[grw[z]])
			console.log('ERROR : '+grw[z])
		
		send+=tablegrec[grw[z]];
	}
	return send;
}






file1		= require('fs')
file2		= require('fs')

require('../database/lemme.js')

sebastien_te	= file1		.readFileSync('../database/sebastien_te.txt',"utf-8")
sebastien_te	= sebastien_te	.split('\n')


sebastien_fr	= file1			.readFileSync('../database/sebastien_fr.txt',"utf-8")
sebastien_fr	= sebastien_fr	.split('\n')


require('./biblehub.js');
require('./perseus.js');
require('./james.js');

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
				padding-right:		10px;
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



arraylem = []

//add lemme in array
for (lem in lemme)
{
	arraylem.push(lem)
}


for (lem in lemme)
{

	

	
	trad	= lemme[lem][0]
	exemp	= lemme[lem][1]
	morph	= lemme[lem][2]
	origin	= lemme[lem][3]


	nlem = lem.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	nlem = grectofrench(nlem)
	
	if (!arraylem[x-1])
		main = '<span style="font-size:20px"><a href="lemmes.html">TOUS</a>  <a href="'+arraylem[x+1]+'.html">'+arraylem[x+1]+'--></a></span>'
	
	else if (!arraylem[x+1])
		main = '<span style="font-size:20px"><a href="'+arraylem[x-1]+'.html"><-- '+arraylem[x-1]+'</a> <a href="lemmes.html">TOUS</a></span>'
	
	else
		main = '<span style="font-size:20px"><a href="'+arraylem[x-1]+'.html"><-- '+arraylem[x-1]+'</a> <a href="lemmes.html">TOUS</a>  <a href="'+arraylem[x+1]+'.html">'+arraylem[x+1]+'--></a></span>'

	
	main  += '<h2>' + lem + ' ('+nlem+')</h2>\n'

	main += '<h3>' + trad + '</h3>\n'
	
	//main += '<br>'+nlem
	
	main += '<br>'+exemp

	main += '<br><span style="color:red">'+morph+'</span>'

	main += '<br>'+origin

	if (james[lem])
		main += '<br><br>'+james[lem]
	
	if (perseus[lem])
		main += '<br><br>'+perseus[lem]

	if (biblehub[lem])
		main += '<br><br>'+biblehub[lem]

	


	
	
	concordance = []
	main2 = ''

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
			
			
			//lcv = '<br>'+lcvteinfo[3]+' '+lcvteinfo[1]+' '+lcvteinfo[2]+'<br>'
			
			main2 +=	'<br><b>'+lcvteinfo[3]+' '+lcvteinfo[1]+' '+lcvteinfo[2]+'</b> '+
						'<a target="_blank" href="../interlineaire/hellene/'+lcvteinfo[0]+'-'+lcvteinfo[1]+'.html#V'+lcvteinfo[2]+'">EL</a> '+
						'<a target="_blank" href="../interlineaire/francais/'+lcvteinfo[0]+'-'+lcvteinfo[1]+'.html#V'+lcvteinfo[2]+'">FR</a> '+
						'<a target="_blank" href="../interlineaire/technique/'+lcvteinfo[0]+'-'+lcvteinfo[1]+'.html#V'+lcvteinfo[2]+'">TE</a><br>'
			
			elline = ''
			frline = ''
			for (y=0 ; y!=textete.length ; y++)
			{
				split2 = textete[y].split('=')
				
				if (split2[1] == lem)
				{
					
					
					elline += '<span class="c">'+split2[0]+'</span><span class="l">('+split2[2]+')</span> '
					frline += '<span class="c">'+textefr[y]+'</span> '

					
				
					concordance.push ('<td>'+split2[0]+'</td>'+'<td>'+split2[2]+'</td><td>'+textefr[y]+'</td>')
						
	
					
				}
				else
				{
					elline += split2[0]+' '
					frline += textefr[y]+' '
				}
				
				
			}

			main2 += elline+'<br><br>'+frline+'<br><br>\n' 

		}
		
	}


	if (concordance.length != 0)
	{
		
		
		main +=	'<br><br><table><tr>'+
					'<td><b>Hellène</b></td>'+
					'<td><b>Morphologie</b></td>'+
					'<td><b>Traduction</b></td>'+
					'<td><b>Répétition</b></td>'+
					'</tr>'
		
		//uniq count
		var uniqs = concordance.reduce((acc, val) => 
		{
			acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
			return acc;
		}, {});
		
		
		
		for (uc in uniqs)
		{
			
			main += '<tr>'+uc+'<td>'+uniqs[uc]+'</td><tr>'
			
			
		}
		
		
		main +=	'</table>';
	}

	main += '<br><br><br>\n'

	main += main2
	
	
	
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
