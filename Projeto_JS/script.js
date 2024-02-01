/*TODO 
 * Melhorar Projetos - (Órgão, Cris&Make, AgendaSQL)
 * Tirar bug de noturno quando muda de linguagem
 * Colocar estilo no menu lateral
 */

//Variaveis randomizadas
let random1 = randomNumber(0, 15);
let random2 = randomNumber(10, 15);
let random3 = randomNumber(0, 15);
let random4 = randomNumber(0, 15);

//Variaveis do CSS
var nuvem1 = document.querySelector('.nuvem:nth-child(1)');
var nuvem2 = document.querySelector('.nuvem:nth-child(2)');
var nuvem3 = document.querySelector('.nuvem:nth-child(3)');
var nuvem4 = document.querySelector('.nuvem:nth-child(4)');

// Atribui ao Dalay
nuvem1.style.setProperty('--animation-delay', random1 + 's');
nuvem2.style.setProperty('--animation-delay', random2 + 's');
nuvem3.style.setProperty('--animation-delay', random3 + 's');
nuvem4.style.setProperty('--animation-delay', random4 + 's');

//Adiciona a idade
var i = idade();
var idade = document.getElementById("i");
idade.textContent = i;

/********************************************** FUNÇÕES **********************************************/
var var_check = document.getElementById("Check-noite").checked;
// Função modo noturno
function noite() {

  var lua = document.getElementById("imagem-lua");
  var sol = document.getElementById("imagem-sol");
  var url = window.document.location.href;

  /** Se check estiver desmarcada, ela marca e fica a noite */
  if (this.var_check == false) {


    lua.style.display = "none";
    sol.style.display = "block";

    /* Muda a cor de fundo */
    document.body.style.background = "linear-gradient(100deg, #474747, #1d1d1d, #000000)";

    /* Seleciona os titulos e muda a cor */
    fonte = document.querySelectorAll(".titulo");
    fonte.forEach(element => {
      element.style = "Color: White";
    });

    this.var_check = true;
    console.log("Var dentro do if = " + this.var_check)
  }

  /** Se check estiver marcada, ela desmarca e fica de dia */
  else {
    lua.style.display = "block";
    sol.style.display = "none";


    /* Muda a cor de fundo */
    document.body.style.background = " linear-gradient(10deg, #95a0ff, #5061ff, #1929ff)";

    /* Seleciona os titulos e muda a cor */
    fonte = document.querySelectorAll(".titulo");
    fonte.forEach(element => {
      element.style = "Color: Black";
    });

    this.var_check = false;
    console.log("Var dentro do else = " + var_check)
  }
}

// Muda idade de acordo com o ano
function idade(ano_aniversario = 2000, mes_aniversario = 1, dia_aniversario = 12) {
  var d = new Date,
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),

    ano_aniversario = +ano_aniversario,
    mes_aniversario = +mes_aniversario,
    dia_aniversario = +dia_aniversario,

    quantos_anos = ano_atual - ano_aniversario;

  if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
    quantos_anos--;
  }

  return quantos_anos < 0 ? 0 : quantos_anos;
}

// Função para randomizar numeros
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}


document.querySelectorAll('div-bandeira').forEach(link => {

  const conteudo = document.getElementById('body')

  link.onclick = function (e) {
    e.preventDefault()
    fetch(link.href)
      .then(resp => resp.text())
      .then(html => conteudo.innerHTML = html)
    console.log("foi")
  }
});


//Função para a Hornet fixar no chão
let initialviewWidth = window.innerWidth; //Largura da tela
let initialviewHeight = window.innerHeight; //Altura da tela

//Caso o tamanho da tela mude, o event listener vai mudar o tamanho do chão e o bottom da hornet
window.addEventListener("resize", () => {

  let hornet = document.getElementById("hornet");
  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;
  let ground = document.getElementById("div-chao").offsetHeight;

  if (viewportHeight != initialviewHeight || viewportWidth != initialviewWidth) {
    hornet.style = `bottom: ${ground}px;`
  }
});