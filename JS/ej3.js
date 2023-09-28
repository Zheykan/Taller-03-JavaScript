let multiplos=[];
multiplos.length=1;

function calcular_multiplos(){
    multiplos.length=parseInt(document.getElementById("Input_limite").value);
    let numero=0;
    numero=parseInt(document.getElementById("Input_numero").value);
    let element_mod = document.querySelector("#lista");
    element_mod.innerHTML="";

    if(numero>=0 && multiplos.length>0){
        for (let index = 0; index < multiplos.length; index++) {
            multiplos[index]=numero*(index+1);
            element_mod.innerHTML+=
            "El multiplo de "+numero+" por "+(index+1)+" es: "+multiplos[index]+"<br>";
        }
        calculador.reset();
    }
    else{
        alert("¡Debes ingresar un numero positivo!\nRevisa el valor del numero o el limite.");
        calculador.reset();
    }
}
