import { Compiler, Component, Inject, Input, NgModuleFactory, OnInit, Type } from '@angular/core';
import { CommonModule, NgComponentOutlet, NgForOf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { KruiTabsModule } from '@kr-platform/ui';
import { CodeSnippedComponent, EXAMPLES_TOKEN } from '@kr-platform/kit/example';
import { DemoExample } from '@kr-platform/kit/example/models/demo-example';
import { Clipboard } from '@angular/cdk/clipboard';

interface ExampleTab {
  id: string;
  title: string;
  path: string;
}

const fileExtensionRegex = /(.*)\.(\w+)/;

@Component({
  selector: 'example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    KruiTabsModule,
    NgComponentOutlet,
    NgForOf,
    CodeSnippedComponent,
  ],
})
export class ExampleViewerComponent implements OnInit {
  @Input()
  public example!: string;

  @Input()
  public selectedTabIndex = 0;

  @Input()
  public collapsed: boolean = false;

  get id(): string {
    return this.exampleData.selector;
  }

  get title(): string {
    return this.exampleData.title;
  }

  public exampleData!: DemoExample;
  public componentType!: Type<any>;
  public moduleFactory!: NgModuleFactory<any>;
  public isUndefined: boolean = false;
  public tabs: ExampleTab[] = [];

  constructor(
    @Inject(EXAMPLES_TOKEN) private readonly examples: { [id: string]: DemoExample },
    private readonly clipboard: Clipboard,
    private readonly compiler: Compiler,
  ) {
  }

  public async ngOnInit(): Promise<void> {
    if (!this.examples[this.example]) {
      this.isUndefined = true;
    } else {
      this.exampleData = this.examples[this.example];
      this.createExampleTabs();
      await this.loadExampleComponent();
    }
  }

  public copyLink(): void {
    const url = new URL(self.location.toString());
    url.hash = this.id;
    this.clipboard.copy(url.toString());
  }

  private createExampleTabs(): void {
    this.tabs = [];
    const main = [];
    const { packagePath, selector } = this.exampleData;
    for (const file of this.exampleData.files) {
      const id = file.replace(fileExtensionRegex, '$1-$2');
      const extention = file.replace(fileExtensionRegex, '$2');
      const path = `${packagePath}/${selector}/${file}`;

      if (file.search(selector) !== -1) {
        main.push({ id, title: extention.toUpperCase(), path });
      } else {
        this.tabs.push({ id, title: file, path });
      }
    }
    this.tabs = [...main, ...this.tabs];
  }

  private async loadExampleComponent(): Promise<void> {
    const { componentName, moduleName } = this.exampleData;
    const moduleExports = await this.exampleData.loadAsync();
    this.componentType = moduleExports[componentName];
    this.moduleFactory = await this.compiler.compileModuleAsync(
      moduleExports[moduleName],
    );
  }
}
