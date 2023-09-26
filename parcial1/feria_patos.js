$(document).ready(function(){
    var pato = "";
    var total_puntos = 0;
    var total_intentos = 0;

    $('img').click(function (e){
        var estado = $(this).attr('data-estado')
        var puntos = $(this).attr('data-puntos')

        if(estado == "0"){
            total_puntos = total_puntos+parseInt(puntos);
            console.log(total_puntos);
            $(this).attr('src', "proyecto/pato" + puntos + ".png")
            $(this).attr('data-estado', "1")
        }

    });
});