"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { NavigationEntry, NavigationGroup } from "./types"
import { cn } from "@/lib/utils"
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import { isNavigationGroup } from "./type-utils"

const isNavigationActive = (entry: NavigationEntry, path: string): boolean => {
  return path.startsWith(entry.href)
}


type NavigationButtonProps = {
  navigationEntry: NavigationEntry
  onClose?: () => void
}

export const NavigationButton = ({
  navigationEntry,
}: NavigationButtonProps) => {
  const pathName = usePathname()

  if (isNavigationGroup(navigationEntry)) {
    return <NavigationGroupButton navigationEntry={navigationEntry} />
  }

  const navigationActive = isNavigationActive(navigationEntry, pathName)

  return (
    <Button
      variant={navigationActive ? "selectedSidebar" : "ghost"}
      size="sm"
      className={cn("justify-start gap-2 text-foreground/70", {
        "text-primary-foreground": navigationActive,
      })}
      asChild
    >
      <Link href={navigationEntry.href}>
        {navigationEntry.icon} {navigationEntry.label}
      </Link>
    </Button>
  )
}

type NavigationGroupButtonProps = {
  isActive?: boolean
  navigationEntry: NavigationGroup
}


const NavigationGroupButton = ({
  navigationEntry,
}: NavigationGroupButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()
  const navigationActive = isNavigationActive(navigationEntry, pathName)

  return (
    <div className="w-full">
      <Button
        variant={navigationActive ? "selectedSidebar" : "ghost"}
        className="justify-start gap-2 w-full text-foreground/70"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {navigationEntry.icon} {navigationEntry.label}
        <div className="flex-1" />
        <ChevronDownIcon
          className={cn("h-5 w-5", {
            hidden: isOpen,
          })}
        />
        <ChevronUpIcon
          className={cn("h-5 w-5", {
            hidden: !isOpen,
          })}
        />
      </Button>
      {isOpen && (
        <div className="pl-4">
          <div className="flex flex-col gap-3 mt-3 pl-1 border-solid border-l-2">
            {navigationEntry.routes
              .filter((entry) => entry.isVisible())
              .map((entry, index) => (
                <NavigationButton key={index} navigationEntry={entry} />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
