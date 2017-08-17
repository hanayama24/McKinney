import {
    Component,
    OnInit,
    HostListener,
    Input
} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss']
})
export class WallpaperComponent implements OnInit {
    public imageWidth: number;
    @Input() imageStyle;

    @Input() imagePath;

    constructor() { }

    ngOnInit() {
        this.imageWidth = window.innerWidth - 17;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.imageWidth = window.innerWidth - 17;
        console.log('Change :' + this.imageWidth + ', and wallpaper ');
    }
}
