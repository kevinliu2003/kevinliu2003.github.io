"use client"

import React, { createContext, useContext, useState } from "react"

type AnimationContextType = {
  enabled: boolean
  toggleAnimations: () => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function AnimationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [enabled, setEnabled] = useState(true)

  const toggleAnimations = () => {
    setEnabled((prev) => !prev)
  }

  return (
    <AnimationContext.Provider value={{ enabled, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider")
  }
  return context
}