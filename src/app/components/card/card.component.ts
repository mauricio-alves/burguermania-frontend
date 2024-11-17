import { Component, Input } from '@angular/core';
import { CategoryInterface } from '../../interfaces/category-interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() categoryData!: CategoryInterface;
}
