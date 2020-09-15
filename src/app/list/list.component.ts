import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../models/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() titi: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
