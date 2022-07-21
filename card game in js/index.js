let randomNum = Math.floor(Math.random() * 51);
let counter = 0;
let restart = document.getElementById("restartVal");
let val = document.getElementById("contextText");
let numbers = document.getElementById("inputNumbers");

let game = () => {
    let num = document.getElementById("one").value;

    if (counter === 5) {
        finishGame();
    }

    if (Number(num) === randomNum && counter < 5) {
        val.innerText = "Your answer is good";
        const para = document.createElement("span");
        para.classList.add('winner');
        para.innerText = num;
        numbers.appendChild(para);
        finishGame();
    } else if (Number(num) < randomNum && counter < 5) {
        val.innerText = "The number entered was below the random number";
        counter++
        const para = document.createElement("span");
        para.innerText = num;
        numbers.appendChild(para);
    } else if (Number(num) > randomNum && counter < 5) {
        val.innerText = "The number entered was higher the random number";
        counter++
        const para = document.createElement("span");
        para.innerText = num;
        numbers.appendChild(para);
    }
}

let finishGame = () => {
    document.getElementById("restartContent").style.display = "block";
    val.innerText = "";
    document.getElementById("one").value = "";
    document.getElementById("one").disabled = true;
    document.getElementById("pressButton").disabled = true;
    restart.innerText = `You lose, do you want to restart? The winning number was ${randomNum}`;
}

let restartFunc = () => {
    randomNum = Math.floor(Math.random() * 51);
    counter = 0;
    document.getElementById("one").disabled = false;
    document.getElementById("pressButton").disabled = false;
    document.getElementById("restartContent").style.display = "none";
    while (numbers.firstChild) {
        numbers.removeChild(numbers.lastChild);
    }
}

let magic = () => {
    let elem = document.getElementById("main");
    elem.classList.toggle('active');
}