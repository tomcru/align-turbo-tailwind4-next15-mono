import { atom } from 'jotai';
import type { JSX } from 'react';

export const modalAtom = atom<JSX.Element | null>(null);
export const toastAtom = atom<JSX.Element | null>(null);
