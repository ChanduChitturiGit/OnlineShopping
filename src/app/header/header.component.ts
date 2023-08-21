import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  conditioner = 'conditioner';
  moisturizer = 'moisturizer';
  lipstick = 'lipstick';
  cartLength:any;


  constructor(){}
  ngOnInit(): void {
  }


}
