import { Component, OnInit } from '@angular/core';
import { NavbarItem, navbarItems } from '../../data/navbar.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarItems: NavbarItem[] = navbarItems.reverse();
  menuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
