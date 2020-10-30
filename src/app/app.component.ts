import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionale';
  tag = [
    { title: 'Utenti', url: "" }
   /*  { title: 'Piatti Disponibili' , url: ""} */
  ];

  tagDish = [
    { title: 'Lista Dei Piatti', url: "/listDish" },
    { title: 'Inserisci Un Piatto', url: ""},
    { title: 'Modifica Un Piatto', url: ""}
  ];
}
