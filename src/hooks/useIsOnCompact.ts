import { useEffect, useState } from "react"

import { useEventListener } from "./useEventListener"

// Returns true if the window is in compact dimensions.
export const useIsOnCompact = (): boolean => {
  const [isCompact, setIsCompact] = useState(true)

  const updateMatchQuery = () => {
    setIsCompact(matchMedia("(max-width: 767px)").matches)
  }

  useEffect(() => updateMatchQuery(), [])

  useEventListener("resize", updateMatchQuery)

  return isCompact
}
