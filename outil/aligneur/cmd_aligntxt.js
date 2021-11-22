function aligner(arrays)
{
	
	function alignText(txt, width) 
	{
		
		if (txt) 
			txt = "" + txt;
		else 
			txt = '';
		
		
		txtl	= txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        var p	= width - txtl.length;

        space = '';
		
		for (x=0;x != p ;x++)
			space+=" ";
				
		ok = "" + txt + space;

        return ok
    }



    function calcColumnsWidth(matrix) {
       var colsWidth = [];
       for (var r = 0, rLen = matrix.length; r < rLen; r++) {
           
           for (var c = 0, cLen = matrix[r].length; c < cLen; c++) {
                if (!colsWidth[c]) colsWidth[c] = 0;
                
                tx = matrix[r][c].normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                colsWidth[c] = Math.max(colsWidth[c], ("" + tx).length);
            }
        }
        
        return colsWidth;
    }
    
    

    
    var colsWidth = calcColumnsWidth(arrays);


    var table = [];
    for (var r = 0, rLen = arrays.length; r < rLen; r++) {
        var cols = [];

        if (arrays[r]) { 
            for (c = 0; c < colsWidth.length; c++) {
				
                cols.push(alignText(arrays[r][c], colsWidth[c]));
            }
            table.push([ cols.join(" ")].join(' '));
        }
        else {
            for (c = 0; c < colsWidth.length; c++) {
                cols.push(repeatStr(colsWidth[c] + paddingLength));
            }
            table.push([ cols.join(" ")].join(' '));
        }
    }
    
    
    return table;
}







namefile	= process.argv.splice(2).join('');
fs			= require('fs');
file		= fs.readFileSync(namefile,'utf-8');


line		= file.match(/^.*$/mg);

blankline	= 0;
array		= []


for (nbline=0 ; nbline != line.length ; nbline++)
{
	if (line[nbline])
	{
		mot_split = line[nbline].match(/\S+/g)
		array.push(mot_split);
		blankline = 0;
	}
	else 
	{
		blankline++;
		if (blankline == 2)
		{
			array=[]
			blankline=0;
		}
	}
	
}




console.log(aligner(array).join('\n'))