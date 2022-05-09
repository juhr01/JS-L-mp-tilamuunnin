const mylist = document.querySelector("#myList");
const valittu = mylist.options[mylist.selectedIndex].value;
const myForm = document.querySelector('#my-form');
const lampotila = document.querySelector('#lampotila').value;



function muunna() {

    if (valittu == "cTOf") {
        cTOf();
    } else if (valittu == "cTOk") {
        cTOk();
    } else if (valittu == "fTOc") {
        fTOc();
    } else if (valittu == "fTOk") {
        fTOk();
    } else if (valittu == "kTOc") {
        kTOc();
    } else {
        kTOf();
    }
  
}

mylist.addEventListener("change", (e) => {
    const value = e.target.value;
   
    if (value) {
      muunna();
    }
  });

function cTOf() {
    const lampotila = document.querySelector('#lampotila').value;
    const cTemp = parseFloat(lampotila);
    const cToFahr = (cTemp * 1.8) + 32;
    document.querySelector("#output").innerHTML = cToFahr;
}

function cTOk() {
    const lampotila = document.querySelector('#lampotila').value;
    const cTemp = parseFloat(lampotila);
    const cToKel = cTemp + 273.15;
    document.querySelector("#output").innerHTML = cToKel;
}

function fTOc() {
    const lampotila = document.querySelector('#lampotila').value;
    const fTemp = parseFloat(lampotila);
    const fToCel = (fTemp - 32) / 1.8;
    document.querySelector("#output").innerHTML = fToCel;
}

function fTOk() {
    const lampotila = document.querySelector('#lampotila').value;
    const fTemp = parseFloat(lampotila);
    const fToKel = ((fTemp - 32) / 1.8) + 273.15;
    document.querySelector("#output").innerHTML = fToKel;
}

function kTOc() {
    const lampotila = document.querySelector('#lampotila').value;
    const kTemp = parseFloat(lampotila);
    const kToCel = kTemp -273.15;
    document.querySelector("#output").innerHTML = kToCel;
}

function kTOf() {
    const lampotila = document.querySelector('#lampotila').value;
    const kTemp = parseFloat(lampotila);
    const kToFahr = ((kTemp -273.15) * 1.8) + 32;
    document.querySelector("#output").innerHTML = kToFahr;
}