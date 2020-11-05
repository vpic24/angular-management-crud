import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  id: number;
  idFound: boolean = false;

  @Input() userDetails: User;

  getUser(id: number) {
    this.userService
      .getById(id).subscribe((dataDetails: User) => {
        this.userDetails = dataDetails;
        this.idFound = true;
      });

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
    this.getUser(this.id);
  }

}
