import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  public changedPathNext = false;
  public imagePath = '../assets/images/george-peabody-library-1.jpg';
  public styleImageChanged;

  changeImage() {
      console.log('Image changed' + this.changedPathNext);
      this.changedPathNext = !this.changedPathNext;

      setTimeout(() => {
          this.imagePath =  this.imagePath === '../assets/images/george-peabody-library-1.jpg' ?
          '../assets/images/shutterstock_179675246.jpg' : '../assets/images/george-peabody-library-1.jpg';
          this.styleImageChanged = '';
      }, 1900);
  }
}
