import Hero from '@/components/Hero'
import CoursesPreview from '@/components/CoursesPreview'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import FeaturedProducts from '@/components/FeaturedProducts'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoursesPreview />
      <TrustBar />
      <Services />
      <FeaturedProducts />
      <About />
      <Contact />
    </>
  )
}
