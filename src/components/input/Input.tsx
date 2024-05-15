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
}

export default function Input({
  value,
  type = 'text',
  label,
  name,
  placeHolder,
  onChange,
  isError = false,
  isRequired = false,
  className,
  isButton,
  onClick,
  ...rest
}: InputProps) {
  return (
    <div className={`inputWrap ${className}`}>
      {label && (
        <label htmlFor={label} className={`content2 ${isError ? 'error' : ''}`}>
          {label}
        </label>
      )}
      <div className="inputBox">
        <input
          value={value}
          id={label}
          name={name}
          type={type}
          placeholder={placeHolder}
          onChange={onChange}
          required={isRequired}
          {...rest}
        />
        {isButton && (
          <Button
            width="small"
            btnStyle="bgBlack"
            className="bold"
            onClick={onClick}
          >
            {isButton}
          </Button>
        )}
      </div>
    </div>
  )
}
