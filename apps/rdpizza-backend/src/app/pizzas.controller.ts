import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param
} from '@nestjs/common';

import { Pizza } from '@RD-Pizza-Nx/data';
import { PizzasService } from './pizzas.service';

@Controller('/pizzas')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Get()
  async getPizzas(): Promise<Pizza[]> {
    return this.pizzasService.getPizzas();
  }

  @Post()
  async createPizza(@Body() payload: Pizza): Promise<Pizza> {
    return this.pizzasService.createPizza(payload);
  }

  @Put()
  async updatePizza(@Body() payload: Pizza): Promise<Pizza> {
    return this.pizzasService.updatePizza(payload);
  }

  @Delete(':id')
  removePizza(@Param('id') id: string): void {
    this.pizzasService.removePizza(+id);
  }
}
