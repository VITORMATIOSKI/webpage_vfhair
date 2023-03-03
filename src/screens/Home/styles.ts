import styled from 'styled-components'

export const HomeMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: -1;

  h1 {
    padding-left: 2rem;
    margin-top: 2rem;
    color: ${(props) => props.theme['gray-400']};
    text-transform: uppercase;
  }

  .container_whatsapp {
    position: fixed;
    bottom: 50px;
    right: 30px;
    z-index: 9999;
    opacity: 0.5;
  }
`

// Conteudo da primeira section da home

export const HomeContent = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  z-index: -1;

  .content_principal_image {
    width: 50%;

    @media (max-width: 1280px) {
      img {
        width: 700px;
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
    }

    @media (max-width: 480px) {
      z-index: -1000;
      width: 20%;

      img {
        width: 350px;
        opacity: 0.75;
      }
    }
  }
`
export const ContentFirstText = styled.div`
  width: 50%;
  text-align: center;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 900;
  z-index: 10;

  p {
    color: ${(props) => props.theme['white-tx']};
  }

  .animation_principal {
    color: ${(props) => props.theme['gray-900']};
  }

  @media (max-width: 1280px) {
    p {
      font-size: 2.375rem;
      line-height: 1.6;
    }

    .animation_principal {
      font-size: 2.375rem;
      color: ${(props) => props.theme['gray-900']};
    }
  }

  @media (max-width: 770px) {
    p {
      font-size: 2.5rem;
    }

    .animation_principal {
      font-size: 2.5rem;
      color: ${(props) => props.theme['gray-900']};
    }

    .mobile_icons_center {
      position: relative;
    }
  }

  @media (max-width: 480px) {
    width: 80%;
    p {
      text-align: center;
      position: relative;
      font-size: 1.5rem;
    }
    .animation_principal {
      font-size: 2rem;
    }

    .mobile_icons_center {
      position: absolute;
    }
  }
`

export const ContentIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 5rem;

  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 3rem;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: ${(props) => props.theme['gray-400']};
  }

  a svg {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 770px) {
    margin-right: 35rem;
  }

  @media (max-width: 480px) {
    padding-top: 5.5rem;
    padding-left: 7.5rem;
  }
`

// SECTION SLIDER DOS EMPREGADOS

export const SliderEmployees = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const SliderServices = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

// SECTION DOS PRODUTOS FAVORITOS
export const FavoriteProducts = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  @media (max-width: 770px) {
    align-items: center;
  }
`

export const CardProducts = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 2rem;

  .titleContent {
    width: 50%;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => props.theme['white-tx']};
    font-size: 3rem;
    font-weight: 900;
    margin-left: 2rem;
  }

  p:first-child {
    margin-top: 6.5rem;
  }

  .animation_principal {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-900']};
    margin-left: 2rem;
  }

  .contentImage {
    width: 50%;
    margin-left: 1rem;
  }

  .contentImage img {
    width: 700px;
  }

  .contentButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }

  @media (max-width: 1280px) {
    p {
      font-size: 2.5rem;
    }

    .contentImage img {
      width: 600px;
    }
  }

  @media (max-width: 1024px) {
    p {
      font-size: 2.5rem;
    }

    .titleContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }

    .contentImage img {
      width: 490px;
    }
  }

  @media (max-width: 770px) {
    justify-content: center;
    flex-direction: column;

    .titleContent {
      width: 100%;
    }

    .titleContent p {
      text-align: center;
      padding-bottom: 1rem;
    }

    .second_text_product p {
      margin: 0;
      padding: 0;
      text-align: center;
    }

    p:first-child {
      margin-top: 1rem;
    }

    .Second_text_product p {
      text-align: center;
      font-size: 1.688rem;
    }
  }
  @media (max-width: 480px) {
    justify-content: center;
    flex-direction: column;

    .titleContent {
      width: 100%;

      p {
        text-align: center;
        padding-bottom: 1rem;
        font-size: 1.5rem;
      }
      .animation_principal {
        font-size: 2rem;
      }
    }

    .titleContent p:first-child {
      margin-top: 1rem;
    }

    .second_text_product p {
      margin: 0;
      padding: 0;
      text-align: center;
      font-size: 1.5rem;
    }
    .contentImage img {
      width: 350px;
    }
  }
`

// SECTION DA PARTE DE HISTORIA DO SALÃO

export const HistoryContent = styled.section`
  width: 100%;
  padding-top: 6rem;
`

export const HistorytextContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  .TitleHistory {
    text-transform: uppercase;
    color: ${(props) => props.theme['white-tx']};
    font-size: 2rem;
    font-weight: 900;
  }

  p {
    text-align: center;
    font-size: 1rem;
    padding-top: 2rem;
    margin-left: 2rem;
    color: ${(props) => props.theme['gray-400']};
  }

  .contentButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }

  .ContentHistory {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .ContentImageHistory {
    width: 30%;
    display: flex;
    justify-content: end;
  }

  @media (max-width: 1024px) {
    .ContentImageHistory {
      img {
        height: 350px;
      }
    }
  }

  @media (max-width: 770px) {
    p {
      color: ${(props) => props.theme['gray-900']};
    }
    .ContentImageHistory {
      img {
        z-index: -1;
        opacity: 0.75;
      }
    }
  }
  @media (max-width: 480px) {
    .TitleHistory {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
      font-weight: 700;
      color: ${(props) => props.theme['white-tx']};
    }
    .ContentImageHistory {
      img {
        z-index: -1;
        width: 250px;
      }
    }
  }
`
