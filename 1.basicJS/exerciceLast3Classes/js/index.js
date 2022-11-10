function myEscope() {
    const form = document.querySelector('.form');
    const results = document.querySelector('.results');
    //Way one
    // form.onsubmit = function (event) {
    //     event.preventDefault();
    //     alert('ok');
    //     console.log('Form was send!');
    //};

    //Creating Array to save datas from users:
    const persons = [] //empty array

    //Way two -> addEventListener(list events on form) -> better

    function receiveEventForm(event) {
        event.preventDefault();

        const name = form.querySelector('.name');
        const lastname = form.querySelector('.lastname');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        //Wroong way, because datas aren't include on array persons
        // results.innerHTML +=
        // `<ul><li>
        // ${name.value}
        // ${lastname.value} - 
        // ${weight.value} kg -
        // ${height.value} m
        // </li></ul>`;

        persons.push({
            name: name.value,
            lastname: lastname.value,
            weight: weight.value,
            height: height.value
        });


       console.log(persons);

        results.innerHTML +=
            `<ul><li>
        ${name.value}
        ${lastname.value} - 
        ${weight.value} kg -
        ${height.value} m
        </li></ul>`;
    }

        form.addEventListener('submit', receiveEventForm);
    }
    myEscope();