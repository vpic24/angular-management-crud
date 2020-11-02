import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BaseUrl = 'http://localhost:3000/users';

  // dependency Injection
  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get(`${this.BaseUrl}`);
  }

  public getById(id: number) {
    return this.httpClient.get(`${this.BaseUrl}/${id}`);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.BaseUrl}/${id}`);
  }

  public create(product: User) {
    return this.httpClient.post(`${this.BaseUrl}`, product);
  }

  public update(product: User, id: number) {
    return this.httpClient.put(`${this.BaseUrl}/${id}`, product);
  }
 
}
