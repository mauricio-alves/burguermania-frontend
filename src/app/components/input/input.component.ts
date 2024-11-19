import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { OrderInterface } from '../../interfaces/order-interface';
import { HotToastService } from '@ngxpert/hot-toast';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { BurgersService } from '../../services/burgers.service';

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
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  private toast: HotToastService = inject(HotToastService);
  burgerForm: FormGroup;
  formValues: OrderInterface;
  burgersService: BurgersService = inject(BurgersService);

  constructor(private formBuilder: FormBuilder) {
    // Inicializa o formulário
    this.formValues = {} as OrderInterface;

    // Cria e valida o formulário
    this.burgerForm = this.formBuilder.group({
      burger1: this.formBuilder.group({
        name: ['', Validators.required],
        quantity: [
          '',
          [Validators.min(1), Validators.max(99), Validators.required],
        ],
      }),
      burger2: this.formBuilder.group({
        name: ['', Validators.required],
        quantity: [
          '',
          [Validators.min(1), Validators.max(99), Validators.required],
        ],
      }),
      observation: ['', Validators.required],
    });
  }

  // Função para criar um novo pedido, exibir um toast de sucesso ou erro e limpar o formulário
  createOrder(): void {
    const randomId = Math.floor(Math.random() * 1000).toString();

    if (this.burgerForm.valid) {
      this.formValues = {
        id: randomId,
        ...this.burgerForm.value,
      };
      this.burgersService.createOrder(this.formValues);
      this.toast.success('Pedido criado com sucesso');
      this.formValues = {} as OrderInterface;
      this.burgerForm.reset();
    } else {
      this.toast.error('Formulário inválido');
      this.burgerForm.reset();
    }
  }
}
