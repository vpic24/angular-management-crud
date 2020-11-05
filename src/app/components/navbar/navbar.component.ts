import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  inputs: ["items", "tagDishs"]
})
export class NavbarComponent implements OnInit {

  @Input() items;
  @Input() tagDish;
  @Input() tagUser;

  constructor() { }

  ngOnInit(): void {

  }

}
