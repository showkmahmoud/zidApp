import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';

@NgModule({
  declarations: [PrimaryButtonComponent],
  imports: [CommonModule, ElementsRoutingModule],
  exports: [PrimaryButtonComponent],
})
export class ElementsModule {}
