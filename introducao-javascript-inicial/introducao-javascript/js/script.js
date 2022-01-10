var title = document.querySelector('.title');
title.textContent = 'Aparecida Nutricionista';

var paciente = document.querySelector('#primeiro-paciente');

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('info-altura');
var altura = tdAltura.textContent;

var imc = tdPeso / (altura * altura);