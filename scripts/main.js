var boton = document.getElementById("btn");
var imagen = document.getElementById("image");
var txt = document.getElementById("txt");


let suerte = (max, min) =>{
    return Math.round(Math.random() *(max - min) + min);
};
boton.addEventListener('click', ()=>{
    imagen.src = "imagenes/espera.gif";
    txt.innerHTML = "Moneda en el aire";
    setTimeout(function(){
        var moneda = suerte (1,0);
        if (moneda == 1) {
       imagen.src = "imagenes/cara.png";
       txt.innerHTML = "Cara";
        }
        else{
            imagen.src = "imagenes/escudo.png";
            txt.innerHTML = "Seca";
        }
    }, 1000);
 
});