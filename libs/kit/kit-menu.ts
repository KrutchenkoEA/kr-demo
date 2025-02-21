import { KruiMainMenuItem } from '@kr-platform/kit/example';

export const KrKitMenu: KruiMainMenuItem[] = [
  {
    label: 'Accordion',
    href: 'accordion',
    iconUrl: 'kruiIconTeble5rows',
  },
  {
    label: 'Button',
    iconUrl: 'kruiIconArrowCircleDown',
    href: 'button'
  },
  {
    label: 'Chart line',
    iconUrl: 'kruiIconChartMountainCorner',
    children: [
      {
        label: 'Line charts',
        href: 'line-charts',
      },
      {
        label: 'Area charts',
        href: 'area-charts',
      },
    ],
  },
  {
    label: 'Chart bar',
    iconUrl: 'kruiIconChartColumnsSquare',
    children: [
      {
        label: 'Bar-charts',
        href: 'bar-charts',
      },
      {
        label: 'Combo bar charts',
        href: 'combo-bar-charts',
      },
      {
        label: 'Stack bar charts',
        href: 'stack-bar-charts',
      },
      {
        label: 'Range bar charts',
        href: 'range-bar-charts',
      },
    ],
  },
  {
    label: 'Chart combo',
    href: 'combo-charts',
    iconUrl: 'kruiIconChartDiagramPie',
  },
  {
    label: 'Checkbox',
    iconUrl: 'kruiIconOk',
    href: 'checkbox',
  },
  {
    label: 'Crawlers',
    iconUrl: 'kruiIconSettingsSliders',
    children: [
      {
        label: 'Slider',
        href: 'slider',
      },

      {
        label: 'Range',
        href: 'range',
      },
    ],
  },
  {
    label: 'Form field',
    iconUrl: 'kruiIconCard',
    href: 'input',
  },
  {
    label: 'Select',
    iconUrl: 'kruiIconOk',
    href: 'select',
  },
  {
    label: 'Spinner',
    iconUrl: 'kruiIconCircleArrowsCycle',
    href: 'spinner',
  },
  {
    label: 'Tabs',
    href: 'tabs',
    iconUrl: 'kruiIconLayers',
  },
  {
    label: 'Toggle',
    href: 'toggle',
    iconUrl: 'kruiIconThemeLightSun',
  },
  {
    label: 'Typography',
    href: 'typography',
    iconUrl: 'kruiIconEditText',
  },
  {
    label: 'Tooltip',
    iconUrl: 'kruiIconThemeLightSun',
    href: 'tooltip'
  },
];
