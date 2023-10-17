import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

interface SectionContainerProps {
  fullWidth?: boolean;
  className?: string;
}

export const SectionContainer = ({ fullWidth, className, children }: PropsWithChildren<SectionContainerProps>) => (
  <div
    className={classNames('w-full max-w-[1440px] mx-auto px-8 py-12', className, {
      'max-w-full': fullWidth,
    })}
  >
    {children}
  </div>
);
