/** Don't edit this file! It has been generated automatically. */

    import { AccordionComponent} from '@kr-platform/kit/pages/accordion/accordion.component';
import { BarChartsComponent} from '@kr-platform/kit/pages/bars/bar-charts.component';
import { TabsComponent} from '@kr-platform/kit/pages/tabs/tabs.component';
import { ToggleComponent} from '@kr-platform/kit/pages/toggle/toggle.component';
import { TypographyComponent} from '@kr-platform/kit/pages/typography/typography.component';

    export const EXAMPLE_ROUTES = [
{
        path: 'accordion',
        component: AccordionComponent,
      },
{
        path: 'bars',
        component: BarChartsComponent,
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
{
        path: '**',
        redirectTo: 'typography',
      }
];