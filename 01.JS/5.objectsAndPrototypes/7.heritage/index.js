//Product => increase, discount
//items for sales in store: t-shirt and  mug
//T-shirt: have color
//Mug: have material
function Product(name, price){
    this.name = name
    this.price = price
}
Product.prototype.increase = function(value){
    this.price += value
}
Product.prototype.discount = function(value){
    this.price -= value
}
function Tshirt(name, price, color){
    Product.call(this, name, price)
    this.color = color
}

Tshirt.prototype = Object.create(Product.prototype)
Tshirt.prototype.constructor = Tshirt

Tshirt.prototype.increase = function(percentual){
    this.price = this.price + (this.price * (percentual /100))
}

function Mug(name, price, material, stock){
    Product.call(this, name, price)
    this.material = material
}
Object.defineProperty(this, 'stock', {
    enumerable: true,
    configurable: false,
    get: function(){
        return stock
    },
    set: function(value){
        if (typeof 'number') return;
        stock = value
        }
    });
 

Mug.prototype = Object.create(Product.prototype)
Mug.prototype.constructor = Mug

const product = new Product('generic product', 111)
const tshirt = new Tshirt('tank top', 7.5, 'black')
const mug = new Mug('mug', 13, 'Plastic', 5)

console.log(mug.stock)
console.log(mug)
console.log(tshirt)
console.log(product)