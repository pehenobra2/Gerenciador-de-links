import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  save(record:Partial<Links>, token: string){
    if(record.id){
      return this.update(record, token);
    }
    return this.create(record, token);
  }

  loadById(id: string){
    return this.HttpClient.get<Links>(`${this.api}/${id}`);
  }

  private create(record:Partial<Links>, token: string){

    const headers = new HttpHeaders({

      'Authorization': `Bearer ${token}`
    })
    return this.HttpClient.post<Links>(this.api , record, {headers: headers});
  }

  private update(record: Partial<Links>, token: string) {
    // Cria o cabeçalho da solicitação HTTP com o token JWT
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Envia a solicitação PUT para o endpoint /api/links/:id com o cabeçalho de autorização
    return this.HttpClient.put<Links>(`${this.api}/${record.id}`, record, { headers: headers });
  }

  delete(id: string){
    return this.HttpClient.delete(`${this.api}/${id}`)
  }
}
