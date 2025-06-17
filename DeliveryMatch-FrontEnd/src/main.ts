import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { jwtInterceptor } from './app/core/interceptors/jwt-interceptor'; 

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideHttpClient(
      withInterceptors([jwtInterceptor])
    )
  ]
}).catch((err) => console.error(err));
