import { Component, OnInit } from '@angular/core';
import data from '../items.json';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})

export class ItemPage implements OnInit {
  items :any
  constructor() { 
    this.items = data.items.id;
    
  }
    
  ngOnInit() {
  }

}
