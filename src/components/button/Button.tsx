import React from 'react'
import styles from './Button.module.scss'

type Type = 'button' | 'submit' | 'reset'

export default function Button({
  children,
  disabled,
  width = 'default',
  btnStyle = 'line',
  className,
  onClick,
  type = 'button',
}: {
  children: React.ReactNode
  disabled?: boolean
  type?: Type
  width?: string
  btnStyle?: string
  className?: string
  onClick?: () => void
}) {
  return (
    <button
      type={type}
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
