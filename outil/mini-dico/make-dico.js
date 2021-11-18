
head_html = `<!DOCTYPE html><html lang="fr">
<head>
<title>NT</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<style type="text/css">

html {
	margin:30px;
}

body {
	font-family: serif;
	font-size:17px; /* font-size:11px; */
}

b {
  font-family: sans-serif;

}

}
</style></head><body>`;


body_html = "\n";

fs			= require('fs');
file		= require('fs');
result	= fs.readFileSync('dictionnaire.txt', 'utf8');


line = result.match(/^.*$/mg);
debl = '';
for (nb=0;nb!=line.length;nb++)
{
	if (line[nb] != '')
	{
		word = line[nb].split('=');


	if (word[0][0].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") != debl)
		body_html += '<h1>'+word[0][0].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")+'</h1>\n';
	
    body_html	+= '<div><b>'+word[0]+'</b>&ensp; '+word[1]+'</div>\n';
	debl		= word[0][0].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");



  }

}

file.writeFileSync('dictionnaire.html',head_html+body_html+'</body></html>', 'utf8');
