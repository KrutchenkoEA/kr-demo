import { Injectable } from '@angular/core';


export enum KruiChartDarkColorsEnum {
  'var(--color-text-contrast)' = '#ffffff',
  'var(--color-borders-and-icons-icons)' = '#727689',
  'var(--color-borders-and-icons-stroke-shape)' = '#2d3443',
  'var(--color-background-popup-widgets)' = '#212631',
  'var(--color-color-12)' = '#97a3ba',
  'var(--color-logo)' = '#f0643e',
}

export enum KruiChartLightColorsEnum {
  'var(--color-text-contrast)' = '#212631',
  'var(--color-borders-and-icons-icons)' = '#97a3ba',
  'var(--color-borders-and-icons-stroke-shape)' = '#eaecf1',
  'var(--color-background-popup-widgets)' = '#ffffff',
  'var(--color-color-12)' = '#455168',
  'var(--color-logo)' = '#f0643e',
}

@Injectable()
export class KruiChartColorParseService {
  public darkColors: { name: string; value: string }[] = this.parseEnum(KruiChartDarkColorsEnum);
  public lightColors: { name: string; value: string }[] = this.parseEnum(KruiChartLightColorsEnum);

  public setNewColorPair(v: { cssColor: string, darkValue: string, lightValue: string }): void {
    if (!(v?.cssColor && v?.darkValue && v?.lightValue)) return;
    const darkIndex = this.darkColors.findIndex(c => c.name === v.cssColor);
    const lightIndex = this.lightColors.findIndex(c => c.name === v.cssColor);

    if (darkIndex !== -1) {
      this.darkColors[darkIndex] = { name: v.cssColor, value: v.darkValue };
    } else {
      this.darkColors.push({ name: v.cssColor, value: v.darkValue });
    }
    if (lightIndex !== -1) {
      this.lightColors[darkIndex] = { name: v.cssColor, value: v.lightValue };
    } else {
      this.lightColors.push({ name: v.cssColor, value: v.lightValue });
    }
  }

  private getEnumKeyByValue(object: unknown, value: string): string {
    // @ts-ignore
    const index = Object.values(object).indexOf(value);
    // @ts-ignore
    const key = Object.keys(object)[index];
    return key;
  }

  private parseEnum(object: unknown): { name: string; value: string }[] {
    // @ts-ignore
    return Object.values(object).map((item: string) => {
      return {
        name: this.getEnumKeyByValue(object, item),
        value: item,
      };
    });
  }

  public changeColor(cssValue: string, isDarkTheme = true): string {
    const colors = isDarkTheme ? this.darkColors : this.lightColors;
    const index = this.lightColors.findIndex(c => c.name === cssValue);
    if (index !== -1) {
      return colors[index].value;
    } else {
      return colors[0].value;
    }
  }
}
