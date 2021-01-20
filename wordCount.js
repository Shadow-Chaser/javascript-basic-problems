var speech = "Lorem ipsum dolor sit amet,   consectetur adipiscing elit. Phasellus sed faucibus ligula. Donec a pulvinar mi. Donec dictum sollicitudin nisl, at iaculis purus molestie sed. Cras varius lorem nec urna efficitur, a lobortis risus hendrerit. Nullam vel metus dui. Donec scelerisque mauris dapibus tincidunt imperdiet. Sed augue elit, imperdiet vel."

var word = 0;
 for(var i=0; i<speech.length;i++){
     var char = speech[i];
     if(speech[i]==' ' && speech[i-1]!=" "){
         word++;
     }

 }

 console.log(word+1);