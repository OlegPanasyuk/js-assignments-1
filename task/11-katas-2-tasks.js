
/**
 * Returns the bank account number parsed from specified string.
 *
 * You work for a bank, which has recently purchased an ingenious machine to assist
 * in reading letters and faxes sent in by branch offices.
 * The machine scans the paper documents, and produces a string with a bank account
 * that looks like this:
 *
 *    _  _     _  _  _  _  _
 *  | _| _||_||_ |_   ||_||_|
 *  ||_  _|  | _||_|  ||_| _|
 *
 * Each string contains an account number written using pipes and underscores.
 * Each account number should have 9 digits, all of which should be in the range 0-9.
 *
 * Your task is to write a function that can take bank account string and parse it
 * into actual account numbers.
 *
 * @param {string} bankAccount
 * @return {number}
 *
 * Example of return :
 *
 *   '    _  _     _  _  _  _  _ \n'+
 *   '  | _| _||_||_ |_   ||_||_|\n'+     =>  123456789
 *   '  ||_  _|  | _||_|  ||_| _|\n'
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
 *   '|_||_  _||_| _||_|  ||_| _|\n',
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
 *   '|_||_  _||_| _||_| _||_| _|\n',
 *
 */
export function parseBankAccount(bankAccount) {
  let str = '';
  let res = '';
  let tmp = [];
  let number = bankAccount.split('\n');
  number = number.map(
    function(el, i) {
      return el.split('');
    }
  );
  let numbers = ['246789', '69', '25678', '25689', '4569', '24589', '245789', '269', '2456789', '245689'];
  number.map(
    function(el, i, arr) {
      if (i === 0) {
        el.map(
          function(e, j, ar) {
            if (j % 3 === 0) {
              tmp.push(ar[j]);
              tmp.push(ar[j+1]);
              tmp.push(ar[j+2]);
              tmp.push(arr[i+1][j]);
              tmp.push(arr[i+1][j+1]);
              tmp.push(arr[i+1][j+2]);
              tmp.push(arr[i+2][j]);
              tmp.push(arr[i+2][j+1]);
              tmp.push(arr[i+2][j+2]);  
              tmp.map(
                function(zz, y) {
                  if (zz ==='_' || zz === '|') {
                    str += '' + (y+1);
                  }
                  
                }
              );
              res += '' + numbers.indexOf(str);
              tmp = [];
              str = '';
            }
            
           
          }
        );
      }
    }
  );
  return res;
  /* implement your code here */
  //throw new Error('Not implemented');
}


/**
 * Returns the string, but with line breaks inserted at just the right places to make
 * sure that no line is longer than the specified column number.
 * Lines can be broken at word boundaries only.
 *
 * @param {string} text
 * @param {number} columns
 * @return {Iterable.<string>}
 *
 * @example :
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 26 =>
 *      'The String global object',
 *      'is a constructor for',
 *      'strings, or a sequence of',
 *      'characters.'
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 12 =>
 *      'The String',
 *      'global',
 *      'object is a',
 *      'constructor',
 *      'for strings,',
 *      'or a',
 *      'sequence of',
 *      'characters.'
 */
export function* wrapText(text, columns) {
  let arr = text.split(' ');
  let temp = [];
  let j = 0;
  while (j < arr.length) {
    if(temp.join(' ').length + arr[j].length < columns) {
      temp.push(arr[j]);
      j++;
    } else {
      yield temp.join(' ');
      temp = [];
    }
  }
  yield temp.join(' ');
  /* implement your code here */
  //throw new Error('Not implemented');
}


/**
 * Returns the rank of the specified poker hand.
 * See the ranking rules here: https://en.wikipedia.org/wiki/List_of_poker_hands.
 *
 * @param {array} hand
 * @return {PokerRank} rank
 *
 * @example
 *   [ '4♥','5♥','6♥','7♥','8♥' ] => PokerRank.StraightFlush
 *   [ 'A♠','4♠','3♠','5♠','2♠' ] => PokerRank.StraightFlush
 *   [ '4♣','4♦','4♥','4♠','10♥' ] => PokerRank.FourOfKind
 *   [ '4♣','4♦','5♦','5♠','5♥' ] => PokerRank.FullHouse
 *   [ '4♣','5♣','6♣','7♣','Q♣' ] => PokerRank.Flush
 *   [ '2♠','3♥','4♥','5♥','6♥' ] => PokerRank.Straight
 *   [ '2♥','4♦','5♥','A♦','3♠' ] => PokerRank.Straight
 *   [ '2♥','2♠','2♦','7♥','A♥' ] => PokerRank.ThreeOfKind
 *   [ '2♥','4♦','4♥','A♦','A♠' ] => PokerRank.TwoPairs
 *   [ '3♥','4♥','10♥','3♦','A♠' ] => PokerRank.OnePair
 *   [ 'A♥','K♥','Q♥','2♦','3♠' ] =>  PokerRank.HighCard
 */
export const PokerRank = {
  StraightFlush: 8,
  FourOfKind: 7,
  FullHouse: 6,
  Flush: 5,
  Straight: 4,
  ThreeOfKind: 3,
  TwoPairs: 2,
  OnePair: 1,
  HighCard: 0
};

export function getPokerHandRank(hand) {
  const ratingCard = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let pairs = 0;
  let kThree = 0;
  let fourth = 0;
  let arrPic = [];
  let arrNum = [];
  let objPic = {
    '♥' : 0,
    '♦' : 0,
    '♠' : 0,
    '♣' : 0
  };
  let objNum = {'cardsinOrder' : 0,
    '2' : 0, '3' : 0, '4' : 0, '5' : 0, '6' : 0, '7' : 0, '8' : 0, '9' : 0, '10' : 0, 'J' : 0, 'Q' : 0, 'K' : 0, 'A' : 0
  };

  hand.map(function(el, i) {
    let t = el.split('');
    if (t.length > 2) {
      arrNum.push(t[0]+t[1]);
      arrPic.push(t[2]);
      objPic[t[2]]++;
      objNum[t[0]+t[1]]++;
    } else {
      arrNum.push(t[0]);
      arrPic.push(t[1]);
      objPic[t[1]]++;
      objNum[t[0]]++;
    }
  });
  arrNum = arrNum.map(
    function(el, i) {
      return ratingCard.indexOf(el);
    }
  );
  arrNum = arrNum.sort(
    function(a, b) {
      return a - b;
    }
  );
  if (objNum.hasOwnProperty('A')) {
    if (objNum.hasOwnProperty('K')) {
      if (objNum.K>0) {
        arrNum.shift();
        arrNum.push(13);
      }
    }
  }
  for (let key in objNum) {
     
    if (objNum[key] === 2) {
      pairs++;
    }
    if((objNum[key] === 3)) {
      kThree++;
    }
    if((objNum[key] === 4)) {
      fourth++;
    }
    

  }

  function isStraight() {
    let straight = false;
    let sum = 0;
    arrNum.map(
      function(el, i, arr) {
        if (i > 0) {
          sum += el - arr[i-1];
        }
      }
    );
    if(sum === 4) {
      straight = true;
    }
    return straight;
  }

  for (let key in objPic) {
    if (objPic[key] === 5) {
      if (isStraight()) {
        return PokerRank.StraightFlush;
      } else {
        return PokerRank.Flush;
      }
    } 
  }
  
  if (fourth === 1) {
    return PokerRank.FourOfKind;
  } else if (pairs === 1 && kThree === 1) {
    return PokerRank.FullHouse;
  } else if (pairs === 2) {
    return PokerRank.TwoPairs;
  } else if (kThree === 1) {
    return PokerRank.ThreeOfKind;
  } else if (pairs === 1) {
    return PokerRank.OnePair;
  } else if (isStraight()) {
    return PokerRank.Straight;
  } 
     
  return PokerRank.HighCard;
  /* implement your code here */
  //throw new Error('Not implemented');
}


/**
 * Returns the rectangles sequence of specified figure.
 * The figure is ASCII multiline string comprised of minus signs -, plus signs +,
 * vertical bars | and whitespaces.
 * The task is to break the figure in the rectangles it is made of.
 *
 * NOTE: The order of rectanles does not matter.
 *
 * @param {string} figure
 * @return {Iterable.<string>} decomposition to basic parts
 *
 * @example
 *
 *    '+------------+\n'+
 *    '|            |\n'+
 *    '|            |\n'+        '+------------+\n'+
 *    '|            |\n'+        '|            |\n'+         '+------+\n'+          '+-----+\n'+
 *    '+------+-----+\n'+   =>   '|            |\n'+     ,   '|      |\n'+     ,    '|     |\n'+
 *    '|      |     |\n'+        '|            |\n'+         '|      |\n'+          '|     |\n'+
 *    '|      |     |\n'         '+------------+\n'          '+------+\n'           '+-----+\n'
 *    '+------+-----+\n'
 *
 *
 *
 *    '   +-----+     \n'+
 *    '   |     |     \n'+                                    '+-------------+\n'+
 *    '+--+-----+----+\n'+              '+-----+\n'+          '|             |\n'+
 *    '|             |\n'+      =>      '|     |\n'+     ,    '|             |\n'+
 *    '|             |\n'+              '+-----+\n'           '+-------------+\n'
 *    '+-------------+\n'
 */
export function* getFigureRectangles(figure) {
  /* implement your code here */
  throw new Error('Not implemented');
}
