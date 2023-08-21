import { Component, OnInit } from '@angular/core';
import { BeBoldService } from '../services/be-bold.service';


@Component({
  selector: 'app-home-section-four',
  templateUrl: './home-section-four.component.html',
  styleUrls: ['./home-section-four.component.scss']
})
export class HomeSectionFourComponent implements OnInit{

  bestSellingItems:any;
  img_path='assets/';
  
  constructor(private beBoldService:BeBoldService){}

  ngOnInit(): void {
    this.getBestSellingItems();
  }

  // get best selling items
  getBestSellingItems(){
    this.beBoldService.getBestSellingItems().subscribe(
      (data)=>{
        this.bestSellingItems=data;
      },
      (error)=>{
        alert('Server Not Responding...')
      }
    )
  }

}
