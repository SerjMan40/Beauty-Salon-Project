import { CTASection } from '../../components/sections/CTASection/CTASection'
import { ContactSection } from '../../components/sections/ContactSection/ContactSection'
import { GalleryPreviewSection } from '../../components/sections/GalleryPreviewSection/GalleryPreviewSection'
import { HeroSection } from '../../components/sections/HeroSection/HeroSection'
import { MastersPreviewSection } from '../../components/sections/MastersPreviewSection/MastersPreviewSection'
import { ReviewsSection } from '../../components/sections/ReviewsSection/ReviewsSection'
import { ServicesPreviewSection } from '../../components/sections/ServicesPreviewSection/ServicesPreviewSection'
import { WhyChooseUsSection } from '../../components/sections/WhyChooseUsSection/WhyChooseUsSection'
import './HomePage.scss'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreviewSection />
      <MastersPreviewSection />
      <WhyChooseUsSection />
      <GalleryPreviewSection />
      <ReviewsSection />
      <CTASection />
      <ContactSection />
    </>
  )
}
