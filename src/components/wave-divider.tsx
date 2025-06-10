"use client"

import Wavify from "react-wavify"

export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <Wavify
        fill="#ffffff"
        paused={false}
        options={{
          height: 10,
          amplitude: 35,
          speed: 0.15,
          points: 3,
        }}
        style={{
          height: "100px",
          display: "block",
        }}
      />
    </div>
  )
}
