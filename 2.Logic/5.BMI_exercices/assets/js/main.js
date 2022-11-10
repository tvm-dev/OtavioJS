//Calculate BMI:

function calculateBMI() {
    //Stoping send datas by the browser!
    document.querySelector('#sendForm').addEventListener("click", function (event) {
        event.preventDefault()
    });

    let weight = document.getElementById('input_weight').value;
    let height = document.getElementById('input_height').value;
    let calcBMI = (weight / (height ** 2))

    document.querySelector('.resultBMI').innerHTML = `Your BMI is: <b>${calcBMI.toFixed(1)}</br>`;

    if (calcBMI >= 0 && calcBMI < 18.5) {
        document.querySelector('.resultBMI').innerHTML += `<strong>[ Under the Weight! ]</strong><br>Be careful!`
    } else if (calcBMI >= 18.5 && calcBMI < 24.999) {
        document.querySelector('.resultBMI').innerHTML += `<strong>[ Normal Weight! ]</strong><br>Very Good. Congrats!`

    } else if (calcBMI >= 25 && calcBMI < 29.999) {
        document.querySelector('.resultBMI').innerHTML += `<strong>[ Over Weight! ]</strong><br>Be attenton! Cut Suggar right now!`
    } else if (calcBMI >= 30 && calcBMI < 34.999) {
        document.querySelector('.resultBMI').innerHTML += `<strong>[ Obesy level 01!  ]</strong><br>Eat more vegetables and cut sugar right now`
    } else if (calcBMI >= 35 && calcBMI < 39.999) {
        document.querySelector('.resultBMI').innerHTML += `<strong>[ Obesy level 02! ]</strong><br>Go find help medic`
    } else if (calcBMI >= 40) {
        document.querySelector('.resultBMI').innerHTML += `<strong>[ Obesy leve 03! ]</strong><br>Risk of Death!!!`
    } else {
        document.querySelector('.resultBMI').innerHTML += `<strong>[ <<< Error on calculate! >>> ]</strong><br>`
    }

}