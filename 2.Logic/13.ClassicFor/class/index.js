// //Stupid way:
// console.log('Line 0')
// console.log('Line 1')
// console.log('Line 2')
// console.log('Line 3')
// console.log('Line 4')
// console.log('Line 5')

//Using ClassicFor:
//Using variables
// let i = 10
// let n = 150

//Normal uses:
//for (let i = 0; i <=7; i++){

//Change 'i' and increment:
//for (let i = 10; i <=21; i+=3){

//Starting with negatives numbers and increment any values:
//for (let i = -10; i <=14; i+=4){

 //Using decrements:   
//for (let i = 50; i >= 30; i -= 4){

//Even or odd numbers
//for (let i = 0; i <= 10; i++){
    
    //const evenNumber = i % 2 === 0
    
    //Using ternary condition(if)
    // const evenNumber = i % 2 === 0 ? '-> even' : '-> odd'
    // console.log(i, evenNumber)
    //console.log(`Line ${i}`)
    
  //Using arrays:
  const fruits = ['Apple', 'Orange', 'Strawberry', 'Pear', 'Banana']
  for (let i = 0; i < fruits.length ; i++){
    console.log(`index ${i} is -> ${fruits[i]}`)

}