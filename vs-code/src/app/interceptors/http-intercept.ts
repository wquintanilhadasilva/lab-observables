import { Injectable, NgModule} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

export class HttpIntercept implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('interceptado!');
        const dupReq = req.clone({ headers: req.headers.set('Consumer-Secret', 'some sample key') });
        return next.handle(dupReq);
    }
}
