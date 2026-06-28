import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import FeaturedProducts from '@/components/FeaturedProducts'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProducts />
      <Stats />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
