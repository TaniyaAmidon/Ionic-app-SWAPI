import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  // pages = [
  //   {
  //     title: 'List',
  //     url: '/list'
  //   },
  //   {
  //     title: 'Item',
  //     url: '/item'
  //   }
  // ];

  // selectedPath = '';

  constructor() {
    // this.router.events.subscribe((event:RouterEvent) => {
    //   this.selectedPath =  event.url;
    // });
   }

  ngOnInit() {
  }

}
