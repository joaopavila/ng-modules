import { Component, OnInit } from '@angular/core';
import { NativeCommunicationService } from '../core/native-communication/native-communication.service';

@Component({
  selector: 'app-extrato-polpanca',
  templateUrl: './extrato-polpanca.component.html',
  styleUrls: ['./extrato-polpanca.component.css']
})
export class ExtratoPolpancaComponent implements OnInit {

  hello;

  constructor(private native: NativeCommunicationService) { }

  ngOnInit() {
    this.hello = this.native.getData('hello');
  }

}
