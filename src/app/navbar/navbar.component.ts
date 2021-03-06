import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  nameArray = ["aaa","iii"];

  arlt() {

    window.alert("危ないよう")

  }


  ngOnInit(): void {
  }

}
