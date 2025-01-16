import {Component, input, Input} from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input()
  public gifsNames:string[] = [];

  get gifsName() {
    return this.gifsNames;
  }

}
