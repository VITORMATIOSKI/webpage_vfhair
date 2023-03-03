import styled from 'styled-components'

export const NavbarMenu = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  position: relative;
  background-color: ${(props) => props.theme['gray-bg']};

  img {
    width: 450px;
    height: 250px;
    padding-top: 1rem;
  }

  @media (max-width: 1024px) {
    img {
      width: 350px;
      height: 150px;
      padding-top: 1rem;
    }
  }

  @media (max-width: 770px) {
    img {
      width: 150px;
      height: 150px;
      padding-top: 0;
    }
  }
`

export const ContentMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    list-style: none;
  }

  li {
    padding: 3rem 2rem 0 0;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.theme['gray-900']};
    transition: transform 200ms ease-in;
  }

  a:hover {
    border-bottom: 2px solid ${(props) => props.theme['gray-900']};
    transform: scale(1.1);
  }

  @media (max-width: 990px) {
    display: none;
  }
`
export const ContentMenuMobile = styled.nav`
  display: none;

  @media (max-width: 990px) {
    display: flex;
    justify-content: flex-end;

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
    }

    li {
      padding-top: 3rem;
    }

    a {
      text-decoration: none;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 700;
      z-index: 3;
      padding-right: 1rem;
      color: ${(props) => props.theme['gray-900']};
    }

    .hamburger-react {
      display: flex;
      justify-content: flex-end;
      margin-right: 1rem;
    }
  }

  @media (max-width: 990px) {
    ul {
      flex-direction: column;
    }
  }
`
