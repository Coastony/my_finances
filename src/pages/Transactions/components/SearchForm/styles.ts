import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1; // ocupa todo o espaço
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-700']};
    color: ${(props) => props.theme['green-700']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['gray-900']};
      border: 1px solid ${(props) => props.theme['gray-500']};
      color: ${(props) => props.theme.black};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
