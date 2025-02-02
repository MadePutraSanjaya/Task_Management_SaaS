import { NavigationEntry, NavigationGroup } from "./types"

/**
 * Checks whether a NavigationEntry is a NavigationGroup.
 */
export const isNavigationGroup = (
  entry: NavigationEntry
): entry is NavigationGroup => {
  return (entry as NavigationGroup).routes !== undefined
}
