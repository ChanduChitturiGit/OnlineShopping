import { Component, OnInit } from '@angular/core';
import { BeBoldService } from '../services/be-bold.service';


@Component({
  selector: 'app-home-section-two',
  templateUrl: './home-section-two.component.html',
  styleUrls: ['./home-section-two.component.scss']
})
export class HomeSectionTwoComponent implements OnInit{

  brands:any;
  img_path='assets/brand/';
  
  constructor(private beBoldService:BeBoldService){}

  ngOnInit(): void {
    this.getAllBrands();
  }

  // get all brands
  getAllBrands(){
    this.beBoldService.getAllBrands().subscribe(
      (data)=>{
        this.brands=data;
      },
      (error)=>{
        alert('Server Not Responding...');
      }
    )
  }
}
