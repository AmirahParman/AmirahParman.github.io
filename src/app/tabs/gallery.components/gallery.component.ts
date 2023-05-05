import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  displayedImage: string = "../../../assets/Gold Award Cert.jpg"

  changeDisplayImage(newMainImage: string) {
    this.displayedImage= newMainImage;
  }
}
