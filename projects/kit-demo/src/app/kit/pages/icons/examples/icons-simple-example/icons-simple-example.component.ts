import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import PACKS from './packs';
import { debounceTime } from 'rxjs/operators';

interface Pack {
  title: string;
  icons: string[];
}

@Component({
  selector: 'icons-simple-example',
  templateUrl: './icons-simple-example.component.html',
  styleUrls: ['./icons-simple-example.component.scss'],
  standalone: false,
})
export class IconsSimpleExampleComponent implements OnInit {
  public readonly packs: Pack[] = PACKS;
  public filtered: Pack[] = [];
  public query: string = '';
  public readonly filterBroadcast$ = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.filterBroadcast$
      .pipe(debounceTime(60))
      .subscribe((q) => this.filter(q));
  }

  private filter(query: string) {
    const pattern = new RegExp(query, 'i');

    this.filtered = this.packs
      .map((p) => ({
        title: p.title,
        icons: p.icons.filter((ic) =>
          ic.replace('kruiIcon', '').match(pattern),
        ),
      }))
      .filter((p) => p.icons.length);
  }
}
