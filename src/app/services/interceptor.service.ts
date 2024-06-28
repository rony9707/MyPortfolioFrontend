import {HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class InterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
      // console.log('Interceptor Called!')
      // console.log(req)
      return next.handle(req)
  }
}