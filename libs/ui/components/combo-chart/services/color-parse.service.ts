import { Injectable } from '@angular/core';


export enum KruiChartDarkColorsEnum {
  'var(--color-text-contrast)' = '#ffffff',
  'var(--color-background-main)' = '#22262f',
  'var(--color-borders-light)' = '#3e4859',
  'var(--color-borders-stroke)' = '#2c333d',
  'var(--color-borders-icons)' = '#a0b0c9',
  'var(--color-color-12)' = '#d6dbe5',
  'var(--color-logo)' = '#5A72FF',
}

export enum KruiChartLightColorsEnum {
  'var(--color-text-contrast)' = '#181d25',
  'var(--color-background-main)' = '#f9fafb',
  'var(--color-borders-light)' = '#e5e9f2',
  'var(--color-borders-stroke)' = '#d3d9e4',
  'var(--color-borders-icons)' = '#b5c1d0',
  'var(--color-color-12)' = '#98a6ba',
  'var(--color-logo)' = '#5A72FF',
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
