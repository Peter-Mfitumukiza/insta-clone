import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  storiesNum = 10;
  displayLeft = this.storiesNum <= 7 ? false:true;
  displayRight = false;
  constructor() { }

  onScrollLeft(div: HTMLDivElement){
    div.scrollLeft += 300;
    this.displayRight = true;
    if(div.scrollLeft >= div.offsetWidth){
      this.displayLeft = false;
    }

  }
  onScrollRight(div: HTMLDivElement){
    div.scrollLeft -= 500;
    this.displayLeft = true;
    if(div.scrollLeft == 0){
      this.displayRight = false;
    }
  }
  
  ngOnInit(): void {
  }

}
