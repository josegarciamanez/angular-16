import { Component, signal } from '@angular/core';
import { switchState } from 'src/models/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Angular-16 Signals';
  public switchState = switchState;

  public changeState() {
    this.switchState() !== 'on'
      ? this.switchState.set('on')
      : this.switchState.set('off');
  }
}
