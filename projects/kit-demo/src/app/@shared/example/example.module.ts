import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  EXAMPLES as EXAMPLES_TOKEN,
  EXAMPLE_FILES as EXAMPLE_FILES_TOKEN,
} from './tokens';
import { EXAMPLES, EXAMPLE_FILES } from './constants';
import { CodeSnippedComponent } from './components/code-snippet/code-snippet.component';
import { ExampleViewerComponent } from './components/example-viewer/example-viewer.component';
import { SyntaxPipe } from './pipes/syntax.pipe';
import { KruiTabsModule } from '@kr-platform/ui';
import {MatIcon} from '@angular/material/icon';

@NgModule({
  declarations: [ExampleViewerComponent, CodeSnippedComponent, SyntaxPipe],
  exports: [ExampleViewerComponent, CodeSnippedComponent, SyntaxPipe],
  providers: [
    {
      provide: EXAMPLES_TOKEN,
      useValue: EXAMPLES,
    },
    {
      provide: EXAMPLE_FILES_TOKEN,
      useValue: EXAMPLE_FILES,
    },
  ],
  imports: [
    CommonModule,
    KruiTabsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIcon,
  ],
})
export class ExampleModule {}
