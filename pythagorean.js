var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];


var result = input.map( function(element) {
  var formulaZSquare = 0;
  var formulaZ = 0;
  var formulaX = undefined;
  var formulaY = undefined;

  formulaX = element["x"];
  formulaY = element["y"];

  formulaZSquare = (formulaX * formulaX) + (formulaY * formulaY);

  formulaZ = Math.sqrt(formulaZSquare);




  return formulaZ;




});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);