export interface KruiTooltipParameters {
  position: KruiTooltipPosition;
  size: 'sm' | 'md';
  showBorder?: boolean;
  title?: string | string[];
  description?: string;
  text?: string;
  usePopupAnimation?: boolean;
}
export type KruiTooltipPosition = 'left' | 'right' | 'top' | 'bottom';
