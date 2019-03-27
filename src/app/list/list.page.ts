import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  data :any;
  constructor() {
    this.data = [
      {
        picture: "picture",
        title: "Bulbasaur",
        subtitle: "Generation 1: Grass, Poison",
        text:"Bulbasaur can be seen napping in bright sunlight.",
      },
      {
        picture: "a picture",
        title: "Charmander",
        subtitle: "Generation 1: Fire",
        text: "The flame that burns at the tip of its tail is an indication of its emotions.",
      },
      {
        picture: "a picture",
        title: "Squirtle",
        subtitle: "Generation 1: Water",
        text: "Squirtle's shell is not merely used for protection",
      },
      {
        picture: "a picture",
        title: "Pikachu",
        subtitle: "Generation 1: Electric",
        text: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity.",
      }

    ];

    console.log(this.data);
  }

  ngOnInit() {

  }

}
