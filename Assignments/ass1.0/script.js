'use strict';
const f2c = function () {
    let fahr;
    let celsius;

    let lower = -15;
    let upper = 150;
    let step = 15;

    let s = '<table>';
    s += '<tr><th>Celsius</th><th>Fahrenheit</th></tr>';
    celsius = lower;
    while (celsius <= upper) {
        fahr = celsius * 1.8 + 32;
        s += `<tr><td>${celsius}</td><td>${fahr}</td></tr>`;
        celsius = celsius + step;
    }
    s += '</table>';
    return s;
}
