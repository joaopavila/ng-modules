import { Injectable } from '@angular/core';
import { NativeCommunicationMock } from './native-communication.mock';

@Injectable()
export class NativeCommunicationService {

  constructor() { }

  setData(key, value) {
    console.log('setData', key, value);
    NativeCommunicationMock[key] = value;
  }

  getData(key) {
    console.log('getData', key);
    return NativeCommunicationMock[key];
  }

}
