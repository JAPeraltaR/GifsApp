import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsModule } from '../gifs/gifs.module';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import {GifsService} from '../gifs/services/gifs.service';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    GifsModule
  ],
  providers:[
    GifsService
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
