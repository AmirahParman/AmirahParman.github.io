import { Component, OnInit } from '@angular/core';
import { GalleryThumbnail } from 'src/app/models/gallery-thumbnail';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  ngOnInit(): void {
    this.images = [
      new GalleryThumbnail('cert-1', '../../../assets/Gold Award Cert.jpg', 'Gold Certified Trainer'),
      new GalleryThumbnail('Cert-9', '../../../assets/Core Values Award.jpg', 'Core Value Award'),
      new GalleryThumbnail('cert-8', '../../../assets/Silver Award Cert.jpg', ''),
      new GalleryThumbnail('cert-7', '../../../assets/1633657993583.jfif', ''),
      new GalleryThumbnail('cert-6', '../../../assets/1583731313968.jfif', ''),
      new GalleryThumbnail('cert-2', '../../../assets/Volvo Launching.jpg', ''),
      new GalleryThumbnail('cert-5', '../../../assets/IMG_3403.JPG', ''),
      new GalleryThumbnail('cert-4', '../../../assets/20211126_010626000_iOS.jpg', ''),
      new GalleryThumbnail('cert-3', '../../../assets/20220302_051631000_iOS.jpg', ''),
    ]
  }

  images: GalleryThumbnail[] = [];
  displayedImage: string = "../../../assets/Gold Award Cert.jpg"
  activeImage: string = 'cert-1';

  changeDisplayImage(srcOfImageBeingClicked: string, idOfImageBeingClicked: string) {
    this.displayedImage = srcOfImageBeingClicked;
    this.activeImage = idOfImageBeingClicked;
  }
}