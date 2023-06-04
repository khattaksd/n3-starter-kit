import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'n3sk-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `<h3>{{ helloApi$ | async | json }}</h3>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  helloApi$ = this.httpClient.get('api');
  constructor(private httpClient: HttpClient) {}
}
