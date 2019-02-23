import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantsService } from './restaurants/restaurants.service';
import { DetailRestaurantComponent } from './detail-restaurant/detail-restaurant.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItensComponent } from './order/order-itens/order-itens.component';
import { OrderService } from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt-interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';
import { fakeBackendProvider } from './helpers/fake-backend-interceptor';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    DetailRestaurantComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    RestaurantDetailComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItensComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent,
    SideBarLeftComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    AuthGuard,
    RestaurantsService, 
    ShoppingCartService, 
    OrderService,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
