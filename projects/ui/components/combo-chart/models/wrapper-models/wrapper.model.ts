export interface KruiChartReSizeEvent {
  width: number;
  height: number;
}

export interface KruiChartWrapperInputs {
  marginLeft: number;
  marginRight: number;
  marginBottom: number;
  marginTop: number;
  bgColor: string;
  borderColor: string;
  borderRadius: number;
  smartScrollEnable: boolean;
  smartScrollHeight: number;
  smartScrollColor: string;
  language: 'ru' | 'en' | 'fa';
  formatFunc: any | undefined | null;
  setDefIfContainerSizeInvalid: boolean;
  customResize: KruiChartReSizeEvent | null;
  height: number;
  width: number;
  isFixedSize: boolean;
}
