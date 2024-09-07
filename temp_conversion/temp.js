let submitbtn = document.getElementById("btn");
let tocel = document.getElementById("celtofah");
let tofah = document.getElementById("fahtocel");
let result = document.getElementById("result");

submitbtn.onclick = function () {
    let inputnum = Number(document.getElementById("temperature").value);

    function celsiusToFahrenheit(temp) {
        return (temp * 9/5) + 32;
    }

    function fahrenheitToCelsius(temp) {
        return (temp - 32) * 5/9;
    }

    if (tocel.checked) {
        let answer = celsiusToFahrenheit(inputnum);
        result.textContent = `Result: ${answer.toFixed(2)} °F`;
    } else if (tofah.checked) {
        let answer = fahrenheitToCelsius(inputnum);
        result.textContent = `Result: ${answer.toFixed(2)} °C`;
    } else {
        result.textContent = "Please select a conversion type.";
    }
};
