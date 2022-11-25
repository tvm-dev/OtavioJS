const paragraphs = document.querySelector('.paragraph')
const ps = paragraphs.querySelectorAll('p')
// for (let keys in ps){
//     console.log(keys, ps[keys])
// }
// for (let keys of ps){
//         console.log(keys, ps[keys])
//     }

const bodyStyles = getComputedStyle(document.body)
const backgroundColorBody = bodyStyles.backgroundColor;
//console.log(backgroundColorBody)

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white'
    // p.style.textAlign = 'center'
    // p.style.fontSize = '20px'
    // p.style.padding = '5px'
    // p.style.border = '2px; solid #FFF'
 


}

