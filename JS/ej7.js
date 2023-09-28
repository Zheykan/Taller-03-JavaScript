let resultados=[];
resultados.length=10;
function multiplos(){
    let element_mod = document.querySelector("#lista");
    for(let x=0;x<resultados.length;x++){
        resultados[x]=[];
        element_mod.innerHTML+="<br>"+"Tabla de multiplicar de "+(x+1)+"<br>";
        for(let y=0;y<resultados.length;y++){
            resultados[x][y]=(x+1)*(y+1);
        }
        element_mod.innerHTML+=resultados[x]+"<br>";
    }
}