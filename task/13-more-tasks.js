/**
 * Takes two strings including only letters from a to z.
 * Returns a new sorted string containing distinct letters.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'azy', 'bk' => 'abkyz'
 *   'zxxlal','laxk'    => 'aklxz'
 *   'abcdefghijklmnop',  'lmnopqrstuvwxyz'  => 'abcdefghijklmnopqrstuvwxyz'
 */
export function distinctLettersString(value1, value2) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Takes a string with any characters.
 * Returns an object containing appearence of every distinct letters in lower case.
 *
 * @param {string} value
 * @return {Object}
 *
 * @example
 *  'Who you are, Buddy?' => { a:1, d:2, e:1, h:1, o:2, r:1, u:2, y:2 }
 *
 */

export function lowerLetters(value) {
  let re = /[a-z]/g;
  let obj = {};
  let arr = value.match(re);
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  /* implement your code here */
  //throw new Error('Not implemented');
  return obj;
}

/**
 * Write a function that will convert a string into title case, given an optional
 * list of exception (minor words). The list of minor words will be given as a
 * string with each word separated by a space. Your function should ignore the
 * case of the minor words string - it should behave in the same way even if the
 * case of the minor word is changed
 *
 * @param {string} the original string to be converted
 * @param {string} list of minor words that must always be lowercase except for
 *                  the first word in the string
 * @return {string}
 *
 * @example
 *    'a clash if KINGS', 'a an the of'  =>  'A Clash of Kings'
 *    'THE WIND IN THE WILLOWS', 'The In'  => 'The Wind in the Willows'
 *    'the quick brown fox'  => 'The Quick Brown Fox'
 */

export function titleCaseConvert(title, minorWords) {
  let str = title.split(' ');
  let minor;
  if(minorWords) { 
    minor  = minorWords.split(' ').map((el, j) => el.toLowerCase());
  } else {
    minor = [];
  }
  //console.log(str, minor);

  str = str.map(
    function(el, j) {
      let temp;
      if (j === 0) {
        temp = el.toLowerCase();
        temp = temp.split('');
        temp[0] = temp[0].toUpperCase();
        return temp.join('');
      } else {
        temp = el.toLowerCase();
        if (minor.indexOf(temp) >= 0) {
          return temp;
        } else {
          temp = temp.split('');
          temp[0] = temp[0].toUpperCase();
          return temp.join('');
        }
      }
    }
  );
  //console.log(str, minor);
  return str.join(' ');
  /* implement your code here */
  //throw new Error('Not implemented');
}

/**
 * Your job is to create a calculator which evaluates expressions in Reverse Polish
 * notation (https://en.wikipedia.org/wiki/Reverse_Polish_notation). Empty expression
 * should evaluate to 0. Expression without operation returns the last number.
 *
 * @param {string} RPN string, each number and operation separated by a space
 *
 * @return {Number}
 *
 * @example
 *  ''  =>  0  // empty expression returns 0
 *  '1 2 3'  =>  3  // expression without operation returns the last number
 *  '4 2 +'  =>  6  // 4 + 2
 *  '2 5 * 2 + 3 /'  =>  4   //  ((5 * 2) + 2) / 3
 *  '5 1 2 + 4 * + 3 -'  =>  14   // 5 + ((1 + 2) * 4) -3
 */

export function calcRPN(expr) {
  
  if (expr.length <= 0) {
    return 0;
  }
  let stack = [];
  let str = expr.split(' ');
  let reD = /\d/;
  let reO = /[+-/*]/;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(reD)) {
      stack.push(str[i]);
    } else if (str[i].match(reO)) {
      let a = stack.pop();
      let b = stack.pop();
      let tmp = b + str[i] + a;
      let c = eval(tmp).toString();
      stack.push(c);
    } 

  }
  //console.log(str);
  /* implement your code here */
  //throw new Error('Not implemented');
  return stack.pop();
}
