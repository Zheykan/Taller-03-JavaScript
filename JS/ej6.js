
let general=[[3,6,2,1,5,8,9,4],[7,3,2,9,1,0,5,6],[]]

function sumador(){
    let element_mod = document.querySelector("#lista");
    
    for(let x=0; x<general[0].length; x++){
        let resultado=general[0][x]+general[1][x];
        general[2][x]=resultado;
        element_mod.innerHTML+=
        general[0][x]+" + "+general[1][x]+" = "+general[2][x]+"<br>";
    }
}