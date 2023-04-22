import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/message-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.messageView = new MessageView("#messageView");
        this.saturday = 6;
        this.sunday = 0;
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.updateView("Apenas negociaçães em dias ímpares são aceitas!");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.updateView("Negociação adicionada com sucesso!");
    }
    criaNegociacao() {
        const date = this.formatDateForDateObject(this.inputData.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    formatDateForDateObject(data) {
        const exp = /-/g;
        return new Date(data.replace(exp, ","));
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
        return data.getDay() > this.sunday && data.getDay() < this.saturday;
    }
}
