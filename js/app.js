//Menú Lateral
var menuVisible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menuVisible==false){//Si está oculto
        menu.style.display = "block";
        menuVisible = true;
    }
    else{
        menu.style.display = "none";
        menuVisible = false;
    }
}
//Ocultar el menu una vez seleccionada la opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menuVisible = false;
    }
}
//Empezamos con las animaciones
function crearBarra(idBarra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        idBarra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let googlea = document.getElementById("googlea");
crearBarra(googlea);

let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let ofimatica = document.getElementById("ofimatica");
crearBarra(ofimatica);
let astudio = document.getElementById("astudio");
crearBarra(astudio);

//A almacenar cantidad de barritas pintadas
let contadores = [-1,-1,-1,-1,-1,-1];
//bandera
let entro = false
//
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distanciaSkills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distanciaSkills >=300 && entro==false){
        entro=true;
        const intervalHtml = setInterval(function (){
            pintarBarra(html, 16, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function (){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        }, 100);
        const intervalGooglea = setInterval(function (){
            pintarBarra(googlea, 15, 2, intervalGooglea);
        }, 100);
        const intervalPhotoshop = setInterval(function (){
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        }, 100);
        const intervalOfimatica = setInterval(function (){
            pintarBarra(ofimatica, 15, 4, intervalOfimatica);
        }, 100);
        const intervalAstudio = setInterval(function (){
            pintarBarra(astudio, 11, 5, intervalAstudio);
        }, 100);
    }
}

function pintarBarra(idBarra, cantidad, indice, interval){
    contadores [indice]++;
    x = contadores [indice];
    if (x < cantidad){
        let elementos = idBarra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "greenyellow";
    }
    else{
        clearInterval(interval)
    }
}
window.onscroll = function(){
    efectoHabilidades();
}