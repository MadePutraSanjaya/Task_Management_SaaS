import Image from "next/image";
import React from "react";

export type NavigationAvatarProps = {
    profilePicture?: string;
    profileName: string;
    subtitle?: string;
}
const NavigationAvatar = ({ profilePicture, profileName, subtitle }: NavigationAvatarProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          src={profilePicture ? profilePicture : ""}
          alt={profileName}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-semibold text-sm">{profileName}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default NavigationAvatar;
