import styled from 'styled-components'

export const CorouselMain = styled.div`
  height: auto;
  .swiper {
    width: 100%;
    height: 100%;
  }
`

export const CorouselContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const CorouselImage = styled.div`
  margin: 2rem;

  img {
    border-radius: 8px;
  }

  @media (max-width: 770px) {
    img {
      height: 450px;
    }
  }

  @media (max-width: 480px) {
    margin: 0.5rem;

    img {
      height: 350px;
    }
  }
`

export const CorouselInfo = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 5rem;
    color: ${(props) => props.theme['white-tx']};
  }

  p {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.6;
    color: ${(props) => props.theme['gray-400']};
    margin-top: 0.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  @media (max-width: 770px) {
    h2 {
      font-size: 1.625rem;
    }

    p {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      margin: 0.5rem;
      h2 {
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
        font-weight: 700;
      }

      p {
        display: none;
      }

      div {
        margin-top: 0.5rem;
      }
    }
  }
`
