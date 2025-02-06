import { Component } from '@angular/core';
import { LargeComponentComponent } from '../large-component/large-component.component';

@Component({
  selector: 'app-users',
  imports: [
    LargeComponentComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
