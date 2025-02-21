import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { KruiButtonModule } from '@kr-platform/ui';

@Component({
  selector: 'kr-app-not-found',
  imports: [
    SvgIconComponent,
    RouterLink,
    KruiButtonModule,
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {

}
