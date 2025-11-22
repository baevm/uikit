import {
  BadgePropForm,
  BadgePropSize,
  BadgePropStatus,
  BadgePropView,
} from '../types';

export const badgePropSize: BadgePropSize[] = ['xs', 's', 'm', 'l'] as const;

export const badgePropView: BadgePropView[] = [
  'filled',
  'stroked',
  'tinted',
] as const;

export const badgePropStatus: BadgePropStatus[] = [
  'normal',
  'success',
  'warning',
  'alert',
  'system',
  'disabled',
] as const;

export const badgePropForm: BadgePropForm[] = ['default', 'round'] as const;
