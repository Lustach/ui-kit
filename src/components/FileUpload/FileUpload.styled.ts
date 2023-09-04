import styled, { css } from 'styled-components'


export const FileUpload = styled.button < { $buttonType: 'primary' | 'outlined' | 'text' | 'link';} > `
 ${(props) => {
        switch (props.$buttonType) {
            case 'primary':
                return css`
                background-color: #007bff;
                color: white;
                `
            case 'outlined':
                return css`
                border: 2px solid #007bff;
                background-color: transparent;
                color: #007bff;
                `
            case 'text':
                return css`
                background-color: transparent;
                color: #007bff;
                `
            case 'link':
                return css`
                background-color: #007bff;
                color: white;
                `
            default:
                return css`
                background-color: #007bff;
                color: white;
                `
        }
    }}
`