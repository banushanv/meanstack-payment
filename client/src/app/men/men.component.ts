import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
prices:string[];
totalprice:string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.prices=[];
  }

  onCheckout(){
    this.router.navigate(['home/men/payment']);

  }
  onClick(){
   // this.router.navigate(['home/men/payment']);
    this.prices.push('$67');
    this.totalprice='Total Price:'
   
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
