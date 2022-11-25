/**
 * Try and Catch and Throw
 */

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new ReferenceError('A and B need to be numbers!')
    } return a + b
} try {
    console.log(sum(1, 2))
    console.log('tvm', 2)
} catch (error) {
    console.log(error)
    console.log('Anything more friendly for user!')
}