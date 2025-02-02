"use client";
import React from "react";
import { NavigationBarData } from "./types";
import { Button } from "@/components/ui/button";
import NavigationAvatar from "./NavigationAvatar";
import { NavigationButton } from "./NavigationButton";

export type NavigationBarProps = {
  onClose: () => void;
  data: NavigationBarData;
};
const NavigationBar = ({ data, onClose }: NavigationBarProps) => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-sidebar-background border-r-[1px]">
      <div className="h-14 flex items-center border-b-[1px] px-6">
        {data.renderCompanyBrand && data.renderCompanyBrand()}
        <div className="lg:hidden flex-grow flex justify-end">
          <Button
            className="flex-grow-0"
            variant="ghost"
            size="icon"
            onClick={() => onClose()}
          >
            X
          </Button>
        </div>
      </div>

      <div className="px-6 flex flex-col pb-4 gap-8 flex-1 mt-8">
        <div className="flex flex-col flex-1 gap-3">
          {data.topNavigationEntries
            .filter((nav) => nav.isVisible())
            .map((entry, index) => (
              <NavigationButton
                key={index}
                navigationEntry={entry}
                onClose={onClose}
              />
            ))}

          {/* some spacer */}
          <div className="flex-1" />

          {data.bottomNavigationEntries
            .filter((nav) => nav.isVisible())
            .map((entry, index) => (
              <NavigationButton
                key={index}
                navigationEntry={entry}
                onClose={onClose}
              />
            ))}
        </div>
      </div>
      {data.avatar && (
        <div>
          <div className="px-8 py-4 mb-4">
            <NavigationAvatar
              profilePicture={data.avatar.profilePicture}
              profileName={data.avatar.profileName}
              subtitle={data.avatar.subtitle}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
