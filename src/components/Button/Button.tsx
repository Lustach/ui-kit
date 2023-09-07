import { PropsWithChildren } from 'react'
import * as S from "./Button.styled"
type Props = {
    buttonType: 'primary' | 'outlined' | 'text' | 'link'
    disabled?: boolean
    onClick?: () => void;
}
export const Button: React.FC<PropsWithChildren<Props>> = ({ buttonType, disabled, onClick, children }) => {
    return (
        <S.Button $buttonType={buttonType} disabled={disabled} onClick={onClick}>{children}</S.Button>
    )
}
