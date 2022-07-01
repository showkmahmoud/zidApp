import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CoreModule } from '../core/core.module';
import { ElementsModule } from '../elements/elements.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, PagesRoutingModule, CoreModule, ElementsModule],
})
export class PagesModule {}
