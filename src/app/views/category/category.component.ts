import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BurgersService } from '../../services/burgers.service';
import { CommonModule } from '@angular/common';
import { BurgerInterface } from '../../interfaces/burger-interface';
import { CategoryInterface } from '../../interfaces/category-interface';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CardComponent, ButtonComponent, CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  burgers: BurgerInterface[] = [];
  displayedBurgers: BurgerInterface[] = [];
  remainingBurgers: BurgerInterface[] = [];
  category: CategoryInterface | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  burgersService: BurgersService = inject(BurgersService);
  showAll = false;

  // Função para exibir todas as categorias
  showFullMenu() {
    this.showAll = true;
  }

  // Voltar a exibir apenas as 3 primeiras categorias
  showLess() {
    this.showAll = false;
  }

  constructor() {
    // Obtém o id da categoria da URL
    const id = Number(this.route.snapshot.params['id']);

    // Obtém os hamburgueres da categoria
    this.burgersService.getBurgers(id).then((burgers) => {
      this.burgers = burgers;
      // Atualizar as categorias exibidas e restantes
      this.displayedBurgers = this.burgers.slice(0, 3);
      this.remainingBurgers = this.burgers.slice(3);
    });

    // Obtém os detalhes da categoria
    this.burgersService.getCategory(id).then((category) => {
      this.category = category;
    });
  }
}
