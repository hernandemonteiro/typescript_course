import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form
    ? form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.adiciona();
    })
    : console.error("Não foi possível inicializar a aplicação. Verifique se o form existe.");
