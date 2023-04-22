import { WeekDay } from "../utils/weekDays.enums.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/message-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView", true);
  private messageView = new MessageView("#messageView", true);

  constructor() {
    this.inputData = document.querySelector("#data") as HTMLInputElement;
    this.inputQuantidade = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement;
    this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.createNegotiation(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!this.ehDiaUtil(negociacao.data)) {
      this.updateView("Apenas negociaçães em dias ímpares são aceitas!");
      return;
    }

    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.updateView("Negociação adicionada com sucesso!");
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "1";
    this.inputValor.value = "0.0";

    this.inputData.focus();
  }

  private updateView(message: string): void {
    this.negociacoesView.update(this.negociacoes);
    this.messageView.update(message);
    this.messageView.clearMessage();
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() > WeekDay.SUNDAY && data.getDay() < WeekDay.SATURDAY;
  }
}
