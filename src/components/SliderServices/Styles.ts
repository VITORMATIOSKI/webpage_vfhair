import styled from 'styled-components'

export const SliderMainSlider = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
  }
`

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    img {
      height: 350px;
    }
  }

  @media (max-width: 770px) {
    img {
      height: 250px;
    }
  }

  @media (max-width: 770px) {
    img {
      height: 250px;
    }
  }
`

export const TextContent = styled.div`
  h2 {
    text-align: center;
    text-transform: uppercase;
    margin: 1.5rem;
    color: ${(props) => props.theme['white-tx']};
  }
`
