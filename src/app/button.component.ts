import { Component } from "@angular/core";

@Component({
  selector: "base-button",
  template: `<button></button>`,
  styles: [`.button { color: red; }`]
})
export class Button {
  title = 'button'
}
