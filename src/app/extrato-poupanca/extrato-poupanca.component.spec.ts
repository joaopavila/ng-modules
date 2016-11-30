/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExtratoPoupancaComponent } from './extrato-poupanca.component';
import { CoreModule } from '../core/core.module';

describe('ExtratoPoupancaComponent', () => {
  let component: ExtratoPoupancaComponent;
  let fixture: ComponentFixture<ExtratoPoupancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
      ],
      declarations: [ ExtratoPoupancaComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoPoupancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
