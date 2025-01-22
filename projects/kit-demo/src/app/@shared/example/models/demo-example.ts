export interface DemoExample {
  title: string;
  packagePath: string;
  moduleName: string;
  componentName: string;
  selector: string;
  files: string[];
  loadAsync: () => Promise<any>;
}
