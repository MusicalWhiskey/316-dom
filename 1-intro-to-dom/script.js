// the document object is the DOM
console.dir(document);

/**
 *
 * Selecting Elements
 *
 *
 */

// getElementById
const h1El = document.getElementById('title');

// getsElementsByName
const anchors = document.getElementsByName('link');

// querySelector
const div = document.querySelector('#container');
// other ways - div,#title ~ div
console.log(div);

const liEl = document.querySelector('#list > li:nth-of-type(3)');

console.log(liEl);