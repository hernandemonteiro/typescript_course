import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this._negociacoes;
    }

}

