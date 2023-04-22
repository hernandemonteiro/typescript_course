import { Negociacoes } from "../models/negociacoes";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                ${model.lista().map(negociacao =>
            `<tr>
                    <td>${this.dateFormat(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        `;
    }

    private dateFormat(date: Date) {
        return new Intl.DateTimeFormat().format(date)
    }

}
