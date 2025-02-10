import { KruiMainMenuItem } from '@kr-platform/kit/example';

export const KrKitMenu: KruiMainMenuItem[] = [
  {
    label: 'Accordion',
    href: 'accordion',
    iconUrl: 'kruiIconTeble5rows',
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
        href: 'bar-combo-charts',
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
];
