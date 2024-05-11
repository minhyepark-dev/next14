type Type = 'text' | 'number' | 'tel' | 'password' | 'email' | 'search'
type InputValue = string | number

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: InputValue
  type?: Type
  label?: string
  name?: string
  placeHolder?: string
  isError?: boolean
}

export default function Input({
  value,
  type = 'text',
  label,
  name,
  placeHolder,
  onChange,
  isError = false,
  ...rest
}: InputProps) {
  return (
    <div className="inputWrap">
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
        required
        {...rest}
      />
    </div>
  )
}
