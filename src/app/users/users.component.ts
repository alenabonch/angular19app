import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LargeComponentComponent } from './large-component/large-component.component';

@Component({
  selector: 'app-users',
  imports: [
    LargeComponentComponent,
    FormsModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  name = signal('Alena');
  userName = '';
}
