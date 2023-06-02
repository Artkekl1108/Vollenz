var elemento = document.getElementById("animacao");
var posicao = 0;
var velocidade = 5;

function animar() {
  posicao += velocidade;
  elemento.style.left = posicao + "px";
  
  if (posicao >= 300 || posicao <= 0) {
    velocidade = -velocidade; // Inverte a direção quando chega no limite
  }
}
