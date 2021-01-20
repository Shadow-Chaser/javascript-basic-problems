var marks = [45,85,99,32,25,69,78,52,63,14,52,65,14,26,56,65,96,64,62,25,36];
var unique = [];
for(var i=0;i<marks.length;i++)
{
    var element = marks[i];
    var index = unique.indexOf(element);
    
    if(index == -1){
        unique.push(element);
    }
    
 }

 console.log(unique);