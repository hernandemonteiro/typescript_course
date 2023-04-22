export class View {
    constructor(selector, _escape) {
        this._escape = false;
        this.element = document.querySelector(selector);
        if (_escape)
            this._escape = _escape;
    }
    update(model) {
        let template = this.template(model);
        if (this._escape)
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        this.element.innerHTML = template;
    }
}
