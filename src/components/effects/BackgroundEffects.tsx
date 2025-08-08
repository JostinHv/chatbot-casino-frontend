'use client'

import { FloatingParticles } from './FloatingParticles'
import { LightWaves } from './LightWaves'
import { AnimatedGradients } from './AnimatedGradients'

export function BackgroundEffects() {
  return (
    <>
      <AnimatedGradients />
      <LightWaves />
      <FloatingParticles />
    </>
  )
}
