import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {EventEmitter, Output} from '@angular/core';

export class HttpErrorInterceptor implements HttpInterceptor {
    @Output() userstatus = new EventEmitter<boolean>();
    private status: boolean;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(0),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.status === 200) {
                           errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        if (error.status === 500) {
                            this.status = true;
                            this.userstatus.emit(this.status);
                            window.alert('Account does not exist, Please try again.');
                            errorMessage = `Error: ${error.error.message}`;
                        }
                    }
                    return throwError(errorMessage);
                })
            );
    }
}