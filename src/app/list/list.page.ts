import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  items :any
  url="https://swapi.co/api/people/"

  constructor(private http: HttpClient) {
    this.getPeople().subscribe(data => {
      this.items = data["results"];
    });
  }

  getPeople(){
    return this.http.get(`${this.url}`);
  }

  ngOnInit() {

  }

}
