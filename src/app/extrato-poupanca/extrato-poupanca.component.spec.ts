/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExtratoPoupancaComponent } from './extrato-poupanca.component';
import { ExtratoPoupancaModule } from './extrato-poupanca.module';
import { CoreModule } from '../core/core.module';

describe('ExtratoPoupancaComponent', () => {
  let component: ExtratoPoupancaComponent;
  let fixture: ComponentFixture<ExtratoPoupancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        ExtratoPoupancaModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoPoupancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should print extrato poupanca itens given from native comunnication', () => {
    const extrato = fixture.debugElement.queryAll(By.css('ul li'));
    expect(extrato.length).toBe(3);
    expect(extrato.shift().nativeElement.textContent.trim()).toBe('item 1 - 111');
  });

});
