import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userserice: UserService) { }

  users: User;
  userDetails: User;
  userAdd: User;
  spinner: boolean = false;

  deleteUser(id: number) {
    if (confirm(`STAI PER CANCELLARE UTENTE CON ID: ${id}. SEI SICURO`)) {
      this.userserice
        .delete(id).subscribe(
          val => {
            alert(`Utente eliminato correttamente`);
          },

          error => {
            alert('OPS... Si è verificato un errore durante la cancellazione');
          },

          () => {
            console.log('Cancellazione completata');
            this.fetchData();
          }
        );
    }
  }

  //get all my products
  fetchData() {
    this.userserice
      .get().subscribe((data: User) => {
        this.users = data;
        this.spinner = true;
      });
  }


  ngOnInit(): void {
    this.fetchData();   //call this func when start the app
  }

}
