// assets
import dashboardHoverIcon from "../../public/icons8-dashboard-selected-48.png";
import dashboardIcon from "../../public/icons8-dashboard-48.png";
import homeHoverIcon from "../../public/icons8-home-selected-30.png";
import homeIcon from "../../public/icons8-home-30.png";
import transactionHoverIcon from "../../public/icons8-dollar-bitcoin-exchange-selected-50.png";
import transactionIcon from "../../public/icons8-dollar-bitcoin-exchange-50.png";
import whalesHoverIcon from "../../public/icons8-whale-selected-16.png";
import whalesIcon from "../../public/icons8-whale-16.png";

export interface IMenuItem {
  hoverIcon: string;
  href: string;
  icon: string;
  selected: boolean;
  title: string;
}

export const HOME_HREF = "HOME";

export const DASHBOARD_HREF = "DASHBOARD";

export const TRANSACTION_HREF = "TRANSACTION";

export const WHALES_HREF = "WHALES";

const menuItems: IMenuItem[] = [
  {
    hoverIcon: homeHoverIcon.src,
    href: HOME_HREF,
    icon: homeIcon.src,
    selected: false,
    title: "Home",
  },
  {
    hoverIcon: dashboardHoverIcon.src,
    href: DASHBOARD_HREF,
    icon: dashboardIcon.src,
    selected: true,
    title: "Dashboard",
  },
  /*
  {
    hoverIcon: transactionHoverIcon.src,
    href: TRANSACTION_HREF,
    icon: transactionIcon.src,
    selected: false,
    title: "Transaction",
  },
  {
    hoverIcon: whalesHoverIcon.src,
    href: WHALES_HREF,
    icon: whalesIcon.src,
    selected: false,
    title: "Whales",
  },
  */
];

export default menuItems;
