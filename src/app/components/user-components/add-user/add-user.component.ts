import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnChanges {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  @Input() userDetails: User;
  flagBtn: boolean = false;

  userForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    lastname: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    birth: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.update(changes.userDetails.currentValue);

  }


  submitBtn() {
    const firstname = this.userForm.get('firstname').value;
    const lastname = this.userForm.get('lastname').value;
    const sex = this.userForm.get('sex').value;
    const birth = this.userForm.get('birth').value;
    const email = this.userForm.get('email').value;

    if (this.userForm.valid) {
      this.create({ firstname, lastname, sex, birth, email });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'OPS...',
        text: 'Qualcosa è andato storto',
      })
    }
  }

  //create e new user
  create(user: User) {
    this.userService.create(user).subscribe(

      val => {
        Swal.fire({
          icon: 'success',
          title: 'Perfetto',
          text: 'Cliente inserito correttamente',
        })
        this.router.navigate(["/user/listUser"]);
      },

      error => {
        Swal.fire({
          icon: 'error',
          title: 'OPS...',
          text: 'Si è verificato un errore durante la scrittura',
        })
      },

      () => { console.log('Creazione completata'); }
    );
  }

  update(user: User) {


    this.flagBtn = true;

    if (user) {
      this.userForm.setValue({
        firstname: user.firstname,
        lastname: user.lastname,
        sex: user.sex,
        email: user.email,
        birth: user.birth,
      });
    }
  }

  //update a user
  updateBtn(user: User) {

    if (Swal.fire({
      title: `Stai per aggiornare il cliente con id: ${user.id}.`,
      text: "SEI SICURO",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ffc106',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Annulla',
      confirmButtonText: 'Si, Aggiorna!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService
          .update(this.userForm.value, user.id).subscribe(
            val => {
              Swal.fire(
                'Cliente Aggiornato correttamente!',
                'Il Cliente è stato modificato',
                'success'
              )
            },

            error => {
              Swal.fire({
                icon: 'error',
                title: 'OPS...',
                text: "Si è verificato un errore durante l'aggiornamento",
              })
            },

            () => {
              console.log('Aggiornamento completato');
              this.router.navigate(["/user/listUser"]);
            }
          );

      }
    })) { }

  }


  resetForm() {
    this.userForm.reset();
  }

  backHome() {
    this.router.navigate(["/user/listUser"]);
  }

  ngOnInit(): void {
  }

}
