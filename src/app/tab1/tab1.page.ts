import { Component } from '@angular/core';
// IMPORTS NUEVOS QUE AGREGUÉ PARA ESTA PÁGINA
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonButtons, IonImg, IonText, IonModal, IonList, IonItem, IonThumbnail, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // COMPONENTES NUEVOS AGREGADOS AQUÍ
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonButtons, IonImg, IonText, IonModal, IonList, IonItem, IonThumbnail, IonLabel],
})
export class Tab1Page {
  // VARIABLE PARA SABER SI EL MODAL ESTÁ ABIERTO
  isModalOpen = false;

  // FUNCIÓN PARA ABRIR O CERRAR EL MODAL
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor() { }
}