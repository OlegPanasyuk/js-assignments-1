
/** *****************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
export function concatenateStrings(value1, value2) {
  return ''.concat(value1, value2);
  //throw new Error('Not implemented');
}

/**
* Returns the length of given string.
*
* @param {string} value
* @return {number}
*
* @example
*   'aaaaa' => 5
*   'b'     => 1
*   ''      => 0
*/
export function getStringLength(value) {
  return value.length;
  //throw new Error('Not implemented');
}

/**
* Returns the result of string template and given parameters firstName and lastName.
* Please do not use concatenation, use template string :
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
*
* @param {string} firstName
* @param {string} lastName
* @return {string}
*
* @example
*   'John','Doe'      => 'Hello, John Doe!'
*   'Chuck','Norris'  => 'Hello, Chuck Norris!'
*/
export function getStringFromTemplate(firstName, lastName) {
  return 'Hello, ' + firstName + ' ' + lastName + '!';
  //throw new Error('Not implemented');
}

/**
* Extracts a name from template string 'Hello, First_Name Last_Name!'.
*
* @param {string} value
* @return {string}
*
* @example
*   'Hello, John Doe!' => 'John Doe'
*   'Hello, Chuck Norris!' => 'Chuck Norris'
*/
export function extractNameFromTemplate(value) {
  let re = /\w+,\s/;
  value = value.replace(re, '');
  re = /!/;
  value = value.replace(re, '');
  return value;
  //throw new Error('Not implemented');
}


/**
* Returns a first char of the given string.
*
* @param {string} value
* @return {string}
*
* @example
*   'John Doe'  => 'J'
*   'cat'       => 'c'
*/
export function getFirstChar(value) {
  return value.charAt(0);
  //throw new Error('Not implemented');
}

/**
* Removes a leading and trailing whitespace characters from string.
*
* @param {string} value
* @return {string}
*
* @example
*   '  Abracadabra'    => 'Abracadabra'
*   'cat'              => 'cat'
*   '\tHello, World! ' => 'Hello, World!'
*/
export function removeLeadingAndTrailingWhitespaces(value) {
  value = value.trimLeft();
  return value.trimRight();
  //throw new Error('Not implemented');
}

/**
* Returns a string that repeated the specified number of times.
*
* @param {string} value
* @param {string} count
* @return {string}
*
* @example
*   'A', 5  => 'AAAAA'
*   'cat', 3 => 'catcatcat'
*/
export function repeatString(value, count) {
  return value.repeat(count);
  //throw new Error('Not implemented');
}

/**
* Remove the first occurrence of string inside another string
*
* @param {string} str
* @param {string} value
* @return {string}
*
* @example
*   'To be or not to be', 'not'  => 'To be or to be'
*   'I like legends', 'end' => 'I like legs',
*   'ABABAB','BA' => 'ABAB'
*/
export function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
  //throw new Error('Not implemented');
}

/**
* Remove the first and last angle brackets from tag string
*
* @param {string} str
* @return {string}
*
* @example
*   '<div>' => 'div'
*   '<span>' => 'span'
*   '<a>' => 'a'
*/
export function unbracketTag(str) {
  return str.replace(/<|>/g, '');
  //throw new Error('Not implemented');
}


/**
* Converts all characters of the specified string into the upper case
*
* @param {string} str
* @return {string}
*
* @example
*   'Thunderstruck' => 'THUNDERSTRUCK'
*  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
*/
export function convertToUpperCase(str) {
  return str.toLocaleUpperCase();
  //throw new Error('Not implemented');
}

/**
* Extracts e-mails from single string with e-mails list delimeted by semicolons
*
* @param {string} str
* @return {array}
*
* @example
*   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' =>
*     ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
*   'info@gmail.com' => ['info@gmail.com']
*/
export function extractEmails(str) {
  return str.split(';');
  //throw new Error('Not implemented');
}

/**
* Returns the string representation of rectangle with specified width and height
* using pseudograhic chars
*
* @param {number} width
* @param {number} height
* @return {string}
*
* @example
*
*            '┌────┐\n'+
*  (6,4) =>  '│    │\n'+
*            '│    │\n'+
*            '└────┘\n'
*
*  (2,2) =>  '┌┐\n'+
*            '└┘\n'
*
*             '┌──────────┐\n'+
*  (12,3) =>  '│          │\n'+
*             '└──────────┘\n'
*
*/
export function getRectangleString(width, height) {
  if (width < 2 | height < 2) {
    //console.log('Invalid parameters: width and height must be more then 2');
    return;
  } else {
    var topLine =  String.fromCharCode(0x250C) + (String.fromCharCode(0x2500)).repeat(width-2) + String.fromCharCode(0x2510) + '\n';
    var bottomLine = String.fromCharCode(0x2514) + (String.fromCharCode(0x2500)).repeat(width-2) + String.fromCharCode(0x2518) + '\n';
    var middleLine =  String.fromCharCode(0x2502) + String.fromCharCode(32).repeat(width-2) + String.fromCharCode(0x2502) + '\n';
    var resultline = '';
    resultline = resultline + topLine;
    var i=0;
    while (i < (height - 2)) {
      resultline = resultline + middleLine;
      i++;
    }
    resultline = resultline + bottomLine;
    return resultline;
  }
  //throw new Error('Not implemented');
}


/**
* Encode specified string with ROT13 cipher
* See details:  https://en.wikipedia.org/wiki/ROT13
*
* @param {string} str
* @return {string}
*
* @example
*
*   'hello' => 'uryyb'
*   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
*   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
*   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' => 
*          'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
*
*/

export function encodeToRot13(str) {
  let a = '';
  for (var i = 0; i<str.length;i++){
    let l = null;
    l = str.charCodeAt(i);
    if (((l >= 65) && (l <= 77)) || ((l >= 97) && (l <= 109))) {
      l = l + 13;
    } else if (((l >= 78) && (l <= 90)) || ((l >=110 ) && (l <= 122))) {
      l = l - 13;
    } 
    a = a.concat(String.fromCharCode(l));
  }
  return a;
  //throw new Error('Not implemented');
}

/**
* Returns true if the value is string; otherwise false.
* @param {string} value
* @return {boolean}
*
* @example
*   isString() => false
*   isString(null) => false
*   isString([]) => false
*   isString({}) => false
*   isString('test') => true
*   isString(new String('test')) => true
*/

export function isString(value) {
  if (value === null) return false;
  let t = typeof(value);
  if (t === 'object') {
    if (typeof(value.valueOf()) === 'string') {
      t = true;
    } else {
      t =  false;
    }
  } else if (t === 'string') {
    t = true;
  } else {
    t = false;
  }
  return t;
  //throw new Error('Not implemented');
}

/**
* Returns playid card id.
*
* Playing cards inittial deck inclides the cards in the following order:
*
*  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
*  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
*  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
*  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
*
* (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
* Function returns the zero-based index of specified card in the initial deck above.
*
* @param {string} value
* @return {number}
*
* @example
*   'A♣' => 0
*   '2♣' => 1
*   '3♣' => 2
*     ...
*   'Q♠' => 50
*   'K♠' => 51
*/
export function getCardId(value) {
  let ar = 'A♣,2♣,3♣,4♣,5♣,6♣,7♣,8♣,9♣,10♣,J♣,Q♣,K♣,\
A♦,2♦,3♦,4♦,5♦,6♦,7♦,8♦,9♦,10♦,J♦,Q♦,K♦,\
A♥,2♥,3♥,4♥,5♥,6♥,7♥,8♥,9♥,10♥,J♥,Q♥,K♥,\
A♠,2♠,3♠,4♠,5♠,6♠,7♠,8♠,9♠,10♠,J♠,Q♠,K♠'.split(',');
  for (var i = 0; i<ar.length; i++) {
    if(value === ar[i])  {
      return i;       
    }
  }
  throw new Error('Not implemented');
}

// module.exports = {
//     concatenateStrings: concatenateStrings,
//     getStringLength: getStringLength,
//     getStringFromTemplate: getStringFromTemplate,
//     extractNameFromTemplate: extractNameFromTemplate,
//     getFirstChar: getFirstChar,
//     removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
//     repeatString: repeatString,
//     removeFirstOccurrences: removeFirstOccurrences,
//     unbracketTag: unbracketTag,
//     convertToUpperCase: convertToUpperCase,
//     extractEmails: extractEmails,
//     getRectangleString: getRectangleString,
//     encodeToRot13: encodeToRot13,
//     isString: isString,
//     getCardId: getCardId
// };
