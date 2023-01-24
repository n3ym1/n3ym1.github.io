function dodawanie(x,y) {
var wynik = x+y;
document.getElementById("wynik-calc").innerHTML += wynik;
}

function odejmowanie(x,y) {
var wynik = x-y;
document.getElementById("wynik-calc").innerHTML += wynik;
}
function mnozenie(x,y) {
var wynik = x*y;
document.getElementById("wynik-calc").innerHTML += wynik;
}

function dzielenie(x,y) {
var wynik = x/y;
document.getElementById("wynik-calc").innerHTML += wynik;
}

function wyczysc() {
document.getElementById('wynik-calc').innerHTML = "";
znaki=[];
liczby=[];
}
document.getElementById('nav-calc').onclick = function() {

setTimeout(wyczysc, 2000);
}
var liczby=[];
var znaki=[]; 
var pom = "";
const buttons_liczba = document.querySelectorAll(".liczba");
for (const button of buttons_liczba) {
  button.addEventListener('click', function(event) {
    pom+=button.value;
    console.log(pom);
    document.getElementById("wynik-calc").innerHTML += button.value;
  })
}
const buttons_znak = document.querySelectorAll(".znak");
for (const button of buttons_znak) {
  button.addEventListener('click', function(event) {
    znaki.push(button.value);
    liczby.push(pom);
    pom="";
    document.getElementById("wynik-calc").innerHTML += button.value;
    if (button.id=='wynik') {
        var pierwsza = parseInt(liczby[0]);
        var druga = parseInt(liczby[1]);
        if (isNaN(pierwsza) || isNaN(druga) || liczby[2]!=null) {
          document.getElementById("wynik-calc").innerHTML = "Niepoprawna liczba lub znak.";
          setTimeout(wyczysc, 1000)
          return
        }
        var znak = znaki[0];
        if (znak=="+") {
            dodawanie(pierwsza, druga);   
        }
        if (znak=="-") {
            odejmowanie(pierwsza, druga);    
        }
        if (znak=="X") {
            mnozenie(pierwsza, druga);    
        }
        if (znak=="/") {
            dzielenie(pierwsza, druga);    
        }
    }
    if (button.value=='C') {
        wyczysc();
    }

  });
}