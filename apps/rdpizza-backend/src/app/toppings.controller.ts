import { Controller, Get } from '@nestjs/common';

import { Topping } from '@RD-Pizza-Nx/data';
import { ToppingsService } from './toppings.service';

@Controller('/toppings')
export class ToppingsController {
  constructor(private readonly toppingsService: ToppingsService) {}

  @Get()
  async getToppings(): Promise<Topping[]> {
    return this.toppingsService.getToppings();
  }
}
