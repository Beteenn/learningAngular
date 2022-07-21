import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Colegioabc';

  constructor(
  ) {}

  isLogin() {
    var url = window.location.href;
    if (url != 'http://localhost:4200/login')
      return false;
    return true;
  }
}
