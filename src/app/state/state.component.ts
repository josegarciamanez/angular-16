import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { switchState } from 'src/models/store';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent {
  public switchState = switchState;
}
