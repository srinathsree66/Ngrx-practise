import { ActionTypes } from './actionTypes';
import { createAction, props } from '@ngrx/store';
export const registerAction = createAction(
  //   '[Register Page] Register',
  ActionTypes.REGISTER,
  props<{ username: string; password: string; email: string }>()
);
