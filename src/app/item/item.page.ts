import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})

export class ItemPage implements OnInit {
  url="https://swapi.co/api/people/"
  item :any  
  selectedId :string
  
  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedId = params['id'];
    });
    this.getPeople(this.selectedId).subscribe(data => {
      this.item = data;
    });
  }

  getPeople(id){
    return this.http.get(`${this.url}`+ id);
  }
}
