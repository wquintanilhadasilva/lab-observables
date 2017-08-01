import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ListPessoasComponent } from './list-pessoas/list-pessoas.component';
import { PessoaService } from './services/pessoa.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPessoasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
