import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PickupCallCardComponent } from './pickup-call-card.component';

@NgModule({
  declarations: [PickupCallCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [PickupCallCardComponent],
})
export class PickupCallCardModule {}