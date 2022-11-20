// const _vel = Symbol('vel')

// class Car {
//     constructor(namee) {
//         this.namee = namee;
//         this[_vel] = 0;
//     }


//     // if(isNaN(num1)){
//     //     document.write(num1 + " is not a number <br/>");
//     //  }else{
//     //     document.write(num1 + " is a number <br/>");
//     //  }



//       set vel(value){
//         console.log('SETTER')
//         if(isNaN(value)) return;
//         if(value >= 100 || value <= 0) return;
//         this[_vel] = value

//       }


//     get vel(){
//         console.log('GETTER')
//       return this[_vel];
//     }

//     accelerate() {
//         if (this[_vel] >= 100) return;
//         this[_vel]++

//     }

//     brake() {
//         if (this[_vel] <= 0) return;
//         this[_vel]--

//     }
// }
// const c1 =  new Car('Fusca')

// // for (let i = 0; i <= 200; i++){
// //     c1.accelerate()
// // }
// c1.vel = 98
// console.log(c1.vel)


//new example, more simple:
class Person {
    constructor(namee, surnamee) {
        this.namee = namee
        this.surnamee = surnamee
    }

    get fullName() {
        return this.namee + ' ' + this.surnamee
    }

    set fullName(value) {
        value = value.split(' ')
        this.namee = value.shift()
        this.surnamee = value.join(' ')
    }
}

const p1 = new Person('thiago', 'viana')
p1.fullName = 'eike menezes'
console.log(p1.namee)
console.log(p1.surnamee)