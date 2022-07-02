import { Component, OnInit } from '@angular/core';
import { sectionData, SectionsData } from 'src/app/data/sectionData';

@Component({
  selector: 'app-improvements-section',
  templateUrl: './improvements-section.component.html',
  styleUrls: ['./improvements-section.component.scss'],
})
export class ImprovementsSectionComponent implements OnInit {
  data: SectionsData = sectionData;

  constructor() {}

  ngOnInit(): void {}
}
