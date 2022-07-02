import { Component, OnInit } from '@angular/core';
import { sectionData, SectionsData } from 'src/app/data/sectionData';
import { NavbarItem, navbarItems } from '../../data/navbar.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  data: SectionsData = sectionData;

  menuOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
