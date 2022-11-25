const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const createUppercase = () => String.fromCharCode(rand(65, 91));
const createLowercase = () => String.fromCharCode(rand(97, 123));
const createNumbers = () => String.fromCharCode(rand(48, 58));
const createSymbols = () => String.fromCharCode(rand(33, 47));


export default function makePass(qtd, upper, lower, number, symbol) {
    const arrayPass = [];
    qtd = Number(qtd);
    console.log(qtd)

    for (let i = 0; i < qtd; i++) {
        upper && arrayPass.push(createUppercase())
        lower && arrayPass.push(createLowercase())
        number && arrayPass.push(createNumbers())
        symbol && arrayPass.push(createSymbols())

    }
    return arrayPass.join('').slice(0, qtd)

}


// makePass(5, true, true)
// //console.log(createUppercase(), createLowercase(), createNumbers(), createSymbols())


//========Prof=============

// const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
// const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
// const geraMinuscula = () => String.fromCharCode(rand(97, 123));
// const geraNumero = () => String.fromCharCode(rand(48, 58));
// const simbolos = ',.;~^[]{}!@#$%*()_+=-';
// const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

// export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
//   const senhaArray = [];
//   qtd = Number(qtd);

//   for(let i = 0; i < qtd; i++) {
//     maiusculas && senhaArray.push(geraMaiuscula());
//     minusculas && senhaArray.push(geraMinuscula());
//     numeros && senhaArray.push(geraNumero());
//     simbolos && senhaArray.push(geraSimbolo());
//   }

//   return senhaArray.join('').slice(0, qtd);
// }
