
/**
 * Returns the array of 32 compass points and heading.
 * See details here:
 * https://en.wikipedia.org/wiki/Points_of_the_compass#32_cardinal_points
 *
 * @return {array}
 *
 * Example of return :
 *  [
 *     { abbreviation : 'N',     azimuth : 0.00 ,
 *     { abbreviation : 'NbE',   azimuth : 11.25 },
 *     { abbreviation : 'NNE',   azimuth : 22.50 },
 *       ...
 *     { abbreviation : 'NbW',   azimuth : 348.75 }
 *  ]
 */
export function createCompassPoints(sides = ['N', 'E', 'S', 'W']) {
  /* implement your code here */
  sides.push(sides[0]);
  let rose = [];
  for (let i=0; i<33;i++) {
    rose[i]  = { abbreviation : '',   azimuth : i*11.25 };
  }
  for(let i=0; i<33; i++ ) {
    if (rose[i].azimuth % 90 === 0) {
      rose[i].abbreviation = sides[rose[i].azimuth / 90];
    } else if (rose[i].azimuth % 45 === 0) {
      rose[i].abbreviation = sides[Math.trunc(rose[i].azimuth / 90)] + sides[Math.trunc(rose[i].azimuth / 90)+1];
      if (/[NS]$/.test(rose[i].abbreviation)) {
        rose[i].abbreviation = rose[i].abbreviation.split('').reverse().join('');  
      }
    } else if (rose[i].azimuth % 22.5 === 0) {
      rose[i].abbreviation = sides[Math.trunc(rose[i].azimuth / 90)] + sides[Math.trunc(rose[i].azimuth / 90)+1];
      if (/[NS]$/.test(rose[i].abbreviation)) {
        rose[i].abbreviation = rose[i].abbreviation.split('').reverse().join('');  
      }
      rose[i].abbreviation =  sides[Math.round(rose[i].azimuth / 90)] + rose[i].abbreviation ;
    } 
  }

  for (let i=1; i<32; i+=2) {
    rose[i].abbreviation = rose[i+1].azimuth % 45 === 0 ? rose[i+1].abbreviation + 'b' + sides[Math.floor(rose[i].azimuth / 90)] :
      rose[i-1].abbreviation + 'b' + sides[Math.ceil(rose[i].azimuth / 90)];
  }
  rose.pop();
  //console.log(rose);
  /* use array of cardinal directions only! it is a default parameter! */
  //throw new Error('Not implemented');
  return rose;
}


/**
 * Expand the braces of the specified string.
 * See https://en.wikipedia.org/wiki/Bash_(Unix_shell)#Brace_expansion
 *
 * In the input string, balanced pairs of braces containing comma-separated substrings
 * represent alternations that specify multiple alternatives which are to appear 
 * at that position in the output.
 *
 * @param {string} str
 * @return {Iterable.<string>}
 *
 * NOTE: The order of output string does not matter.
 *
 * Example:
 *   '~/{Downloads,Pictures}/*.{jpg,gif,png}'  => '~/Downloads/*.jpg',
 *                                                '~/Downloads/*.gif'
 *                                                '~/Downloads/*.png',
 *                                                '~/Pictures/*.jpg',
 *                                                '~/Pictures/*.gif',
 *                                                '~/Pictures/*.png'
 *
 *   'It{{em,alic}iz,erat}e{d,}, please.'  => 'Itemized, please.',
 *                                            'Itemize, please.',
 *                                            'Italicized, please.',
 *                                            'Italicize, please.',
 *                                            'Iterated, please.',
 *                                            'Iterate, please.'
 *
 *   'thumbnail.{png,jp{e,}g}'  => 'thumbnail.png'
 *                                 'thumbnail.jpeg'
 *                                 'thumbnail.jpg'
 *
 *   'nothing to do' => 'nothing to do'
 */
export function* expandBraces(str) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Returns the ZigZag matrix
 *
 * The fundamental idea in the JPEG compression algorithm is to sort coefficient 
 * of given image by zigzag path and encode it.
 * In this task you are asked to implement a simple method to create a zigzag square matrix.
 * See details at https://en.wikipedia.org/wiki/JPEG#Entropy_coding
 * and zigzag path here: https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/JPEG_ZigZag.svg/220px-JPEG_ZigZag.svg.png
 *
 * @param {number} n - matrix dimension
 * @return {array}  n x n array of zigzag path
 *
 * @example
 *   1  => [[0]]
 *
 *   2  => [[ 0, 1 ],
 *          [ 2, 3 ]]
 *
 *         [[ 0, 1, 5 ],
 *   3  =>  [ 2, 4, 6 ],
 *          [ 3, 7, 8 ]]
 *
 *         [[ 0, 1, 5, 6 ],
 *   4 =>   [ 2, 4, 7,12 ],
 *          [ 3, 8,11,13 ],
 *          [ 9,10,14,15 ]]
 *
 */
export function getZigZagMatrix(n) {
  let arr = [];
  let sizeofMatrix = n;
  let endofMatrix = false;
  let sideofMove = 'right';
  let positionX = 0;
  let positionY = 0;
  let index = 0;
  arr.length = n;
  let temp = [];
  temp.length = n;
  temp.fill(null);
  arr.fill(temp);
  arr = arr.slice();
  function newIndex(y, x) {
    return arr.map(
      function(el, j) {
        return el.map(
          function(e, i) {
            if (j === y && i === x) {
              return index;
            }
            return e;
          }
        );
      }
    );
  }
  function moveDown() {
    if (sideofMove === 'right') {
      while(positionX>0) {
        positionX--;
        index++;
        positionY++;
        //debugger;
        arr = newIndex(positionY, positionX);
      }
    } else {
      while(positionY < sizeofMatrix - 1) {
        positionX--;
        index++;
        positionY++;
        arr = newIndex(positionY, positionX);
      }
    }

  }
  function moveUp() {
    if (sideofMove === 'right') {
      while (positionY>0) {
        positionY--;
        index++;
        positionX++;
        arr = newIndex(positionY, positionX);
      }
    } else {
      while (positionX < sizeofMatrix -1 ) {
        positionY--;
        index++;
        positionX++;
        arr = newIndex(positionY, positionX);
      }
    }    
  }
    
  function goMatrix() {
    arr = newIndex(positionY, positionX);
    while(!endofMatrix) {
      while (sideofMove === 'right') {
        if (positionX < (sizeofMatrix - 1)) {
          if (positionX === sizeofMatrix-1 &&  positionY === sizeofMatrix-1) {
            endofMatrix = true;
            break;
          }
          positionX++;
          index++;
          arr = newIndex(positionY, positionX);    
          moveDown();
        } else {
          sideofMove = 'left';
        }
        if (positionY < (sizeofMatrix - 1)) {
          if (positionX === sizeofMatrix-1 &&  positionY === sizeofMatrix-1) {
            endofMatrix = true;
            break;
          }
          if (sideofMove === 'left') {
            break;
          }
          positionY++;
          index++;      
          arr = newIndex(positionY, positionX);
          moveUp();
        } else {
          sideofMove = 'left';
        }
        if (positionX === sizeofMatrix-1 &&  positionY === sizeofMatrix-1) {
          endofMatrix = true;
          break;
        }
      }    
      // обрабатываем вторую часть матрицы по уменьшению
      while (sideofMove === 'left') {
        if (positionY < (sizeofMatrix - 1)) {
          positionY++;
          index++;
          arr = newIndex(positionY, positionX);
          moveDown();
        } else if (positionX < (sizeofMatrix - 1)) {
          if (positionX === sizeofMatrix-1 &&  positionY === sizeofMatrix-1) {
            endofMatrix = true;
            break;
          }
          positionX++;
          index++;
          arr = newIndex(positionY, positionX);
          moveUp();
        } 
        if (positionX === sizeofMatrix-1 &&  positionY === sizeofMatrix-1) {
          endofMatrix = true;
          break;
        }
      }    
    }
  }
  
  goMatrix();
  return arr;
  /* implement your code here */
  //throw new Error('Not implemented');
}


/**
 * Returns true if specified subset of dominoes can be placed in a row accroding to the game rules.
 * Dominoes details see at: https://en.wikipedia.org/wiki/Dominoes
 *
 * Each domino tile presented as an array [x,y] of tile value.
 * For example, the subset [1, 1], [2, 2], [1, 2] can be arranged in a row 
 *  (as [1, 1] followed by [1, 2] followed by [2, 2]),
 * while the subset [1, 1], [0, 3], [1, 4] can not be arranged in one row.
 * NOTE that as in usual dominoes playing any pair [i, j] can also be treated as [j, i].
 *
 * @params {array} dominoes
 * @return {bool}
 *
 * @example
 *
 * [[0,1],  [1,1]] => true
 * [[1,1], [2,2], [1,5], [5,6], [6,3]] => false
 * [[1,3], [2,3], [1,4], [2,4], [1,5], [2,5]]  => true
 * [[0,0], [0,1], [1,1], [0,2], [1,2], [2,2], [0,3], [1,3], [2,3], [3,3]] => false
 *
 */
export function canDominoesMakeRow(dominoes) {
  let counts = new Array(7); //считаем количество одинаковый цифр
  counts.fill(0);
  let pairs = 0; // кол-во совпавших пар
  dominoes.forEach(
    function(el) {
      counts[el[0]]++;
      if(el[0] !== el[1]) {
        counts[el[1]]++;
      }
    }
  );
  counts.forEach(
    function(el) {
      pairs +=  +Math.floor(el/2);
    }
  ); 
  //console.log(pairs);
  return pairs >= dominoes.length - 1;
  /* implement your code here */
  //throw new Error('Not implemented');
}


/**
 * Returns the string expression of the specified ordered list of integers.
 *
 * A format for expressing an ordered list of integers is to use a comma separated list of either:
 *   - individual integers
 *   - or a range of integers denoted by the starting integer separated from the end 
 *     integer in the range by a dash, '-'.
 *     (The range includes all integers in the interval including both endpoints)
 *     The range syntax is to be used only for, and for every range that expands to 
 *     more than two values.
 *
 * @params {array} nums
 * @return {bool}
 *
 * @example
 *
 * [ 0, 1, 2, 3, 4, 5 ]   => '0-5'
 * [ 1, 4, 5 ]            => '1,4,5'
 * [ 0, 1, 2, 5, 7, 8, 9] => '0-2,5,7-9'
 * [ 1, 2, 4, 5]          => '1,2,4,5'
 */
export function extractRanges(nums) {
  let str = '';
  let isRange = false;
  let startRange = null;
  let endRange = null;
  nums.map(
    function(el, i, arr) {
      //console.log(arr.length - 3);
      if (arr[i]+1 === arr[i+1] && arr[i]+2 === arr[i+2]) {
        if (!isRange) {
          isRange = true;
          startRange = el;
          str += startRange + '-';
        }
      } else if(arr[i]+1 === arr[i+1]) {
        endRange = arr[i+1];
        startRange = arr[i+2];
        if (!isRange) {
          str += el + ',';
          endRange = null;
        }
      } else {
        if (isRange) {
          str += endRange + ',';
          isRange = false;
        } 
        if (!isRange && el !== endRange) {
          str += el + ',';
        } 
      
      }
    } 
  );
  str = str.slice(0, (str.length-1));
  return str;
  /* implement your code here */
  //throw new Error('Not implemented');
}
