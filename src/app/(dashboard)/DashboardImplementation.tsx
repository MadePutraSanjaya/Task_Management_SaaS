"use client"

import DashboardLayout from "@/components/chadcn/dashboard-layout/DashboardLayout";
import { NavigationEntry } from "@/components/chadcn/dashboard-layout/types";
import { useGlobalRoutes } from "@/lib/global/global-route";
import React from "react";
import { RectangleGroupIcon } from "@heroicons/react/24/solid";

const DashboardImplementation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const GLOBAL_ROUTES = useGlobalRoutes();
  const topNavigation: NavigationEntry[] = [
    {
      type: "link",
      label: GLOBAL_ROUTES.HOME.label,
      href: GLOBAL_ROUTES.HOME.href,
      isVisible: () => true,
      icon: <RectangleGroupIcon className="w-5 h-5"  />,
    },
    {
      type: "link",
      label: GLOBAL_ROUTES.BOARDS.label,
      href: GLOBAL_ROUTES.BOARDS.href,
      isVisible: () => true,
      icon: <RectangleGroupIcon className="w-5 h-5"  />,
    },
  ];
  return (
    <DashboardLayout
      data={{
        topNavigationEntries: topNavigation,
        avatar: {
          profileName: "Smith Johnsonn",
          profilePicture:
            "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          subtitle: "Landlord",
        },
      }}
    >
      {children}
    </DashboardLayout>
  );
};

export default DashboardImplementation;
