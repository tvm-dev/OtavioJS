//defineProperty and defineProperties

function Product(name, price, stock){
    // this.name = name,
    // this.price = price

    Object.defineProperty(this, 'stock', {
        enumerable: true, //show the key
        value: stock, //show the value   from key
        writable: false, //permission to change value
        configurable: false //delete or reconfigure the key
    })
    Object.defineProperties(this, {
        name: {
            enumerable: true, //show the key
            value: name, //show the value   from key
            writable: true, //permission to change value
            configurable: true //delete or reconfigure the key
        },
        price: {
            enumerable: true, //show the key
            value: price, //show the value   from key
            writable: true, //permission to change value
            configurable: true //delete or reconfigure the key

        }
    })
}

const p1 = new Product('t-shirt', 20, 3)
// p1.stock = 50
// console.log(p1)
//console.log(Object.keys(p1))//-> see the keys from objects
console.log(p1)//-> see the keys from objects


for (let key in p1){
    console.log(key)
}

    
    
    


