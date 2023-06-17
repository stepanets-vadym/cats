import { createSelector } from '@ngrx/store';

// * Types
import { IBaseState, IAppState } from '../types/state.types';

export const baseStateSelect = (state: IAppState) => state.base;

export const baseState = createSelector(
  baseStateSelect,
  (state: IBaseState) => state
);
export const loadingSelect = createSelector(
  baseStateSelect,
  (state: IBaseState) => state.loading
);
