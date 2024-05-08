import React from 'react';

import styles from './Button.module.scss';

export default function Button({
  children,
  disabled,
  width = 'default',
  style = 'default',
  className,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  width?: string;
  style?: string;
  className?: string;
}) {
  return (
    <button
      className={`${styles[width as keyof typeof styles]} ${
        styles[style as keyof typeof styles]
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
