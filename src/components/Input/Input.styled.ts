import styled, { css } from 'styled-components'
import { theme } from '@/theme.styled'
export type Props = {
  $inputType: 'outlined' | 'filled'
  placeholder?: string
  label?: string
  disabled?: boolean
  id: 'input-ui'
}
export type ContainerProps = {
  $placeholder: boolean
  $propValue: string
}
export const Input = styled.input<Props>`
  position: relative;
  color: ${theme.secondaryColor};
  height: 40px;
  width: 320px;
  border-radius: 8px;
  outline: none;
  font-size: ${theme.h5};
  padding: 4px 8px;
  &:disabled {
    background: lightgray;
    cursor: not-allowed;
    color: gray;
    border: 2px solid gray;
  }
  &:hover {
    /* background: ${theme.backgroundColorFocus}; */
  }
  &::placeholder {
    color: ${theme.secondaryColor};
  }

  ${(props) => {
    console.log(props)
    switch (props.$inputType) {
      case 'outlined':
        return css`
          border: 2px solid ${theme.secondaryColor};
          background-color: transparent;
        `
      default:
        return css`
          background-color: ${theme.secondaryColor};
        `
    }
  }}
`
export const LabelFocus = css`
  label {
    top: 0;
    left: 27px;
    background-color: white;
    z-index: 1;
    width: fit-content;
    transition: top 0.25s;
  }
`
export const Label = styled.label`
  position: absolute;
  top: 50%;
  width: calc(100% - 4px - 16px);
  text-align: left;
  left: calc(50%);
  cursor: text;
  background-color: white;
  z-index: 1;
  transform: translate(-50%, -50%);
  color: ${theme.secondaryColor};
`

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  ${(props) => {
    if (props.$placeholder || props.$propValue) return LabelFocus
  }}

  &:focus-within {
    ${() => {
      return LabelFocus
    }}
  }
`
