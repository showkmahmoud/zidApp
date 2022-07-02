import { Component, OnInit } from '@angular/core';
import { sectionData, SectionsData } from 'src/app/data/sectionData';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  data: SectionsData = sectionData;

  constructor() {}

  ngOnInit(): void {}
}
