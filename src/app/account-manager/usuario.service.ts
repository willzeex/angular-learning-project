import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { MEAT_API } from 'app/app.api';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Usuario[]>(`${MEAT_API}/usuarios`);
  }
}
