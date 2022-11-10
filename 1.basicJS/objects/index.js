// const person = {
//     name: 'Thiago',
//     lastName: 'Viana',
//     age: 38
// };
// console.log(`Hi ${person.name}, you lastname is ${person.lastName}? Are you have ${person.age} years?`);

//Parametros: vai dentro dos parenteses da funcao.
//argumentos: é o valor passado aos parametros, vai ao chamar/executar a função.

// //Função Factory: cria, retorna objetos
// function createPerson (name, lastName, age){
//     return {
//         name: name,
//         lastName: lastName,
//         age: age
//     };
// }
// const person01 = createPerson('Thiago', 'Otávio', 38)
// console.log(person01.name, person01.age);


//Função Factory: cria, retorna objetos -> melhorada!
// function createPerson (name, lastName, age){
//     return {name, lastName, age};
// }
// const person01 = createPerson('Thiago', 'Viana', 38)
// const person02 = createPerson('Eike', 'de Carvalho', 11)
// console.log(person01.name, person01.lastName, person01.age);
// console.log(person02.name, person02.lastName, person02.age);

// const pessoa = {
//     nome: 'tvm',
//     cep: 08421-130,
//     idade: 38,
//    // fala(){console.log('Olá Mundo')}
//     fala(){console.log('Olá Mundo')}
// };
// pessoa.fala();


const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Viana',
    idade: 38,
    fala(){
        
        //console.log(`${this.nome} ${this.sobrenome} está falado Oieeee`)
        console.log(`A minha idade é ${this.idade}!`);
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementaIdade();

pessoa.fala();
pessoa.incrementaIdade();

pessoa.fala();
pessoa.incrementaIdade();

pessoa.fala();
pessoa.incrementaIdade();

pessoa.fala();
pessoa.incrementaIdade();
























