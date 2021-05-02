import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShipmentPageRoutingModule } from './shipment-routing.module';

import { ShipmentPage } from './shipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShipmentPageRoutingModule
  ],
  declarations: [ShipmentPage]
})
export class ShipmentPageModule {}
