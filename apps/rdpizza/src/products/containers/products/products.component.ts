import { Component, OnInit } from '@angular/core';
import { Pizza } from '@RD-Pizza-Nx/data';
import { PizzasService } from '../../services';

@Component({
  selector: 'rd-pizza-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaService: PizzasService) {}

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    });
  }
}
