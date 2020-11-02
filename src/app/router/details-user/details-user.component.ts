import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  @Input() userDetails: User;
  id: number;

  backHome() {
    this.router.navigate(["/user/listUser"]);
  }

  getUser(id: number) {
    this.userService
      .getById(id).subscribe((dataDetails: User) => {
        this.userDetails = dataDetails;
      });

  }

  ngOnInit(): void {    
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });

    this.getUser(this.id);



  }

}
