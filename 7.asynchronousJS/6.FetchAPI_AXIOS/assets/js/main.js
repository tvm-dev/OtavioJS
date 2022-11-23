// //Using Fecth to consume Json file local:

// fetch('assets/pessoas.json')
//     .then(response => response.json())

//     // //Showing datas using console.log:
//     // .then(json => console.log(json))

//     //Showing datas using a function:
//     .then(json => loadUsersFromJSONonPage(json))

// function loadUsersFromJSONonPage(json) {
//     //Creating elements for html:
//     //table:
//     const table = document.createElement('table')

//     //reading json using looping:
//     for (let person of json) {

//         //Creating line of table:
//         const tr = document.createElement('tr')

//         //Creating datas from json file, for table, for each field(nome):
//         let td = document.createElement('td')
//         td.innerHTML = person.nome
//         tr.appendChild(td)

//         //Creating datas from json file, for table, for each field(nome):
//         td = document.createElement('td')
//         td.innerHTML = person.idade
//         tr.appendChild(td)

//         //Creating datas from json file, for table, for each field(nome):
//         td = document.createElement('td')
//         td.innerHTML = person.salario
//         tr.appendChild(td)

//         table.appendChild(tr)
//     }
//     const results = document.querySelector('.results')
//     results.appendChild(table)
// }


//Using AXIOS CDN github:
//Using Fecth to consume Json file local:

// fetch('assets/pessoas.json')
//     .then(response => response.json())

//     // //Showing datas using console.log:
//     // .then(json => console.log(json))

//     //Showing datas using a function:
//     .then(json => loadUsersFromJSONonPage(json))


//AXIOS:
axios('assets/pessoas.json')
.then(resposta => loadUsersFromJSONonPage(resposta.data));



function loadUsersFromJSONonPage(json) {
    //Creating elements for html:
    //table:
    const table = document.createElement('table')

    //reading json using looping:
    for (let person of json) {

        //Creating line of table:
        const tr = document.createElement('tr')

        //Creating datas from json file, for table, for each field(nome):
        let td = document.createElement('td')
        td.innerHTML = person.nome
        tr.appendChild(td)

        //Creating datas from json file, for table, for each field(nome):
        td = document.createElement('td')
        td.innerHTML = person.idade
        tr.appendChild(td)

        //Creating datas from json file, for table, for each field(nome):
        // td = document.createElement('td')
        // td.innerHTML = person.salario
        // tr.appendChild(td)

        table.appendChild(tr)
    }
    const results = document.querySelector('.results')
    results.appendChild(table)
}


