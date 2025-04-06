// arrow functions
const calcAge = birthYeah => 2037 - birthYeah;
const age1 = calcAge(1991);
console.log(age1);

const yearsUntillRetirement = (birthYeah, firstName) => {
  const age = 2025 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntillRetirement(2002, 'jonas'));