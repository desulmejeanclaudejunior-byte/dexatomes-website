import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Courses' }

const tracks = [
  { title: 'Robotics & Automation', courses: 12, projects: 36, image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=300&fit=crop', tag: 'Popular' },
  { title: 'Drones & Aeronautics', courses: 8, projects: 24, image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop', tag: null },
  { title: 'Cybersecurity', courses: 10, projects: 28, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop', tag: null },
  { title: 'AI & Machine Learning', courses: 9, projects: 20, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop', tag: 'New' },
  { title: 'Web Development', courses: 11, projects: 32, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop', tag: null },
  { title: 'Python Programming', courses: 8, projects: 22, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop', tag: null },
  { title: 'Network & IT', courses: 7, projects: 18, image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop', tag: null },
  { title: 'Electronics & PCB', courses: 6, projects: 15, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop', tag: null },
]

export default function CoursesPage() {
  return (
    <div className="pt-16">
      <section className="hero-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4">Courses</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">Learn by building</h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">Step-by-step tracks with real projects, challenges, and certificates.</p>
        </div>
      </section>
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tracks.map(t => (
            <div key={t.title} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 card-hover cursor-pointer">
              <div className="relative h-40 overflow-hidden">
                <Image src={t.image} alt={t.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                {t.tag && <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md">{t.tag}</span>}
              </div>
              <div className="p-5">
                <p className="text-slate-900 font-semibold text-sm">{t.title}</p>
                <p className="text-slate-500 text-xs mt-1">{t.courses} courses · {t.projects} projects</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">All courses are available through DexusLab</p>
          <Link href="/" className="text-blue-600 text-sm font-semibold hover:text-blue-700">&larr; Back to home</Link>
        </div>
      </section>
    </div>
  )
}
