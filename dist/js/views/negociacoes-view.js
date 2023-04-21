export class NegociacoesView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template() {
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
    update() {
        this.element.innerHTML = this.template();
    }
}
