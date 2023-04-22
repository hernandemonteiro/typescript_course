export class View {
    constructor(selector, _escape) {
        this._escape = false;
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Seletor ${selector} não existe no DOM.`);
        }
        _escape && this.changeEscapeForTrue();
    }
    update(model) {
        let template = this.template(model);
        if (this._escape)
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        this.element.innerHTML = template;
    }
    changeEscapeForTrue() {
        this._escape = true;
    }
}
