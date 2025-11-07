let fase = 1;
let posX = 50;

const barco = document.getElementById("barco");
const cenario = document.getElementById("cenario");
const dialogo = document.getElementById("dialogo");

cenario.style.backgroundImage = "url('cenario_mar.png')";

document.addEventListener("keydown", (event) => {
  if (fase === 1) {
    if (event.key === "ArrowRight") {
      posX += 15;
      barco.style.left = posX + "px";
    }

    // Quando chegar do outro lado, troca para a fase 2
    if (posX > 600) {
      mudarParaFase2();
    }
  }

  if (fase === 2 && event.key === "Enter") {
    mostrarDialogo();
  }
});

function mudarParaFase2() {
  fase = 2;
  cenario.style.backgroundImage = "url('cenario_casa.png')";
  barco.style.display = "none";
  dialogo.classList.remove("hidden");
  dialogo.textContent = "Rafael chega à casa de Alena e a convida para sair amanhã...";
}

function mostrarDialogo() {
  dialogo.textContent = "Alena: Sim ou Não?";
  
  // Botões de resposta
  const botoes = document.createElement("div");
  botoes.innerHTML = `
    <button id="sim">Sim</button>
    <button id="nao">Não</button>
  `;
  dialogo.appendChild(botoes);

  document.getElementById("sim").onclick = () => {
    dialogo.textContent = "Rafael: Eu saio cedo na Sexta posso vir para niteroi ou podemos se ver no RJ";
  };

  document.getElementById("nao").onclick = () => {
    dialogo.textContent = "Rafael: Tudo bem... quem sabe outro dia ❤️";
  };
}
