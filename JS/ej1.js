let numeros=[];
numeros.length=5;

function grabadora(){
    let promedio=0;
    for (let index = 0; index < numeros.length; index++) {
        let aleatorio=" "+parseFloat(prompt('Aqui puedes escribir el numero: '));
        if(aleatorio>=0){
            numeros[index]=aleatorio;
            let contador=numeros.length-(index+1);
            alert("Te faltan "+contador+" numeros por ingresar");
        }
        else{
            alert("No puedes ingresar un numero negativo");
            index--;
        }
    }
    let element_mod = document.querySelector("#lista");
    element_mod.style.color="#00cc00";
    element_mod.innerHTML=
    "La lista de numeros que ingresaste es: "+numeros+"<br>";
}