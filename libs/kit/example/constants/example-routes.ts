/** Don't edit this file! It has been generated automatically. */

    import { BarChartsComponent} from '@kr-platform/kit/pages/bars/bar-charts.component';
import { TabsComponent} from '@kr-platform/kit/pages/tabs/tabs.component';
import { ToggleComponent} from '@kr-platform/kit/pages/toggle/toggle.component';
import { TypographyComponent} from '@kr-platform/kit/pages/typography/typography.component';

    export const EXAMPLE_ROUTES = [
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