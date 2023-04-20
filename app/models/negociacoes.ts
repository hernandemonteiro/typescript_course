import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    listNegociacoes(): Negociacao[] {
        return [].concat(this._negociacoes);
    }

}