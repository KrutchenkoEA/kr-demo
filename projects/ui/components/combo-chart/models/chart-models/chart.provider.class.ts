export abstract class KruiChartPaletteProvider {
  abstract nextColorId: number;

  abstract nextColor(): string;
}
