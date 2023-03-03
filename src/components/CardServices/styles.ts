import styled from 'styled-components'

export const ContentCardServices = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 3rem;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ContentTitle = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .PrincipalContent {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      text-transform: uppercase;
      color: ${(props) => props.theme['white-tx']};
      padding-top: 2rem;
    }
  }
  .SecondContent p {
    text-align: center;
    font-weight: 400;
    color: ${(props) => props.theme['gray-400']};
    padding: 5rem;
  }
  @media (max-width: 770px) {
    .SecondContent p {
      padding: 2rem;
    }
  }
  @media (max-width: 480px) {
    width: 90%;
    .SecondContent p {
      text-align: center;
      padding: 1rem 0;
    }
  }
`

export const ContentImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    img {
      height: 400px;
    }
  }

  @media (max-width: 770px) {
    img {
      height: 350px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 300px;
      width: 400px;
    }
  }
`
