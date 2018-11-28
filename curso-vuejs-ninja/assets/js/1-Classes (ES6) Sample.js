window.onload = function () {
    sepExpressoes();
    
}



function sepExpressoes() {
    var idade = 6, sexo = "masculino", nac = "brasileiro";
    var x = (idade >= 18) ? "Maior de Idade" : sexo;
    alert(x);
}

$(document).ready(function () {
    alert("slide_Jquery");
    
    $( "#tabs" ).tabs();

});
