
/** ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
export function getFizzBuzz(num) {
  if ((num % 3 === 0) && (num % 5 === 0)) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
  //throw new Error('Not implemented');
}


/**
* Returns the factorial of the specified integer n.
*
* @param {number} n
* @return {number}
*
* @example:
*   1  => 1
*   5  => 120
*   10 => 3628800
*/
export function getFactorial(n) {
  let i = 1;
  let a = 1;
  while(i <= n) {
    a *= i++; 
  }
  return a;
//throw new Error('Not implemented');
}


/**
* Returns the sum of integer numbers between n1 and n2 (inclusive).
*
* @param {number} n1
* @param {number} n2
* @return {number}
*
* @example:
*   1,2   =>  3  ( = 1+2 )
*   5,10  =>  45 ( = 5+6+7+8+9+10 )
*   -1,1  =>  0  ( = -1 + 0 + 1 )
*/
export function getSumBetweenNumbers(n1, n2) {
  let i = n1;
  let sum = 0;
  while (i<=n2) {
    sum += i++;
  }
  return sum;
  //throw new Error('Not implemented');
}


/**
* Returns true, if a triangle can be built with the specified sides a,b,c and false 
* in any other ways.
*
* @param {number} a
* @param {number} b
* @param {number} c
* @return {bool}
*
* @example:
*   1,2,3    =>  false
*   3,4,5    =>  true
*   10,1,1   =>  false
*   10,10,10 =>  true
*/
export function isTriangle(a, b, c) {
  if ((a+b>c)&&(b+c>a)&&(a+c>b)) {
    return true;
  }
  else {
    return false;    
  } 
  //throw new Error('Not implemented');
}


/**
* Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
* Each rectangle representing by object
*  {
*     top: 5,
*     left: 5,
*     width: 20,
*     height: 10
*  }
*
*  (5;5)
*     -------------
*     |           |
*     |           |  height = 10
*     -------------
*        width=20
*
* NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
* it differs from Cartesian coordinate system.
*
* @param {object} rect1
* @param {object} rect2
* @return {bool}
*
* @example:
*   { top: 0, left: 0, width: 10, height: 10 },
*   { top: 5, left: 5, width: 20, height: 20 }    =>  true
*
*   { top: 0, left: 0, width: 10, height: 10 },
*   { top:20, left:20, width: 20, height: 20 }    =>  false
*
*/
export function doRectanglesOverlap(rect1, rect2) {
  rect1.bottom = rect1.top + rect1.height;
  rect2.bottom = rect2.top + rect2.height;
  rect1.right = rect1.left + rect1.width;
  rect2.right = rect2.left + rect2.width;

  if ((rect2.top>=rect1.top)&&(rect2.top<=rect1.bottom)&&(rect2.left>=rect1.left)&&(rect2.left<=rect1.right))  return true;
  else if ((rect2.bottom>=rect1.top)&&(rect2.bottom<=rect1.bottom)&&(rect2.right>=rect1.left)&&(rect2.right<=rect1.right))  return true;
  else if ((rect2.bottom>=rect1.top)&&(rect2.bottom<=rect1.bottom)&&(rect2.left>=rect1.left)&&(rect2.left<=rect1.right))  return true;
  else if ((rect2.top>=rect1.top)&&(rect2.top<=rect1.bottom)&&(rect2.right>=rect1.left)&&(rect2.right<=rect1.right))  return true;
  else if ((rect1.top>=rect2.top)&&(rect1.top<=rect2.bottom)&&(rect1.left>=rect2.left)&&(rect1.left<=rect2.right))  return true;
  else if ((rect1.bottom>=rect2.top)&&(rect1.bottom<=rect2.bottom)&&(rect1.right>=rect2.left)&&(rect1.right<=rect2.right))  return true;
  else if ((rect1.bottom>=rect2.top)&&(rect1.bottom<=rect2.bottom)&&(rect1.left>=rect2.left)&&(rect1.left<=rect2.right))  return true;
  else if ((rect1.top>=rect2.top)&&(rect1.top<=rect2.bottom)&&(rect1.right>=rect2.left)&&(rect1.right<=rect2.right))  return true;
  else return false;
  //throw new Error('Not implemented');
}


/**
* Returns true, if point lies inside the circle, otherwise false.
* Circle is an object of
*  {
*     center: {
*       x: 5,
*       y: 5
*     },
*     radius: 20
*  }
*
* Point is object of
*  {
*     x: 5,
*     y: 5
*  }
*
* @param {object} circle
* @param {object} point
* @return {bool}
*
* @example:
*   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
*   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
*
*/
export function isInsideCircle(circle, point) {
  let leng = Math.sqrt(Math.pow((circle.center.y-point.y), 2) + Math.pow((circle.center.x-point.x), 2));
  return (leng < circle.radius) ? true:false;
  //throw new Error('Not implemented');
}


/**
* Returns the first non repeated char in the specified strings otherwise returns null.
*
* @param {string} str
* @return {string}
*
* @example:
*   'The quick brown fox jumps over the lazy dog' => 'T'
*   'abracadabra'  => 'c'
*   'entente' => null
*/
export function findFirstSingleChar(str) {
  var n = 0;
  var bol = false;
  while (bol === false) {
    while (n <= str.length) {
      bol =true;
      for (let i = 0; i<n; i++){
        if (str[n] === str[i]) bol = false;
      }
      for (let i = n+1; i<=str.length; i++){
        if (str[n] === str[i]) bol = false;
      }
      if (bol === true) {
        return str[n];
      }
      n++;
    }
  }
  return null;
  //throw new Error('Not implemented');
}


/**
* Returns the string representation of math interval, specified by two points and 
* include / exclude flags.
* See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
*
* Please take attention, that the smaller number should be the first in the notation
*
* @param {number} a
* @param {number} b
* @param {bool} isStartIncluded
* @param {bool} isEndIncluded
* @return {string}
*
* @example
*   0, 1, true, true   => '[0, 1]'
*   0, 1, true, false  => '[0, 1)'
*   0, 1, false, true  => '(0, 1]'
*   0, 1, false, false => '(0, 1)'
* Smaller number has to be first :
*   5, 3, true, true   => '[3, 5]'
*
*/
export function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  return (isStartIncluded ? '[' : '(') + (a>b ? b+', '+a : a+', '+b) + (isEndIncluded ? ']' : ')');
  //throw new Error('Not implemented');
}


/**
* Reverse the specified string (put all chars in reverse order)
*
* @param {string} str
* @return {string}
*
* @example:
* 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
* 'abracadabra' => 'arbadacarba'
* 'rotator' => 'rotator'
* 'noon' => 'noon'
*/
export function reverseString(str) {
  var str2 = '';
  for (var i = str.length-1; i>=0;i--) {
    str2 += str[i];
  }
  return str2;
  //throw new Error('Not implemented');
}


/**
* Reverse the specified integer number (put all digits in reverse order)
*
* @param {number} num
* @return {number}
*
* @example:
*   12345 => 54321
*   1111  => 1111
*   87354 => 45378
*   34143 => 34143
*/
export function reverseInteger(num) {
  let str = new String(num);
  let str2 = '';
  for (let i = str.length-1; i>=0;i--) {
    str2 += str[i];
  }
  num  = new Number(str2);
  return num;
  //throw new Error('Not implemented');
}


/**
* Validates the CCN (credit card number) and return true if CCN is valid
* and false otherwise.
*
* See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
*
* @param {number} cnn
* @return {boolean}
*
* @example:
*   79927398713      => true
*   4012888888881881 => true
*   5123456789012346 => true
*   378282246310005  => true
*   371449635398431  => true
*
*   4571234567890111 => false
*   5436468789016589 => false
*   4916123456789012 => false
*/
export function isCreditCardNumber(ccn) {
  let sum = 0;
  let tempstr = new String(ccn);
  for (let i = 1; i <= tempstr.length; i++) {
    let t = tempstr[tempstr.length - i]; 
    t = parseInt(t);
    //console.log(t, ' index ', i);
    if ((i) % 2) {
      sum += t;
    } else {
      sum += (t * 2) > 9 ? (t * 2 - 9) : t * 2;
    }
  }
  //console.log(sum);
  return (sum % 10) === 0;
  //throw new Error('Not implemented');
}

//console.log(isCreditCardNumber(4012888888881881));

/**
* Returns the digital root of integer:
*   step1 : find sum of all digits
*   step2 : if sum > 9 then goto step1 otherwise return the sum
*
* @param {number} n
* @return {number}
*
* @example:
*   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
*   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
*   10000 ( 1+0+0+0+0 = 1 ) => 1
*   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
*/
export function getDigitalRoot(num) {
  let str = new String(num);
  do {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]);
    }
    str = sum.toString();
  }
  while (str.length > 1);
  return parseInt(str);
  //throw new Error('Not implemented');
}


/**
* Returns true if the specified string has the balanced brackets and false otherwise.
* Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
* (in that order), none of which mis-nest.
* Brackets include [],(),{},<>
*
* @param {string} str
* @return {boolean}
*
* @example:
*   '' => true
*   '[]'  => true
*   '{}'  => true
*   '()   => true
*   '[[]' => false
*   ']['  => false
*   '[[][][[]]]' => true
*   '[[][]][' => false
*   '{)' = false
*   '{[(<{[]}>)]}' = true
*/
export function isBracketsBalanced(str) {
  if (str.length === 0) return true;
  let arr = [];
  let strl = '{[(<';
  let strr = '}])>';
  for (let i = 0; i < str.length; i++) {
    if (strl.indexOf(str[i]) >= 0) {
      arr.push(str[i]);
    } else {
      if (strl[strr.indexOf(str[i])] === arr[arr.length - 1]) {
        arr.pop();
      } else arr.push(str[i]);
    }
  }
  return !arr.length;
  //throw new Error('Not implemented');
}


//console.log(isBracketsBalanced('{[(<{[]}>)]]}'));
/**
* Returns the human readable string of time period specified by the start and end time.
* The result string should be constrcuted using the folliwing rules:
*
* ---------------------------------------------------------------------
*   Difference                 |  Result
* ---------------------------------------------------------------------
*    0 to 45 seconds           |  a few seconds ago
*   45 to 90 seconds           |  a minute ago
*   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
*   45 to 90 minutes           |  an hour ago
*  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
*  22 to 36 hours              |  a day ago
*  36 hours to 25 days         |  2 days ago ... 25 days ago
*  25 to 45 days               |  a month ago
*  45 to 345 days              |  2 months ago ... 11 months ago
*  345 to 545 days (1.5 years) |  a year ago
*  546 days+                   |  2 years ago ... 20 years ago
* ---------------------------------------------------------------------
*
* @param {Date} startDate
* @param {Date} endDate
* @return {string}
*
* @example
*   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
*   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
*   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
*   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
*
*/
export function timespanToHumanString(startDate, endDate) {    
  let str = '';
  let diff = (endDate.getTime() - startDate.getTime())/1000 - 0.00000001;
  if ((diff > 0) && (diff <= 45)) {
    str = 'a few seconds ago';
  } else if ((diff > 45) && (diff <= 90)) {
    str = 'a minute ago';
  } else if ((diff > 90) && (diff <= 2700)) {
    str = (diff<=120)? '2 minutes ago' : Math.round(diff/60) +' minutes ago';
  } else if ((diff>2700) && (diff <= 5400)) {
    str = 'an hour ago';
  } else if (((diff/3600)>(5400/3600) && ((diff/3600) <= 22))) {
    str = ((diff/60 <= 120) ? '2' : Math.round(diff/3600))+ ' hours ago';
  } else if (((diff/3600)>22 && ((diff/3600) <= 36))) {
    str = 'a day ago';
  } else if (((diff/3600)>36 && ((diff/(3600*24)) <= 25))) {
    str = ((diff/3600) <= 72 ? '2' : Math.round(diff/(3600 * 24)))+' days ago';
  } else if (((diff/(3600*24))>25 && ((diff/(3600*24)) <= 45))) {
    str = 'a month ago';
  } else if (((diff/(3600*24))>45 && ((diff/(3600*24)) <= 345))) {
    str =  ((diff/(3600*24)) <= 60 ? '2' : Math.round(diff/(3600 * 24 * 30)))+' months ago';
  } else if (((diff/(3600*24))>345 && ((diff/(3600*24)) <= 545))) {
    str =  'a year ago';
  } else if (((diff/(3600*24))>=546)) {
    str =  ((diff/(3600*24)) <= 730 ? '2' : Math.round(diff/(3600 * 24 * 365)))+' years ago';
  }

  return str;
  //throw new Error('Not implemented');
}

//console.log(timespanToHumanString(new Date('2000-01-01 00:45:00.100'), new Date('2005-01-26 00:45:00.100')));


/**
* Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
* specified number.
* See more about
* https://en.wikipedia.org/wiki/Binary_number
* https://en.wikipedia.org/wiki/Ternary_numeral_system
* https://en.wikipedia.org/wiki/Radix
*
* @param {number} num
* @param {number} n, radix of the result
* @return {string}
*
* @example:
*   1024, 2  => '10000000000'
*   6561, 3  => '100000000'
*    365, 2  => '101101101'
*    365, 3  => '111112'
*    365, 4  => '11231'
*    365, 10 => '365'
*/
export function toNaryString(num, n) {
  let arr = [];
  let numb = num;
  while (numb >= n) {
    arr.unshift(numb % n);
    numb = Math.trunc(numb / n);
    if (numb < n) arr.unshift(numb);        
  }
  return arr.join('');
  //throw new Error('Not implemented');
}

//console.log(toNaryString(33,3));

/**
* Returns the commom directory path for specified array of full filenames.
*
* @param {array} pathes
* @return {string}
*
* @example:
*   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
*   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
*   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
*   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
*/
export function getCommonDirectoryPath(pathes) {
  let temp = [];
  let arr = pathes.slice();
  arr.reduce(
    function(elq, el, i) {
      let a = el.split('/');
      //console.log('a array ',a);
      if (elq) {
        let b = elq.split('/');
        //console.log('b array ',b);
        temp = b.slice();
        //console.log('b -> temp', temp);
      }
      temp = a.map(function(element, i) {
        if (element === temp[i]) {
          //console.log('match ',element);
          return element;
        }
      });
    }
  );
  //console.log(temp);
  temp = temp.filter( function(el)  {return el !== undefined; });
  return temp.join('/') + (temp.length>0 ? '/':'');
  
  //throw new Error('Not implemented');
}

//console.log(getCommonDirectoryPath(['/web/assets/style.css', '/web/scripts/app.js', '/web/scripts/a2pp.js' ,'home/dds/ksd' ]));

/**
* Returns the product of two specified matrixes.
* See details: https://en.wikipedia.org/wiki/Matrix_multiplication
*
* @param {array} m1
* @param {array} m2
* @return {array}
*
* @example:
*   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
*    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
*    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
*
*                        [[ 4 ],
*   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
*                         [ 6 ]]
*
*/
export function getMatrixProduct(m1, m2) {
  let arr = [];
  if (m1[0].length === m2.length) {
    let m = m1[0].length;
    let temp = [];
    temp.length = m1.length;
    temp.fill(0);
    arr.length = m2[0].length;
    arr.fill(temp);
    arr = arr.map(
      function (el, i) {
        return el.map(
          function (e, j) {
            let c = 0;
            for (let r = 0; r < m; r++) {
              c += m1[i][r] * m2[r][j];
            }
            return c;
          }
        );
      }
    );
  }
  return arr;
  //throw new Error('Not implemented');
}

//console.log(getMatrixProduct( [[ 1, 2, 3]],[[ 4 ],[ 5 ], [ 6 ]]));

/**
* Returns the evaluation of the specified tic-tac-toe position.
* See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
*
* Position is provides as 3x3 array with the following values: 'X','0', undefined
* Function should return who is winner in the current position according to the game rules.
* The result can be: 'X','0',undefined
*
* @param {array} position
* @return {string}
*
* @example
*
*   [[ 'X',   ,'0' ],
*    [    ,'X','0' ],       =>  'X'
*    [    ,   ,'X' ]]
*
*   [[ '0','0','0' ],
*    [    ,'X',    ],       =>  '0'
*    [ 'X',   ,'X' ]]
*
*   [[ '0','X','0' ],
*    [    ,'X',    ],       =>  undefined
*    [ 'X','0','X' ]]
*
*   [[    ,   ,    ],
*    [    ,   ,    ],       =>  undefined
*    [    ,   ,    ]]
*
*/
export function evaluateTicTacToePosition(position) {
  let arr = position.slice();
  let reX = /[X]{3}/;
  let re0 = /[0]{3}/;
  let temp = [];
  let xmap = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:''};
  let row = 0;
  let str = undefined;
  temp.length = 8;
  temp.fill('');
  arr.map(
    function(el, i) {
      el.map(
        function(e, j) {
          xmap[j+row+1] = e;
        }
      );
      row += 3;
    }
  );
  temp[0] = '' + xmap[1] + xmap[2] + xmap[3];
  temp[1] = '' + xmap[4] + xmap[5] + xmap[6];
  temp[2] = '' + xmap[7] + xmap[8] + xmap[9];
  temp[3] = '' + xmap[1] + xmap[4] + xmap[7];
  temp[4] = '' + xmap[2] + xmap[5] + xmap[8];
  temp[5] = '' + xmap[3] + xmap[6] + xmap[9];
  temp[6] = '' + xmap[1] + xmap[5] + xmap[9];
  temp[7] = '' + xmap[3] + xmap[5] + xmap[7];
  //console.log(temp);
  temp.forEach(
    function(el, i){
      if (el.match(reX)) {
        str = 'X';
      } else if (el.match(re0)) {
        str = '0';
      } 
    }
  );
  return str;
  //throw new Error('Not implemented');
}

//console.log(evaluateTicTacToePosition([[ 'X',   ,'0' ],[    ,'X','0' ],[    ,   ,'X' ]]));


