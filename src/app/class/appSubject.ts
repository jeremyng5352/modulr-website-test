import { AppObserver } from './appObserver';

export interface AppSubject {
    observers: Array<AppObserver>;
    subscribe(AppObserver: AppObserver);
    notifyAll();
}
