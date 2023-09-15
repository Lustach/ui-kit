import { PropsWithChildren, useState } from 'react'
import * as S from './Input.styled'
export type Props = {
  inputType: 'outlined' | 'filled'
  placeholder?: string
  label?: string
  disabled?: boolean
  onClick?: () => void
}
export const Input: React.FC<PropsWithChildren<Props>> = ({ inputType, placeholder, label, disabled, onClick, children }) => {
  const [value, setValue] = useState('')
  return (
    <S.Container $placeholder={!!placeholder} $propValue={value}>
      <S.Label htmlFor="input-ui">{label}</S.Label>
      <S.Input
        required
        type="text"
        id="input-ui"
        $inputType={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </S.Input>
    </S.Container>
  )
}
