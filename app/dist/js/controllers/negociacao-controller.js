var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WeekDay } from "../patterns/weekDays.enums.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/message-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { logOfExecutionTime } from "../patterns/performance-decorator.js";
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
__decorate([
    logOfExecutionTime(true)
], NegociacaoController.prototype, "adiciona", null);
