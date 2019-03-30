var i;
function contadormas(input_id){ 
    var cant = document.getElementById(input_id); 
    if(cant.value>=0){
        i = cant.value;
    }else{
        i = 0;
    }
    i++; 
    cant.value = i;
}
function contadormenos(input_id){
    var cant = document.getElementById(input_id); 
    if(cant.value>0){
        i = cant.value;
        i--;
        cant.value = i;
    }
}
$("#contador_1_menos").click(function(){
    contadormenos("contador_1");
});
$("#contador_1_mas").click(function(){
    contadormas("contador_1");
});
$("#contador_2_menos").click(function(){
    contadormenos("contador_2");
});
$("#contador_2_mas").click(function(){
    contadormas("contador_2");
});

$(".paso").click(function(p){

    console.log('p',p);
    $(".paso").removeClass("active");
    $(this).addClass("active");
});