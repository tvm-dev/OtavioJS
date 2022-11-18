// //new Object => Object.prototype

// const objA = {
//     keyA: 'A'
//     //__proto__:  Object.prototype

// }

// const objB = {
//     keyB: 'B'
//     //__proto__:  objA

// }

// Object.setPrototypeOf(objB, objA)
// console.log(objB.keyA)

function Product(name, price){
this.name = name;
this.price = price;
}

Product.prototype.discount = function(percentual){
    //this.price = this.price - (this.price * (percentual / 100))
    this.price = this.price * ((this.price - percentual)/100) 
}
Product.prototype.increase = function(percentual){
    this.price = this.price + (this.price * (percentual / 100))
}
const p1 = new Product('T-shirt', 55)
//const p2 = new Product('shirt', 44)
p1.discount(14)
console.log(p1)
//console.log(p2)