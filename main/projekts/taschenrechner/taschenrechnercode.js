//ausrechnen

let ersteZahl = "";
let operator = "";
let zweiteZahl = "";

function rechnen(test) {
    console.log(test);

    const display = document.getElementById("display");
    if (test != "=") display.value += test;

    if (test === "+" || test === "-" || test === "x" || test === ":") {
        ersteZahl = display.value.slice(0, -1);
        operator = (test);
   

    }

    if (test === "=") {
        zweiteZahl = display.value.split(operator)[1];

        let ergebnis;

        if (operator === "+") {
            ergebnis = Number(ersteZahl) + Number(zweiteZahl);
        }

        if (operator === "-") {
            ergebnis = Number(ersteZahl) - Number(zweiteZahl);
        }

        if (operator === "x") {
            ergebnis = Number(ersteZahl) * Number(zweiteZahl);
        }

        if (operator === ":") {
            ergebnis = Number(ersteZahl) / Number(zweiteZahl);
        }

        display.value = ergebnis;

    }
}

function clearCalculator() {
    location.reload();
}
