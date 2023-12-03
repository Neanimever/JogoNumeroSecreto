let arraySecretNumber = [];

let maxNumber = 10;

let tries = 1;

let secretNumber = randomNumber();

function showTextOnScreen(tag, text) {
    let variable = document.querySelector(tag);
    variable.innerHTML = text;
}

showTextOnScreen('h1', 'Jogo do número secreto');
showTextOnScreen('.texto__paragrafo', `Escolha um número entre 1 e ${maxNumber}`);

function verifyTry() {
    let tryNumber = document.querySelector('input').value;

    if (tryNumber == secretNumber) {
        showTextOnScreen('h1', 'Acertou!');
        let wordTry = tries > 1 ? 'tentativas' : 'tentativa';
        let message = `Você descobriu o número secreto em ${tries} ${wordTry}`;
        showTextOnScreen('.texto__paragrafo', message);

        document.querySelector('#reiniciar').removeAttribute('disabled');
        document.querySelector('#tentar').setAttribute('disabled', true);

    } else {
        if (tryNumber > secretNumber) {
            showTextOnScreen('.texto__paragrafo', 'O número secreto é menor');
        } else {
            showTextOnScreen('.texto__paragrafo', 'O número secreto é maior');
        }
        cleanScreen();
    }

    tries++;
}

function randomNumber() {
    let choosedNumber = parseInt(Math.random() * maxNumber + 1);

    let quantityArray = arraySecretNumber.length;

    if (quantityArray == maxNumber) {
        arraySecretNumber = [];
    }

    if (arraySecretNumber.includes(choosedNumber)) {
        return randomNumber();
    } else {
        arraySecretNumber.push(choosedNumber);
        return choosedNumber;
    }
}

function cleanScreen() {
    tryNumber = document.querySelector('input');
    tryNumber.value = '';
}

function restartGame() {
    secretNumber = randomNumber();
    cleanScreen();
    tries = 1;
    showTextOnScreen('h1', 'Jogo do número secreto');
    showTextOnScreen('.texto__paragrafo', `Escolha um número entre 1 e ${maxNumber}`);
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    document.querySelector('#tentar').removeAttribute('disabled');
}