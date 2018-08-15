
/** ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    var r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
export function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = () => this.width * this.height;
}

Rectangle.prototype.getArea = () => this.width * this.height;

/**
* Returns the JSON representation of specified object
*
* @param {object} obj
* @return {string}
*
* @example
*    [1,2,3]   =>  '[1,2,3]'
*    { width: 10, height : 20 } => '{"height":10,"width":20}'
*/
export function getJSON(obj) {
  return JSON.stringify(obj);
}


/**
* Returns the object of specified type from JSON representation
*
* @param {Object} proto
* @param {string} json
* @return {object}
*
* @example
*    var r = fromJSON(Rectangle.prototype, '{"width":10, "height":20}');
*
*/
export function fromJSON(proto, json) {
  // let inp = JSON.parse(json);
  // let obj = Object.assign(Object.create(proto), inp);
  // for (let key in proto) 
  // {
  //   if (!obj.hasOwnProperty(key)) {
  //     obj[key]=proto[key];
  //   }
  // }
  // return obj;
  throw new Error('Not implemented');
}



/**
* Css selectors builder
*
* Each complex selector can consists of type, id, class, attribute, pseudo-class and
* pseudo-element selectors:
*
*    element#id.class[attr]:pseudoClass::pseudoElement
*              \----/\----/\----------/
*              Can be several occurences
*
* All types of selectors can be combined using the combinators ' ','+','~','>' .
*
* The task is to design a single class, independent classes or classes hierarchy and
* implement the functionality
* to build the css selectors using the provided cssSelectorBuilder.
* Each selector should have the stringify() method to output the string repsentation
* according to css specification.
*
* Provided cssSelectorBuilder should be used as facade only to create your own classes,
* for example the first method of cssSelectorBuilder can be like this:
*   element: function(value) {
*       return new MySuperBaseElementSelector(...)...
*   },
*
* The design of class(es) is totally up to you, but try to make it as simple, clear
* and readable as possible.
*
* @example
*
*  var builder = cssSelectorBuilder;
*
*  builder.id('main').class('container').class('editable').stringify() =>
*    '#main.container.editable'
*
*  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify() =>
*    'a[href$=".png"]:focus'
*
*  builder.combine(
*      builder.element('div').id('main').class('container').class('draggable'),
*      '+',
*      builder.combine(
*          builder.element('table').id('data'),
*          '~',
*           builder.combine(
*               builder.element('tr').pseudoClass('nth-of-type(even)'),
*               ' ',
*               builder.element('td').pseudoClass('nth-of-type(even)')
*           )
*      )
*  ).stringify() =>
*      'div#main.container.draggable + table#data ~ tr:nth-of-type(even) td:nth-of-type(even)'
*
*  For more examples see unit tests.
*/

export const cssSelectorBuilder = {
  arr : [],
  selectors : '',
  Element : false,
  idElement: false,
  idPseudoElement: false,

  element(value) {
    if (!this.Element && this.arr.length === 0)  {
      this.selectors += '' + value;
      this.arr.push('element');
    } else if (this.Element) {
      throw new Error ('Element, id and pseudo-element should not occur more then one time inside the selector');
    } else {
      throw  new Error ('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }
    this.Element = true;
    return this.getObj(this, this.selectors, this.arr); 
  },

  id(value) {
    if (!this.idElement && ((this.arr.length === 0) || (this.arr.length === 1 && this.arr[this.arr.length-1] === 'element'))) {
      this.selectors += '#' + value; 
      this.arr.push('id');  
    } else if (this.idElement) {
      throw new Error ('Element, id and pseudo-element should not occur more then one time inside the selector');
    } else {
      throw  new Error ('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }
    this.idElement = true;
    return this.getObj(this, this.selectors, this.arr); 
  },

  class(value) {
    let flag = true;
    this.arr.forEach(
      function(el) {
        if (el === 'pseudo-element' || el === 'pseudo-class' || el === 'attrb') {
          flag = false;
        }
      }
    );
    if(flag) {
      this.selectors += '.' + value;
      this.arr.push('class');
      return this.getObj(this, this.selectors, this.arr);  
    } else {
      throw  new Error ('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }
  },

  attr(value) {
    let flag  = true;
    this.arr.forEach(el => {
      if (el === 'pseudo-element' || el === 'pseudo-class') {
        flag = false;
      }
    });
    if (flag) {
      this.selectors += '[' + value + ']';
      this.arr.push('attrb'); 
      return this.getObj(this, this.selectors, this.arr); 
    } else {
      throw  new Error ('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }
  },

  pseudoClass(value) {
    let flag = true;
    this.arr.forEach(el => {
      if (el === 'pseudo-element') {
        flag = false;
      }
    });
    if (flag){
      this.selectors += ':' + value; 
      this.arr.push('pseudo-class');
      return this.getObj(this, this.selectors, this.arr);
    } else {
      throw  new Error ('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }
  },

  pseudoElement(value) {
    if (!this.idPseudoElement) {
      this.selectors += '::' + value; 
      this.arr.push('pseudo-element');
      this.idPseudoElement = true;
      return this.getObj(this, this.selectors, this.arr);   
    } else {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    }
  },

  combine(selector1, combinator, selector2) {
    this.selectors += selector1.stringify() + ' ' + combinator + ' ' + selector2.stringify();
    let tempObj =this.getObj(this, this.selectors, this.arr); 
    return tempObj;
  },
  
  getObj(obj, selectors, arrname) {
    let newObj  = Object.create(obj);
    obj.selectors = '';
    obj.arr = [];
    newObj['selectors'] = selectors;
    newObj['arr'] = arrname.slice();
    newObj.Element = obj.Element;
    newObj.idElement = obj.idElement;
    newObj.idPseudoElement = obj.idPseudoElement;
    obj.Element = false;
    obj.idElement = false;
    obj.idPseudoElement = false;
    return newObj;
  },

  stringify(){
    let str = this.selectors;
    this.selectors = '';
    this.arr = [];
    this.Element = false;
    this.idElement = false;
    this.idPseudoElement = false;
    return str;
  }
};
