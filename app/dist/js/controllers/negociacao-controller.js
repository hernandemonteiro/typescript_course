import { WeekDay } from "../utils/weekDays.enums.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/message-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView", true);
        this.messageView = new MessageView("#messageView", true);
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.createNegotiation(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.updateView("Apenas negociaçães em dias ímpares são aceitas!");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.updateView("Negociação adicionada com sucesso!");
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "1";
        this.inputValor.value = "0.0";
        this.inputData.focus();
    }
    updateView(message) {
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update(message);
        this.messageView.clearMessage();
    }
    ehDiaUtil(data) {
        return data.getDay() > WeekDay.SUNDAY && data.getDay() < WeekDay.SATURDAY;
    }
}
