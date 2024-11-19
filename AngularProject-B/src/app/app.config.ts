import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [HttpClient,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
