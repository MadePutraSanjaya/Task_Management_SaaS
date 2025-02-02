"use client";
import { useState } from "react";
import AppBar from "./AppBar";
import { AppProgressBar } from "next-nprogress-bar";
import { cn } from "@/lib/utils";
import NavigationBar from "./NavigationBar";
import { NavigationBarData } from "./types";

export type DashboardLayoutProps = {
  data: NavigationBarData
  children: React.ReactNode
}
const DashboardLayout = ({ children, data }: DashboardLayoutProps) => {
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  const handleNavigationOpen = () => {
    setNavigationOpen(true);
  };

  const handleNavigationClose = () => {
    setNavigationOpen(false);
  };

  return (
    <>
      <AppProgressBar color="hsl(var(--primary))" />
      <div className="flex overflow-hidden h-[100dvh]">
        <div
          className={cn(
            "absolute sm:static z-50 w-full md:w-0 min-w-64 lg:max-w-sm top-0",
            {
              "hidden lg:block": !isNavigationOpen,
            }
          )}
        >
          <NavigationBar onClose={handleNavigationClose} data={data} />

        </div>
        <AppBar
          onOpenNavigation={handleNavigationOpen}
          isNavigationOpen={isNavigationOpen}
        />
      </div>
      <div id="content-wrapper" className="flex-grow overflow-hidden">
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
