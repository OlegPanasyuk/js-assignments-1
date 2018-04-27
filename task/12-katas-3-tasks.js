
/**
 * Returns true if word occurrs in the specified word snaking puzzle.
 * Each words can be constructed using "snake" path inside a grid with top, left,
 * right and bottom directions.
 * Each char can be used only once ("snake" should not cross itself).
 *
 * @param {array} puzzle
 * @param {array} searchStr
 * @return {bool}
 *
 * @example
 *   var puzzle = [
 *      'ANGULAR',
 *      'REDNCAE',
 *      'RFIDTCL',
 *      'AGNEGSA',
 *      'YTIRTSP',
 *   ];
 *   'ANGULAR'   => true   (first row)
 *   'REACT'     => true   (starting from the top-right R adn follow the ↓ ← ← ↓ )
 *   'UNDEFINED' => true
 *   'RED'       => true
 *   'STRING'    => true
 *   'CLASS'     => true
 *   'ARRAY'     => true   (first column)
 *   'FUNCTION'  => false
 *   'NULL'      => false
 */
export function findStringInSnakingPuzzle(puzzle, searchStr) {
  let obj = new Graph (puzzle, searchStr);
  
  return  obj.findWord();
}

function Graph (puzzle, searchStr) {
  this.puzzle = puzzle.map(
    function(el, i) {
      return el.split('');
    }
  );
  this.puzzle = this.puzzle.map(function (el, i) {
    return el.map(
      function(e, j) {
        return new Vertex(e, i, j);
      }
    );
  });
  this.searchStr = searchStr;
  this.height = this.puzzle.length;
  this.width = this.puzzle[0].length;
  this.answer = false;
} 

Graph.prototype = {
  move(v, index) {
   
    
    if (v.Visited || !v.Enabled) {
      return;
    }

    if (index === this.searchStr.length && this.searchStr[index-1]===v.literal) {
      this.answer =  true;

      //console.log('hurra!',v.literal,index);
      return;
    }
    //console.log('index=',index,'v.x=',v.x,'v.y=',v.y,'v.litaral=',v.literal,'searchStr : ',this.searchStr);
    v.targets = this.getTargets(v);
    v.Visited = true;

    for (let z = 0; z <= v.targets.length - 1; z++) {
      if(v.targets[z].Enabled) {
        if (v.targets[z].literal === this.searchStr[index]) {
          (function(self) {
            let q = index;
            q++;
            v.Enabled = false;
            self.move(v.targets[z], q++);
          })(this);
        }
      }
    }


  },
  findWord() {
    
    let self = this;
    this.puzzle.forEach(function(el, i) {
      el.forEach(function(e, j) {
        
        if (e.literal === self.searchStr[0]) {
          self.move(e, 1);
          //console.log('NEW ITTERATIOn');
        }

      });
    });
    return this.answer;
  },

  getTargets(v) {
    let arr = [];
    if ((v.x - 1) >=0 && 
      !this.puzzle[v.y][v.x-1].Visited) {
      arr.push(this.puzzle[v.y][v.x-1]);
    }
    if ((v.x + 1) <= this.width - 1 && 
      !this.puzzle[v.y][v.x + 1].Visited) {
      arr.push(this.puzzle[v.y][v.x + 1]);
    }
    if ((v.y - 1) >= 0 &&
      !this.puzzle[v.y - 1][v.x].Visited) {
      arr.push(this.puzzle[v.y - 1][v.x]);
    }
    if ((v.y + 1) <= this.height - 1 &&
      !this.puzzle[v.y + 1][v.x].Visited) {
      arr.push(this.puzzle[v.y + 1][v.x]);
    }
    return arr;
  }
};

function Vertex(literal, i, j) {
  this.x = j;
  this.y = i;
  this.visit = false;
  this.enable = true;
  this.literal = literal;
  this.targets = [];
}

Vertex.prototype = {
  get Enabled() {
    return this.enable;
  },
  set Enabled(val) {
    if (typeof val === 'boolean'){
      this.enable = val;
    } else {
      throw new Error('Incorrect type of val in setter Enabled');
    }
  },
  get Visited() {
    return this.visit;
  },
  set Visited(val) {
    if (typeof val === 'boolean'){
      this.visit = val;
    } else {
      throw new Error('Incorrect type of val in setter Visited');
    }
  }
};


/**
 * Returns all permutations of the specified string.
 * Assume all chars in the specified string are different.
 * The order of permutations does not matter.
 *
 * @param {string} chars
 * @return {Iterable.<string>} all posible strings constructed with the chars from
 *    the specfied string
 *
 * @example
 *    'ab'  => 'ab','ba'
 *    'abc' => 'abc','acb','bac','bca','cab','cba'
 */
export function* getPermutations(chars) {

  let arr = [];
  let n = chars.length;

  for (let i = 0; i<n;i++) {
    arr[i] = i+1;
  }

  function swap(i, j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }

  function fact(n) {
    let ret =1;
    for (let i = 1; i<=n; i++) {
      ret *= i;
    }
    return ret;
  }
  function nextPerm() {
    let i;
    for( i = arr.length-1; i>0; --i) {
      if (arr[i] > arr[i-1]) {
        let j;
        for(j = arr.length-1;j>i; --j){
          if (arr[j] > arr[i-1]) break;
        }
        swap(i-1, j);
        break;
      }
    }
      
    for ( let j = arr.length - 1; j > i; --j, ++i ) {
      swap(i, j);
    } 
  }

  let z = fact(arr.length);
  let a = [];
  for(let k = 0; k<z;k++) {
    let str = '';
    for(let q = 0; q<chars.length; q++) {
      str += chars[arr[q]-1];
    }
    nextPerm();
  
    a[k] =str;
    yield a[k];
    
    
  }

 
  /* implement your code here */
  //throw new Error('Not implemented');
}



/**
 * Returns the most profit from stock quotes.
 * Stock quotes are stores in an array in order of date.
 * The stock profit is the difference in prices in buying and selling stock.
 * Each day, you can either buy one unit of stock, sell any number of stock units
 * you have already bought, or do nothing.
 * Therefore, the most profit is the maximum difference of all pairs in a sequence
 * of stock prices.
 *
 * @param {array} quotes
 * @return {number} max profit
 *
 * @example
 *    [ 1, 2, 3, 4, 5, 6]   => 15  (buy at 1,2,3,4,5 and then sell all at 6)
 *    [ 6, 5, 4, 3, 2, 1]   => 0   (nothing to buy)
 *    [ 1, 6, 5, 10, 8, 7 ] => 18  (buy at 1,6,5 and sell all at 10)
 */
export function getMostProfitFromStockQuotes(quotes) {
  let profit = 0, i, maxPrice;

  while(quotes.length > 0)
  {
    i = 0;
    
    maxPrice = quotes.reduce((val1, val2) => val1 > val2 ? val1 : val2);
    
    while(quotes[i] < maxPrice)
    {
      profit -= quotes[i];
      i++;
    }

    profit += maxPrice * (i);

    quotes = quotes.slice(i+1);
  }

  return profit;
}


/**
 * Class representing the url shorting helper.
 * Feel free to implement any algorithm, but do not store link in the key\value stores.
 * The short link can be at least 1.5 times shorter than the original url.
 *
 * @class
 *
 * @example
 *
 *   var urlShortener = new UrlShortener();
 *   var shortLink = urlShortener.encode('https://en.wikipedia.org/wiki/URL_shortening');
 *   var original  = urlShortener.decode(shortLink); // => 'https://en.wikipedia.org/wiki/URL_shortening'
 *
 */
export function UrlShortener() {
  this.urlAllowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                          'abcdefghijklmnopqrstuvwxyz' +
                          "0123456789-_.~!*'();:@&=+$,/?#[]";
}

UrlShortener.prototype = {

  encode(url) {
    throw new Error('Not implemented');
  },

  decode(code) {
    throw new Error('Not implemented');
  }
};
