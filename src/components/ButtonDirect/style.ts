import styled from 'styled-components'

export const ButtonDirectContent = styled.div`
  button {
    width: 250px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-900']};
    transition: transform 200ms ease-in;
  }

  button:hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme['gray-400']};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme['white-tx']};
    font-size: 1rem;
    text-transform: uppercase;
  }

  svg {
    margin-right: 0.5rem;
    vertical-align: middle;
  }

  @media (max-width: 480px) {
    button {
      width: 170px;
      height: 40px;
    }

    a {
      font-size: 0.625rem;
    }
  }
`
