export class NegociacoesView {

    private element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    template(): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>
                </tbody>
            </table>
        `;
    }

    update(): void {
        this.element.innerHTML = this.template();
    }

}
