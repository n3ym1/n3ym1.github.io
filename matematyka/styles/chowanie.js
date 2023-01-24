document.getElementById('mobile-nav').onclick = function() {
if (document.getElementsByClassName("nav-main")[0].classList.contains("schowane")) {
    document.getElementsByClassName("nav-main")[0].classList.remove("schowane");
}
else {
    document.getElementsByClassName("nav-main")[0].classList.add("schowane");
    
}
};
document.getElementById('nav-calc').onclick = function() {
if (document.getElementsByClassName("calc")[0].classList.contains("schowane-calc")) {
document.getElementsByClassName("calc")[0].classList.remove("schowane-calc");
}
else {
document.getElementsByClassName("calc")[0].classList.add("schowane-calc");

}
};
document.getElementById('nav-function').onclick = function() {
    if (document.getElementsByClassName("funkcje")[0].classList.contains("schowane-funkcje")) {
    document.getElementsByClassName("funkcje")[0].classList.remove("schowane-funkcje");
    }
    else {
    document.getElementsByClassName("funkcje")[0].classList.add("schowane-funkcje");
    
    }
    };
