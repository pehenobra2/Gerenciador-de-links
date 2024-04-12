import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Links } from '../pages/home/model/links';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private readonly api = "api/links"


  constructor(
    private HttpClient: HttpClient
  ) { }

  list(){
    return this.HttpClient.get<Links[]>(this.api);
  }


  save(record:Partial<Links>){
    return this.HttpClient.post<Links>(this.api , record)
  }
}
