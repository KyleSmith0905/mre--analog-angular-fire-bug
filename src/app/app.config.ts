import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideFileRouter } from '@analogjs/router';
import { FirebaseModule } from './modules/firebase.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideHttpClient(),
    // provideClientHydration(),
    importProvidersFrom(FirebaseModule),
  ],
};
