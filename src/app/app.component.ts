import { Component } from '@angular/core';

import { Item } from './models/item.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  tata: Item[] = [
    {
      itemTitle: 'Premier ouvrage',
      title: 'Ma vie mon oeuvre',
      year: 2020,
      author: 'Phil Defaire'

    },
    {
      itemTitle: 'Second ouvrage',
      title: 'L\'eau de là',
      year: 1977,
      author: 'Edgar Dunorre'
    },
    {
      itemTitle: 'Troisième ouvrage',
      title: 'Chroniques anusiennes',
      year: 1983,
      author: 'Gérard Mansoiffe'
    }
  ];
}
