import { Icon } from "@iconify/react";
import { SideNavItem } from "./next-env";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: (
      <Icon icon="lucide:square-dashed-mouse-pointer" width="24" height="24" />
    ),
  },
  {
    title: "Manajemen",
    path: "/manajemen",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [{ title: "User", path: "/manajemen/user" }],
  },
  {
    title: "Dasawisma",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Penduduk",
    path: "/settings",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Keluarga", path: "/settings/account" },
      { title: "Biodata", path: "/settings/privacy" },
      { title: "Kehamilan & Kematian", path: "/settings/privacy" },
      { title: "PUS", path: "/settings/privacy" },
      { title: "WUS", path: "/settings/privacy" },
    ],
  },
  {
    title: "Kegiatan Dasawisma",
    path: "/help",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
