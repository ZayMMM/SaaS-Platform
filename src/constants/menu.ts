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
    key: "dashboard",
    icon: "",
    label: "",
    isTitle: true,
    logo: `${Logo}`,
  },
  {
    key: "home",
    icon: "home",
    label: "Home",
    isTitle: false,
    url: "/home",
  },
  {
    key: "individual-data",
    icon: "bar-chart",
    label: "Individual Data",
    isTitle: false,
    url: "/individual",
  },
  {
    key: "support",
    icon: "aperture",
    label: "Support",
    isTitle: false,
  },
  {
    key: "logout",
    icon: "log-in",
    label: "Logout",
    isTitle: false,
    url: "/",
  },
];

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboard",
    icon: "",
    label: "",
    isTitle: true,
    logo: `${Logo}`,
  },
  {
    key: "home",
    icon: "home",
    label: "Home",
    isTitle: false,
    url: "/home",
  },
  {
    key: "individual-data",
    icon: "bar-chart",
    label: "Individual Data",
    isTitle: false,
    url: "/individual",
  },
  {
    key: "support",
    icon: "aperture",
    label: "Support",
    isTitle: false,
  },
];

const TWO_COl_MENU_ITEMS: MenuItemTypes[] = [];

export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
