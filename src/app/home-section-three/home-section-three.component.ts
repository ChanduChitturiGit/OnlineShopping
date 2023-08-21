import { Component, OnInit } from '@angular/core';
import { BeBoldService } from '../services/be-bold.service';


@Component({
  selector: 'app-home-section-three',
  templateUrl: './home-section-three.component.html',
  styleUrls: ['./home-section-three.component.scss']
})
export class HomeSectionThreeComponent implements OnInit{

  popularItems:any;
  img_path='assets/';

  constructor(private beBoldService:BeBoldService){}

  ngOnInit(): void {
   this.getPopularItems();
  }

  //get popular items
  getPopularItems(){
    this.beBoldService.getPopularItems().subscribe(
      (data)=>{
        this.popularItems=data;
      },
      (error)=>{
        alert('Server Not Responding...');
      }
    )
  }


}
