import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { ContactmeComponent } from "../other-links/contactme/contactme.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanDeactivate<ContactmeComponent>{
    canDeactivate(
      component: ContactmeComponent, 
      currentRoute: ActivatedRouteSnapshot, 
      currentState: RouterStateSnapshot,
      nextState: RouterStateSnapshot) {
        return component.canExit();
    }
}