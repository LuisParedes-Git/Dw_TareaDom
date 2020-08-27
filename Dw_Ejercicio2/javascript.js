'use strict'

function add(){
  
    var contenido=window.prompt("Ingresa el nuevo contenido"); 
    var texto = document.createTextNode(contenido);
    var nuevoLi= document.createElement('li');
    nuevoLi.appendChild(texto);

    var lista= document.getElementById("listaOrdenada");
    lista.appendChild(nuevoLi);
   
}


function edit(){
    var contenido=window.prompt("Ingresa el nuevo contenido"); 
    var texto = document.createTextNode(contenido);    
    var nuevoLi= document.createElement('li');
    nuevoLi.appendChild(texto);


    var nodoQuitar= document.getElementsByTagName('li')[2];
    var nodoPadre=document.getElementById("listaOrdenada")
    nodoPadre.replaceChild(nuevoLi,nodoQuitar);


}



function delet(){
    var nodoPadre= document.getElementById("listaOrdenada");
    var nodoQuitar= document.getElementsByTagName('li')[0];

    nodoPadre.removeChild(nodoQuitar);
            
}