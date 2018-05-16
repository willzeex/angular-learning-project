import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})

export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  itens(): any[] {
    return this.shoppingCartService.itens
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  clear() {
    this.shoppingCartService.clear()
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item)
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item)
  }
}
