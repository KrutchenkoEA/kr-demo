import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableOfContentsComponent } from './table-of-contents.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TableOfContentsComponent],
  exports: [TableOfContentsComponent],
})
export class TableOfContentsModule {}
