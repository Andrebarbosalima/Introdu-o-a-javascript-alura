 var titulo = document.querySelector(".titulo");
 titulo.textContent = "Aparecida Nutricionista";

 var pacientes= document.querySelectorAll(".paciente");
for(i = 0;i < pacientes.length; i++){
 var paciente = pacientes[i];
    console.log(paciente);
 var tdPeso = paciente.querySelector(".info-peso");
 var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc= paciente.querySelector(".info-imc");
  

   var pesoEhValido = true;
   var alturaEhValida = true;

   if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
}


  if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura Invalida!";
    paciente.classList.add("paciente-invalido");
  }
  if(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
 

}
 
function calculaImc(peso, altura){
  var imc = 0;
  var imc = peso /(altura * altura);
  return imc.toFixed(2);
}