import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'syntax',
  standalone: true
})
export class SyntaxPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
