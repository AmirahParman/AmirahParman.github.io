export class GalleryThumbnail {
    id: string;
    imageSrc: string;
    alt: string;

    constructor(id: string, imageSrc: string, alt:string) {
        this.id = id;
        this.imageSrc = imageSrc;
        this.alt = alt;
    }
}
