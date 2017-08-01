import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPessoasComponent } from './list-pessoas.component';

describe('ListPessoasComponent', () => {
  let component: ListPessoasComponent;
  let fixture: ComponentFixture<ListPessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
