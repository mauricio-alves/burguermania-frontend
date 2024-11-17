import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CategoryInterface } from '../../interfaces/category-interface';
import { BurgersService } from '../../services/burgers.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CardComponent, ButtonComponent, CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  categories: CategoryInterface[] = [];
  burgersService: BurgersService = inject(BurgersService);

  constructor() {
    this.burgersService.getCategories().then((categories) => {
      this.categories = categories;
    });
  }
}
