import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopAllComponent } from './shop-all/shop-all.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { HomeSectiononeComponent } from './home-sectionone/home-sectionone.component';
import { HomeSectionTwoComponent } from './home-section-two/home-section-two.component';
import { HomeSectionThreeComponent } from './home-section-three/home-section-three.component';
import { HomeSectionFourComponent } from './home-section-four/home-section-four.component';
import { HomeSectionFiveComponent } from './home-section-five/home-section-five.component';
import { HomeSectionSixComponent } from './home-section-six/home-section-six.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'shop-all', component: ShopAllComponent
  },
  {
    path: 'item/:id', component: ItemComponent
  },
  {
    path: 'category/:name', component: CategoryComponent
  },
  {
    path: 'cart', component: CartComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopAllComponent,
    ItemComponent,
    CategoryComponent,
    CartComponent,
    HomeComponent,
    HomeSectiononeComponent,
    HomeSectionTwoComponent,
    HomeSectionThreeComponent,
    HomeSectionFourComponent,
    HomeSectionFiveComponent,
    HomeSectionSixComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    HttpClientModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
