import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretTextDisplayed = false;
  displayBtnClicks = [];

  onDisplayDetails() {
    // this.displayBtnClicks.push(this.displayBtnClicks.length + 1);
    this.displayBtnClicks.push(new Date());
    this.secretTextDisplayed = !this.secretTextDisplayed;
  }

  getBackgroundColor() {
    if (this.displayBtnClicks.length < 5) {
      return {};
    }

    return {backgroundColor: 'blue'};
  }

}
