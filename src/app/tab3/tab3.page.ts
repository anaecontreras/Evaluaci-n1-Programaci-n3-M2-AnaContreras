import { Component, inject } from '@angular/core'; // AGREGUÉ INJECT PARA USARLO DIRECTAMENTE AQUÍ
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'; // IMPORTO LO DEL FORMULARIO CON VALIDACIONES
import { ToastController } from '@ionic/angular/standalone'; // IMPORTO LOS MENSAJITOS EMERGENTES
import {
  IonContent, IonText, IonCard, IonCardContent,
  IonItem, IonInput, IonTextarea, IonButton, IonToast
} from '@ionic/angular/standalone'; // IMPORTO LOS COMPONENTES VISUALES NUEVOS

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule, // NECESARIO PARA QUE FUNCIONEN LOS FORMULARIOS REACTIVOS
    IonContent, IonText, IonCard, IonCardContent,
    IonItem, IonInput, IonTextarea, IonButton, IonToast // COMPONENTES QUE AGREGUÉ A ESTA PÁGINA
  ]
})
export class Tab3Page {
  private fb = inject(FormBuilder); // HERRAMIENTA PARA CREAR EL FORMULARIO
  private toastController = inject(ToastController); // HERRAMIENTA PARA MOSTRAR TOASTS

  // ARMO EL FORMULARIO DE CONTACTO CON SUS REGLAS
  contactForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]]
  });

  // MUESTRO EL MENSAJE DE QUE SE ENVIÓ TODO BIEN
  async showSuccessToast(correo: string) {
    const toast = await this.toastController.create({
      message: `Mensaje enviado a: ${correo}`,
      duration: 4000,
      position: 'bottom',
      color: 'success',
      icon: 'checkmark-circle',
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
    // REVISO SI HAY ERRORES Y LOS MUESTRO
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // SACO LO QUE ESCRIBIÓ EL USUARIO
    const { nombre, correo, mensaje } = this.contactForm.value;

    // MUESTRO EL MENSAJE DE CONFIRMACIÓN
    await this.showSuccessToast(correo!);

    // LIMPIO EL FORMULARIO PARA DEJARLO VACÍO
    this.contactForm.reset();
  }

  // ME DICE SI UN CAMPO TIENE UN ERROR ESPECÍFICO
  hasError(field: string, errorType: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control?.invalid && (control?.dirty || control?.touched) && control?.hasError(errorType));
  }
}