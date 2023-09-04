import './index.css'
import { PropsWithChildren } from 'react'
import * as S from "./Button.styled"
type Props = {
    type: 'primary' | 'outlined' | 'text' | 'link'
    disabled?: boolean
    rounded?: boolean
}
export const Button: React.FC<PropsWithChildren<Props>> = ({ type, disabled }) => {
    return (
        <S.Button $buttonType={type} disabled={disabled} >text 12</S.Button>
    )
}
