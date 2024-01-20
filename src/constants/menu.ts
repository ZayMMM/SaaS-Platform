import Logo from "../assets/images/trade-logo.png";

export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
  logo?: string;
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "home",
    icon: "",
    label: "",
    isTitle: true,
    logo: `${Logo}`,
  },
  {
    key: "home",
    icon: "fe-home",
    label: "Home",
    isTitle: false,
    url: "/home",
  },
  {
    key: "individual-data",
    icon: "fas fa-chart-line mdi-account",
    label: "Individual Data",
    isTitle: false,
    url: "/individual",
  },
  {
    key: "support",
    icon: "fe-aperture",
    label: "Support",
    isTitle: false,
  },
  {
    key: "logout",
    icon: "fe-log-in",
    label: "Logout",
    isTitle: false,
    url: "/",
  },
];

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "home",
    icon: "",
    label: "",
    isTitle: true,
    logo: `${Logo}`,
  },
  {
    key: "home",
    icon: "fe-home",
    label: "Home",
    isTitle: false,
    url: "/home",
  },
  {
    key: "individual-data",
    icon: "fas fa-chart-line mdi-account",
    label: "Individual Data",
    isTitle: false,
    url: "/individual",
  },
  {
    key: "support",
    icon: "fe-aperture",
    label: "Support",
    isTitle: false,
  },
];

const TWO_COl_MENU_ITEMS: MenuItemTypes[] = [];

export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
