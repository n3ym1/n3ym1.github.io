//Potęga
function potega () {
    x = document.getElementById("potega-a").value;
    y = document.getElementById("potega-b").value;
    wynik = Math.pow(x, y);
    document.getElementById("potega-wynik").innerHTML = wynik;
    if (y<0) {
        document.getElementById("potega-wynik").style.color = "red";
        document.getElementById("potega-wynik").innerHTML = "Użyj liczby naturalnej!!";
        function wyczysc() {
            document.getElementById("potega-wynik").innerHTML = "";
            document.getElementById("potega-wynik").style.color = "black";
        }
        setTimeout(wyczysc, 2000);
    } 
}
//Pierwiastek
function pierwiastek() {
    x = document.getElementById("pierwiastek-a").value;
    y = document.getElementById("pierwiastek-b").value;
    wynik = Math.pow(x, 1/y);
    document.getElementById("pierwiastek-wynik").innerHTML = wynik;
    if (y<=0) {
        document.getElementById("pierwiastek-wynik").style.color = "red";
        document.getElementById("pierwiastek-wynik").innerHTML = "Użyj liczby naturalnej!!";
        function wyczysc() {
            document.getElementById("pierwiastek-wynik").innerHTML = "";
            document.getElementById("pierwiastek-wynik").style.color = "black";
        }
        setTimeout(wyczysc, 2000);
    } 
    if (x<=0) {
        document.getElementById("pierwiastek-wynik").style.color = "red";
        document.getElementById("pierwiastek-wynik").innerHTML = "Użyj liczby naturalnej różnej od 0!!";
        function wyczysc() {
            document.getElementById("pierwiastek-wynik").innerHTML = "";
            document.getElementById("pierwiastek-wynik").style.color = "black";
        }
        setTimeout(wyczysc, 2000);
    } 
}
//Funkcja kwadratowa
function kwadratowa() {
    x = document.getElementById("kwadratowa-a").value;
    y = document.getElementById("kwadratowa-b").value;
    z = document.getElementById("kwadratowa-c").value;

//Delta
    if (x=="" || y=="") {
        document.getElementById("kwadratowa-wynik").style.color = "red";
        document.getElementById("kwadratowa-wynik").innerHTML = "Wpisz a i/lub b do działania!!";
        function wyczysc() {
            document.getElementById("kwadratowa-wynik").innerHTML = "";
            document.getElementById("kwadratowa-wynik").style.color = "black";
        }
        setTimeout(wyczysc, 2000);
        return
    }
    if (x!= null && y!= null && z=="") {
        delta = Math.pow(y, 2)-(4*x);
        document.getElementById("kwadratowa-wynik").innerHTML = "&Delta; = "+ delta;
        if (delta>0){
            x1 = (-y-Math.sqrt(delta))/(2*x);
            x2 = (-y+Math.sqrt(delta))/(2*x);
            document.getElementById("kwadratowa-wynik").innerHTML = "&Delta; = "+ delta + "<br> x<sub>1</sub>= " + x1 + " x<sub>2</sub>= " + x2 ;
        };
        if (delta==0){
            x1 = (-y)/(2*x);
            document.getElementById("kwadratowa-wynik").innerHTML = "&Delta; = "+ delta + "<br> x<sub>1</sub>= " + x1;
        };
        if (delta<0){
            document.getElementById("kwadratowa-wynik").innerHTML = "&Delta; = "+ delta + "<br> Brak miejsc zerowych";
        };
    };
    if (x!= null && y!= null && z!=null) {
        delta = Math.pow(y, 2)-(4*x*z);
        document.getElementById("kwadratowa-wynik").innerHTML = "&Delta; = "+ delta;
        if (delta>0){
            x1 = (-y-Math.sqrt(delta))/(2*x);
            x2 = (-y+Math.sqrt(delta))/(2*x);
            document.getElementById("kwadratowa-wynik").innerHTML = "&Delta; = "+ delta + "<br> x<sub>1</sub>= " + x1 + " x<sub>2</sub>= " + x2 ;
        };
        if (delta==0){
            x1 = (-y)/(2*x);
            document.getElementById("kwadratowa-wynik").innerHTML = "&Delta; = "+ delta + "<br> x<sub>1</sub>= " + x1;
        };
        if (delta<0){
            document.getElementById("kwadratowa-wynik").innerHTML = "&Delta; = "+ delta + "<br> Brak miejsc zerowych";
        };
    };
    
        
    
};




//Wzór skrócengo mnożenia
function skrocone() {
    x = document.getElementById("skrocone-a").value;
    y = document.getElementById("skrocone-b").value; 
    radio1 = document.getElementById("radio1"); 
    radio2 = document.getElementById("radio2"); 
    radio3 = document.getElementById("radio3"); 
    if (radio1.checked) {
        wynik = Math.pow(x,2)+2*(x*y)+Math.pow(y,2);
        document.getElementById("skrocony-wynik").innerHTML = wynik;
    }
    if (radio2.checked) {
        wynik = Math.pow(x,2)-2*(x*y)+Math.pow(y,2);
        document.getElementById("skrocony-wynik").innerHTML = wynik;
    }
    if (radio3.checked) {
        wynik = Math.pow(x,2)-Math.pow(y,2);
        document.getElementById("skrocony-wynik").innerHTML = wynik;
    }
    if (radio1.checked === false && radio2.checked === false && radio3.checked === false) {
        document.getElementById("skrocony-wynik").style.color = "red";
        document.getElementById("skrocony-wynik").innerHTML = "Zaznacz wzór, którego chcesz użyć!!";
        function wyczysc() {
            document.getElementById("skrocony-wynik").innerHTML = "";
            document.getElementById("skrocony-wynik").style.color = "black";
        }
        setTimeout(wyczysc, 2000);
    if (radio1.checked === true  && x == '' && y == '') {
        document.getElementById("skrocony-wynik").style.color = "red";
        document.getElementById("skrocony-wynik").innerHTML = "Wpisz obie cyfry do działania!!";
        function wyczysc() {
            document.getElementById("skrocony-wynik").innerHTML = "";
            document.getElementById("skrocony-wynik").style.color = "black";
            return
        }
        setTimeout(wyczysc, 2000);
    }
};
};