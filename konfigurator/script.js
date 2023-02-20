//KOD
const code100 ="100";
const code101 ="101";
const code105 ="105";
const code110 ="110";
const code125 ="125";
const code123 ="123";
const code136 ="136";
const code140 ="140";
const code200 ="200";
const code210 ="210";
const code234 ="234";
 

//STAWKA BAZOWA
function getBaseValue() {
const infobox = document.getElementById("wybory");
const basevalue = document.getElementById('inputkod').value;

const box = document.createElement("div");
box.innerHTML = 'KOD USŁUGI <br> ' + basevalue;
box.style.backgroundColor = "orange";
box.classList.add("box");

infobox.appendChild(box);

console.log(basevalue);
if (document.getElementsByClassName('box') !==null) {
    document.getElementById('przycisk').onclick = null;
}

}


//WSPOŁCZYNNIK PAKIETU

//ILOŚĆ GODZIN WYMAGANYCH NA USŁUGĘ


function totalValue() {
    var total = x*y*z
    doument.getElementById("total").innerHTML = total;
}
var boxWybor = document.getElementsByClassName('boxWyborObszar');
boxWybor.addEventListener("click", function() {
const infobox = document.getElementById("wybory");
var obszarValue = document.getElementsByClassName("boxWyborObszar").innerHTML;
const box = document.createElement("div");
box.innerHTML = 'Obszar <br> ' + obszarValue;
box.style.backgroundColor = "orange";
box.classList.add("box");

infobox.appendChild(box);
});