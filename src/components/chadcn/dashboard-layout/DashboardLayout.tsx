"use client";
import { useEffect, useState } from "react";
import AppBar from "./AppBar";
import { AppProgressBar } from "next-nprogress-bar";
import { cn } from "@/lib/utils";
import NavigationBar from "./NavigationBar";
import { NavigationBarData } from "./types";
import { usePathname } from "next/navigation";

export type DashboardLayoutProps = {
  data: NavigationBarData;
  children: React.ReactNode;
};
const DashboardLayout = ({ children, data }: DashboardLayoutProps) => {
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigationOpen = () => {
    setNavigationOpen(true);
  };

  const handleNavigationClose = () => {
    setNavigationOpen(false);
  };

  useEffect(() => {
    if (window.innerWidth < 640) setNavigationOpen(false);
  }, [pathname]);

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

        <div className="w-full flex flex-col flex-grow overflow-auto">
          <AppBar
            onOpenNavigation={handleNavigationOpen}
            isNavigationOpen={isNavigationOpen}
          />
          <div className="flex-grow overflow-hidden container px-4 sm:px-12 py-8">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
