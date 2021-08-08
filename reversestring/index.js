// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Sol-3
debugger;
return str.split('').reduce((reversed,char) => char + reversed,'')
}

reverse("belal")
}

module.exports = reverse;

// Sol-2
//   let reversed = '';
//   for (let char of str) {
  //     reversed = char + reversed
  //   }
  //   return reversed;
  // }


  // Sol-1
  // let arr = str.split('');
  // arr.reverse();
  // let rstr = arr.join('');
  // return rstr;
  // return str.split('').reverse().join('');
