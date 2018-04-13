
/** *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    *
 *                                                                                           *
 * NOTE : Please do not use loops! All tasks can be implmeneted using standard Array methods *
 *                                                                                           *
 ******************************************************************************************** */


/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
export function findElement(arr, value) {
  let i = -1;
  arr.find(
    function(el, s){
      if (el === value) i = s;
      return el === value;
    }
  );
  return i;
  //throw new Error('Not implemented');
}

/**
* Generates an array of odd numbers of the specified length
*
* @param {number} len
* @return {array}
*
* @example
*    1 => [ 1 ]
*    2 => [ 1, 3 ]
*    5 => [ 1, 3, 5, 7, 9 ]
*/
export function generateOdds(len) {
  let arr = new Array(len);
  arr.fill(1);
  arr = arr.map(function(el, i){
    return 2*i+1;
  }); 
  return arr;
  //throw new Error('Not implemented');
}

/**
* Returns the doubled array - elements of the specified array are repeated twice
* using original order
*
* @param {array} arr
* @return {array}
*
* @example
*    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
*    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
*    [] => []
*/
export function doubleArray(arr) {
  arr.length = 2*arr.length;
  arr = arr.copyWithin(arr.length/2, 0, arr.length/2);
  return arr;
  //throw new Error('Not implemented');
}


/**
* Returns an array of positive numbers from the specified array in original order
*
* @param {array} arr
* @return {array}
*
* @example
*    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
*    [-1, 2, -5, -4, 0] => [ 2 ]
*    [] => []
*/
export function getArrayOfPositives(arr) {
  return arr.filter(el => el>0);
  //throw new Error('Not implemented');
}

/**
* Returns the array with strings only in the specified array (in original order)
*
* @param {array} arr
* @return {array}
*
* @example
*    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
*    [ 1, 2, 3, 4, 5 ] => []
*    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
*/
export function getArrayOfStrings(arr) {
  return arr.filter(x => typeof(x) === 'string');
  //throw new Error('Not implemented');
}

/**
* Removes falsy values from the specified array
* Falsy values: false, null, 0, "", undefined, and NaN.
* (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
*
* @param {array} arr
* @return {array}
*
* @example
*    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
*    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
*    [ false, 0, NaN, '', undefined ]   => [ ]
*/
export function removeFalsyValues(arr) {
  return arr.filter(
    function(el, i) {
      const b = new Boolean(el);
      return b.valueOf();
    }
  );
  //throw new Error('Not implemented');
}

/**
* Returns the array of useprcase strings from the specified array
*
* @param {array} arr
* @return {array}
*
* @example
*    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] =>
*        [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
*    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
*/
export function getUpperCaseStrings(arr) {
  return arr.map((el, i)=>el.toUpperCase());
  //throw new Error('Not implemented');
}


/**
* Returns the array of string lengths from the specified string array.
*
* @param {array} arr
* @return {array}
*
* @example
*    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
*    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
*/
export function getStringsLength(arr) {
  return arr.map(el => el.length);
  //throw new Error('Not implemented');
}

/**
* Inserts the item into specified array at specified index
*
* @param {array} arr
* @param {any} item
* @param {number} index
*
* @example
*    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
*    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
*/
export function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
  //throw new Error('Not implemented');
}

/**
* Returns the n first items of the specified array
*
* @param {array} arr
* @param {number} n
*
* @example
*    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
*    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
*/
export function getHead(arr, n) {
  return arr.slice(0, n);
  //throw new Error('Not implemented');
}


/**
* Returns the n last items of the specified array
*
* @param {array} arr
* @param {number} n
*
* @example
*    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
*    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
*/
export function getTail(arr, n) {
  return arr.slice(-n);
  //throw new Error('Not implemented');
}

/**
* Returns CSV represebtation of two-dimentional numeric array.
* https://en.wikipedia.org/wiki/Comma-separated_values
*
* @param {array} arr
* @return {string}
*
* @example
*    [
*       [  0, 1, 2, 3, 4 ],
*       [ 10,11,12,13,14 ],
*       [ 20,21,22,23,24 ],
*       [ 30,31,32,33,34 ]
*    ]
*           =>
*     '0,1,2,3,4\n'
*    +'10,11,12,13,14\n'
*    +'20,21,22,23,24\n'
*    +'30,31,32,33,34'
*/
export function toCsvText(arr) {
  return arr.reduce(
    function(a, b, c, arr) {
      return a +((c===1)?'\n':'') + b.join()+((c===(arr.length-1))?'':'\n');
    }
  );
  //throw new Error('Not implemented');
}

/**
* Transforms the numeric array into the according array of squares:
*   f(x) = x * x
*
* @param {array} arr
* @return {array}
*
* @example
*   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
*   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
*/
export function toArrayOfSquares(arr) {
  return arr.map(
    function(e, i) {
      return Math.pow(e, 2);
    }
  );
  //throw new Error('Not implemented');
}


/**
* Transforms the numeric array to the according moving sum array:
*     f[n] = x[0] + x[1] + x[2] +...+ x[n]
*  or f[n] = f[n-1] + x[n]
*
* @param {array} arr
* @return {array}
*
* Example :
*   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
*   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
*   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
*   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
*/
export function getMovingSum(arr) {
  return arr.map(
    function(e, i, arr){
      return arr.reduce(
        function(a, b, j, arr) {
          return (j<=i)?(a + b):a;
        }
      );
    }
  );
  //throw new Error('Not implemented');
}

/**
* Returns every second item from the specified array:
*
* @param {array} arr
* @return {array}
*
* Example :
* [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
* [ 'a', 'b', 'c' , null ]  => [ "b", null ]
* [ "a" ] => []
*/
export function getSecondItems(arr) {
  return arr.filter(
    function(e, i){
      return (i % 2 !== 0);
    }
  );
  //throw new Error('Not implemented');
}


/**
* Propagates every item in sequence its position times
* Returns an array that consists of: one first item, two second items, tree third items etc.
*
* @param {array} arr
* @return {array}
*
* @example :
*  [] => []
*  [ 1 ] => [ 1 ]
*  [ 'a', 'b' ] => [ 'a', 'b','b' ]
*  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
*  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
*/
export function propagateItemsByPositionIndex(arr) {
  var arr2 = [];
  if (arr.length > 0){
    arr.map(function(x, c) {
      var arr3 = [];
      arr3.length = c + 1;
      arr3.fill(x);
      arr2 = arr2.concat(arr3);
    });
  }
  return arr2;
  //throw new Error('Not implemented');
}


/**
* Returns the 3 largest numbers from the specified array
*
* @param {array} arr
* @return {array}
*
* @example
*   [] => []
*   [ 1, 2 ] => [ 2, 1 ]
*   [ 1, 2, 3 ] => [ 3, 2, 1 ]
*   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
*   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
*/
export function get3TopItems(arr) {
  let arr2 = arr.sort(
    function(a, b) {
      return b-a;
    }
  ); 
  return arr2.slice(0, 3);
  //throw new Error('Not implemented');
}


/**
* Returns the number of positive numbers from specified array
*
* @param {array} arr
* @return {number}
*
* @example
*   [ ]          => 0
*   [ -1, 0, 1 ] => 1
*   [ 1, 2, 3]   => 3
*   [ null, 1, 'elephant' ] => 1
*   [ 1, '2' ] => 1
*/
export function getPositivesCount(arr) {
  return arr.filter(
    function(e, i) {
      if ((typeof e !== 'number') && (!Number.isNaN(e))) return false;
      return (e>0);
    }
  ).length;
  //throw new Error('Not implemented');
}

/**
* Sorts digit names
*
* @param {array} arr
* @return {array}
*
* @example
*   [] => []
*   [ 'nine','one' ]                 => [ 'one', 'nine' ]
*   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
*   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
*   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
*/
export function sortDigitNamesByNumericOrder(arr) {
  let digitNames = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine'];
  return arr.sort( (a, b) => digitNames.indexOf(a) - digitNames.indexOf(b));
  //throw new Error('Not implemented');
}

/**
* Returns the sum of all items in the specified array of numbers
*
* @param {array} arr
* @return {number}
*
* @example
*   [] => 0
*   [ 1, 2, 3 ]           => 6
*   [ -1, 1, -1, 1 ]      => 0
*   [ 1, 10, 100, 1000 ]  => 1111
*/
export function getItemsSum(arr) {
  let sum = 0;
  if (arr.length > 0) {
    sum = arr.reduce(
      function(a, b, c) {
        return a+b;
      }
    );
  }
  return sum; 
  //throw new Error('Not implemented');
}

/**
* Returns the number of all falsy value in the specified array
*
* @param {array} arr
* @return {array}
*
* @example
*  [] => 0
*  [ 1, '', 3 ] => 1
*  [ -1, 'false', null, 0 ] => 2
*  [ null, undefined, NaN, false, 0, '' ]  => 6
*/
export function getFalsyValuesCount(arr) {
  if(arr.length > 0)
  {
    return arr.filter(
      function(b, c) {
        return !Boolean(b).valueOf();
      }
    ).length;
  }
  else return 0;
  //throw new Error('Not implemented');
}

/**
* Returns a number of all occurences of the specified item in an array
*
* @param {array} arr
* @param {any} item
* @return {number}
*
* @example
*    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
*    [ 1, 2, 3, 4, 5 ], 0 => 0
*    [ 'a','b','c','c' ], 'c'=> 2
*    [ null, undefined, null ], null => 2
*    [ true, 0, 1, 'true' ], true => 1
*/
export function findAllOccurences(arr, item) {
  return arr.filter(
    function(e, i) {
      return e === item;
    }
  ).length;
  //throw new Error('Not implemented');
}

/**
* Concatenates all elements from specified array into single string with ',' delimeter
*
* @param {array} arr
* @return {string}
*
* @example
*    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
*    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
*    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
*/
export function toStringList(arr) {
  return arr.join();
  //throw new Error('Not implemented');
}


/**
* Sorts the specified array by country name first and city name (if countries are
* equal) in ascending order.
*
* @param {array} arr
* @return {array}
*
* @example
*    [
*      { country: 'Russia',  city: 'Moscow' },
*      { country: 'Belarus', city: 'Minsk' },
*      { country: 'Poland',  city: 'Warsaw' },
*      { country: 'Russia',  city: 'Saint Petersburg' },
*      { country: 'Poland',  city: 'Krakow' },
*      { country: 'Belarus', city: 'Brest' }
*    ]
*                      =>
*    [
*      { country: 'Belarus', city: 'Brest' },
*      { country: 'Belarus', city: 'Minsk' },
*      { country: 'Poland',  city: 'Krakow' },
*      { country: 'Poland',  city: 'Warsaw' },
*      { country: 'Russia',  city: 'Moscow' },
*      { country: 'Russia',  city: 'Saint Petersburg' }
*/
export function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country > b.country) {
      return 1;
    }
    if (a.country < b.country) {
      return -1;
    }
    if (a.country === b.country) {
      if (a.city > b.city) {
        return 1;
      }
      if (a.city < b.city) {
        return -1;
      } else return 0;
    }
  });
  //throw new Error('Not implemented');
}

/**
* Creates an indentity matrix of the specified size
*
* @param {number} n
* @return {array}
*
* @example
*     1  => [[1]]
*
*     2 => [[1,0],
*           [0,1]]
*
*          [[1,0,0,0,0],
*           [0,1,0,0,0],
*     5 =>  [0,0,1,0,0],
*           [0,0,0,1,0],
*           [0,0,0,0,1]]
*/
export function getIdentityMatrix(n) {
  var matrix = [];
  matrix.length = n;
  matrix.fill([]);
  return matrix.map(
    function(a, i) {
      a = new Array(n);
      a.fill(0);
      a[i] = 1;
      return a;
    }
  ); 
  //throw new Error('Not implemented');
}

/**
* Creates an array of integers from the specified start to end (inclusive)
*
* @param {number} start
* @param {number} end
* @return {array}
*
* @example
*     1, 5  => [ 1, 2, 3, 4, 5 ]
*    -2, 2  => [ -2, -1, 0, 1, 2 ]
*     0, 100 => [ 0, 1, 2, ..., 100 ]
*     3, 3   => [ 3 ]
*/
export function getIntervalArray(start, end) {
  let arr = new Array(Math.abs(start-end)+1);
  arr.fill(start);
  return arr.map((e, i) => e + i );
  //throw new Error('Not implemented');
}

/**
* Returns array containing only unique values from the specified array.
*
* @param {array} arr
* @return {array}
*
* @example
*   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
*   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
*   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
*/
export function distinct(arr) {
  let arr2 = [];
  arr.map(function (a, c) {
    let temp = arr.find(function(e){
      return e === a;
    });
    let temp2 = arr2.find(function(e){
      return e === a;
    }); 
    if (temp2 !== temp) {
      arr2.push(a);
    }
  });
  return arr2;
  //throw new Error('Not implemented');
}

/**
* Groups elements of the specified array by key.
* Returns multimap of keys extracted from array elements via keySelector callback
* and values extracted via valueSelector callback.
* See: https://en.wikipedia.org/wiki/Multimap
*
* @param {array} array
* @param {Function} keySelector
* @param {Function} valueSelector
* @return {Map}
*
* @example
*   group([
*      { country: 'Belarus', city: 'Brest' },
*      { country: 'Russia', city: 'Omsk' },
*      { country: 'Russia', city: 'Samara' },
*      { country: 'Belarus', city: 'Grodno' },
*      { country: 'Belarus', city: 'Minsk' },
*      { country: 'Poland', city: 'Lodz' }
*     ],
*     item => item.country,
*     item => item.city
*   )
*            =>
*   Map {
*    "Belarus" => ["Brest", "Grodno", "Minsk"],
*    "Russia" => ["Omsk", "Samara"],
*    "Poland" => ["Lodz"]
*   }
*/
export function group(array, keySelector, valueSelector) {
  var map = new Map();
  array.map((x, c) => {
    let key = keySelector(x);
    let val = valueSelector(x);
    var arr;
    if (!map.has(key)) {
      arr = [];
      arr.push(val);
      map.set(key, arr);
    } else {
      arr = map.get(key);
      arr.push(val);
      map.set(key, arr);
    }     
  });
  return map;
  //throw new Error('Not implemented');
}


/**
* Projects each element of the specified array to a sequence and flattens the
* resulting sequences into one array.
*
* @param {array} arr
* @param {Function} childrenSelector, a transform const to apply to each element
*  that returns an array of children
* @return {array}
*
* @example
*   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
*   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
*/
export function selectMany(arr, childrenSelector) {
  let arr3 = [];
  arr.map((x, c) => {
    let arr2 = childrenSelector(x);
    arr2.map((y, v) => {
      arr3.push(y);
    });
  });
  return arr3;
  //throw new Error('Not implemented');
}


/**
* Returns an element from the multidimentional array by the specified indexes.
*
* @param {array} arr
* @param {array} indexes
* @return {any} element from array
*
* @example
*   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
*   ['one','two','three'], [2]       => 'three'  (arr[2])
*   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
*/
export function getElementByIndexes(arr, indexes) {
  return indexes.reduce((a, b, i) => {
    if (i !== indexes.length -1) {
      arr = arr[b];
    } else {
      return arr[b];
    }
    return null;
  }, null);
  //throw new Error('Not implemented');
}


/**
* Swaps the head and tail of the specified array:
* the head (first half) of array move to the end, the tail (last half) move to the start.
* The middle element (if exists) leave on the same position.
*
*
* @param {array} arr
* @return {array}
*
* @example
*   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
*    \----/   \----/
*     head     tail
*
*   [ 1, 2 ]  => [ 2, 1 ]
*   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
*
*/
export function swapHeadAndTail(arr) {
  var isodd = (arr.length % 2 !== 0);
  var middle = parseInt(arr.length / 2) + (isodd ? 0 : -1);
  return arr.map((x, c) => {
    if ((middle - c > 0) || (middle - c === 0 && !isodd)) return arr[middle + c + 1];
    if (middle - c < 0) return arr[c - middle - 1];
    else return x;
  });
  //throw new Error('Not implemented');
}

