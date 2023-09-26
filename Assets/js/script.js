document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
});


var data = document.getElementById("time");
// data atual 
var mes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
var now = new Date;



data.innerHTML = `${mes[now.getMonth()]}, ${now.getDate()}`;


// mudar tela 
function mudarTela() {
// Seleciona o elemento input
var inputTela = document.getElementById("valorTela");

var valorSelecionado = inputTela.value;

window.location.href = `${valorSelecionado}.html`;

}