import { useEffect } from 'react'

import { CTASection } from '../../components/sections/CTASection/CTASection'
import { ContactSection } from '../../components/sections/ContactSection/ContactSection'
import { GalleryPreviewSection } from '../../components/sections/GalleryPreviewSection/GalleryPreviewSection'
import { HeroSection } from '../../components/sections/HeroSection/HeroSection'
import { MastersPreviewSection } from '../../components/sections/MastersPreviewSection/MastersPreviewSection'
import { ReviewsSection } from '../../components/sections/ReviewsSection/ReviewsSection'
import { ServicesPreviewSection } from '../../components/sections/ServicesPreviewSection/ServicesPreviewSection'
import { WhyChooseUsSection } from '../../components/sections/WhyChooseUsSection/WhyChooseUsSection'
import { fetchArticles } from '../../features/articles'
import { fetchGallery } from '../../features/gallery'
import { fetchMasters } from '../../features/masters'
import { fetchReviews } from '../../features/reviews'
import { fetchServices } from '../../features/services'
import { useAppDispatch } from '../../hooks'

import './HomePage.scss'

export function HomePage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    void Promise.all([
      dispatch(fetchServices()),
      dispatch(fetchMasters()),
      dispatch(fetchGallery()),
      dispatch(fetchReviews()),
      dispatch(fetchArticles()),
    ])
  }, [dispatch])

  return (
    <main className="home-page">
      <HeroSection />
      <ServicesPreviewSection />
      <MastersPreviewSection />
      <WhyChooseUsSection />
      <GalleryPreviewSection />
      <ReviewsSection />
      <CTASection />
      <ContactSection />
    </main>
  )
}
