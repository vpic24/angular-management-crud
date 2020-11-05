import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice: UserService) { }

  users: User;
  userDetails: User;
  userAdd: User;
  spinner: boolean = false;

  deleteUser(id: number) {


    if(Swal.fire({
      title: `Stai per cancellare il cliente con id: ${id}.`,
      text: "SEI SICURO",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Annulla',
      confirmButtonText: 'Si, elimina!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userservice
        .delete(id).subscribe(
          val => {
            Swal.fire(
              'Cliente eliminato correttamente!',
              'Il cliente è stato eliminato',
              'success'
            )
          },

          error => {
            Swal.fire({
              icon: 'error',
              title: 'OPS...',
              text: 'Si è verificato un errore durante la scrittura',
            })
          },

          () => {
            console.log('Cancellazione completata');
            this.fetchData();
          }
        );
       
      }
    })){}
  }

  //get all my products
  fetchData() {
    this.userservice
      .get().subscribe((data: User) => {
        this.users = data;
        this.spinner = true;
      });
  }


  ngOnInit(): void {
    this.fetchData();   //call this func when start the app
  }

}
