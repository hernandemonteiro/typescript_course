import { DateFormat } from "../patterns/date-format.js";

export class Negociacao {
  constructor(
    private readonly _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  public static createNegotiation(
    dateString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const date = DateFormat.toDateObject(dateString);
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(date, quantidade, valor);
  }
}
