import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update();
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();

        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());

        this.limparFormulario();

    }

    criaNegociacao(): Negociacao {
        const date = this.formatData(this.inputData.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    formatData(data: string): Date {
        const exp = /-/g;

        return new Date(data.replace(exp, ","));
    }


    limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";

        this.inputData.focus();
    }
}
