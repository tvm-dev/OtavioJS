// //Using old callbacks, below:

// const request = obj => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(obj.method, obj.url, true)
//     xhr.send()

//     xhr.addEventListener('load', () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText)
//         } else { 
//             obj.error(xhr.statusText)
//         }
//     })
// }

// document.addEventListener('click', e => {
//     const element = e.target
//     const tag = element.tagName.toLowerCase()

//     if (tag === 'a') {  
//         e.preventDefault()
//         loadPage(element)

//     }
// })

// function loadPage(element) {
//     const href = element.getAttribute('href')

//     //creating the object:
//     const objConfig = {
//         method: 'GET',
//         url: href,
//         //creting new function inside of object:
//         success(response) {
//             loadResult(response)
//         },
//         error(errorText) {
//             console.log(errorText)
//         }
//     }
//         request(objConfig)
// }

// function loadResult(response) {
//     const result = document.querySelector('.result')
//     result.innerHTML = response
// }

//==================================================
//New way, using Promises, without callbacks:
// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(obj.method, obj.url, true)
//         xhr.send()

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject(xhr.statusText)
//             }
//         })
//     })
// }

// document.addEventListener('click', e => {
//     const element = e.target
//     const tag = element.tagName.toLowerCase()

//     if (tag === 'a') {
//         e.preventDefault()
//         loadPage(element)

//     }
// })

// function loadPage(element) {
//     const href = element.getAttribute('href')

//     //creating the object:
//     const objConfig = {
//         method: 'GET',
//         url: href

//     }
//     request(objConfig).then(response => {
//         loadResult(response)
//     }).catch(error => console.log(error))
// }

// function loadResult(response) {
//     const result = document.querySelector('.result')
//     result.innerHTML = response
// }


//Second improving the code above:
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', e => {
    const element = e.target
    const tag = element.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        loadPage(element)

    }
})

async function loadPage(element) {
    const href = element.getAttribute('href')

    //creating the object:
    const objConfig = {
        method: 'GET',
        url: href
    };

    try{
        const response =  await request(objConfig);
        loadResult(response);
    } catch(e) {
        console.log(e)
    }

  
      
}

function loadResult(response) {
    const result = document.querySelector('.result')
    result.innerHTML = response
}