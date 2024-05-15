import React from 'react'

import styles from './Button.module.scss'

export default function Button({
  children,
  disabled,
  width = 'default',
  btnStyle = 'default',
  className,
  onClick,
}: {
  children: React.ReactNode
  disabled?: boolean
  width?: string
  btnStyle?: string
  className?: string
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      className={`${styles[width as keyof typeof styles]} ${
        styles[btnStyle as keyof typeof styles]
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
