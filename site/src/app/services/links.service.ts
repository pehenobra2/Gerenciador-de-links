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
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  loadById(id: string){
    return this.HttpClient.get<Links>(`${this.api}/${id}`);
  }

  private create(record:Partial<Links>){
    return this.HttpClient.post<Links>(this.api , record)
  }

  private update(record: Partial<Links>){
    return this.HttpClient.put<Links>(`${this.api}/${record.id}`, record)
  }

  delete(id: string){
    return this.HttpClient.delete(`${this.api}/${id}`)
  }
}
