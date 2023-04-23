var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logOfExecutionTime } from "../patterns/performance-decorator.js";
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
__decorate([
    logOfExecutionTime(true)
], View.prototype, "update", null);
