import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, startWith, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IKruiChartSingleLayerInputModel } from '../../models';


//todo add
@Component({
  selector: 'krui-chart-wrapper',
  templateUrl: './chart-wrapper.component.html',
  styleUrl: './chart-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KruiChartWrapperComponent implements OnInit {
  public language$: BehaviorSubject<'ru' | 'en' | 'fa'> = new BehaviorSubject<'ru' | 'en' | 'fa'>('ru');

  private options!: IKruiChartSingleLayerInputModel;
  private options$$: Subject<IKruiChartSingleLayerInputModel | null> = new Subject();
  public options$: Observable<IKruiChartSingleLayerInputModel | null> = this.options$$.asObservable().pipe(startWith(null), delay(0));

  private chartData: any = null;
  private chartData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  @Input() set language(l: 'ru' | 'en' | 'fa') {
    if (!l) return;
    this.language$.next(l);
  }

  @Input() set setChartOptions(v: IKruiChartSingleLayerInputModel) {
    if (!v) return;
    this.options = v;
    this.options$$.next(this.options);
  }

  @Input() set updateChartOptions(v: IKruiChartSingleLayerInputModel) {
    if (!v) return;
    this.options = v;
    this.options$$.next(null);
    setTimeout(() => this.options$$.next(this.options));
  }

  @Input() set setChartData(d: any) {
    if (!d) return;
    this.chartData = d;
  }

  @Input() set updateChartData(d: any) {
    if (!d) return;

  }

  public ngOnInit(): void {
    // if (!this.language$.value) {
    //   this.language$.next(this.options.chart.wrapper.language ?? 'ru');
    // }
  }
}
