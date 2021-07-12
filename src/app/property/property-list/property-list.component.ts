import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('data/properties.json').subscribe(
      data => console.log(data)
    );
  }

}
