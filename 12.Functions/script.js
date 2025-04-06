

function logger(){
  console.log('My name is Jonas');
}

//calling , running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);

const num = Number('23');


//function declaration
function calcAge1(birthYear){
  return 2025 - birthYear;
}
const age1 = calcAge1(2002);


//function expression
const calcAge2 = function (birthYear){
  return 2030 - birthYear
}
const age2 = calcAge2(2002);
console.log(age1, age2);

