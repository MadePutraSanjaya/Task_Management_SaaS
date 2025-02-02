import { NavigationAvatarProps } from "./NavigationAvatar";

export interface RouteEntry {
  label: string;
  href: string;
}

export type NavigationLink = {
  type: "link";
  label: string;
  isVisible: () => boolean;
  icon: React.ReactNode;
  href: string;
  onClick: () => void;
};

export type NavigationGroup = {
  type: "group";
  label: string;
  isVisible: () => boolean;
  icon: React.ReactNode;
  href: string;
  routes: NavigationEntry[];
};

export type NavigationEntry = NavigationLink | NavigationGroup;

export type NavigationBarData = {
  topNavigationEntries: NavigationEntry[];
  bottomNavigationEntries: NavigationEntry[];
  avatar?: NavigationAvatarProps;
  renderCompanyBrand?: () => React.ReactNode;
};
