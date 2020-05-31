import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretTextDisplayed = false;
  displayBtnClicks = [];
  displayBtnClickCount = 0;

  onDisplayDetails() {
    this.displayBtnClicks.push(++this.displayBtnClickCount);
    this.secretTextDisplayed = !this.secretTextDisplayed;
  }

  getBackgroundColor() {
    if(this.displayBtnClicks.length < 5) {
      return {};
    }

    return {backgroundColor: 'blue'};
  }

}
