import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpInterceptorService } from '@core/services';

export const CORE_MAT_IMPORTS = [MatSnackBarModule];

export const CORE_IMPORTS = [HttpClientModule, CORE_MAT_IMPORTS];

export const CORE_COMPONENTS = [];

export const CORE_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true,
  },
];
