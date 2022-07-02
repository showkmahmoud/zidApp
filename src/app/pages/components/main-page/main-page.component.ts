import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { sectionData, SectionsData } from 'src/app/data/sectionData';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  data: SectionsData = sectionData;
  constructor(private scroll: ViewportScroller) {}

  ngOnInit(): void {}
  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
