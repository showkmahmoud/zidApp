import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CoreModule } from '../core/core.module';
import { ElementsModule } from '../elements/elements.module';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { FooterComponent } from './components/footer/footer.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ImprovementsSectionComponent } from './components/improvements-section/improvements-section.component';

@NgModule({
  declarations: [MainPageComponent, FooterComponent, ApplicationsComponent, ImprovementsSectionComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    ElementsModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
})
export class PagesModule {}
