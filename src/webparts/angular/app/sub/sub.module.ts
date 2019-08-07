import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from '../home/home.page';
import { SubRoutingModule } from './sub-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SubRoutingModule
  ],
  declarations: [HomePage]
})
export class SubModule { }