// * Base
import LocalStorageService from '../../services/localstorage.service';
import * as BaseActions from './base.actions';

// * NGRX
import { createReducer, on } from '@ngrx/store';

// * Types
import { IBaseState } from '../../types/state.types';

const localStorageService = new LocalStorageService();

const reducerUniqueKey = 'Cats: Base state';

const initialState: IBaseState = {
  loading: false,
};

const getInitialState = (key: string, initialBaseState: IBaseState) => {
  const state: IBaseState = localStorageService.get(key);
  return state
    ? {
        ...state,
      }
    : initialBaseState;
};

export const baseReducer = createReducer(
  getInitialState(reducerUniqueKey, initialState),
  on(BaseActions.clearState, (state) =>
    localStorageService.sync(reducerUniqueKey, {
      ...state,
    })
  ),

  on(BaseActions.toggleLoading, (state, { payload }) =>
    localStorageService.sync(reducerUniqueKey, {
      ...state,
      loading: payload,
    })
  )
);
