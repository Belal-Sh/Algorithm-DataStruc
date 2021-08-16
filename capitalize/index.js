// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capArr = [];
  let strArr = str.split(' ');
  for (var i = 0; i < strArr.length; i++) {
    capArr.push(capital(strArr[i]));
  }
  return capArr.join(' ')


}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = capitalize;
