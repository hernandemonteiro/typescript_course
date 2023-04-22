export abstract class View<T> {
  protected element: HTMLElement | null;
  private _escape: boolean = false;

  constructor(selector: string, _escape?: boolean) {
    this.element = document.querySelector(selector);
    if (_escape) this._escape = _escape;
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);

    if (this._escape)
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");

    this.element ? this.element.innerHTML = template : null;
  }
}
