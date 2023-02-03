import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunService {
  public markAsCompletedSubject = new BehaviorSubject(false);
  constructor() { }
  EditMarkAsCompleted(){
    this.markAsCompletedSubject.next(true)
  }
}
