import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpIntercept } from '../interceptors/http-intercept';

@NgModule({
 providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercept, multi: true }
 ]
})
export class InterceptorModule { }
