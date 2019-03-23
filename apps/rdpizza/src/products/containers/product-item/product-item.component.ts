import { Component, OnInit } from '@angular/core';
import { ToppingsService } from '../../services/toppings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Topping, Pizza } from '@RD-Pizza-Nx/data';
import { PizzasService } from '../../services';

@Component({
  selector: 'rd-pizza-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  pizza: Pizza;
  visualise: Pizza;
  toppings: Topping[];
  deleteConfirm: boolean = false;

  constructor(
    private pizzaService: PizzasService,
    private toppingsService: ToppingsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      const param = this.route.snapshot.params.id;
      let pizza;
      if (param === 'new') {
        pizza = {};
      } else {
        pizza = pizzas.find(
          pizzaValue => pizzaValue.id === parseInt(param, 10)
        );
      }
      this.pizza = pizza;
      this.toppingsService.getToppings().subscribe(toppings => {
        this.toppings = toppings;
        // this.onSelect(toppings.map(topping => topping.id));
      });
    });
  }

  onSelect(event: number[]) {
    let toppings;
    if (this.toppings && this.toppings.length) {
      toppings = event.map(id =>
        this.toppings.find(topping => topping.id === id)
      );
    } else {
      toppings = this.pizza.toppings;
    }
    this.visualise = { ...this.pizza, toppings };
  }

  onCreate(event: Pizza) {
    this.pizzaService.createPizza(event).subscribe(pizza => {
      this.pizza = pizza;
      this.router.navigate([`/products/${pizza.id}`]);
    });
  }

  onUpdate(event: Pizza) {
    this.pizzaService.updatePizza(event).subscribe(() => {
      this.router.navigate([`/products`]);
    });
  }

  onRemove(event: Pizza) {
    this.deleteConfirm = true;
  }

  onRemoveConfirmed(pizza: Pizza) {
    this.deleteConfirm = false;
    this.pizzaService.removePizza(pizza.id).subscribe(() => {
      this.router.navigate([`/products`]);
    });
  }
}
