import { Component, OnInit } from '@angular/core';
import data from '../items.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  items :any
  constructor() {
    this.items = data.items;
  }

  ngOnInit() {

  }

}
