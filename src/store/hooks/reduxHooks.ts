import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import type { TAppDispatch, TRootState } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTypedDispatch: () => TAppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
