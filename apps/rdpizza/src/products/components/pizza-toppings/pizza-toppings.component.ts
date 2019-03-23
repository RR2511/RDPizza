import {
  Component,
  forwardRef,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Topping } from '@RD-Pizza-Nx/data';

const PIZZA_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaToppingsComponent),
  multi: true
};

@Component({
  selector: 'rd-pizza-pizza-toppings',
  providers: [PIZZA_TOPPINGS_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements ControlValueAccessor {
  @Input() toppings: Topping[] = [];

  value: Topping[] = [];

  private onTouch: () => void;
  private onModelChange: (topping: Topping) => void;

  registerOnChange(fn: () => void) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouch = fn;
  }

  writeValue(value: Topping[]) {
    this.value = value;
  }

  selectTopping(topping: Topping) {
    if (this.existsInToppings(topping)) {
      this.value = this.value.filter(item => item.id !== topping.id);
    } else {
      this.value = [...this.value, topping];
    }
    this.onTouch();
    this.onModelChange(this.value);
  }

  existsInToppings(topping: Topping) {
    return this.value.some(val => val.id === topping.id);
  }
}
