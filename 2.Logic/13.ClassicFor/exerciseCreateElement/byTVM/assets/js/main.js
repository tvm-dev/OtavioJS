let container = document.querySelector('.container')

//Creating elements: p, div, footer and section
let newP = document.createElement('p')
let newDiv = document.createElement('div')
let newF = document.createElement('footer')
let newS = document.createElement('section')

//Inserting contents:
newP.innerHTML += 'Phrase 01'
newDiv.innerHTML += 'Phrase 02'
newF.innerHTML += 'Phrase 03'
newS.innerHTML += 'Phrase 04'

//Adding contents on 'container' div in html:
container.appendChild(newP)
container.appendChild(newDiv)
container.appendChild(newF)
container.appendChild(newS)

// console.log(newP)
// console.log(newDiv)
// console.log(newF)
// console.log(newS)