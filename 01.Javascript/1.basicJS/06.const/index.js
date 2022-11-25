/**Commands of this class:
 * Constants
 */
console.log(`constants`);
/**
console.log(`
- You can't create constants using reserved words, like let, const, var, if, while etc; 
- You need use significant names for your constants, semantic names. Exemple: don't use the constants name like "n" for a name, use in fact, name for name variable!
- You can't create one constants starting with a number;
- It's forbidden to start one constants with numbers;
- The constants can't have spaces and strokes. Ex.: "name Customers" or "name-Customer"). Use like this: nameCustomer, etc;
- We using camelCase with constants;
- The constants are always Case Sensitive, so "Name" and "name" are differents;

-> **************** You can't change o constant value <-**************************


- You can't redeclare one constant use the same name;
- Don't use var, uses const;
`);
 */
const name = "Thiago";
const age = 38;
console.log(name);
//name = "Eike";
console.log("- You can't change a constant value");
//console.log(name);

console.log(typeof(name));
console.log(typeof(age));
