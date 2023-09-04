import styled, { css } from 'styled-components'
import { theme } from '@/theme.styled';

export const Button = styled.button < { $buttonType: 'primary' | 'outlined' | 'text' | 'link'; disabled?: boolean } > `
    color: '#ffffff';
    &:disabled{
        background: lightgray;
        cursor: not-allowed;
        color: gray;
        border: 2px solid gray;
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