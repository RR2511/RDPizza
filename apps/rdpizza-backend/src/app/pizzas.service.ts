import { Injectable } from '@nestjs/common';
import { Pizza } from '@RD-Pizza-Nx/data';

const PIZZAS: Pizza[] = [
  {
    name: "Blazin' Inferno",
    toppings: [
      { id: 10, name: 'pepperoni' },
      { id: 9, name: 'pepper' },
      { id: 3, name: 'basil' },
      { id: 4, name: 'chili' },
      { id: 7, name: 'olive' },
      { id: 2, name: 'bacon' }
    ],
    id: 1
  },
  {
    name: "Seaside Surfin'",
    toppings: [
      { id: 6, name: 'mushroom' },
      { id: 7, name: 'olive' },
      { id: 2, name: 'bacon' },
      { id: 3, name: 'basil' },
      { id: 1, name: 'anchovy' },
      { id: 8, name: 'onion' },
      { id: 11, name: 'sweetcorn' },
      { id: 9, name: 'pepper' },
      { id: 5, name: 'mozzarella' }
    ],
    id: 2
  },
  {
    name: "Plain Ol' Pepperoni",
    toppings: [{ id: 10, name: 'pepperoni' }],
    id: 3
  }
];

const PIZZA_MAP: Map<number, Pizza> = new Map(
  PIZZAS.map(pizza => [pizza.id, pizza] as [number, Pizza])
);

@Injectable()
export class PizzasService {
  getPizzas(): Pizza[] {
    return Array.from(PIZZA_MAP.values());
  }

  private getPizza(id: number): Pizza {
    return PIZZA_MAP.get(id);
  }

  createPizza(payload: Pizza): Pizza {
    const pizza = payload;
    pizza.id = this.genPizzaId();
    PIZZA_MAP.set(pizza.id, pizza);
    return pizza;
  }

  updatePizza(payload: Pizza): Pizza {
    PIZZA_MAP.set(payload.id, payload);
    return payload;
  }

  removePizza(id: number): void {
    PIZZA_MAP.delete(id);
  }

  genPizzaId(): number {
    return PIZZA_MAP.size > 0
      ? Math.max(...Array.from(PIZZA_MAP.keys())) + 1
      : 999;
  }
}
