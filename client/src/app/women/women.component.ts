import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  prices:string[];
  constructor(private router:Router) { }

 
  ngOnInit() {
    this.prices=[];
  }

  onCheckout(){
    this.router.navigate(['home/women/payment']);

  }
  onClick(){
   // this.router.navigate(['home/men/payment']);
    this.prices.push('$67');
   
  }
  onClicks(){
    // this.router.navigate(['home/men/payment']);
     this.prices.push('$57');
    
   }
   onClickss(){
    // this.router.navigate(['home/men/payment']);
     this.prices.push('$87');
    
   }
}

