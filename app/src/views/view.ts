import { logOfExecutionTime } from "../patterns/execution-time-decorator.js";

export abstract class View<T> {
  protected element: HTMLElement;
  private _escape: boolean = false;

  constructor(selector: string, _escape?: boolean) {
    const element = document.querySelector(selector);
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw Error(`Seletor ${selector} não existe no DOM.`);
    }
    _escape && this.changeEscapeForTrue();
  }

  protected abstract template(model: T): string;

  @logOfExecutionTime(true)
  public update(model: T): void {
    let template = this.template(model);

    if (this._escape)
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");

    this.element.innerHTML = template;
  }

  private changeEscapeForTrue(): void {
    this._escape = true;
  }
}
