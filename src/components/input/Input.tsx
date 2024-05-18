import { forwardRef } from 'react'
import Button from '@/components/button/Button'

type Type = 'text' | 'number' | 'tel' | 'password' | 'email' | 'search'
type InputValue = string | number

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: InputValue
  type?: Type
  label?: string
  name?: string
  placeHolder?: string
  isError?: boolean
  isRequired?: boolean
  className?: string
  isButton?: string
  onClick?: () => void
  bottomText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      type = 'text',
      label,
      name,
      placeHolder,
      isError = false,
      isRequired = false,
      className,
      isButton,
      onClick,
      bottomText,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={`inputWrap ${className}`}>
        {label && (
          <label htmlFor={label} className="content2">
            {label}
          </label>
        )}
        <div className="inputBox flexColumn">
          <div className="inputBox">
            <input
              ref={ref}
              value={value}
              id={label}
              name={name}
              type={type}
              placeholder={placeHolder}
              required={isRequired}
              {...rest}
            />
            {isButton && (
              <Button
                width="small"
                btnStyle="bgBlack"
                className="bold"
                onClick={onClick}
                disabled={isError}
              >
                {isButton}
              </Button>
            )}
          </div>
          {bottomText && (
            <p className={`${isError ? 'error' : ''} content3 bottomText`}>
              {bottomText}
            </p>
          )}
        </div>
      </div>
    )
  },
)

export default Input
