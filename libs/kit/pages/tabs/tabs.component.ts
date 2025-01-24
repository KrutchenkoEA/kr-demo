import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'kr-kit-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: false
})
export class TabsComponent {
  @HostBinding('class') class = 'kit-page';
}
