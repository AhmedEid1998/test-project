import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, provideStates } from '@ngxs/store';

import { } from '@ngxs/store';
import { CounterState } from './state/counter.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore([],),
    provideStates([CounterState])
  ]
};
