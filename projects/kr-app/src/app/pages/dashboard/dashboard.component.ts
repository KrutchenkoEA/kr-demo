import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { SplitAreaComponent, SplitComponent } from 'angular-split';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'kr-app-dashboard',
  imports: [
    SplitAreaComponent,
    SplitComponent,
    SvgIconComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  @ViewChild('fileInput') public fileInput: ElementRef<HTMLInputElement> | undefined;

  private onClickClose(): void {
  }

  public onFileChange(event: Event): void {
    // @ts-ignore
    const file = (event.target as HTMLInputElement)?.files[0];

    if (file) {
      this.onClickClose();
      // this.fileUploadService.file = file;
      // this.fileUploadService.checkAndRead();
      setTimeout(() => {
        this.fileInput!.nativeElement.value = '';
      });
    }
  }
}

