import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular/standalone';
import {
  IonContent, IonText, IonCard, IonCardContent,
  IonItem, IonInput, IonTextarea, IonButton, IonToast
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IonContent, IonText, IonCard, IonCardContent,
    IonItem, IonInput, IonTextarea, IonButton, IonToast
  ]
})
export class Tab3Page {
  private fb = inject(FormBuilder);
  private toastController = inject(ToastController);

  // Defino el formulario con validadores
  contactForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]]
  });

  // Método para mostrar el toast de confirmación
  async showSuccessToast(correo: string) {
    const toast = await this.toastController.create({
      message: `Mensaje enviado a: ${correo}`,
      duration: 4000, // 4 segundos
      position: 'bottom', // 'top', 'middle' o 'bottom'
      color: 'success', // 'primary', 'danger', etc.
      icon: 'checkmark-circle', // Icono opcional
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }

  async onSubmit() {
    // Marcar todos los campos como "touched" para mostrar errores si están vacíos
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // ✅ Obtener datos del formulario
    const { nombre, correo, mensaje } = this.contactForm.value;

    // 🎯 Mostrar toast de confirmación con el correo ingresado
    await this.showSuccessToast(correo!);

    // Opcional: resetear formulario después de enviar
    this.contactForm.reset();
  }

  // Helper para verificar errores (limpia el template)
  hasError(field: string, errorType: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control?.invalid && (control?.dirty || control?.touched) && control?.hasError(errorType));
  }
}