"use client"

import dynamic from "next/dynamic"

export const LazyWaveDivider = dynamic(
  () => import("@/components/wave-divider").then(mod => ({ default: mod.WaveDivider })),
  {
    ssr: false,
    loading: () => <div className="h-32" />
  }
)