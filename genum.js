function gen(){
    if (document.getElementById("dieci").checked) {
        document.getElementById("demo1").innerHTML = Math.floor(Math.random() * 10);
    }

    else if (document.getElementById("cento").checked) {
        document.getElementById("demo1").innerHTML = Math.floor(Math.random() * 100);
    }

    else if (document.getElementById("mille").checked) {
        document.getElementById("demo1").innerHTML = Math.floor(Math.random() * 1000);
    }

    else {
        document.getElementById("demo1").innerHTML = "Seleziona l'opzione";  
    }
}