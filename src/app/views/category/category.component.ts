import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BurgersService } from '../../services/burgers.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BurgerInterface } from '../../interfaces/burger-interface';
import { CategoryInterface } from '../../interfaces/category-interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CardComponent, ButtonComponent, CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  burgers: BurgerInterface[] = [];
  category: CategoryInterface | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  burgersService: BurgersService = inject(BurgersService);

  constructor() {
    // Obtém o id da categoria da URL
    const id = Number(this.route.snapshot.params['id']);

    // Obtém os hamburgueres da categoria
    this.burgersService.getBurgers(id).then((burgers) => {
      this.burgers = burgers;
    });

    // Obtém os detalhes da categoria
    this.burgersService.getCategory(id).then((category) => {
      this.category = category;
    });
  }
}
