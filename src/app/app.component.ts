import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionale';
 /*  tag = [
    { title: 'Piatti Disponibili' },
    { title: 'Utenti'},
  ]; */

  tagDish = [
    { title: 'Lista Dei Piatti', url: "/listDish" },
    { title: 'Inserisci Un Piatto', url: "/addDish"},
  ];

  tagUser = [
    { title: 'Lista Dei Clienti Prenotati', url: "/listUser" },
    { title: 'Inserisci Una Prenotazione', url: "/addUser"},
  ];
}
