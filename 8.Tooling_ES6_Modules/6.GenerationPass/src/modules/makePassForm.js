import makePass from './generationPass'

const passGenerated = document.querySelector('.results');
const characters = document.querySelector('.numbersCharacter');
const upper = document.querySelector('.upper');
const lower = document.querySelector('.lower');
const number = document.querySelector('.number');
const symbol = document.querySelector('.symbol');
const btnGenPass = document.querySelector('.genPass');//btn

export default () => {
    btnGenPass.addEventListener('click', () => {
        passGenerated.innerHTML = generation();

    });
};

function generation() {
    const pass = makePass (
        characters.value,
        upper.checked,
        lower.checked, 
        number.checked,
        symbol.checked

    );
    return pass || 'You need select your options!';
}
