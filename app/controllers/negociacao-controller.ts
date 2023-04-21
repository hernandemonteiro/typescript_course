import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/message-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private messageView = new MessageView("#messageView");

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
    }

    private criaNegociacao(): Negociacao {
        const date = this.formatDateForDateObject(this.inputData.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    private formatDateForDateObject(data: string): Date {
        const exp = /-/g;

        return new Date(data.replace(exp, ","));
    }

    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "1";
        this.inputValor.value = "0.0";

        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update("Negociação adicionada com sucesso!");
        this.messageView.clearMessage();
        this.limparFormulario();


    }
}
