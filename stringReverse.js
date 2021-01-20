function reverseString(str){
    var reverse = "";
    for(var i=0; i<str.length;i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var speech = "Hey, This is Shadow_Chaser";

console.log(reverseString(speech));


function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));