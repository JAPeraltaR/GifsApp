import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: "gifs-search-box",
  standalone: false,
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent{

  @Output()
  public gifsName: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsServices: GifsService) {
  }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this.gifsServices.searchTag(newTag);
    this.gifsName.emit(newTag);

    this.tagInput.nativeElement.value = '';

  }
}
