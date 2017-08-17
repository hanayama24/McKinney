import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-clip-path',
  templateUrl: './clip-path.component.html',
  styleUrls: ['./clip-path.component.scss'],
  animations: [

    trigger('focusPanel', [
        state('inactive', style({
            transform: '',
            backgroundColor: '#eee'
        })),
        state('active', style({
            transform: 'rotate(45 363.67 348)',
            backgroundColor: '#cfd8dc'
        })),
        transition('inactive => active', animate('1000ms ease-in')),
        transition('active => inactive', animate('1000ms ease-out'))
    ]),
 ]
})
export class ClipPathComponent implements OnInit {
    public transformPath = '';
    public transformPath2 = '';
    public state = 'inactive';

    @Output() clickedPath: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    changePath() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        this.transformPath = this.transformPath === '' ? 'rotate(45 363.67 348) translate( -363.67 -348) scale(2)' : '';
        this.transformPath2 = this.transformPath2 === '' ? 'rotate(-45 363.67 348) translate( -363.67 -348) scale(2)' : '';

        setTimeout(() => {
            this.transformPath = '';
            this.transformPath2 = '';
        }, 1000);

        this.clickedPath.emit();
    }

}
