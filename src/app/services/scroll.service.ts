import { Injectable } from '@angular/core';
import { AppSubject } from '../class/appSubject';
import { AppObserver } from '../class/appObserver';

@Injectable()
export class ScrollService implements AppSubject {
  observers: AppObserver[];
  private _scrollPosition: number;

  subscribe(observer: AppObserver) {
    this.observers.push(observer);
  }

  notifyAll() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }

  constructor() {
    this.observers = [];
  }

  public get scrollPosition(): number {
    return this._scrollPosition;
  }

  public set scrollPosition(scrollPosition: number) {
    this._scrollPosition = scrollPosition;
    this.notifyAll();
  }
}
