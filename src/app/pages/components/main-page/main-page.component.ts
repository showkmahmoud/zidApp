import { Component, OnInit } from '@angular/core';
import { sectionData, SectionsData } from 'src/app/data/sectionData';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  data: SectionsData = sectionData;
  constructor() {}

  ngOnInit(): void {}
}
