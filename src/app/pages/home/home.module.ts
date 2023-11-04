import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { PickupCallCardModule } from 'src/app/component/pickup-call-card/pickup-call-card.module';
import { HomePage } from './home.page';
import { PickupCallCardModule } from 'src/app/components/pickup-call-card/pickup-call-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
<<<<<<< HEAD
    PickupCallCardModule
  ],
  declarations: [
    HomePage
  ]
=======
    PickupCallCardModule,
  ],
  declarations: [HomePage],
>>>>>>> 302a663c32732c046e85725f0c1b68160dcd363b
})
export class HomePageModule {}
