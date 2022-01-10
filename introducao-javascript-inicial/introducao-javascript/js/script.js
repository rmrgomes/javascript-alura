var title = document.querySelector('.title');
title.textContent = 'Aparecida Nutricionista';

var paciente = document.querySelector('#primeiro-paciente');

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info-imc');

var pesoEhValido = true
var alturaEhValida = true


if (peso <= 0 || peso >= 200) {
    tdImc.textContent = 'Peso inválido!'
    pesoEhValido = false
}

if (altura <= 0 || altura >= 3.00) {
    tdImc.textContent = 'Altura inválida!'
    alturaEhValida = false
}

if ( alturaEhValida && pesoEhValido) {

    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}


