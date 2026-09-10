/* ================================= */
/* ELEMENTOS                        */
/* ================================= */

const body = document.body;

const btnTema = document.getElementById("btn-tema");

const btnMensagem = document.getElementById("btn-mensagem");

const mensagem = document.getElementById("mensagem");

const ano = document.getElementById("ano");

const mouseGlow = document.querySelector(".mouse-glow");

/* ================================= */
/* ANO AUTOMÁTICO                   */
/* ================================= */

ano.textContent = new Date().getFullYear();

/* ================================= */
/* TEMA CLARO / ESCURO              */
/* ================================= */

btnTema.addEventListener("click", function () {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    btnTema.textContent = "☾";

    localStorage.setItem("tema", "claro");
  } else {
    btnTema.textContent = "☀";

    localStorage.setItem("tema", "escuro");
  }
});

/* ================================= */
/* SALVAR TEMA DO USUÁRIO           */
/* ================================= */

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {
  body.classList.add("light");

  btnTema.textContent = "☾";
}

/* ================================= */
/* BOTÃO "DIZER OLÁ"                */
/* ================================= */

btnMensagem.addEventListener("click", function () {
  mensagem.textContent = "Olá, Davi! 👋 Seu portfólio está ficando incrível!";
});

/* ================================= */
/* EFEITO DO MOUSE                  */
/* ================================= */

document.addEventListener("mousemove", function (event) {
  mouseGlow.style.left = event.clientX + "px";

  mouseGlow.style.top = event.clientY + "px";
});

/* ================================= */
/* ANIMAÇÃO AO DESCER A PÁGINA      */
/* ================================= */

const elementos = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

elementos.forEach(function (elemento) {
  observer.observe(elemento);
});

/* ================================= */
/* EFEITO DE DIGITAÇÃO NO TERMINAL  */
/* ================================= */

const cursor = document.querySelector(".cursor");

let piscando = true;

setInterval(function () {
  if (piscando) {
    cursor.style.opacity = "0";
  } else {
    cursor.style.opacity = "1";
  }

  piscando = !piscando;
}, 500);

/* ================================= */
/* EFEITO 3D DOS CARDS              */
/* ================================= */

const cards = document.querySelectorAll(".skill-card, .project-card");

cards.forEach(function (card) {
  card.addEventListener("mousemove", function (event) {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3;

    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.transform = `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "";
  });
});
