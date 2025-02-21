import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kr-app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

}
