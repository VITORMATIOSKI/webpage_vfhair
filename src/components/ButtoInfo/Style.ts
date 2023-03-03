import styled from 'styled-components'

export const ButtonInfoContent = styled.div`
  z-index: 10;

  button {
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.theme['gray-900']};
    border-radius: 8px;
    border: none;
    transition: transform 200ms ease-in;

    a {
      text-decoration: none;
      color: ${(props) => props.theme['white-tx']};
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  button:hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme['gray-400']};
  }
`
