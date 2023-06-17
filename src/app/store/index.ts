import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { baseReducer } from './base/base.reducer';
import { IAppState } from '../types/state.types';

export const reducers: ActionReducerMap<IAppState> = {
  base: baseReducer,
};

export const metaReducers: MetaReducer<any, any>[] = [];
