function* generator1() {
    //Any code here
    yield 'value 1'
    //Any code here
    yield 'value 2'
    //Any code here
    yield 'value 3'
}

function* generator2() {
    let i = 0
    while (true) {
        yield i
        i++
    }
}

function* generator3() {
    yield 0;
    yield 1;
    yield 2;
}

function* generator4() {
    yield* generator3();
    yield 3;
    yield 4;
    yield 5;
}

//const g1 = generator1()
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next())
// console.log(g1.next())

//Make iterations:
// for (let value of g1){
//     console.log(value)
// }
// const g2 = generator2()
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)

const g4 = generator4();
for (let value of g4) {
    console.log(value);
}