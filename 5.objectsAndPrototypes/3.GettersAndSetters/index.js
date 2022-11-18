//defineProperty with Getter and Setters
//Getter and Setters: are ways to protect our functions
//Getter: rescue values
//Setter: set news values
//======================

function Product(name, price, stock){
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stock', {
        enumerable: true, //show the key
        configurable: true, //delete or reconfigure the key
        get: function(){
            return stock
        },
        set: function(value){
            console.log(value)
        }
    })
}


const p1 = new Product('t-shirt', 20, 3)
// p1.stock = 50
// console.log(p1)
//console.log(Object.keys(p1))//-> see the keys from objects
console.log(p1)//-> see the keys from objects
p1.stock = ('My new value at stock')
console.log(p1.stock)


// for (let key in p1){
//     console.log(key)
// }
