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
  ...rest
}: InputProps) {
  return (
    <div className={`inputWrap ${className}`}>
      {label && (
        <label htmlFor={label} className={`content2 ${isError ? 'error' : ''}`}>
          {label}
        </label>
      )}
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
    </div>
  )
}
