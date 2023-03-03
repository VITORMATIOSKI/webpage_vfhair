import styled from 'styled-components'

export const ContentFooterPage = styled.footer`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  margin-top: 3rem;

  .ContentIcon {
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding-top: 4.5rem;
  }

  .ContentIcon a {
    padding-bottom: 1rem;
    text-decoration: none;
    color: ${(props) => props.theme['gray-400']};
  }

  .LogoFooter {
    padding-top: 3rem;

    img {
      width: 300px;
      height: 150px;
    }

    #ContentFooterMap {
      border-radius: 50%;
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {
    #ContentFooterMap {
      display: none;
    }
  }

  @media (max-width: 480px) {
    #ContentFooterMap {
      display: none;
    }

    .ContentIcon {
      display: none;
    }
  }
`

export const NameDev = styled.div`
  p {
    text-align: center;
    color: ${(props) => props.theme['gray-400']};
    margin-top: 1rem;
  }
`
