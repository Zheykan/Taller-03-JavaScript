numeros=[];

function n_aleatorio(){
    for(let x=0; x<numeros.lenght;x++){
        numeros[x]=Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    }
}

window.onload=function aleatoriedad(){
    let element_mod = document.querySelector("#lista");
    let element_mod_0 = document.querySelector("#sumatoria");
    element_mod_0.style.color="#00cc00";
    while(true){
        let aleatorio=Math.floor((Math.random() * (20 - 3 + 1)) + 3);
        if (aleatorio%2!=0){
            numeros.lenght=aleatorio;
            break;
        }
    }
    n_aleatorio();
    element_mod.innerHTML="Esta es la lista autogenerada:"+"<br>"+numeros+"<br>";
    element_mod_0.innerHTML="El número "+numeros[((numeros.lenght-1)/2)]+" esta el el centro de la lista.";
}