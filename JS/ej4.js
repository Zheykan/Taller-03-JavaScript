let matriz=[], n=0, b=0;

function llenar_matriz(){
    let element_mod = document.querySelector("#lista");
    element_mod.innerHTML="";
    n=parseInt(document.getElementById("Input_matriz").value);
    if(n>0 && n!=null){
        for(let x=0;x<n;x++){
            let y=prompt('Aqui puedes escribir el numero: ');
            if(y!=null && y!=0 && y!=''){
                matriz.push(parseInt(y));
                alert('Falta ingresar '+(n-(x+1))+" numeros.");
            }
            else{
                alert('¡El número ingresado no puede ser nulo!');
                x--;
                element_mod.innerHTML="";             
            }
        }
        element_mod.innerHTML="Lista ingresada:"+"<br>"+matriz;
    }
    else{
        alert('¡El número ingresado no es un valor acorde!\n'+
        '\n-Revisa el número ingresado en la longitud de la matriz.');
    }
    form_1.reset();
}

function buscador(){
    let element_mod_0 = document.querySelector("#resultado");
    element_mod_0.innerHTML="";
    b=parseInt(document.getElementById("Input_busqueda").value);
    if(b>0 && b!=null && matriz.length!=0){
        for(let x=0;x<matriz.length;x++){
            if(b==matriz[x]){
                element_mod_0.innerHTML+="El número buscado esta en la posición: "
                +(x+1)+" de la lista."+"<br>";
            }
        }
    }
    else{
        alert('¡El número ingresado no esta en la lista!'+'\n'+
        '\n-Revisa el número que buscas.-\n'+
        '\nRecuerda:'+
        '\n-La lista no debe estar vacía.-');
    }
    form_2.reset();
}