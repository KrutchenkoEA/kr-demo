import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { KruiButtonModule, KruiFormFieldModule } from '@kr-platform/ui';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-admin-login-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogActions,
    MatDialogContent, MatDialogTitle, KruiButtonModule, SvgIconComponent, KruiFormFieldModule,
  ],
  templateUrl: './admin-login-dialog.component.html',
  styleUrl: './admin-login-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLoginDialogComponent {
  dialogRef = inject(MatDialogRef<AdminLoginDialogComponent>);

  formGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });

  get passwordControl() {
    return this.formGroup.controls.password;
  }

  submit(): void {
    this.dialogRef.close(this.passwordControl.value);
  }
}
