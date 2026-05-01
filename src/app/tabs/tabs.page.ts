import { Component, EnvironmentInjector, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterLink, RouterLinkActive],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() { }
}
