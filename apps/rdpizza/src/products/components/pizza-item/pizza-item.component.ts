import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rd-pizza-pizza-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent {
  @Input() pizza: any;
}
