/*  http://localhost:4200/ */

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
/*
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
   templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
  */
 /* ниже делаем код по site Metanit https://metanit.com/web/angular2/1.1.php */
@Component({
  selector: "my-app",
  standalone: true,
  imports: [FormsModule],
  template: `<label>Введите имя: </label>
               <input [(ngModel)]="name" placeholder="name">
               <h1>Добро пожаловать {{name}}!</h1>`
})
export class AppComponent {
  title = 'My App1';
  name= "";
}
