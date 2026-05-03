import { Component } from '@angular/core';
// IMPORTO LOS COMPONENTES VISUALES DE IONIC QUE AGREGUÉ PARA ESTA PÁGINA
import { IonContent, IonImg, IonText, IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  // REGISTRO AQUÍ LOS COMPONENTES NUEVOS PARA PODER USARLOS EN EL HTML
  imports: [IonContent, IonImg, IonText, IonCard, IonCardContent, IonIcon]
})
export class Tab2Page {

  constructor() { }

}