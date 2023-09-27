$(document).ready(function(){
    var pato = "";
    var total_puntos = 0;
    var total_intentos = 0;
    var contador=0;


    $('img').click(function (e){
        var estado = $(this).attr('data-estado')
        var puntos = $(this).attr('data-puntos')

        if(estado == "0"){
            total_puntos = total_puntos+parseInt(puntos);
            console.log(total_puntos);
            $(this).attr('src', "proyecto/pato" + puntos + ".png")
            $(this).attr('data-estado', "1")
            total_intentos++
            $("#total_puntos").html(total_puntos)

        }
        if(total_intentos >= 5){
            alert("Has perdido el juego =(, paga otra ronda")
            $('img').each(function(){
                $(this).attr('data-estado', '1')
            });
            total_puntos = 0
            total_intentos = 0
            total_puntos++
           
        }

        if(total_puntos >= 30){
            alert("Felicidades, has ganado el juego =)")
            $('img').each(function(){
                $(this).attr('src','proyecto/pato.png')
                $(this).attr('data-estado','0')
            });
            total_puntos=0;
            return;
        }

      

    });
});