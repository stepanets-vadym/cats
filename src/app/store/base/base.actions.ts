// * Base
import { createAction, props } from '@ngrx/store';

// * Constants
// Base
const BASE = '[Base state]';
// Clear state
export const CLEAR_STATE = `${BASE} Clear state`;
export const TOGGLE_LOADING = `${BASE} Toggle loading`;

// * Actions
// Clear state
export const clearState = createAction(CLEAR_STATE);
// Loading
export const toggleLoading = createAction(
  TOGGLE_LOADING,
  props<{ payload: boolean }>()
);
