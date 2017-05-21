document.addEventListener('DOMContentLoaded', function () {
    /*var elementosOcultos = document.querySelectorAll(".menuB, .cuerpoA2, .cuerpoA3");*/
    var itemMenuA  = document.querySelectorAll('ul.menuA li[itemid]');
    var itemMenuB  = document.querySelectorAll('ul.menuB li[itemid]');
    var itemMenuB2 = document.querySelectorAll('[itemref]');
    var contenedor = document.querySelector("#wrapper");    
    var contenedorB = document.querySelector("#wrapperB");    
    var elementosOcultos = document.querySelectorAll(".menuB,#wrapperB,.encabezado .icono-normal");
    var menuA =  document.querySelector(".menuA"); 
    var menuB =  document.querySelector(".menuB"); 
    var botonAtras = document.querySelector(".encabezado .icono-normal");
    /***iScroll***/
    var myScroll= null;
    var myScrollB =null;
    setTimeout(function(){
        myScroll = new IScroll(contenedor,{
            eventPassthrough: true, 
            scrollX: true, 
            scrollY: false, 
            //preventDefault: false,
            bounce: false,
            snap: true
        });        
        
    },10);    
    setTimeout(function(){
        myScrollB = new IScroll(contenedorB,{
            eventPassthrough: true,  //swipes o golpes horizontales solamente
            scrollX: true,  // solo habilita scrol en el eje X
            scrollY: false, 
            //preventDefault: false, 
            bounce: false,  //efecto de rebote al inicio y final
            snap: true
        }); 
    },10);
    
    var i = 0;
    for (i in elementosOcultos)
    {
        elementosOcultos[i].className += " pantallaDerecha";
    }
    /*alert(menus.length);*/
    i = 0;
    for (i in itemMenuA)
    {
        if (typeof itemMenuA[i] === 'object')
        {
            itemMenuA[i].addEventListener("click", function () {
                myScroll.scrollToElement(document.querySelector('#cuerpoA'+this.getAttribute("itemid")));                 
            });
        }
    }
    
    for (i in itemMenuB)
    {
        if (typeof itemMenuB[i] === 'object')
        {            
            itemMenuB[i].addEventListener("click", function () {
                myScrollB.goToPage(this.getAttribute("itemid"),0); 

            });
            
        }
    }

    for (i in itemMenuB2)
    {
        if (typeof itemMenuB2[i] === 'object')
        {
            itemMenuB2[i].addEventListener("click", function () {
                botonAtras.replaceClass("pantallaDerecha","pantallaCentrada");
                contenedorB.replaceClass("pantallaDerecha","pantallaCentrada");
                menuB.replaceClass("pantallaDerecha","pantallaCentrada");
                menuA.replaceClass("pantallaCentrada","pantallaDerecha");
                menuA.addClass("pantallaDerecha");
                //x,y
                myScrollB.goToPage(this.getAttribute("itemref"),0);                     
                //myScrollB.scrollToElement(document.querySelector('#cuerpoB'+this.getAttribute("itemref")));                
            });
            
        }
    }
    botonAtras.addEventListener("click", function () {
                botonAtras.replaceClass("pantallaCentrada","pantallaDerecha");
                contenedorB.replaceClass("pantallaCentrada","pantallaDerecha");
                menuB.replaceClass("pantallaCentrada","pantallaDerecha");
                menuA.replaceClass("pantallaDerecha","pantallaCentrada");
    });
    
},false);
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);  

Object.prototype.replaceClass = function(claseAnterior, claseNueva){
   var clases = this.className;
   clases = clases.replace(claseAnterior,claseNueva);
   this.className = clases;
}; 

Object.prototype.addClass = function(claseNueva){
    var clases = this.className;
    //console.log(clases.indexOf(claseNueva));
    if(clases.indexOf(claseNueva)=== -1)
        this.className += " " + claseNueva;   
   
}; 