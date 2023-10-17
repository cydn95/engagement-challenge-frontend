import type { ReactNode } from 'react';

export interface FormControlWrapperProps {
  title?: string | ReactNode | ReactNode[];
  show?: boolean;
  stacked?: boolean;
  className?: string;
  showErrors?: boolean;
  error?: string;
  value: string | number | boolean;
  onChange?: (value: string) => void;
  required?: boolean;
}
