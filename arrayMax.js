var marks = [45,85,99,32,25,69,78,52,63,14,52,65,26,56,65,96,64,62,25,36];
var max = marks[0];

for (var i = 0; i < marks.length; i++) {
  if (marks[i] > max) {
    max = marks[i];
  }
}
 console.log(max);