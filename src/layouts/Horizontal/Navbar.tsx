import React from "react";

// helpers
import { getHorizontalMenuItems } from "../../helpers/menu";

// components
import AppMenu from "./Menu";

interface NavbarProps {
  isMenuOpened?: boolean;
}

const Navbar = ({ isMenuOpened }: NavbarProps) => {
  return (
    <React.Fragment>
      <div className="app-menu">
        <AppMenu menuItems={getHorizontalMenuItems()} />
      </div>
    </React.Fragment>
  );
};

export default Navbar;
