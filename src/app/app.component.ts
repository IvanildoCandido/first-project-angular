import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBidingComponent } from './components/template/template-biding/template-biding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBidingComponent],
  template: `
    <!-- <router-outlet /> -->
    <app-new-component />
    <app-template-biding/>
  `,
})
export class AppComponent {}
