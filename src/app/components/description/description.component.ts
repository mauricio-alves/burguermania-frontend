import { Component, Input } from '@angular/core';
import { BurgerInterface } from '../../interfaces/burger-interface';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent {
  @Input() burgerData?: BurgerInterface;
}
