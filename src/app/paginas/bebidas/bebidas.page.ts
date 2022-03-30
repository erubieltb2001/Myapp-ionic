import { Component, OnInit } from '@angular/core';


export interface Mensajes {
  id:string;
  nombre:string;
  avatar:string;

}

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],



})
export class BebidasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
