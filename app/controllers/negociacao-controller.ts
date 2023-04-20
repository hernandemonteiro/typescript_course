import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();

        console.log(negociacao);

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
