//Exercicies using string in JS

const name = prompt('Type your full name:')

document.body.innerHTML += `You full name is: <b>${name}</b><hr>`
let letters = name
document.body.innerHTML += `Your name has <b>${name.length}</b> letters<hr>`
document.body.innerHTML += `The second letter of your name is: <b>${name[1]}</b><hr>`
document.body.innerHTML += `The first index of "A" letter from you name is: <b>${name.indexOf('a')}</b><hr>`
document.body.innerHTML += `The last index of "A" letter from you name is: <b>${name.lastIndexOf('a')}</b><hr>`

document.body.innerHTML += `The last three letters from your name are: <b>${name.slice(-3)}</b><hr>`

document.body.innerHTML += `The words from your name are: <b>${name.split(" ")}</b><hr>`

document.body.innerHTML += `Your name with LOWERCASE are: <b>${name.toUpperCase()}</b><hr> `
document.body.innerHTML += `Your name with LOWERCASE are: <b>${name.toLowerCase()}</b><hr> `
