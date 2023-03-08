import { useState } from "react";

import Hamburger from "hamburger-react";
import Logo from "../../assets/Logo VFHAir.svg";

import { ContentMenu, ContentMenuMobile, NavbarMenu } from "./Styles";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavbarMenu>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>{" "}
      <ContentMenu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Serviços</Link>
          </li>
          <li>
            <Link to="/products">Produtos</Link>
          </li>
          <li>
            <Link to="/history">História</Link>
          </li>
          <li>
            <Link to="/history">História</Link>
          </li>
          <li>
            <Link to="/history">História</Link>
          </li>
        </ul>
      </ContentMenu>
      <ContentMenuMobile>
        {open && (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Serviços</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <Link to="/history">História</Link>
            </li>
          </ul>
        )}
        <Hamburger
          direction="right"
          duration={0.2}
          onToggle={() => setOpen(!open)}
        />
      </ContentMenuMobile>
    </NavbarMenu>
  );
}
