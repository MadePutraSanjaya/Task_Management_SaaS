import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { IconMenu2 } from "@tabler/icons-react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

interface AppBarProps {
  isNavigationOpen: boolean;
  onOpenNavigation: () => void;
}

const AppBar = ({ isNavigationOpen, onOpenNavigation }: AppBarProps) => {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center h-14 p-4 border-b-[1px]">
      <Button
        onClick={() => onOpenNavigation()}
        size="icon"
        variant="ghost"
        className={cn("lg:hidden", { block: !isNavigationOpen, hidden: isNavigationOpen })}
      >
        <IconMenu2 />
      </Button>
      <div className="flex-1" />
      <div className="flex space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <SunIcon className="dark:hidden" />
              <MoonIcon className="hidden dark:block" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AppBar;
