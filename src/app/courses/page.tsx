import type { Metadata } from 'next'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'Courses' }

const tracks = [
  { title: 'Robotics & Automation', count: '12 courses', image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=240&fit=crop', tag: 'Popular' },
  { title: 'Drones & Aeronautics', count: '8 courses', image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=240&fit=crop', tag: null },
  { title: 'Cybersecurity', count: '10 courses', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=240&fit=crop', tag: null },
  { title: 'AI & Machine Learning', count: '9 courses', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop', tag: 'New' },
  { title: 'Web Development', count: '11 courses', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop', tag: null },
  { title: 'Python Programming', count: '8 courses', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=240&fit=crop', tag: null },
  { title: 'Network & IT', count: '7 courses', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=240&fit=crop', tag: null },
  { title: 'Electronics & PCB', count: '6 courses', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop', tag: null },
]

export default function CoursesPage() {
  return (
    <>
      <div className="circuit-bg pt-14">
        <section className="border-b border-white/[0.04] py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 text-[11px] font-semibold tracking-wider uppercase mb-3">Courses</p>
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">Learn by building</h1>
            <p className="text-slate-400 max-w-md mx-auto text-[15px]">Step-by-step tracks with real projects and challenges. Available on DexusLab.</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tracks.map(t => (
              <div key={t.title} className="panel overflow-hidden group cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <Image src={t.image} alt={t.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111a2e] to-transparent" />
                  {t.tag && <span className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded">{t.tag}</span>}
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white text-[13px] font-semibold">{t.title}</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">{t.count}</p>
                  </div>
                  <ChevronRight size={14} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
