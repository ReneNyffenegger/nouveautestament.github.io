

fs		= require('fs');


files	= {
"01a.txt":"1:2:360:SINAITICUS-A",
"01b.txt":"1:2:360:SINAITICUS-B",
"01c.txt":"1:2:360:SINAITICUS-C",
"01d.txt":"1:2:360:SINAITICUS-D",

"02a.txt":"1:2:390:ALEXANDRINUS-A",
"02b.txt":"1:2:390:ALEXANDRINUS-B",
"02c.txt":"1:2:390:ALEXANDRINUS-C",

"03a.txt":"1:2:330:VATICANUS-A",
"03b.txt":"1:2:330:VATICANUS-B",
"03c.txt":"1:2:330:VATICANUS-C",
"03d.txt":"1:2:330:VATICANUS-D",

"04a.txt":"1:2:410:EPHRAEMI-RESCRIPTUS-A",
"04b.txt":"1:2:410:EPHRAEMI-RESCRIPTUS-B",
"04c.txt":"1:2:410:EPHRAEMI-RESCRIPTUS-C",
"04d.txt":"1:2:410:EPHRAEMI-RESCRIPTUS-D",

"05a.txt":"1:2:430:BEZAE-A",
"05b.txt":"1:2:430:BEZAE-B",
"05c.txt":"1:2:430:BEZAE-C",

"032a.txt":"1:2:420:WASHINGTONIANUS-A",
"032b.txt":"1:2:420:WASHINGTONIANUS-B",
}



xbook	= {
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
27:'APOCALYPSE',
}

book	= {
'MATTHIEU':'1',
'MARC':'2',
'LUC':'3',
'JEAN':'4',
'ACTES':'5',
'ROMAINS':'6',
'1CORINTHIENS':'7',
'2CORINTHIENS':'8',
'GALATES':'9',
'EPHESIENS':'10',
'PHILIPPIENS':'11',
'COLOSSIENS':'12',
'1THESSALONICIENS':'13',
'2THESSALONICIENS':'14',
'1TIMOTHEE':'15',
'2TIMOTHEE':'16',
'TITE':'17',
'PHILEMON':'18',
'HEBREUX':'19',
'JACQUES':'20',
'1PIERRE':'21',
'2PIERRE':'22',
'1JEAN':'23',
'2JEAN':'24',
'3JEAN':'25',
'JUDAS':'26',
'APOCALYPSE':'27',
}

//	-- NOMINA SACRA --

require('../nomsacre.js');





for (txt in files)
{
	
	//1:1:1:MATTHIEU:1:2:330:VATICANUS-A βιβλος γενεσεως |ιυ|(ιησου) |χυ|(χριστου) υιου δαυειδ υιου αβρααμ
	
	line = fs.readFileSync(txt, 'utf8').split("\n");
	
	for (x = 0 ; x != line.length ; x++)
	{
		sline = line[x].split(' ')
		livre = sline[0]
		chve  = sline[1]
		
		sline.shift()
		sline.shift()
		
		nline = sline.join(' ')
		
		if (!nline.match(/^\s+$/))
		{
			
			lcvb  = book[livre]+':'+chve+':'+livre
			nline = lcvb+':'+files[txt]+' '+nline
			console.log(nline)
			
		}
		
		
		
	}
	
	
}

