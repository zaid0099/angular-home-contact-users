import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <!-- Header -->
    <app-header></app-header>

    <router-outlet></router-outlet>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = 'hi';
}
