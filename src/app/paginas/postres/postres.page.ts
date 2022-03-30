import { Component, OnInit } from '@angular/core';


export interface Mensajes {
  id:string;
  nombre:string;
  avatar:string;

}



@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
})
export class PostresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
