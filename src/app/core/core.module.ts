import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  exports: [NavbarComponent],
})
export class CoreModule {}
