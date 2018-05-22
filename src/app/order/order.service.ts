import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Headers } from "@angular/http";
import { MEAT_API } from "../app.api"

@Injectable()
export class OrderService {
    constructor(
        private cartService: ShoppingCartService,
        private http: Http
    ) { }

    itensValue(): number {
        return this.cartService.total()
    }

    cartItens(): CartItem[] {
        return this.cartService.itens
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item) {
        this.cartService.removeItem(item)
    }

    clear() {
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http
            .post(`${MEAT_API}/orders`,
                JSON.stringify(order),
                new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(order => order.id)
    }
}