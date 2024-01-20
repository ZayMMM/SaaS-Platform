import React, { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

// redux
import { RootState, AppDispatch } from "../redux/store";
import { LayoutTypes, SideBarTypes } from "../constants/layout";
import { changeLayout, changeSidebarType } from "../redux/actions";

// constants
// import { LayoutTypes, SideBarTypes } from '../constants';

// utils
import { changeHTMLAttribute } from "../utils";
import { useViewport } from "../hooks/useViewPort";

import Topbar from "./Topbar";
import LeftSidebar from "./LeftSidebar";
import Footer from "./Footer";
import RightSidebar from "./RightSidebar";

const loading = () => <div className=""></div>;

interface VerticalLayoutProps {
  children?: any;
}

const VerticalLayout = ({ children }: VerticalLayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useViewport();

  const {
    layoutMode,
    layoutColor,
    layoutWidth,
    menuPosition,
    leftSideBarTheme,
    leftSideBarType,
    showSidebarUserInfo,
    showTwoToneIcons,
    topbarTheme,
    isOpenRightSideBar,
  } = useSelector((state: RootState) => ({
    layoutMode: state.Layout.layoutMode,
    layoutColor: state.Layout.layoutColor,
    layoutWidth: state.Layout.layoutWidth,
    menuPosition: state.Layout.menuPosition,
    leftSideBarTheme: state.Layout.leftSideBarTheme,
    leftSideBarType: state.Layout.leftSideBarType,
    showSidebarUserInfo: state.Layout.showSidebarUserInfo,
    showTwoToneIcons: state.Layout.showTwoToneIcons,
    topbarTheme: state.Layout.topbarTheme,
    isOpenRightSideBar: state.Layout.isOpenRightSideBar,
  }));

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  /*
  layout defaults
  */

  useEffect(() => {
    console.log(width);
    if (width < 800) {
      dispatch(changeLayout(LayoutTypes.LAYOUT_VERTICAL));
      dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_FULL));
    } else if (width >= 800) {
      dispatch(changeLayout(LayoutTypes.LAYOUT_HORIZONTAL));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useEffect(() => {
    changeHTMLAttribute("data-layout", LayoutTypes.LAYOUT_VERTICAL);
  }, []);

  useEffect(() => {
    changeHTMLAttribute("data-layout-mode", layoutMode);
  }, [layoutMode]);

  useEffect(() => {
    changeHTMLAttribute("data-bs-theme", layoutColor);
  }, [layoutColor]);

  useEffect(() => {
    changeHTMLAttribute("data-layout-width", layoutWidth);
  }, [dispatch, layoutWidth]);

  useEffect(() => {
    changeHTMLAttribute("data-menu-position", menuPosition);
  }, [menuPosition]);

  useEffect(() => {
    changeHTMLAttribute("data-menu-color", leftSideBarTheme);
  }, [leftSideBarTheme]);

  useEffect(() => {
    changeHTMLAttribute("data-sidenav-size", leftSideBarType);
  }, [leftSideBarType]);

  useEffect(() => {
    changeHTMLAttribute("data-topbar-color", topbarTheme);
  }, [topbarTheme]);

  useEffect(() => {
    changeHTMLAttribute(
      "data-menu-icon",
      showTwoToneIcons ? "twotones" : "default"
    );
  }, [showTwoToneIcons]);

  useEffect(() => {
    changeHTMLAttribute("data-sidenav-user", showSidebarUserInfo);
  }, [showSidebarUserInfo]);

  /**
   * Open the menu when having mobile screen
   */
  const openMenu = () => {
    setIsMenuOpened((prevState) => !prevState);

    if (document.body) {
      if (isMenuOpened) {
        document.body.classList.remove("sidebar-enable");
      } else {
        document.body.classList.add("sidebar-enable");
      }
    }
  };

  const isCondensed: boolean =
    leftSideBarType === SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED;

  return (
    <>
      <div id="wrapper">
        <Suspense fallback={loading()}>
          <LeftSidebar isCondensed={isCondensed} hideLogo={false} />
        </Suspense>

        <div className="content-page">
          <Suspense fallback={loading()}>
            <Topbar openLeftMenuCallBack={openMenu} />
          </Suspense>

          <div className="content">
            <Container fluid>
              <Suspense fallback={loading()}>{children}</Suspense>
            </Container>
          </div>

          <Suspense fallback={loading()}>
            <Footer />
          </Suspense>
        </div>
      </div>
      {isOpenRightSideBar && (
        <Suspense fallback={loading()}>
          <RightSidebar />
        </Suspense>
      )}
    </>
  );
};
export default VerticalLayout;
