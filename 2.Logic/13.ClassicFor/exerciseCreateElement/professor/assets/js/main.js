//Capturing Container in html:
const container = document.querySelector('.container')

//Creating new Div in html:
const div = document.createElement('div')

//Creating Array with all elements Requested
const elements = [
    {tag: 'p', text: 'Phrase 01'},
    {tag: 'div', text: 'Phrase 02'},
    {tag: 'section', text: 'Phrase 03'},
    {tag: 'footer', text: 'Phrase 04'},
]
//Creating for:
for (i = 0; i < elements.length; i++){
    let {tag, text} = elements[i]
    let tagCreated = document.createElement(tag)
    tagCreated.innerHTML = text
    div.appendChild(tagCreated)
    
}
container.appendChild(div)





//Creatiing for








//console.log(elements)
