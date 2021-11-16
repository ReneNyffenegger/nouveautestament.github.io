//FILE
fs		= require('fs');
read	= require('fs');
write	= require('fs');



book = {
1:'MATTHIEU',
2:'MARC',
3:'LUC',
4:'JEAN',
5:'ACTES',
6:'ROMAINS',
7:'1 CORINTHIENS',
8:'2 CORINTHIENS',
9:'GALATES',
10:'EPHESIENS',
11:'PHILIPPIENS',
12:'COLOSSIENS',
13:'1 THESSALONICIENS',
14:'2 THESSALONICIENS',
15:'1 TIMOTHEE',
16:'2 TIMOTHEE',
17:'TITE',
18:'PHILEMON',
19:'HEBREUX',
20:'JACQUES',
21:'1 PIERRE',
22:'2 PIERRE',
23:'1 JEAN',
24:'2 JEAN',
25:'3 JEAN',
26:'JUDAS',
27:'APOCALYPSE'
}


require('./jerome.js');

earray = []
earray = jerome;



//livre
for (livre = 1 ; livre != 28 ; livre++)
{

	//chapitre
	for (chapitre = 1 ; chapitre != earray[livre].length ; chapitre++)
	{
		//verset
		for (verset = 1 ; verset != earray[livre][chapitre].length ; verset++)
		{
			lcv = livre+':'+chapitre+':'+verset;
			//1:1:1:MATTHIEU:1:1:274:PAPYRUS1 βιβλος γενεσεως |ιυ|(ιησου) |χυ|(χριστου) |υυ|(υιου) δαυιδ υιου αβρααμ
			console.log(lcv+':'+book[livre]+':2:1:2007:IERONYMUS '+earray[livre][chapitre][verset])
	
			
		}
		
		
		
	}
	
}