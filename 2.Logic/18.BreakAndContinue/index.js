/**
 * tvm Comments
 * continue: continue to the next iteration
 * break: got out of the loop
 */

const numbers = [1,2,3,4,5,6,7,8,9,10]

for (let number of numbers){

    if (number === 2){
        console.log('-> I skipped number 2')
        continue
    }
    console.log(number)
    if (number === 7){
        console.log('Number 7 founded, exiting...')
        break
    }
    
    

}