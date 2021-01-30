import { Component, OnInit } from '@angular/core';

interface api {
  userid: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-apirequest',
  templateUrl: './apirequest.component.html',
  styleUrls: ['./apirequest.component.css']
})


export class ApirequestComponent implements OnInit {

  apiRequest1: Array<api>;
  readError: string;

  constructor() { }

  ngOnInit(): void {

    fetch('https://jsonplaceholder.typicode.com/posts').then(Response => {

      if (!Response.status) throw Error(this.readError = Response.statusText)
      return Response.json();

    }).then((JSON) =>

      this.apiRequest1 = JSON


    )
  }

}
