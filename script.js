const mylist = document.querySelector("#myList");
const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const pyorista = (number, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * factorOfTen) / factorOfTen;
  }

function muunna() {

    if (mylist.options[mylist.selectedIndex].value == "cTOf") {
        cTOf();
    } else if (mylist.options[mylist.selectedIndex].value == "cTOk") {
        cTOk();
    } else if (mylist.options[mylist.selectedIndex].value == "fTOc") {
        fTOc();
    } else if (mylist.options[mylist.selectedIndex].value == "fTOk") {
        fTOk();
    } else if (mylist.options[mylist.selectedIndex].value == "kTOc") {
        kTOc();
    } else {
        kTOf();
    }

}

function cTOf() {
    const lampotila = document.querySelector('#lampotila').value;
    const cTemp = parseFloat(lampotila);
    const cToFahr = (cTemp * 1.8) + 32;
    if (cTemp < -273.15) {
        msg.classList.add('error');
        msg.innerHTML = 'Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste';
        setTimeout(() => msg.remove(), 3000);
    } else if (typeof lampotila !== "number") {
        msg.classList.add('error');
        msg.innerHTML = 'Syötä pelkästään numeroita';
        setTimeout(() => msg.remove(), 3000);
    /*} else if (document.querySelector('#1d').checked == false || document.querySelector('#2d').checked == false || document.querySelector('#3d').checked == false ) {
        msg.classList.add('error');
        msg.innerHTML = 'Valitse muunnoksen tarkkuus';
        setTimeout(() => msg.remove(), 3000); */
    } else {
        if (document.querySelector('#1d').checked == true) {
            document.querySelector("#output").innerHTML = `${cTemp} &#176;C = ${pyorista(cToFahr, 1)} &#176;F`;
        }
        if (document.querySelector('#2d').checked == true) {
            document.querySelector("#output").innerHTML = `${cTemp} &#176;C = ${pyorista(cToFahr, 2)} &#176;F`;
        }
        if (document.querySelector('#3d').checked == true) {
            document.querySelector("#output").innerHTML = `${cTemp} &#176;C = ${pyorista(cToFahr, 3)} &#176;F`;
        }
    }
}

function cTOk() {
    const lampotila = document.querySelector('#lampotila').value;
    const cTemp = parseFloat(lampotila);
    const cToKel = cTemp + 273.15;
    if (cTemp < -273.15) {
        msg.classList.add('error');
        msg.innerHTML = 'Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste';
        setTimeout(() => msg.remove(), 3000);
    } else if (typeof lampotila !== "number") {
        msg.classList.add('error');
        msg.innerHTML = 'Syötä pelkästään numeroita';
        setTimeout(() => msg.remove(), 3000);
    } else {
        document.querySelector("#output").innerHTML = `${cTemp} &#176;C = ${cToKel} &#176;K`;
    }
}

function fTOc() {
    const lampotila = document.querySelector('#lampotila').value;
    const fTemp = parseFloat(lampotila);
    const fToCel = (fTemp - 32) / 1.8;
    if (fTemp < -459.67) {
        msg.classList.add('error');
        msg.innerHTML = 'Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste';
        setTimeout(() => msg.remove(), 3000);
    } else if (typeof lampotila !== "number") {
        msg.classList.add('error');
        msg.innerHTML = 'Syötä pelkästään numeroita';
        setTimeout(() => msg.remove(), 3000);
    } else {
        document.querySelector("#output").innerHTML = `${fTemp} &#176;F = ${fToCel} &#176;C`;
    }
}

function fTOk() {
    const lampotila = document.querySelector('#lampotila').value;
    const fTemp = parseFloat(lampotila);
    const fToKel = ((fTemp - 32) / 1.8) + 273.15;
    if (fTemp < -459.67) {
        msg.classList.add('error');
        msg.innerHTML = 'Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste';
        setTimeout(() => msg.remove(), 3000);
    } else if (typeof lampotila !== "number") {
        msg.classList.add('error');
        msg.innerHTML = 'Syötä pelkästään numeroita';
        setTimeout(() => msg.remove(), 3000);
    } else {
        document.querySelector("#output").innerHTML = `${fTemp} &#176;F = ${fToKel} &#176;K`;
    }
}

function kTOc() {
    const lampotila = document.querySelector('#lampotila').value;
    const kTemp = parseFloat(lampotila);
    const kToCel = kTemp - 273.15;
    if (kTemp < 0) {
        msg.classList.add('error');
        msg.innerHTML = 'Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste';
        setTimeout(() => msg.remove(), 3000);
    } else if (typeof lampotila !== "number") {
        msg.classList.add('error');
        msg.innerHTML = 'Syötä pelkästään numeroita';
        setTimeout(() => msg.remove(), 3000);
    } else {
        document.querySelector("#output").innerHTML = `${kTemp} &#176;K = ${kToCel} &#176;C`;
    }
}

function kTOf() {
    const lampotila = document.querySelector('#lampotila').value;
    const kTemp = parseFloat(lampotila);
    const kToFahr = ((kTemp - 273.15) * 1.8) + 32;
    if (kTemp < 0) {
        msg.classList.add('error');
        msg.innerHTML = 'Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste';
        setTimeout(() => msg.remove(), 3000);
    } else if (typeof lampotila !== "number") {
        msg.classList.add('error');
        msg.innerHTML = 'Syötä pelkästään numeroita';
        setTimeout(() => msg.remove(), 3000);
    } else {
        document.querySelector("#output").innerHTML = `${kTemp} &#176;K = ${kToFahr} &#176;F`;
    }
}