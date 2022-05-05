function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    
  }

function cTOf(celsius) {
    const cTemp = celsius;
    const cToFahr = (cTemp * 1.8) + 32;
    document.querySelector("#output").innerHTML = cToFahr;
}

function cTOk(celsius) {
    const cTemp = celsius;
    const cToKel = cTemp + 273.15;
    document.querySelector("#output").innerHTML = cToKel;
}

function fTOc(fahrenheit) {
    const fTemp = fahrenheit;
    const fToCel = (fTemp - 32) / 1.8;
    document.querySelector("#output").innerHTML = fToCel;
}

function fTOk(fahrenheit) {
    const fTemp = fahrenheit;
    const fToKel = ((fTemp - 32) / 1.8) + 273.15;
    document.querySelector("#output").innerHTML = fToKel;
}

function kTOc(kelvin) {
    const kTemp = kelvin;
    const kToCel = kTemp -273.15;
    document.querySelector("#output").innerHTML = kToCel;
}

function kTOf(kelvin) {
    const kTemp = kelvin;
    const kToFahr = ((kTemp -273.15) * 1.8) + 32;
    document.querySelector("#output").innerHTML = kToFahr;
}