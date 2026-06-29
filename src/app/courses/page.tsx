import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Courses & Resources' }

const tracks = [
  { title: 'Robotics & Automation', count: '12 courses', img: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=300&fit=crop', tag: 'Popular' },
  { title: 'Web Development', count: '11 courses', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop', tag: null },
  { title: 'Cybersecurity', count: '10 courses', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop', tag: null },
  { title: 'AI & Machine Learning', count: '9 courses', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop', tag: 'New' },
  { title: 'Drones & Aeronautics', count: '8 courses', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop', tag: null },
  { title: 'Python Programming', count: '8 courses', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop', tag: null },
  { title: 'Electronics & PCB', count: '6 courses', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop', tag: null },
  { title: 'Network & IT', count: '7 courses', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop', tag: null },
]

export default function CoursesPage() {
  return (
    <div className="pt-16">
      <section className="hero-bg py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold tracking-wider uppercase mb-3">DexusLab Courses</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">Learn by building</h1>
          <p className="text-slate-400 max-w-md mx-auto text-lg">Available on DexusLab — free multilingual learning platform.</p>
        </div>
      </section>

      <section className="py-20 bg-[#f0f4ff] px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tracks.map(t => (
            <div key={t.title} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
              <div className="relative h-40 overflow-hidden">
                <Image src={t.img} alt={t.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                {t.tag && <span className="absolute top-2 left-2 bg-[#1a3ab5] text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded">{t.tag}</span>}
              </div>
              <div className="p-4">
                <p className="text-slate-900 font-semibold text-sm">{t.title}</p>
                <p className="text-slate-500 text-xs mt-0.5">{t.count}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://dexuslab.com" target="_blank" rel="noopener noreferrer" className="btn-brand inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm">Open DexusLab</a>
          <div className="mt-4"><Link href="/" className="text-slate-500 hover:text-[#1a3ab5] text-sm">&larr; Home</Link></div>
        </div>
      </section>
    </div>
  )
}
