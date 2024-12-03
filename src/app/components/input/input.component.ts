import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HotToastService } from '@ngxpert/hot-toast';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { ApiService } from '../../services/api.service';
import { BurgerInterface } from '../../interfaces/burger-interface';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonComponent,
    MatSelectModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  private toast: HotToastService = inject(HotToastService);
  burgerForm: FormGroup;
  burgers: BurgerInterface[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    // Inicializa e valida o formulário
    this.burgerForm = this.formBuilder.group({
      product1: this.formBuilder.group({
        productId: [null, Validators.required],
        quantity: [1, [Validators.required, Validators.min(1)]],
      }),
      product2: this.formBuilder.group({
        productId: [null, Validators.required],
        quantity: [1, [Validators.required, Validators.min(1)]],
      }),
      observation: ['', Validators.required],
      value: [{ value: 0, disabled: true }],
    });

    // Retorna todos os produtos
    this.apiService.getProducts().subscribe((burgers) => {
      this.burgers = burgers;
      this.setupValueCalculation();
    });
  }

  // Configura o cálculo automático do valor total
  setupValueCalculation(): void {
    this.burgerForm.valueChanges.subscribe(() => {
      const formValue = this.burgerForm.value;

      // Obtém os preços dos produtos selecionados
      const product1 = this.burgers.find(
        (burger) => burger.id === formValue.product1?.productId
      );
      const product2 = this.burgers.find(
        (burger) => burger.id === formValue.product2?.productId
      );

      // Calcula o valor total
      const totalValue =
        (product1?.price || 0) * (formValue.product1?.quantity || 0) +
        (product2?.price || 0) * (formValue.product2?.quantity || 0);

      // Formata o valor para exibição com 2 casas decimais
      const formattedValue = Number(totalValue.toFixed(2));

      // Atualiza o campo `value` no formulário
      this.burgerForm.patchValue(
        { value: formattedValue },
        { emitEvent: false }
      );
    });
  }

  // Função para criar um novo pedido, exibir um toast de sucesso ou erro e limpar o formulário
  async submitOrder(): Promise<void> {
    if (this.burgerForm.valid) {
      const formValue = this.burgerForm.getRawValue(); // Inclui valores desabilitados
      const order = {
        statusId: 1, // Mockado (1 = Pedido pendente)
        userOrders: [{ userId: 1 }], // Mockado (1 = Usuário logado)
        productOrders: [formValue.product1, formValue.product2],
        observation: formValue.observation,
        value: formValue.value,
      };
      try {
        await this.apiService.createOrder(order);
        this.toast.success('Pedido criado com sucesso');
        this.burgerForm.reset();
      } catch (error) {
        this.toast.error('Erro ao criar pedido');
        console.error('Erro ao criar pedido', error);
      }
    } else {
      this.toast.error('Formulário inválido');
    }
  }
}
