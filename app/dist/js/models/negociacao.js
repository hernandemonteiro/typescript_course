import { DateFormat } from "../patterns/date-format.js";
export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static createNegotiation(dateString, quantidadeString, valorString) {
        const date = DateFormat.toDateObject(dateString);
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
