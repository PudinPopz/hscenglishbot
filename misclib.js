//DEPENDENCIES
/*jshint esversion: 6 */
const colors = require('colors');

module.exports = {

  //CONSOLE
  error: function(str) {
    console.log(str.red.bold);
  },
  print: function(str) {
    //colour = col || 'white';
    console.log(str.white.white.underline.bold);
  },
  printf: function(str) {
    //colour = col || 'white';
    console.log(str);
  },
  notif: function(str) {
    console.log(str.cyan.underline.bold);
  }

  //MATHS


  //RANDOM ELEMENT FROM ARRAY

};

console.log("Misclib init.");
