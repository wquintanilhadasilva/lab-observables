import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PessoaService } from './../services/pessoa.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-list-pessoas',
  templateUrl: './list-pessoas.component.html',
  styleUrls: ['./list-pessoas.component.css']
})
export class ListPessoasComponent implements OnInit {

  pessoas: IPessoa[];
  filtro = '';

  pessoasObservable: Observable<IPessoa[]>;
  listaPessoasObservable: IPessoa[];
  private filterString: Subject<string> = new Subject<string>();

  showErro = false;
  msgErro = '';

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoasObservable = this.filterString.debounceTime(300).switchMap(v => this.pessoaService.getPessoasComFiltro(this.filtro));
    // quando houver alteração no obsevable, chama a arrow function e passa o novo valor do array
    this.pessoasObservable.forEach(listaAtualizada  => this.listaPessoasObservable = listaAtualizada);
  }

  handleFilterChange(filtro: string) {
    this.filterString.next(filtro);
  }

  getPessoas() {
    if (this.filtro === '') {
      this.carregaTudo();
    }else {
      this.carregaComFiltro(this.filtro);
    }
  }

  carregaTudo() {
    this.pessoaService.getPessoas().subscribe(
      p => this.pessoas = p,
      error => {
        this.showErro = true;
        this.msgErro = error;
      }
    );
  }

  carregaComFiltro(filtro: string) {
    this.pessoaService.getPessoasComFiltro(filtro).subscribe(
      p => this.pessoas = p,
      error => {
        this.showErro = true;
        this.msgErro = error;
      }
    );
  }

}
