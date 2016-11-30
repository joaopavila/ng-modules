/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NativeCommunicationService } from './native-communication.service';
import { NativeCommunicationMock } from './native-communication.mock';

let subject: NativeCommunicationService;

describe('NativeCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativeCommunicationService]
    });

    subject = TestBed.get(NativeCommunicationService);
  });

  it('should use the mock to get data', () => {
    const data = NativeCommunicationMock['test'] = 'myData';
    expect(subject.getData('test')).toBe(data);
  });

  it('should use the mock to set data', () => {
    const data = (new Date).toString();
    subject.setData('test', data);
    expect(NativeCommunicationMock['test']).toBe(data);
  });

});
