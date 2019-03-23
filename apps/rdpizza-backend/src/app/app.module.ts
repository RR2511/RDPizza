import { Module } from '@nestjs/common';

import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { ToppingsController } from './toppings.controller';
import { ToppingsService } from './toppings.service';

@Module({
  imports: [],
  controllers: [ToppingsController, PizzasController],
  providers: [ToppingsService, PizzasService]
})
export class AppModule {}
