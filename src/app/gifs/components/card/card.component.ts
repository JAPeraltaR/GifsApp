import { Component, Input, OnInit } from "@angular/core";
import { Gif } from "../../interfaces/gifs.intefaces";

@Component({
  selector: 'gifs-card',
  standalone: false,
  templateUrl: './card.component.html'
})

export class CardComponent implements OnInit{

  ngOnInit(): void {
    if(!this.gif){
      throw new Error("Metodo no implementado.");
    }
  }

  @Input()
  public gif!: Gif;

}
