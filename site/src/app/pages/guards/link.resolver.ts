import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { LinksService } from '../../services/links.service';
import { Observable, of } from 'rxjs';
import { Links } from '../home/model/links';

@Injectable({
  providedIn: 'root'
})
export class LinkResolver{
  constructor(private service: LinksService){}

  resolve(route:ActivatedRouteSnapshot, state : RouterStateSnapshot): Observable<Links>{
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    return of({id: "", titulo:'', url:'', sufixo:'', dataCriada:''});
  }

  

}