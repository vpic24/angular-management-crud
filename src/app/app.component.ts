import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionale';
  tag = [
    { title: 'Piatti Disponibili', url: "" }
   /*  { title: 'Utenti' , url: ""} */
  ];

  tagDish = [
    { title: 'Lista Dei Piatti', url: "/listDish" },
    { title: 'Inserisci Un Piatto', url: "/addDish"},
  ];
}
