import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';

import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

import { RouterModule, Routes } from '@angular/router';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';

const appRoutes: Routes = [
  { path: 'men', component: MenComponent },
  { path: 'women',      component: WomenComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'home/men', component: MenComponent },
  { path: 'home/men/payment', component: PaymentComponent },

  { path: 'home/men/payment/paymentsuccess',component: PaymentsuccessComponent },
  { path: 'home/women',      component: WomenComponent },
  { path: 'home/women/payment', component: PaymentComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaymentComponent,
    
    HomeComponent,
    MenComponent,
    WomenComponent,
    PaymentsuccessComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('your key')
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
