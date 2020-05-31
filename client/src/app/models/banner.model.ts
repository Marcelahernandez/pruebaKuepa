import { Image } from './image.models';
import { Video } from './video.model';

export class Banner {
    private title: string;
    private subtitle: string;
    private body: string;
    private order: number;
    private active: boolean;
    private image: Image;
    private video: Video;

    constructor($title: string, $subtitle: string, $body: string, $order: number, $active: boolean, $image: Image, $video: Video) {
		this.title = $title;
		this.subtitle = $subtitle;
		this.body = $body;
		this.order = $order;
		this.active = $active;
		this.image = $image;
		this.video = $video;
	}
}


