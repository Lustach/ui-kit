import styled, { css } from 'styled-components'
import { theme } from '@/theme.styled';
type Props = {
    $buttonType: 'primary' | 'outlined' | 'text' | 'link'; // Add $buttonType prop
    disabled?: boolean;
    className?: string
}
export const Button = styled.button<Props>`
    color: '#ffffff';
    &:disabled{
        background: lightgray;
        cursor: not-allowed;
        color: gray;
        border: 2px solid gray;
    }
    &:hover{
        background: ${theme.backgroundColorActive};
    }
 ${(props) => {
        switch (props.$buttonType) {
            case 'primary':
                return css`
                background-color: ${theme.secondaryColor};
                `
            case 'outlined':
                return css`
                border: 2px solid ${theme.secondaryColor};
                background-color: transparent;
                color: ${theme.secondaryColor};
                `
            case 'text':
                return css`
                background-color: transparent;
                color: ${theme.secondaryColor};
                `
            case 'link':
                return css`
                background-color: ${theme.secondaryColor};
                `
            default:
                return css`
                background-color: ${theme.secondaryColor};
                `
        }
    }}
`