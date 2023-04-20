export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    listNegociacoes() {
        return [].concat(this._negociacoes);
    }
}
