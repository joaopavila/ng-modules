import { Injectable } from '@angular/core';
import { NativeCommunicationMock } from './native-communication.mock';

@Injectable()
export class NativeCommunicationService {

  constructor() { }

  setData(key: string, value) {
    NativeCommunicationMock[key] = value;
  }

  getData(key: string) {
    return NativeCommunicationMock[key];
  }

}
