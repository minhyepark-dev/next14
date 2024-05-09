import React from 'react'

import styles from './Button.module.scss'

export default function Button({
  children,
  disabled,
  width = 'default',
  btnStyle = 'default',
  className,
}: {
  children: React.ReactNode
  disabled?: boolean
  width?: string
  btnStyle?: string
  className?: string
}) {
  return (
    <button
      type="button"
      className={`${styles[width as keyof typeof styles]} ${
        styles[btnStyle as keyof typeof styles]
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
