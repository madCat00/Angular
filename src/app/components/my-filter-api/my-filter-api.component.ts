import { Component, OnInit } from '@angular/core';

interface filterApi {

  userid: number;
  id: number;
  title: string;
  body: string;

}


@Component({
  selector: 'app-my-filter-api',
  templateUrl: './my-filter-api.component.html',
  styleUrls: ['./my-filter-api.component.css']
})
export class MyFilterApiComponent implements OnInit {

  apiFilter: Array<filterApi>

  constructor() { }
  
  ngOnInit(): void {

    fetch('https://jsonplaceholder.typicode.com/posts').then(Response => {

      if (!Response.status) throw Error(Response.statusText)
      return Response.json()

    }).then((JSON) => {

      this.apiFilter = JSON.filter(value => { return value.id === 3 })
    })
  }

}
