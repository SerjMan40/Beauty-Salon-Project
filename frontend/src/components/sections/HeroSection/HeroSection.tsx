import type { ReactNode } from 'react'
import { Hero } from '../../layout/Hero/Hero'
import './HeroSection.scss'

interface HeroSectionProps {
  title: string
  description: string
  eyebrow?: string
  actions?: ReactNode
  image?: ReactNode
}

export function HeroSection(props: HeroSectionProps) {
  return <Hero className="hero-section" {...props} />
}
