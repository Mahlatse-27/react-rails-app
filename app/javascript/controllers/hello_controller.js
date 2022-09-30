import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello TO MR. WEST!"
    console.log("HELLO WORLD!")
  }
}
