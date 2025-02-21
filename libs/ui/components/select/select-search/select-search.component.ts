import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SELECT_SEARCH_LABELS_MAP } from '../consts';

@Component({
  selector: 'krui-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss'],
  standalone: false,
})
export class KruiSelectSearch implements OnInit, OnChanges, AfterViewInit {
  public readonly searchControl = new FormControl('');

  @ViewChild('search') search: ElementRef | undefined;

  @Input() query: string = '';

  @Input() debounce: number = 100;

  @Input() language: string = 'ru';

  @Input() placeholder!: string;

  @Output() queryChange = new EventEmitter<string | unknown>();

  public readonly SELECT_SEARCH_LABELS = SELECT_SEARCH_LABELS_MAP;

  public constructor() {
  }

  public ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe((e) => this.queryChange.emit(e));
  }

  public ngOnChanges(changes: SimpleChanges) {
    if ('query' in changes) {
      // @ts-ignore
      this.searchControl.patchValue(changes.query.currentValue, {
        emitEvent: false,
      });
    }
  }

  public clear() {
    this.searchControl.setValue('');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.search?.nativeElement.focus();
    }, 0);
  }
}
