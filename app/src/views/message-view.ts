import { View } from "./view.js";

export class MessageView extends View<string> {
  protected template(model: string): string {
    return `<p class="alert alert-info">${model}</p>`;
  }

  public clearMessage() {
    setTimeout(() => {
      this.element ? (this.element.innerHTML = "") : null;
    }, 3000);
  }
}
