import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from "./image.service";
export interface slider {
  image: string,
  thumbImage: string,
  title: string
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  imageObject: Array<slider> = [];

  constructor(private imageService: ImageService) {
    this.setImageObject();
  }

  setImageObject() {
    this.imageService.getImages().subscribe((data: any) => {
      this.imageObject = data;
    });
  }

  imageClickHandler() {
    console.log();
  }

  ngOnInit(): void {
  
  }
  
}
