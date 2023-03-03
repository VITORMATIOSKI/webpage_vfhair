import styled from 'styled-components'

export const ContentPrincipalImage = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  .ImagePrincipal {
    width: 50%;
  }
  .TextTitle {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      color: ${(props) => props.theme['white-tx']};
      font-weight: 900;
      font-size: 5rem;
    }
  }
  @media (max-width: 1280px) {
    img {
      width: 700px;
    }
    .TextTitle h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 1024px) {
    img {
      width: 600px;
    }
  }

  @media (max-width: 770px) {
    position: relative;
    img {
      width: 400px;
    }
    .TextTitle h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    .TextTitle h1 {
      font-size: 2rem;
    }
    img {
      width: 250px;
    }
  }
`
