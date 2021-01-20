var marks = [45,85,99,32,25,69,78,52,63,14,52,65,26,56,65,96,64,62,25,36];
var sum = 0;

for (var i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}
console.log(sum);

// Function

function getArraySum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(getArraySum(marks));
