import { Component, OnInit } from '@angular/core';
import { NativeCommunicationService } from '../core/native-communication/native-communication.service';

@Component({
  selector: 'app-extrato-poupanca',
  templateUrl: './extrato-poupanca.component.html',
  styleUrls: ['./extrato-poupanca.component.css']
})
export class ExtratoPoupancaComponent implements OnInit {

  hello;

  constructor(private native: NativeCommunicationService) { }

  ngOnInit() {
    this.hello = this.native.getData('hello');
  }

}
