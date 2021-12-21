$(document).ready(function() {

    $("#boton-atras").click(function() {
        $(".redoblantes,.hardware,.platillos,.baterias, #boton-platillos, #boton-hardware, #boton-redoblantes, #boton-baterias").show(500)
        $("#boton-atras").hide(500)
    })

    $("#boton-platillos").click(function(){
        $("#boton-atras").show(500)
        $(".redoblantes,.hardware,.baterias, #boton-platillos, #boton-hardware, #boton-redoblantes, #boton-baterias").toggle(500)        
    })

    $("#boton-hardware").click(function(){
        $("#boton-atras").show(500)
        $(".redoblantes,.platillos,.baterias, #boton-hardware, #boton-platillos, #boton-redoblantes, #boton-baterias").toggle(500)   
    })

    $("#boton-redoblantes").click(function(){
        $("#boton-atras").show(500)
        $(".platillos,.hardware,.baterias, #boton-redoblantes, #boton-hardware, #boton-platillos, #boton-baterias").toggle(500)     
    })

    $("#boton-baterias").click(function(){
        $("#boton-atras").show(500)
        $(".platillos,.hardware,.redoblantes, #boton-baterias, #boton-hardware, #boton-redoblantes, #boton-platillos").toggle(500)    
    })

    for (var i = 0; i < 15; i++) {
        $(`#tarjeta${i}`).hover(() => {$(`#info${i}`).show("200")},()=>{$(`#info${i}`).hide("200")});
    }
    
    
    
});
   

