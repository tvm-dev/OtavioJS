/*getOwnPropertyDescriptor => return:
{
    value: 'Product',
    writable: true,
    enumerable: true,
    configurable: true
  }
*/
const product = {name: 'Product', price: 1.8}
//console.log(Object.getOwnPropertyDescriptor(product, 'name'))

//console.log(Object.keys(product))

// let qqVariavel = (Object.values(product))


// console.log(qqVariavel)
// console.log(Object.values(product))
// console.log(Object.entries(product))

//for (let entry of Object.entries(product)){
for (let [key, value ] of Object.entries(product)){//making destruturing
    console.log(key, value)
}
