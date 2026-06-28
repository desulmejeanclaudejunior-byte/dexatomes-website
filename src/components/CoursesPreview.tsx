'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const courses = [
  {
    title: 'Robotics & Automation',
    courses: 12,
    projects: 36,
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=260&fit=crop',
    tag: 'Popular',
  },
  {
    title: 'Drones & Aeronautics',
    courses: 8,
    projects: 24,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=260&fit=crop',
    tag: null,
  },
  {
    title: 'Cybersecurity',
    courses: 10,
    projects: 28,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=260&fit=crop',
    tag: null,
  },
  {
    title: 'AI & Machine Learning',
    courses: 9,
    projects: 20,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=260&fit=crop',
    tag: null,
  },
]

export default function CoursesPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-3">Our Tracks</p>
            <h2 className="text-slate-900 text-3xl font-bold tracking-tight leading-snug mb-4">
              Tracks designed for
              <br />
              your <span className="text-blue-600">success</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Choose a domain, follow step-by-step courses, and complete real projects to master the most in-demand skills.
            </p>
            <Link href="/courses" className="group inline-flex items-center gap-2 border border-blue-200 hover:border-blue-400 text-blue-600 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:bg-blue-50">
              Explore all tracks
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Course cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {courses.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 card-hover cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  {c.tag && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md">
                      {c.tag}
                    </span>
                  )}
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">{c.title}</p>
                    <p className="text-slate-500 text-xs mt-1">
                      {c.courses} courses · {c.projects} projects
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-slate-50 group-hover:bg-blue-50 rounded-full flex items-center justify-center transition-colors">
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
