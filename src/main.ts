import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// ESTO ES PARA PODER USAR ICONOS PERSONALIZADOS
import { addIcons } from 'ionicons';
// AQUI IMPORTO LOS ICONOS QUE VOY A USAR EN LOS TABS
import { homeOutline, personOutline, mailOutline, locationOutline } from 'ionicons/icons';

// AQUI REGISTRO LOS ICONOS PARA QUE LA APP LOS RECONOZCA
addIcons({
  'home-outline': homeOutline,
  'person-outline': personOutline,
  'mail-outline': mailOutline,
  'location-outline': locationOutline,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});