import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { sectionData, SectionsData } from 'src/app/data/sectionData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  data: SectionsData = sectionData;

  constructor(private scroll: ViewportScroller) {}

  ngOnInit(): void {}
  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
