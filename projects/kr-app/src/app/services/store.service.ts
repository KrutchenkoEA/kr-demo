import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, skip } from 'rxjs/operators';

type PlatformStore = {[key: string]: unknown}

export interface IStoreService {
    setState: <T>(key: string, value: T) => void;
    updateState: (key: string) => void;
    getState$: <T>(key: string) => Observable<T>;
    getStoreState$: <T>(key: string) => StoreObservable<T>;
    getCurrent: <T>(key: string) => T | undefined;
}

// tslint:disable-next-line:interface-name
export interface StoreObservable<T> extends Observable<T> {
    getValue?: () => T | undefined;
}

@Injectable()
export class StoreService implements IStoreService {
    private readonly store$: BehaviorSubject<PlatformStore>;
    private get storeSnapshot(): PlatformStore {
        return this.store$.getValue();
    }

    constructor() {
        this.store$ = new BehaviorSubject<PlatformStore>({ });
    }

    /**
     * @description To update stream with value
     * @param key key of updated field
     * @param value new value by key
     */
    public setState<T>(key: string, value: T): void {
        const store = this.storeSnapshot;
        store[key] = value;
        this.store$.next({...store});
    }

    /**
     * @description To update stream with empty value (example: subject$.next())
     * @param key key of updated field
     */
    public updateState(key: string): void {
        const store = this.storeSnapshot;
        if (typeof store[key] === 'number') {
            (store[key] as number) += 1;
        } else if (!store[key]) {
            (store[key] as number) = 1;
        } else {
            throw Error('STORE ERROR: update state')
        }
    }

    /**
     * @description To get stream with initial (or not) value
     * @param key key of get field
     * @param isInitial optional, if need behavior as subject set false
     */
    public getState$<T>(key: string, isInitial: boolean = true): Observable<T> {
        return this.store$.pipe(
            skip(isInitial ? 0 : 1),
            filter(x => x.hasOwnProperty(key)),
            map(x => x[key] as T),
            distinctUntilChanged(),
        );
    }

    /**
     * @description To get stream with "get value" (as BehaviourSubject)
     * @param key key of get field
     */
    public getStoreState$<T>(key: string): StoreObservable<T> {
        const stream: StoreObservable<T> = this.getState$(key);
        stream.getValue = () => this.getCurrent(key);
        return stream;
    }

    /**
     * @description To get current value from store (return undefined if key is not existed)
     * @param key key of get field
     */
    public getCurrent<T>(key: string): T | undefined {
        return this.storeSnapshot[key] as T;
    }
}
