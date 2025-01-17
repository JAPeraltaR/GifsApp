import { Component, Input } from "@angular/core";
import { Gif } from "../../interfaces/gifs.intefaces";

@Component({
  selector: 'gifs-card',
  standalone: false,
  templateUrl: './card.component.html'
})

export class CardComponent {

  @Input()
  public gif: Gif = {};

}
