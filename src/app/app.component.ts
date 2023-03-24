import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wires-frontend';

  btnDisabled = false;
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
}
