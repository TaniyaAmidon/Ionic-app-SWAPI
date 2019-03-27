import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../items.json';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})

export class ItemPage implements OnInit {
  items :any
  pokemon :any
  selectedId :string
  
  constructor(private route: ActivatedRoute) { 
    this.items = data.items;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedId = params['id'];
    });
    this.items.forEach(item => {
      if (item.id == this.selectedId) {
        this.pokemon = item;
      } 
    });
  }

}
