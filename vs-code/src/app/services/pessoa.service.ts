import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PessoaService implements OnInit {
  /*
  peopleList = [
    {nome: 'Pessoa 1', sobreNome: 'sobreNome Pessoa 1'},
    {nome: 'Pessoa 2', sobreNome: 'sobreNome Pessoa 2'},
    {nome: 'Pessoa 3', sobreNome: 'sobreNome Pessoa 3'},
    {nome: 'Pessoa 4', sobreNome: 'sobreNome Pessoa 4'},
    {nome: 'Pessoa 5', sobreNome: 'sobreNome Pessoa 5'},
    {nome: 'Pessoa 6', sobreNome: 'sobreNome Pessoa 6'},
    {nome: 'Pessoa 7', sobreNome: 'sobreNome Pessoa 7'},
    {nome: 'Pessoa 8', sobreNome: 'sobreNome Pessoa 8'},
    {nome: 'Pessoa 9', sobreNome: 'sobreNome Pessoa 9'},
    {nome: 'Pessoa 10', sobreNome: 'sobreNome Pessoa 10'},
    {nome: 'Pessoa 11', sobreNome: 'sobreNome Pessoa 11'}
  ];
  */

  ngOnInit() {

  }

  constructor(private http: Http) { }

  getPessoas(): Observable<IPessoa[]> {
    return this.http.get('http://localhost:63898/api/values')
                    .map( dados => dados.json() || [] )
                    .catch( erro => { throw new Error(erro.message) });
  }

  getPessoasComFiltro(filtro: string): Observable<IPessoa[]> {
    return this.http.get(`http://localhost:63898/api/values/${filtro}`)
                    .map( dados => dados.json() || [] )
                    .catch( erro => { throw new Error(erro.message) });
  }

}
