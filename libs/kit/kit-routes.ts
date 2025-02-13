import { Routes } from '@angular/router';
import { TabsComponent } from '@kr-platform/kit/pages/tabs/tabs.component';
import { ToggleComponent } from '@kr-platform/kit/pages/toggle/toggle.component';
import { TypographyComponent } from '@kr-platform/kit/pages/typography/typography.component';
import { BarChartsComponent } from '@kr-platform/kit/pages/bars/bar-charts.component';
import { AccordionComponent } from '@kr-platform/kit/pages/accordion/accordion.component';
import { SelectComponent } from '@kr-platform/kit/pages/select/select.component';
import { InputComponent } from '@kr-platform/kit/pages/input/input.component';
import { CheckboxComponent } from '@kr-platform/kit/pages/checkbox/checkbox.component';
import { RangeComponent } from '@kr-platform/kit/pages/range/range.component';
import { SliderComponent } from '@kr-platform/kit/pages/slider/slider.component';
import { SpinnerComponent } from '@kr-platform/kit/pages/spinner/spinner.component';
import { ButtonComponent } from '@kr-platform/kit/pages/button/button.component';

export const KrKitRoutes: Routes = [
  {
    path: 'accordion',
    component: AccordionComponent,
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'bars',
    component: BarChartsComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'range',
    component: RangeComponent,
  },
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: 'slider',
    component: SliderComponent,
  },
  {
    path: 'spinner',
    component: SpinnerComponent
  },
  {
    path: 'tabs',
    component: TabsComponent,
  },
  {
    path: 'toggle',
    component: ToggleComponent,
  },
  {
    path: 'typography',
    component: TypographyComponent,
  },
  { path: '**', redirectTo: 'typography' },
];
