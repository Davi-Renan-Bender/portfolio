const apresentacao = document.getElementById("apresentacao");
const btnApresentacao = document.getElementById("btn-apresentacao");
const btnTema = document.getElementById("btn-tema");
const mensagem = document.getElementById("mensagem");

let apresentacaoVisivel = true;
let temaEscuro = true;

// Mostrar / ocultar apresentação
btnApresentacao.addEventListener("click", function () {
  if (apresentacaoVisivel) {
    apresentacao.style.display = "none";
    btnApresentacao.textContent = "Mostrar apresentação";
    apresentacaoVisivel = false;
  } else {
    apresentacao.style.display = "block";
    btnApresentacao.textContent = "Ocultar apresentação";
    apresentacaoVisivel = true;
  }
});

// Alterar tema
btnTema.addEventListener("click", function () {
  if (temaEscuro) {
    document.body.style.background =
      "linear-gradient(135deg, #f2f2f2, #d9d9d9)";

    document.body.style.color = "#111111";

    btnTema.textContent = "Ativar tema escuro";

    mensagem.textContent = "Tema claro ativado.";

    temaEscuro = false;
  } else {
    document.body.style.background =
      "linear-gradient(135deg, #021f0d, #043d17, #062f16)";

    document.body.style.color = "#ffffff";

    btnTema.textContent = "Alterar tema";

    mensagem.textContent = "Tema escuro ativado.";

    temaEscuro = true;
  }
});
